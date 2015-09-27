
define(['views/layout/base_itemview','models/estimateitems_util'],function(BaseItemView,EstimateModel){

		var AbstractEstimate_View = BaseItemView.extend({
		    
			model:EstimateModel.model,
			
			events:{
				'tap .addLBD':'dispalyLBDPopup',
				'tap #saveEstimate':'saveEstimate'
			},
			initialize : function() {
				this.model.on('reRenderView',this.reRender, this);
			},
			
			template : Handlebars.templates.selectestimate_abstractestimate,
			
			updateAmount:function(event){
				var index = $(event.target).data("index");
				var absEstimateCost = 0;
				var itemsInEstimate = EstimateModel.model.get("codeToRates");

				var description = $("#lbdDescription").val();
				var length = $("#length").val(); //length
				var breadth = $("#breadth").val(); //breadth
				var depth = $("#depth").val(); //depth
				
				var nos1 = $("#nos1").val();
				var nos2 = $("#nos2").val();
				
				if(!(nos1 !== "" && nos2 !== "" && length !== "" && breadth !== "" && depth !== "")){
					$("#mandatoryText").show();
					return;
				}
				
				$("#getLBDData").popup("close");
				var totalUnits =  Number(nos1) * Number(nos2) * Number(length) * Number(breadth) * Number(depth);
				totalUnits = parseFloat(totalUnits).toFixed("2");
				/*$("#totalUnits"+index).text(totalUnits);
				//for(var lbd in ){
					//$("#quantity"+index).text(totalUnits);
				//}
				
				
				$("#lbdDesc"+index).text(description);
				$("#length"+index).text(length); //length
				$("#breadth"+index).text(breadth); //breadth
				$("#depth"+index).text(depth); //depth
				
				$("#Nos1"+index).text(nos1);
				$("#Nos2"+index).text(nos2);*/
				
				var splitArr = index.split("-");
				var itemId = splitArr[0];
				var subItem = "";
				
				if(splitArr.length > 2){
					subItem = splitArr[1];
				}
				
				//$().insert
				/*var itemRate = itemsInEstimate[itemId].rate;
				var totalAmount = parseFloat(itemRate * totalUnits).toFixed("2");
				$("#totalAmount"+index).text(totalAmount);
				itemsInEstimate[itemId].totalAmount = totalAmount;*/
				
				//Need to modify this logic
				for(var item in itemsInEstimate){
					if(itemsInEstimate[item].totalAmount){
						absEstimateCost += itemsInEstimate[itemId].totalAmount;
					}
				}
				absEstimateCost = parseFloat(absEstimateCost/100000).toFixed("2");
				$("#absEstimateCost").text(absEstimateCost);
				
				var emptyLBDs  =  {
					"lbddescription":"",
					"nos1":"",
					"nos2":"",
					'length':"",
					'breadth':"",
					'depth':"",
					'totalUnits':""
				};
				
				var dataItemToLBDs = {
					"dataItem":itemsInEstimate[itemId].code,
					"subItem":subItem,
					"lbddescription":description,
					"nos1":nos1,
					"nos2":nos2,
					'length':length,
					'breadth':breadth,
					'depth':depth,
					'totalUnits':totalUnits
				};
				
				if(dataItemToLBDs.subItem != ""){
					var existingLBDs = [].concat(itemsInEstimate[itemId].subBullets[subItem].lbdsArray);
					existingLBDs.pop();
					existingLBDs.push(dataItemToLBDs);
					existingLBDs.push(emptyLBDs);
					itemsInEstimate[itemId].subBullets[subItem].lbdsArray = existingLBDs;
				}else{
					var existingLBDs = [].concat(itemsInEstimate[itemId].lbdsArray);
					existingLBDs.pop();
					existingLBDs.push(dataItemToLBDs);
					existingLBDs.push(emptyLBDs);
					itemsInEstimate[itemId].lbdsArray = existingLBDs;
				}
				
				EstimateModel.model.set("codeToRates",itemsInEstimate);
				EstimateModel.model.trigger("reRenderView");
			},
			
			dispalyLBDPopup : function(event){
				var self = this;
	    
    	 		var index = $(event.target).data("index");
    	 		$("#getLBDData").off('popupbeforeposition');
    	 		$("#getLBDData").on('popupbeforeposition',function(){
	       	 		$("#mandatoryText").hide();
	    	 		if($("#totalUnits"+index).text() != ""){  	
	    	 			//fill existing fields
	    				var nos1 = $("#nos1").val();
	    				var nos2 = $("#nos2").val();
	    	 			
		    	 		$("#nos1").val($("#Nos1"+index).text());
		    	 		$("#nos2").val($("#Nos2"+index).text());
		    	 		
		    	 		$("#length").val($("#length"+index).text());
		    	 		$("#breadth").val($("#breadth"+index).text());
		    	 		$("#depth").val($("#depth"+index).text());	
	    	 		}else{
	    	 			//clear all fields
		    	 		$(".lbdinput").val("");
	    	 		}
	    	 		
		    	 	$("#saveLBD").data('index',index);
		    	 	$("#saveLBD").off('tap');
		    	 	$("#saveLBD").on('tap',self.updateAmount);
	    	 	});
	    	 	$("#getLBDData").popup( "open", { x: event.pageX, y: event.pageY } );
	    	 	//event.preventDefault();
		    },
		    saveEstimate:function(){	 	    	
		    	//Put Logic to check if LBD's are entered for all fields
		    	var timeStamp = (new Date()).getTime();
		    	this.saveEstimateDetails(timeStamp);
		    	console.log(JSON.stringify(EstimateModel.model.get("codeToRates")));
		    },
		    saveEstimateDetails : function(estId){
				var estimateDetails = this.model.get("estimateDetails");
				var self = this;
				this.model.get("db").transaction(function (tx) {
					//Save Estimate details.
					tx.executeSql('CREATE TABLE IF NOT EXISTS UserEstimateHistory ("EstimateID","nameOfWork","Category","Type","Cost")');
					//var nameOfWork = estimateDetails.nameofthework;
					var nameOfWork = "test";
					var type = estimateDetails.Type;
					var category = estimateDetails.Category;
					var cost = estimateDetails.Cost;
					
					 console.log('INSERT INTO UserEstimateHistory (EstimateID,nameOfWork,Type,Category,Cost) VALUES ("'+estId+'","'+nameOfWork+'","'+type+'","'+category+'","'+cost+'")');
				   tx.executeSql('INSERT INTO UserEstimateHistory ("EstimateID","nameOfWork","Category","Type","Cost") VALUES (?,?,?,?,?)',[estId,nameOfWork,type,category,cost],function(tx1){
					   console.log("inserted history details successfully");
					   var leadMaterials = self.model.get("listOfLeadMaterials");
					   tx1.executeSql('CREATE TABLE IF NOT EXISTS UserLeadData ("EstimateID","material","sourceOfSupply","initialCost","convCharges","seigCharges","totalCost","unit","isMetal","code","loadMeans","unLoadMeans","considerIdleCharges")');
						for(var material in leadMaterials){
							var materialRow = leadMaterials[material];
							var material = materialRow.material;
							var sourceOfSupply = materialRow.sourceOfSupply;
							var initialCost = materialRow.initialCost;
							var convCharges = materialRow.convCharges;
							var seigCharges = materialRow.seigCharges;
							var totalCost = materialRow.totalCost;
							var unit = materialRow.unit;
							var isMetal = materialRow.isMetal;
							var code = materialRow.code;
							var loadMeans = materialRow.loadMeans;
							var unLoadMeans = materialRow.unLoadMeans;
							var considerIdleCharges = materialRow.considerIdleCharges;
							  console.log('INSERT INTO UserLeadData (EstimateID,material,sourceOfSupply,initialCost,convCharges,seigCharges,totalCost,unit,isMetal,code,loadMeans,unLoadMeans,considerIdleCharges) VALUES ("'+estId+'","'+material+'","'+sourceOfSupply+'","'+initialCost+'","'+convCharges+'","'+seigCharges+'","'+totalCost+'","'+unit+'","'+isMetal+'","'+code+'","'+loadMeans+'","'+unLoadMeans+'","'+considerIdleCharges+'")')
							tx1.executeSql('INSERT INTO UserLeadData (EstimateID,material,sourceOfSupply,initialCost,convCharges,seigCharges,totalCost,unit,isMetal,code,loadMeans,unLoadMeans,considerIdleCharges) VALUES ("'+estId+'","'+material+'","'+sourceOfSupply+'","'+initialCost+'","'+convCharges+'","'+seigCharges+'","'+totalCost+'","'+unit+'","'+isMetal+'","'+code+'","'+loadMeans+'","'+unLoadMeans+'","'+considerIdleCharges+'")');		
						}
						//Save LBD's
						tx1.executeSql('CREATE TABLE IF NOT EXISTS UserEstimateLBDs (EstimateID,dataCode,NOs,Length,breadth,depth)');
						var datasToLBDs = self.model.get("codeToRates");
						for(var data in datasToLBDs){						
							var dataCode = '';
							var NOs = '';
							var Length = '';
							var breadth = '';
							var depth = '';
							var lbdData = '';
							if(datasToLBDs[data].subBullets.length > 0){
								var subBullets = datasToLBDs[data].subBullets;
								for(var subitem in subBullets){
									lbdData = subBullets[subitem].lbds;
									dataCode = lbdData.dataItem +'*'+lbdData.subItem;
									NOs = lbdData.NOs;
									Length = lbdData.length;
									breadth = lbdData.breadth;
									depth = lbdData.depth;	
									console.log('INSERT INTO UserEstimateLBDs (EstimateID,dataCode,NOs,Length,breadth,depth) VALUES ("'+estId+'","'+dataCode+'","'+NOs+'","'+Length+'","'+breadth+'","'+depth+'")');
								  tx.executeSql('INSERT INTO UserEstimateLBDs (EstimateID,dataCode,NOs,Length,breadth,depth) VALUES ("'+estId+'","'+dataCode+'","'+NOs+'","'+Length+'","'+breadth+'","'+depth+'")');
								}
							}else{
								lbdData = datasToLBDs[data].lbds;
								dataCode = lbdData.dataItem;
								NOs = lbdData.NOs;
								Length = lbdData.length;
								breadth = lbdData.breadth;
								depth = lbdData.depth;		
								  console.log('INSERT INTO UserEstimateLBDs (EstimateID,dataCode,NOs,Length,breadth,depth) VALUES ("'+estId+'","'+dataCode+'","'+NOs+'","'+Length+'","'+breadth+'","'+depth+'")');
								tx.executeSql('INSERT INTO UserEstimateLBDs (EstimateID,dataCode,NOs,Length,breadth,depth) VALUES ("'+estId+'","'+dataCode+'","'+NOs+'","'+Length+'","'+breadth+'","'+depth+'")');
							}	
						}
				   });
				   
				   //Save Lead Data
				  /*
					

					
					//Save Data's
					tx.executeSql('CREATE TABLE IF NOT EXISTS UserEstimateDatas (EstimateID,data,tableName,removedDatas)');
					var selectedDatas = self.model.get("selectedItemsForEstimate");
					for(var data in selectedDatas){
						var dataCode = selectedDatas[data].indexCode;
						var tableName = selectedDatas[data].tableName;
						var subItemsArr = selectedDatas[data].selectedSubItems;
						if(subItemsArr.length > 0){
							for(var subItemsArr in subItemsArr){
								dataCode += '*'+subItemsArr[subItemsArr]
							}
						}
						console.log('INSERT INTO UserEstimateDatas (EstimateID,data,tableName,removedDatas) VALUES ("'+estId+'","'+dataCode+'","'+'","'+tableName+'","'+'")');
					  tx.executeSql('INSERT INTO UserEstimateDatas (EstimateID,data,tableName,removedDatas) VALUES ("'+estId+'","'+dataCode+'","'+'","'+tableName+'","'+'")');
					}*/
					
					
				},function(error){
					console.log(error.code);
				});
			},
			reRender : function(){
				this.$el.html(this.template(EstimateModel.model.attributes)).trigger("create");
				return this;
			}

		});
		return AbstractEstimate_View;
});


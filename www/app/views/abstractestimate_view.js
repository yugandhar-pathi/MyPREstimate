
define(['views/layout/base_itemview','models/estimateitems_util'],function(BaseItemView,EstimateModel){

		var AbstractEstimate_View = BaseItemView.extend({
		    
			model:EstimateModel.model,
			
			events:{
				'click .addLBD':'dispalyLBDPopup',
				'click #saveEstimate':'saveEstimate'
			},
			initialize : function() {
				this.model.on('reRenderView',this.reRender, this);
			},
			
			template : Handlebars.templates.selectestimate_abstractestimate,
			
			updateAmount:function(event){
				var index = $(event.target).data("index");
				var absEstimateCost = 0;
				//var itemsInEstimate = EstimateModel.model.get("indexToDatasArray");
				var codeToDatas = EstimateModel.model.get("codeToDatas");
				
				var description = $("#lbdDescription").val();
				var length = $("#length").val(); //length
				var breadth = $("#breadth").val(); //breadth
				var depth = $("#depth").val(); //depth
				
				var nos1 = $("#nos1").val();
				var nos2 = $("#nos2").val();
				var lbdType = $("#getLBDData input:radio[name=lbdType]:checked").val();
				
				if(!(nos1 !== "" && nos2 !== "" && length !== "" && breadth !== "" && depth !== "")){
					$("#mandatoryText").show();
					return;
				}
				
				$("#getLBDData").popup("close");
				var totalUnits =  Number(nos1) * Number(nos2) * Number(length) * Number(breadth) * Number(depth);
				totalUnits = parseFloat(totalUnits).toFixed("2");
				
				var splitArr = index.split("-");
				var itemId = splitArr[0];
				var subItem = "";
				
				if(splitArr.length > 2){
					subItem = splitArr[1];
				}
				
				//Need to modify this logic
				/*for(var item in itemsInEstimate){
					if(itemsInEstimate[item].totalAmount){
						absEstimateCost += itemsInEstimate[itemId].totalAmount;
					}
				}
				absEstimateCost = parseFloat(absEstimateCost/100000).toFixed("2");
				$("#absEstimateCost").text(absEstimateCost);*/
				
				var emptyLBDs  =  {
					"lbddescription":"",
					"nos1":"",
					"nos2":"",
					'length':"",
					'breadth':"",
					'depth':"",
					'totalUnits':"",
					'lbdType':"add"
				};
				
				var dataItemToLBDs = {
					"dataItem":codeToDatas[itemId].IndexCode,
					"subItem":subItem,
					"lbddescription":description,
					"nos1":nos1,
					"nos2":nos2,
					'length':length,
					'breadth':breadth,
					'depth':depth,
					'totalUnits':totalUnits,
					'lbdType':lbdType
				};

				var existingLBDs = [].concat(codeToDatas[itemId].lbdsArray);
				var lbdID = splitArr[splitArr.length-1];					
				if(existingLBDs.length-1 > lbdID){
					codeToDatas[itemId].lbdsArray[lbdID] = dataItemToLBDs;	
				}else{
					existingLBDs.pop();
					existingLBDs.push(dataItemToLBDs);
					existingLBDs.push(emptyLBDs);
					codeToDatas[itemId].lbdsArray = existingLBDs;					
				}

				EstimateModel.model.set("codeToDatas",codeToDatas);
				EstimateModel.model.trigger("reRenderView");
			},
			
			dispalyLBDPopup : function(event){
				var self = this;
	    
    	 		var index = $(event.target).data("index");
    	 		$("#getLBDData").off('popupbeforeposition');
    	 		$("#getLBDData").on('popupbeforeposition',function(){
	       	 		$("#mandatoryText").hide();
	    	 		if($("#totalUnits"+index).text() != ""){  	
	    	 			$("#lbdDescription").val($("#lbdDesc"+index).text());
	    	 			
		    	 		$("#nos1").val($("#Nos1"+index).text());
		    	 		$("#nos2").val($("#Nos2"+index).text());
		    	 		
		    	 		$("#length").val($("#length"+index).text());
		    	 		$("#breadth").val($("#breadth"+index).text());
		    	 		$("#depth").val($("#depth"+index).text());	
		    	 		
		    	 		$("#getLBDData input:radio[value="+$("#totalUnits"+index).data("lbdType")+"]").prop('checked',true);
		    	 		
	    	 		}else{
	    	 			//clear all fields
		    	 		$(".lbdinput").val("");
		    	 		$("#getLBDData input:radio[value='add']").prop('checked',true);
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
					   self.saveEstimateLBDs(tx1, estId);
					  /* var leadMaterials = self.model.get("listOfLeadMaterials");
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
						}*/

				   });					
				},function(error){
					console.log(error.code);
				});
			},
			saveEstimateLBDs : function(tx,estId){
				var self = this;
				tx.executeSql('CREATE TABLE IF NOT EXISTS UserEstimateLBDs ("EstimateID","dataCode","Desc","nos1","nos2","length","breadth","depth","type")');
				var dataToLBDArray = self.model.get("codeToDatas");
				var dataIndex = 0;
				var saveLBDs = function(dataToLBD){
					dataIndex++;
					var lbdsArray = dataToLBD.lbdsArray;
					var dataCode = dataToLBD.IndexCode;
					var lbdIndex = 0;
					var insertLBD = function(lbdData){
						var descr = lbdData.lbddescription;
						var nos1 = lbdData.nos1;
						var nos2 = lbdData.nos2;
						var length = lbdData.length;
						var breadth = lbdData.breadth;
						var depth = lbdData.depth;
						var type = lbdData.lbdType;
						tx.executeSql('INSERT INTO UserEstimateLBDs ("EstimateID","dataCode","Desc","nos1","nos2","length","breadth","depth","type") VALUES (?,?,?,?,?,?,?,?,?)',
								[estId,dataCode,descr,nos1,nos2,length,breadth,depth,type],function(tx){
							lbdIndex++;
							if(lbdIndex < lbdsArray.length){
								insertLBD(lbdsArray[lbdIndex])
							}else{
								if(dataIndex < dataToLBDArray.length){
									saveLBDs(dataToLBDArray[dataIndex]);
								}else{
									self.model.readEstimateHistory();
								}
							}
						});
					}
					insertLBD(lbdsArray[lbdIndex]);
				}
				saveLBDs(dataToLBDArray[dataIndex]);
			},
			reRender : function(){
				this.$el.html(this.template(EstimateModel.model.attributes)).trigger("create");
				return this;
			}

		});
		return AbstractEstimate_View;
});


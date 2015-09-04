
define(['views/layout/base_itemview','models/estimateitems_util'],function(BaseItemView,EstimateModel){

		var AbstractEstimate_View = BaseItemView.extend({
		    
			model:EstimateModel.model,
			
			events:{
				'tap #addLBD':'dispalyLBDPopup',
				'tap #saveEstimate':'saveEstimate'
			},
			
			template : Handlebars.templates.selectestimate_abstractestimate,
			
			updateAmount:function(event){
				var index = $(event.target).data("index");
				var absEstimateCost = 0;
				var itemsInEstimate = EstimateModel.model.get("codeToRates");

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
				$("#totalUnits"+index).text(totalUnits);
				$("#quantity"+index).text(totalUnits);
				
				$("#length"+index).text(length); //length
				$("#breadth"+index).text(breadth); //breadth
				$("#depth"+index).text(depth); //depth
				
				$("#Nos1"+index).text(nos1);
				$("#Nos2"+index).text(nos2);
				
				var itemId = index;
				var subItem = "";
				if(String(itemId).indexOf("-") != -1){
					var splitArr = index.split("-");
					itemId = splitArr[0];
					subItem = splitArr[1];
				}
				
				var itemRate = itemsInEstimate[itemId].rate;
				var totalAmount = parseFloat(itemRate * totalUnits).toFixed("2");
				$("#totalAmount"+index).text(totalAmount);
				itemsInEstimate[itemId].totalAmount = totalAmount;
				
				//Need to modify this logic
				for(var item in itemsInEstimate){
					if(itemsInEstimate[item].totalAmount){
						absEstimateCost += itemsInEstimate[itemId].totalAmount;
					}
				}
				absEstimateCost = parseFloat(absEstimateCost/100000).toFixed("2");
				$("#absEstimateCost").text(absEstimateCost);
				
				var dataItemToLBDs = {
					"dataItem":itemsInEstimate[itemId].code,
					"subItem":subItem,
					'NOs':nos1+'X'+nos2,
					'length':length,
					'breadth':breadth,
					'depth':depth,
					'totalUnits':totalUnits
				}
				
				if(dataItemToLBDs.subItem != ""){
					itemsInEstimate[itemId].subBullets[subItem].lbds = dataItemToLBDs;
				}else{
					itemsInEstimate[itemId].lbds = dataItemToLBDs;
				}
				
				EstimateModel.model.set("codeToRates",itemsInEstimate);
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
		    	this.model.saveEstimateDetails(timeStamp);
		    	console.log(JSON.stringify(EstimateModel.model.get("codeToRates")));
		    }

		});
		return AbstractEstimate_View;
});


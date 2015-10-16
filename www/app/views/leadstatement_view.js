define(['views/layout/base_itemview','models/estimateitems_util'],function(BaseItemView,EstimateModel){
	var leadStmt_View = BaseItemView.extend({    
		
		model:EstimateModel.model,	
		
		template : Handlebars.templates.selectestimate_leadstatement,
		
		events:{
	    	'click #proceedToDataSheet':'displayDataSheet',
	    	'click .material':'dispalyPopup'
		},
		initialize: function() {
			console.log("Render lead statement view");
	    },
	    displayDataSheet : function(){	
	    	$.mobile.loading( "show", {
	    		text: "Loading",
	    		textVisible: true,
	    		theme:'d'
    		});
	    	var leadMaterialRows  = this.model.get("listOfLeadMaterials");
	    	$('.leadRows').each(function(index,ele){
				leadMaterialRows[index].sourceOfSupply = $("#source"+index).text();
	    		leadMaterialRows[index].leadInKM = $("#distance"+index).text();
	    		leadMaterialRows[index].convCharges = $("#convCharges"+index).text();
	    		leadMaterialRows[index].totalCost = $("#totalCost"+index).text();
	    	});
	    	this.model.set("listOfLeadMaterials",leadMaterialRows);
	    	this.syncLeadMaterialCost(leadMaterialRows);
	    	appRouter.navigate("datasForSelectedItems",{trigger:true});
	    },
	    syncLeadMaterialCost : function(leadStmtRows){
	    	var datasInEstimate  = this.model.get("codeToDatas");	
	    	for(var dataItem in datasInEstimate){
	    		var item = datasInEstimate[dataItem];
	    		var leadMaterials = item.datas.filter(function(obj){
	    			return obj.Remarks != null && obj.Remarks.length > 0;
	    		});
	    		
	    		//Push all kinds of lead materials in data item to array.
    			var leadMaterialsInDataItem = [];
    			for(var item in leadMaterials){
    				leadMaterialsInDataItem.push(leadMaterials[item].Remarks)
    			}
    			
	    		for(var material in leadMaterials){
	    			if(leadMaterials[material].Remarks == "L1"){
	    				//Sync cost for Sand
	    				if(leadMaterialsInDataItem.indexOf("L2") != -1){
	    					var leaditem = leadStmtRows.filter(function(obj){ return obj.code == "L1B" });
	    					if(leaditem.length > 0 ){
	    						leadMaterials[material].Amount = leaditem[0].totalCost;
	    					}
	    				}else{
	    					var leaditem = leadStmtRows.filter(function(obj){ return obj.code == "L1A" });
	    					if(leaditem.length > 0 ){
	    						leadMaterials[material].Amount = leaditem[0].totalCost;
	    					}    					
	    				}
	    			}
	    			if(leadMaterials[material].Remarks == "L2"){
	    				leadMaterials[material].Amount = (leadStmtRows.filter(function(obj){ return obj.code == "L2" }))[0].totalCost;
	    			}
	    			/*if(leadMaterials[material].Remarks.indexof("L3") != -1){
	    				leadMaterials[material].Amount = (leadStmtRows.filter(function(obj){ return obj.code == "L2" }))[0].totalCost;
	    			}*/
	    		}
	    	}
	    },
	    updateTotalCost : function(event){
	    	var index = $(event.target).data('rowid');
	    	var distance = Number($("#distance").val());
	    	var sourceOfSupply = $("#sourceOfSupply").val();
	    	
	    	if(distance == "" || sourceOfSupply == ""){
	    		$("#mandatoryText").show();
	    		return;
	    	}
	    		    	
	    	var materialCode = $("#"+index).data("code");
	    	var convCharges = "";
	    	var loadUnloadCharges = 0;
	    	
	    	function getLoadUnloadCharges(material){
		    	var loadCharges = 0;
		    	var unloadCharges = 0;
		    	
		    	var loadMeans = $("#getData input:radio[name=loadMeans]:checked").val();
		    	var unloadMeans = $("#getData input:radio[name=unLoadMeans]:checked").val();
		    	var includeHireCharges = $("#getData input:radio[name=ic]:checked").val();
		    	
		    	var leadMaterialRows  = EstimateModel.model.get("listOfLeadMaterials");
		    	leadMaterialRows[index].loadMeans = loadMeans;
		    	leadMaterialRows[index].unLoadMeans = unloadMeans;
		    	leadMaterialRows[index].considerIdleCharges = includeHireCharges;
		    	
		    	function getCharges(loadType,material){
		    		var charges = 0;
					filterObjects = EstimateModel.model.get("convChargesFromDB").filter(function(obj){ return obj.Distance == loadType});
					if(filterObjects.length){
						charges = Number(filterObjects[0][material]);				
					}
					return charges;
		    	}
		    	
				if(loadMeans == "manual" && includeHireCharges == "no"){
					loadCharges = getCharges("MALWOH",material);
				}
				if(unloadMeans == "manualUnLoad" && includeHireCharges == "no"){
					unloadCharges = getCharges("MAUWOH",material);
				}
				if(loadMeans == "manual" && includeHireCharges == "yes"){
					loadCharges = getCharges("MALWH",material);
				}
				if(unloadMeans == "manualUnLoad" && includeHireCharges == "yes"){
					unloadCharges = getCharges("MAUWH",material);
				}
				if(loadMeans == "machinery"){
					loadCharges = getCharges("MEL",material);
				}
				if(unloadMeans == "machineryUnLoad"){
					unloadCharges = getCharges("MEUL",material);
				}
				return loadCharges+unloadCharges;
		    }

    		var filterObjects = EstimateModel.model.get("convChargesFromDB").filter(function(obj){ if(!isNaN(obj.Distance)) return obj.Distance >= distance});
	    	if(filterObjects.length == 0){
	    		filterObjects = EstimateModel.model.get("convChargesFromDB").filter(function(obj){ if(!isNaN(obj.Distance)) return Number(obj.Distance) == 31});
	    	}
	    	
    		if(materialCode == "L1B" || materialCode == "L1A" ) {
    			convCharges = Number(filterObjects[0].Sand);
    			loadUnloadCharges = getLoadUnloadCharges("Sand");
    		}
    		if(materialCode == "L2") {
    			convCharges = Number(filterObjects[0].CementOrSteel);
    			loadUnloadCharges = getLoadUnloadCharges("CementOrSteel");
    		}
    		if(materialCode == "L3") {
    			convCharges = Number(filterObjects[0].Metal);
    			loadUnloadCharges = getLoadUnloadCharges("Metal");
    		}
    		
    		if(distance > 5)
    			convCharges = convCharges * distance;
	    	
	    	$("#getData").popup("close");
	    	
	    	$("#source"+index).text(sourceOfSupply);
	    	$("#distance"+index).text(distance);
	    	$("#LUC"+index).text(loadUnloadCharges);
	    	
	    	var totalCost = Number($("#initialCost"+index).text().replace(",",""))+convCharges+loadUnloadCharges;
	    	
	    	$("#convCharges"+index).text(Handlebars.helpers.decimalFormat(convCharges));	    	
	    	$("#totalCost"+index).text(Handlebars.helpers.decimalFormat(totalCost));
	    },
	    
	   
	    dispalyPopup : function(event){
			var self = this;
			$("#getData").off("popupbeforeposition");
    	 	$("#getData").on("popupbeforeposition",function(){

    	 		$("#mandatoryText").hide();
    	 		$("#sourceOfSupply").val("");
    	 		$("#distance").val("");
    	 		
    	 		var leadRow = event.target.id;
	    	 	$("#saveLeadData").data('rowid',leadRow);
	    	 	$("#saveLeadData").off('tap');
	    	 	$("#saveLeadData").on('tap',self.updateTotalCost);
	    	 	
    	 		var savedSource = $("#source"+leadRow).text();
    	 		var savedDistance = $("#distance"+leadRow).text();
    	 		
    	 		var leadCode = $(event.target).data('code');    	 		
    	 		
    	 		var leadMaterialRows  = EstimateModel.model.get("listOfLeadMaterials");
    	 		var liftBy = leadMaterialRows[leadRow].loadMeans;
    	 		if(liftBy == "machinery"){
    	 			$("#noIdleCharges").hide();
    	 		}else{
    	 			$("#noIdleCharges").show();
    	 		}
    	 		$("#getData input:radio[value="+liftBy+"]").prop('checked',true);
    	 		$("#getData input:radio[value="+leadMaterialRows[leadRow].unLoadMeans+"]").prop('checked',true);
    	 		$("#getData input:radio[value="+leadMaterialRows[leadRow].considerIdleCharges+"]").prop('checked',true);
    	 		
    	 		if(leadCode == "L1A" || leadCode == "L1B"  || leadCode == "L3"){
    	 			$("#machineryMeans").show();
    	 		}else{
    	 			$("#machineryMeans").hide();
    	 		}
    		
    	 		if(savedSource != ""){
    	 			$("#sourceOfSupply").val(savedSource);
    	 		}
    	 		if(savedDistance != ""){
    	 		    $("#distance").val(savedDistance);
    	 		}
    	 		
    	 		$("#getData input:radio[name=liftMeans]").off('tap');
    	 		$("#getData input:radio[name=liftMeans]").on('tap',function(){
    	 			setTimeout(function(){
        	 			var liftMeans = $("#getData input:radio[name=liftMeans]:checked").val();
        	 			if(liftMeans == "machinery"){
        	 				$("#getData input:radio[value=no]").prop('checked',false);
        	 				$("#getData input:radio[value=yes]").prop('checked',true);
        	 				$("#noIdleCharges").hide();
        	 			}else{
        	 				$("#noIdleCharges").show();
        	 			}  	 				
    	 			},20);
    	 		});
	    	 	
    	 	});
    	 	$("#getData").popup( "open", { x: event.pageX, y: event.pageY } );
	    }

	});
	return leadStmt_View
});


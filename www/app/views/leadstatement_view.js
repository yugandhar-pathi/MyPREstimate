define(['models/estimateitems_util'],function(EstimateModel){
	var leadStmt_View = Backbone.View.extend({	    
		
		model:EstimateModel.model,	
		
		template : Handlebars.templates.selectestimate_leadstatement,
		
		events:{
	    	'tap #proceedToDataSheet':'displayDataSheet',
	    	'tap .material':'dispalyPopup'
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
	    	//EstimateModel.model.getDatasForEstimate();
	    	appRouter.navigate("datasForSelectedItems",{trigger:true});
	    },
	    
	    updateTotalCost : function(event){
	    	var index = $(event.target).data('rowid');
	    	var distance = $("#distance").val();
	    	var sourceOfSupply = $("#sourceOfSupply").val();
	    	$("#getData").popup("close");
	    	
	    	$("#source"+index).text(sourceOfSupply);
	    	$("#distance"+index).text(distance);
	    	var convCharges = Number(distance)*5;
	    	var totalCost = Number($("#initialCost"+index).text())+convCharges;
	    	
	    	$("#convCharges"+index).text(convCharges);	    	
	    	$("#totalCost"+index).text(totalCost);
	    },
	    
	    dispalyPopup : function(event){
			var self = this;
    	 	$("#getData").popup( "open", { x: event.pageX, y: event.pageY } );
    	 	setTimeout(function(){
    	 		var leadRow = event.target.id;
    	 		$("#sourceOfSupply").val("");
    	 		$("#distance").val("");
    	 		var savedSource = $("#source"+leadRow).text();
    	 		var savedDistance = $("#distance"+leadRow).text();
    	 		if(savedSource != ""){
    	 			$("#sourceOfSupply").val(savedSource);
    	 		}
    	 		if(savedDistance != ""){
    	 		    $("#distance").val(savedDistance);
    	 		}
	    	 	$("#saveLeadData").data('rowid',leadRow);
	    	 	$("#saveLeadData").on('tap',self.updateTotalCost);
    	 	},50);
    	 	event.preventDefault();
	    },
	    
		render : function() {
			this.$el.html(this.template(EstimateModel.model.attributes));
			return this;
		}

	});
	return leadStmt_View
});


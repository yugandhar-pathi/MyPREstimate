define(['models/estimateitems_util'],function(EstimateModel){
	var leadStmt_View = Backbone.View.extend({	    
		
		model:EstimateModel,	
		
		template : Handlebars.templates.selectestimate_leadstatement,
		
		events:{
	    	"blur .distance":'updateTotalCost',
	    	'tap #proceedToDataSheet':'displayDataSheet'
		},
		
		initialize: function() {
			console.log("Render lead statement view");
	    },
	    displayDataSheet : function(){
	    	EstimateModel.model.getDatasForEstimate();
	    },
	    
	    updateTotalCost : function(event){
	    	var index = $(event.target).data('index');
	    	var distance = $("#distance"+index).val();
	    	var convCharges = distance*5;
	    	var totalCost = Number($("#initialCost"+index).text())+convCharges;
	    	
	    	$("#convCharges"+index).text(convCharges);	    	
	    	$("#totalCost"+index).text(totalCost);
	    },
	    
		render : function() {
			this.$el.html(this.template(EstimateModel.model.attributes));
			return this;
		}

	});
	return leadStmt_View
});


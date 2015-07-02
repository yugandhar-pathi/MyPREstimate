
define(['models/estimateitems_util'],function(EstimateModel){

		var EstimateItem_View = Backbone.View.extend({
		    
			model:EstimateModel,
			
			initialize: function() {
			
			},
			
			 events:{
				 'click #listItems':'selectItemsForEstimate'
			 },
			 
			 selectItemsForEstimate : function(event){
				 EstimateModel.model.getDefaultItemsForCCRoad();
			 },
			// Cache the template function for a single item.
			template : Handlebars.templates.selectestimate_selectestimate,
			
			// Re-render the titles of the todo item.
			render : function() {		
				this.$el.html(this.template({}));
				return this;
			}

		});
		return EstimateItem_View

});


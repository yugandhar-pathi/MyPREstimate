
define(['models/estimateitems_util'],function(EstimateModel){
		var EstimateItem_View = Backbone.View.extend({
		    
			model:EstimateModel,
			
			initialize: function() {

		    },
			
		     events:{
		    	 'click #listOfChapters':'selectItemsFromChapter'
		     },
		     
		     selectItemsFromChapter : function(event){
		    	 EstimateModel.model.set('selectedTable',$(event.target).closest('a').data('table'));
		    	 EstimateModel.model.prepareTableToItemsMap();

		     },
			// Cache the template function for a single item.
			template : Handlebars.templates.selectestimate_listofchapters,

			// Re-render the titles of the todo item.
			render : function() {
		
				this.$el.html(this.template({}));

				return this;
			}

		});
		return EstimateItem_View;
});


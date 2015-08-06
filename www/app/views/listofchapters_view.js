
define(['models/estimateitems_util'],function(EstimateModel){
		var ListOfChapters_View = Backbone.View.extend({
			
			template : Handlebars.templates.selectestimate_listofchapters,
			 
		    events:{
		    	 'tap .listOfChapters':'selectItemsFromChapter'
		    },   
		     
		    selectItemsFromChapter : function(event){
		    	/*$.mobile.loading( "show", {
		    		text: "Loading",
		    		textVisible: true,
		    		theme:'d'
	    		});*/
		    	EstimateModel.model.set('selectedTable',$(event.target).data('table'));
		    	EstimateModel.model.set('chapterTitle',$(event.target).text().split(".")[1]);
		    	EstimateModel.model.prepareTableToItemsMap();
		    },
		     
			render : function() {
				this.$el.html(this.template({}));
				return this;
			}

		});
		return ListOfChapters_View;
});


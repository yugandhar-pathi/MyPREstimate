
define(['models/estimateitems_util'],function(EstimateModel){

		var ShowItemsInChapter_View = Backbone.View.extend({
		    
			model:EstimateModel.model,

			template : Handlebars.templates.pdf_pdfdatas,			

		    render: function() {
		        this.$el.html(this.template(this.model.attributes));
		        return this;
		    }

		});
		return ShowItemsInChapter_View;
		
});


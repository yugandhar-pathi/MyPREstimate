
define(['models/estimateitems_util'],function(EstimateModel){

		var Page_View = Backbone.View.extend({
		    
			template : Handlebars.templates.layout_page,			
			
			render : function() {
				this.$el.html(this.template(this.model.attributes));
				return this;
			}
		});
		return Page_View;
});


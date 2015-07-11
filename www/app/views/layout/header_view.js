
define(['models/headerfootermodel'],function(HeaderFooterModel){

		var Header_View = Backbone.View.extend({
		    			
			template : Handlebars.templates.layout_header,			
			
			render : function() {
				this.$el.html(this.template(this.model.attributes));
				return this;
			}
		});
		return Header_View;
});


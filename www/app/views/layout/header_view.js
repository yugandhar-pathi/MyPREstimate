
define([],function(){

		var Header_View = Backbone.Marionette.ItemView.extend({
			
		    			
			template : Handlebars.templates.layout_header,
			
			attributes : function(){
				return {
					'class' : 'header-div'
				}
			}

		});
		return Header_View;
});


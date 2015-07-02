define([], function() {

	/*var App = {};
	
	App.EstimateModel = (function(){*/
		
		var EstimateModel = {};
		
		EstimateModel = Backbone.Model.extend({

			// Default todo attribute values
			defaults : {
				title : 'Default',
				completed : false
			},

			validate : function(attrs, options) {
				console.log(attrs, options);
				if (!attrs.title.length) {
					return "Please enter a Todo";
				}
			}
		});
		return EstimateModel;
	/*}) ;
		
	return App.EstimateModel;*/

});

define([], function() {

	var Base_ItemView = Backbone.Marionette.ItemView.extend({
		
		attributes : function() {
			return {
				'role' : 'main',
				'class' : 'ui-content tablet-content'
			};
		},

		close : function() {
			console.log("closing the view, cleaning up");
		},
		unbindModel: function(){

		}

	});
	return Base_ItemView;
});

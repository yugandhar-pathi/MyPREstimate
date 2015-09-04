
define([], function() {

	var HeaderFooterModel = Backbone.Model.extend({

		defaults : {
			isFooterRequired : false,
			isHeaderRequired : false,
			headerTitle : "",
			isShieldRequired : false,
			isBackButtonRequired : false,
			backButtonHREF : '',
			isLogoutRequired : false,
			isMenuPanelRequired:true
		},

		initialize : function(options) {
		}
	});

	return HeaderFooterModel;

});
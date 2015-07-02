/**
 * Base model is the base for all model class, primarily done for the sake of
 * abstraction. All models extends base model. Changing from Backbone to
 * Angular, will have minimal impact by following such an approach
 * 
 * @author Arun Kumar
 * @email arun.kumar125@wipro.com
 * @version 1.0
 * @Date 25-Nov-13
 */

define([], function() {

	var BaseModel = Backbone.Model.extend({

		defaults : {
			ResultStatus : "FALSE",
		},

		initialize : function(options) {
		}
	});

	return BaseModel;

});

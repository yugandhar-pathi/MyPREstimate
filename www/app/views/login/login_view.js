
define(['models/estimateitems_util'],function(EstimateModel){
		var ChooseItem_View = Backbone.View.extend({
			
			model:EstimateModel,	
			
			template : Handlebars.templates.login_login,
			
			events:{
				'tap #login':'login'
			},
			
			login:function(){
				var userid = $("#username").val();
				var password = $("#password").val();
				
				if(userid == "" || password == ""){
					
				}
				appRouter.navigate("#selectestimate",{trigger:true})
			},
			
			render : function() {
				this.$el.html(this.template());
				return this;
			}
				
		});
		return ChooseItem_View
});


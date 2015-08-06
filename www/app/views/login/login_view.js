
define(['models/estimateitems_util'/*,'FileCopyPlugin'*/],function(EstimateModel){
		var ChooseItem_View = Backbone.View.extend({
			
			model:EstimateModel,	
			
			template : Handlebars.templates.login_login,
			
			initialize:function(){
				/*console.log("control reaches initialize function");
				 function onDeviceReady() {
					 console.log("time to call fileCopyplugin");
					 var isDBCopied = window.localStorage.getItem("isDBCopied");
					 console.log(isDBCopied);
					 if(isDBCopied == undefined){
						 FileCopyPlugin.Copy();
					 } 
				  }
				 document.addEventListener("deviceready", onDeviceReady, false);*/	
			},

			events:{
				'tap #login':'login'
			},
			
			login:function(){
				var userid = $("#username").val();
				var password = $("#password").val();
				
				if(userid == "" || password == ""){
					
				}
				//FileCopyPlugin.copy();
				appRouter.navigate("#selectestimate",{trigger:true})
			},
			
			render : function() {
				this.$el.html(this.template());
				return this;
			}
				
		});
		return ChooseItem_View
});



define(['views/layout/base_itemview','models/estimateitems_util'],function(BaseItemView,EstimateModel){
		var ChooseItem_View = BaseItemView.extend({
			
			model:EstimateModel.model,	
			
			template : Handlebars.templates.login_login,
			
			initialize:function(){
				if(isPhone){
					//$( "#login" ).button("disable");
					console.log("control reaches isPhone condition");
					 function onDeviceReady() {
						 console.log("time to call fileCopyplugin");
						 var isDBCopied = window.localStorage.getItem("isDBCopied");
						 console.log(isDBCopied);
						 if(isDBCopied == undefined){
							 FileCopyPlugin.Copy();
						 } 
					  }
					 document.addEventListener("deviceready", onDeviceReady, false);
				}
			},

			events:{
				'tap #login':'login',
				'input #username':'enableLoginButton',
				'input #password':'enableLoginButton'
			},
			
			login:function(){
				var userid = $("#username").val();
				var password = $("#password").val();
				
				if(userid == "" || password == ""){
					
				}
				//FileCopyPlugin.copy();
				appRouter.navigate("#selectestimate",{trigger:true});
				//EstimateModel.model.saveEstimateDetails(1);

			},
			enableLoginButton : function(){
				var userid = $("#username").val();
				var password = $("#password").val();			
				if(userid != "" && password != ""){
					$("#login").button("enable");
				}
			},
			onShow:function(){
				$("#username").val("");
				$("#password").val("");
			}
				
		});
		return ChooseItem_View
});


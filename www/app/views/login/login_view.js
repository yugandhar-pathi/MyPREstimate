
define(['views/layout/base_itemview','models/estimateitems_util'/*,'FileCopyPlugin'*/],function(BaseItemView,EstimateModel){
		var ChooseItem_View = BaseItemView.extend({
			
			model:EstimateModel.model,	
			
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
				appRouter.navigate("#selectestimate",{trigger:true});
				

			}
				
		});
		return ChooseItem_View
});


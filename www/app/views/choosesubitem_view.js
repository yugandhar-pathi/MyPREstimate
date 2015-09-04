
define(['views/layout/base_itemview','models/estimateitems_util'],function(BaseItemView,EstimateModel){

		var ChooseSubItem_View = Backbone.View.extend({
		    
			model:EstimateModel.model,
			
			events:{
				'tap #proceedToLeadStmt':"proceedToLeadStmt"
			},
			
			template : Handlebars.templates.selectestimate_choosesubitem,			

			proceedToLeadStmt : function(){
				appRouter.navigate('leadstatement',{trigger:true});
			}

		});
		return ChooseSubItem_View;
});


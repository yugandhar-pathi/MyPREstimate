
define(['models/estimateitems_util'],function(EstimateModel){

		var ChooseSubItem_View = Backbone.View.extend({
		    
			model:EstimateModel.model,
			
			events:{
				'tap #proceedToLeadStmt':"proceedToLeadStmt"
			},
			
			template : Handlebars.templates.selectestimate_choosesubitem,			
			
			render : function() {
				this.$el.html(this.template(EstimateModel.model.attributes));
				return this;
			},
			proceedToLeadStmt : function(){
				appRouter.navigate('leadstatement',{trigger:true});
			}

		});
		return ChooseSubItem_View;
});


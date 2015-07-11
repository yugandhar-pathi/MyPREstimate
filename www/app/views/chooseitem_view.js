
define(['models/estimateitems_util'],function(EstimateModel){
		var ChooseItem_View = Backbone.View.extend({
			
			model:EstimateModel,	
			
			template : Handlebars.templates.selectestimate_chooseitem,
			
			events:{
				'tap #proceedToLeadStmt':'proceedToLeadStmt'
			},
			
			proceedToLeadStmt : function(){		
				var selectedItems = $("#estimateItems input:checkbox[name=itemsSelected]:checked");
				var indexToTableMap = [];
				selectedItems.each(function(index,ele)
						{
							var indexToTableItem = {
									"indexCode":"",
									"tableName":""
								};
							indexToTableItem.indexCode = ele.id;
							indexToTableItem.tableName = $(this).data("table");
							indexToTableMap.push(indexToTableItem);					
						});	
				EstimateModel.model.set("selectedItemsForEstimate",indexToTableMap);
				//EstimateModel.model.getSubItemsForEstimate();
				//appRouter.navigate("#leadstatement",{tirgger:true});
				 appRouter.navigate("#leadstatement",{trigger:true});  
				
			},		
			
			render : function() {
				this.$el.html(this.template(EstimateModel.model.attributes));
				return this;
			}
		});
		return ChooseItem_View
});



define(['views/layout/base_itemview','models/estimateitems_util'],function(BaseItemView,EstimateModel){
		var MenuPanel_View = BaseItemView.extend({
		
			tagName : 'menupanel',
			
			template : Handlebars.templates.layout_menupanel,
			
			attributes: function(){
				return {
					'data-theme' : 'd'
				}
			},
			
			model:EstimateModel.model,	
			
			events:{
				'tap #newEstimate':'startEstimate',
				'tap #datas':'displayDatas',
				'tap #historyOption':'displayHistory'
			},
			
			displayDatas:function(event){
				this.model.set("");
				appRouter.navigate("#listOfChapters",{trigger:true}); 
			},
			displayHistory : function(event){
				this.model.readEstimateHistory();
			},
			startEstimate:function(event){
				appRouter.navigate("#selectestimate",{trigger:true});
			},
			onShow : function(){
				$("#newEstimate").addClass('selected');
			}
		});
		return MenuPanel_View
});


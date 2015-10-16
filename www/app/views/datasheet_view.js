
define(['views/layout/base_itemview','models/estimateitems_util'],function(BaseItemView,EstimateModel){

		var DataSheet_View = BaseItemView.extend({
		    
			model:EstimateModel.model,
			
			events:{
				'click #abstractEstimate':'displayAbstractEstimate'
			},
			
			template : Handlebars.templates.selectestimate_datasheet,
			
			displayAbstractEstimate:function(){
				var codeToDatas = this.model.get("codeToDatas");
				var lbdDefaults =  [{
					"lbddescription":"",
					"nos1":"",
					"nos2":"",
					'length':"",
					'breadth':"",
					'depth':"",
					'totalUnits':"",
					'lbdType':"add"
				}];
				for(var data in codeToDatas){
					codeToDatas[data].lbdsArray =  lbdDefaults;
				}
				appRouter.navigate("abstractEstimate",{trigger:true})
			},
			onShow : function(){

			}

		});
		return DataSheet_View;
});


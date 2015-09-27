
define(['views/layout/base_itemview','models/estimateitems_util'],function(BaseItemView,EstimateModel){

		var DataSheet_View = BaseItemView.extend({
		    
			model:EstimateModel.model,
			
			events:{
				'tap #abstractEstimate':'displayAbstractEstimate'
			},
			
			template : Handlebars.templates.selectestimate_datasheet,
			
			displayAbstractEstimate:function(){
				
				var codeToRateArr = [];
				var numberOfItemsWithSubBullet = 0;
				var codeToDatas = this.model.get("codeToDatas");
				
				//check if data item has sub-bullets
				for(var index in codeToDatas){
					var codeToRate = {
						dataIndex:"",
						code : "",
						description:"",
						subBullets:[],
						rate : "",
						unit:"",
						lbdsArray : [{
							"lbddescription":"",
							"nos1":"",
							"nos2":"",
							'length':"",
							'breadth':"",
							'depth':"",
							'totalUnits':""
						}]
					};
					var subItems = {
						subIndex:0,
						itemID:"",
						subItemDesc:"",
						rate:"",
						unit:"",
						lbdsArray : [{
							"lbddescription":"",
							"nos1":"",
							"nos2":"",
							'length':"",
							'breadth':"",
							'depth':"",
							'totalUnits':""
						}]
					};

					
					var datas = codeToDatas[index].datas;
					codeToRate.code = codeToDatas[index].code;
					codeToRate.dataIndex = index;
					var firstItem = 0;
					for(var row in datas){		
						if(row == firstItem){
							//set first row description
							codeToRate.description = datas[row].Description;
						}
						if(datas[row].Description != null && datas[row].Description.indexOf('Rate per ') != -1){
							//Rate per Unit
							if(subItems.subItemDesc != "" && subItems.subItemRate == "" ){
								subItems.subItemRate = 	datas[row].Amount;
								codeToRate.subBullets.push(subItems);
								subItems = {
										subItemDesc:"",
										subItemRate:""
									};
								
							}else{
								codeToRate.rate = datas[row].Amount;
							}	
						}
						if(datas[row].Description != null && datas[row].Description.indexOf('Unit =') != -1){
							//Unit
							if(subItems.subItemDesc != "" && subItems.subItemRate == "" ){
								subItems.subIndex = codeToRate.subBullets.length;
								subItems.unit = 	datas[row].Amount;
								codeToRate.subBullets.push(subItems);
								subItems = {
										subItemDesc:"",
										subItemRate:""
									};
								
							}else{
								codeToRate.unit = datas[row].Description.substring(7,datas[row].Description.length);
							}	
						}
						if(datas[row].SubBullet){
							subItems.subItemDesc = datas[row].Description;
							subItems.itemID = datas[row].SubBullet;
							
						}
					}
					codeToRateArr.push(codeToRate);
				}
				console.log(codeToRateArr);				
				this.model.set("codeToRates",codeToRateArr);		
				appRouter.navigate("abstractEstimate",{trigger:true})
			},
			onShow : function(){
				//var $table = $('#test');
				/*$('#test').floatThead({
		                scrollContainer: function ($table) {
		                    return $table.closest('#tableContainer');
		                }
				});*/
				
			   /*  $(document).ready(function () {
			            $("#test").floatThead({
			                scrollContainer: function ($table) {
			                    return $table.closest('#tableContainer');
			                }
			            });
			     });*/

			}

		});
		return DataSheet_View;
});



define(['models/estimateitems_util'],function(EstimateModel){

		var DataSheet_View = Backbone.View.extend({
		    
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
						code : "",
						description:"",
						rate : ""
					};
					var datas = codeToDatas[index].datas;
					codeToRate.code = codeToDatas[index].code;
					for(var row in datas){
						if(row == 0){
							//set first row description
							codeToRate.description = datas[row].Description;
						}
						if(datas[row].Description != null && datas[row].Description.indexOf('Rate per ') != -1){
							//Rate per Unit
							codeToRate.rate = datas[row].Amount;
						}
						if(datas[row].SubBullet){
							//Index Code is having sub bullet
							codeToDatas[index].isSubBulletExist = true;
						}
					}
					codeToRateArr.push(codeToRate);
				}
				console.log(codeToRateArr);
				
				//Check how many items has sub bullet exist
				for(var index in codeToDatas){
					if(codeToDatas[index].isSubBulletExist){
						numberOfItemsWithSubBullet++;
					}
				}
				
				console.log("Number of items with sub bullet is :"+numberOfItemsWithSubBullet);
				
				this.model.set("codeToRates",codeToRateArr);
				
				appRouter.navigate("abstractEstimate",{trigger:true})
			},
						
			render : function() {
				this.$el.html(this.template(EstimateModel.model.attributes));
			}

		});
		return DataSheet_View;
});



define(['models/estimateitems_util'],function(EstimateModel){

		var AbstractEstimate_View = Backbone.View.extend({
		    
			model:EstimateModel.model,
			
			events:{
				'blur .measurement':'updateAmount'
			},
			
			template : Handlebars.templates.selectestimate_abstractestimate,
			
			updateAmount:function(ele){
				var index = $(ele.target).data("index");
				var absEstimateCost = 0;
				var itemsInEstimate = this.model.get("codeToRates");
				
				var nos1 = $("#Nos1"+index).val();
				var nos2 = $("#Nos2"+index).val();
				var length = $("#length"+index).val(); //length
				var breadth = $("#breadth"+index).val(); //breadth
				var depth = $("#depth"+index).val(); //depth
				
				if(nos1 !== "" && nos2 !== "" && length !== "" && breadth !== "" && depth !== ""){
					var totalUnits =  Number(nos1) * Number(nos2) * Number(length) * Number(breadth) * Number(depth);
					totalUnits = parseFloat(totalUnits).toFixed("2");
					$("#totalUnits"+index).text(totalUnits);
					$("#quantity"+index).text(totalUnits);
					var itemRate = itemsInEstimate[index].rate;
					var totalAmount = parseFloat(itemRate * totalUnits).toFixed("2");
					$("#totalAmount"+index).text(totalAmount);
					itemsInEstimate[index].totalAmount = totalAmount;
					this.model.set("codeToRates",itemsInEstimate);
					
					for(var item in itemsInEstimate){
						if(itemsInEstimate[item].totalAmount){
							absEstimateCost += itemsInEstimate[item].totalAmount;
						}
					}
					absEstimateCost = parseFloat(absEstimateCost/100000).toFixed("2");
					$("#absEstimateCost").text(absEstimateCost);
				}
				

				
			},
			
			render : function() {
				this.$el.html(this.template(EstimateModel.model.attributes));
			}

		});
		return AbstractEstimate_View;
});


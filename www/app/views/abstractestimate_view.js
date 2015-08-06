
define(['models/estimateitems_util'],function(EstimateModel){

		var AbstractEstimate_View = Backbone.View.extend({
		    
			model:EstimateModel.model,
			
			events:{
				//'blur .measurement':'updateAmount'
				//'tap #saveLBD':'updateAmount',
				'tap #addLBD':'dispalyLBDPopup'
			},
			
			template : Handlebars.templates.selectestimate_abstractestimate,
			
			updateAmount:function(event){
				var index = $(event.target).data("index");
				var absEstimateCost = 0;
				var itemsInEstimate = EstimateModel.model.get("codeToRates");
				
				//var nos1 = $("#Nos1"+index).val();
				//var nos2 = $("#Nos2"+index).val();
				var nos1 = 1;
				var nos2 = 1;
				var length = $("#length").val(); //length
				var breadth = $("#breadth").val(); //breadth
				var depth = $("#depth").val(); //depth
				
				$("#getLBDData").popup("close");
				
				if(nos1 !== "" && nos2 !== "" && length !== "" && breadth !== "" && depth !== ""){
					var totalUnits =  Number(nos1) * Number(nos2) * Number(length) * Number(breadth) * Number(depth);
					totalUnits = parseFloat(totalUnits).toFixed("2");
					$("#totalUnits"+index).text(totalUnits);
					$("#quantity"+index).text(totalUnits);
					
					$("#length"+index).text(length); //length
					$("#breadth"+index).text(breadth); //breadth
					$("#depth"+index).text(depth); //depth
					
					var itemRate = itemsInEstimate[index].rate;
					var totalAmount = parseFloat(itemRate * totalUnits).toFixed("2");
					$("#totalAmount"+index).text(totalAmount);
					itemsInEstimate[index].totalAmount = totalAmount;
					EstimateModel.model.set("codeToRates",itemsInEstimate);
					
					for(var item in itemsInEstimate){
						if(itemsInEstimate[item].totalAmount){
							absEstimateCost += itemsInEstimate[item].totalAmount;
						}
					}
					absEstimateCost = parseFloat(absEstimateCost/100000).toFixed("2");
					$("#absEstimateCost").text(absEstimateCost);
				}
				

				
			},
			
			dispalyLBDPopup : function(event){
				var self = this;
	    	 	$("#getLBDData").popup( "open", { x: event.pageX, y: event.pageY } );
	    	 	setTimeout(function(){
		    	 	$("#saveLBD").data('index',$(event.target).data("index"));
		    	 	$("#saveLBD").on('tap',self.updateAmount)
	    	 	},100);
	    	 	event.preventDefault();
		    },
			
			render : function() {
				this.$el.html(this.template(EstimateModel.model.attributes));
			}

		});
		return AbstractEstimate_View;
});


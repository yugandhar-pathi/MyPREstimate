
define(['models/estimateitems_util'],function(EstimateModel){

		var ShowItemsInChapter_View = Backbone.View.extend({
		    
			model:EstimateModel,
			
			initialize: function() {

		    },
			
		     events:{
		    	 'click #proceedToItems':'proceedToSelectedItems',
		    	 'click .description':'displayDetails'    	 
		     },
		     
		     proceedToSelectedItems : function(event){
		    	 var selectedItems = $("#itemsInChapter input:checkbox[name=chosenItems]:checked");
		    	 var chosenItems = [];
		    	   
				 selectedItems.each(function(index,ele)
						{
							var chosenItem = {
									"indexCode":"",
									"tableName":""
								};
							chosenItem.indexCode = ele.id;
							chosenItem.tableName = EstimateModel.model.get("selectedTable");
							chosenItems.push(chosenItem);
						});	
					EstimateModel.model.set("chosenItems",chosenItems);
					console.log(chosenItems);
		    	 
					EstimateModel.model.addDefaultItemsForEstimate();

		     },
		     displayDetails:function(event){
		    	 var selectedRow = event.target.id;
		    	 var splitId = selectedRow.split('+');
		    	 var tableName = splitId[0];
		    	 var rowId =  splitId[1];
		    	 var options = {
		    		x:'100px',
		    		y:'100px',
		    		transition :'flip',
		    		positionTo :''
		    	 };
		    	 console.log(tableName + ":"+rowId)
		    	 event.preventDefault();
		    	 $( "#popupBasic" ).popup( "open",options);		    	 
		     },

			template : Handlebars.templates.selectestimate_showitemsinchapter,

			render : function() {	
				this.$el.html(this.template(EstimateModel.model.attributes));
				return this;
			}

		});
		return ShowItemsInChapter_View;
		
});


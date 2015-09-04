
define(['views/layout/base_itemview','models/estimateitems_util'],function(BaseItemView,EstimateModel){

		var ShowItemsInChapter_View = Backbone.View.extend({
		    
			model:EstimateModel.model,
			
			initialize: function() {

		    },
			template : Handlebars.templates.selectestimate_showitemsinchapter,			
		    events:{
		    	 'tap #addToList':'proceedToSelectedItems',
		    	 'click .description':'displayDetails',
		    	 'click #backButton':'closePopup',
		    	 'tap #addToQ':'addDatasToQ'
		    },		     
		    addDatasToQ : function(event){
		    	 var selectedItems = $("#itemsInChapter input:checkbox[name=chosenItems]:checked");
		    	 var chosenItems = [];  
				 selectedItems.each(function(index,ele){
					var chosenItem = {
							"indexCode":"",
							"tableName":""
						};
					chosenItem.indexCode = ele.id;
					chosenItem.tableName = EstimateModel.model.get("selectedTable");
					chosenItems.push(chosenItem);
				 });	
				 var selectedList = this.model.get("selectedDatasToAdd");
				 if(typeof selectedList != 'string' && selectedList.length > 0 ){
					 chosenItems = chosenItems.concat(selectedList); 
				 }
				 this.model.set("selectedDatasToAdd",chosenItems);
				 console.log(chosenItems);
				 $("#datasPopup").popup("close");

		     },
		     displayDetails:function(event){
		    	 var selectedRow = event.target.id;
		    	// var indexId = $("#"+selectedRow.substr(-1)).data("indexCode");
		    	 var options = {
		    		//x:'100px',
		    		//y:'100px',
		    		transition :'flip',
		    		positionTo :''
		    	 };
		    	 //console.log(tableName + ":"+rowId)
		    	 event.preventDefault();
		    	 $("#itemDetails").empty();
		    	$("#itemDetails").append($("#"+selectedRow.substr(-1)).html());
		    	 //$("#RBR-LUCC-1").attr("display","show");
		    	 $( "#itemDetails" ).popup( "open",options);		    	 
		     },
		     closePopup : function(){
		    	 $("#datasPopup").popup("close");
		     },
		     render: function() {
		        this.$el.html(this.template(this.model.attributes));
		        return this;
		     }

		});
		return ShowItemsInChapter_View;
		
});


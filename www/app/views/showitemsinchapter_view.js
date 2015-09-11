
define(['models/estimateitems_util','views/datacodedetails_view','views/utilities/datas_util'],function(EstimateModel,DataCodeDetails,DatasUtil){

		var ShowItemsInChapter_View = Backbone.View.extend({
		    
			model:EstimateModel.model,
			
			initialize: function() {

		    },
			template : Handlebars.templates.selectestimate_showitemsinchapter,			
		    events:{
		    	// 'tap #addToList':'proceedToSelectedItems',
		    	 'tap .description':'displayDetails',
		    	 'click #backButton':'closePopup',
		    	 'click #updateEst':'updateEstimate'
		    },		
		    updateEstimate : function(event){
		    	 var selectedItems = $("#itemsInChapter input:checkbox[name=chosenItems]:checked");
		    	 var chosenItems = [];  
		    	 var selectedTable = EstimateModel.model.get("selectedTable");
				 selectedItems.each(function(index,ele){
					 var chosenItem = {
						    "TableName":"",
							"IndexCode":"",
							"description":"",
							"subitemsArray":[]
					  };
					  chosenItem.IndexCode = ele.id;
					  chosenItem.TableName = selectedTable;
					  chosenItems.push(chosenItem);
				 });	

				 var exisitngDatas = this.model.get("indexToDatasArray");
				 var exisitngDataItems = [];
	 			 for(var i=0;i<exisitngDatas.length;i++){
	 				exisitngDataItems.push(exisitngDatas[i].IndexCode);
				 }
	 			 
	 			 var chosenDatas = [];
	 			 for(var i=0;i<chosenItems.length;i++){
	 				chosenDatas.push(chosenItems[i].IndexCode);
				 }
	 			 
	 			 var preSelectedDatasList = []; 
    			 if(exisitngDatas){
        			var preSelectedDatas = exisitngDatas.filter(function(obj){
        				return obj.TableName == selectedTable;
        			});
	   	 			for(var i=0;i<preSelectedDatas.length;i++){
	   	 				preSelectedDatasList.push(preSelectedDatas[i].IndexCode);
	 				}
    			 }
    			if(preSelectedDatasList.length == 0 && chosenDatas.length == 0){
    				//no change
    				$("#noChangeText").show();
    				return;
    			}
    			if(preSelectedDatasList.length == 0 && chosenDatas.length > 0){
    				var updatedDatas = exisitngDatas.concat(chosenItems);
    				this.model.set("indexToDatasArray",updatedDatas);
    				
    				var updatedList = exisitngDataItems.concat(chosenDatas); 
    				this.updateSelectedDatasToEstimate(updatedList);
    				return;
    			}
    			if(preSelectedDatasList.length > 0 && chosenDatas.length == 0){
    				//delete all
    				var updatedDatas = exisitngDatas.filter(function(obj){
    					return preSelectedDatasList.indexOf(obj.IndexCode) == -1;
    				});
    				this.model.set("indexToDatasArray",updatedDatas);
    				
    				var updatedList = _.difference(exisitngDataItems, preSelectedDatasList);
    				this.updateSelectedDatasToEstimate(updatedList);
    				return;
    			}
    			if(preSelectedDatasList.length != 0 && chosenItems.length != 0){
    				//compare
    				var updatedList = [];
    				if(chosenItems.length <= preSelectedDatasList.length){
    					updatedList = _.difference(preSelectedDatasList, chosenDatas);
    				}
    				if(chosenItems.length > preSelectedDatasList.length){
    					updatedList = _.difference(chosenDatas, preSelectedDatasList);
    				}

    				if(updatedList.length == 0){
        				//no change
        				$("#noChangeText").show();
        				return;
    				}
    				//Remove old list 
    				updatedList = _.difference(exisitngDataItems, preSelectedDatasList);
    				//add new list.
    				updatedList = updatedList.concat(chosenDatas);
    				
    				var updatedDatas = exisitngDatas.filter(function(obj){
    					return preSelectedDatasList.indexOf(obj.IndexCode) == -1;
    				});
    				updatedDatas = updatedDatas.concat(chosenItems);
    				this.model.set("indexToDatasArray",updatedDatas);
    				
    				
    				this.updateSelectedDatasToEstimate(updatedList);
    			} 

		     },
		     updateSelectedDatasToEstimate : function(itemsToUpdate){
		    	 itemsToUpdate = itemsToUpdate.join(",");
		    	 var type = this.model.get("estType");
				 this.model.get('db').transaction(function (tx) {	 
					 tx.executeSql('UPDATE DefaultDatas SET Datas=? WHERE Type=?',[itemsToUpdate,type],function(){
						 $("#datasPopup").popup("close");
					 });
				 },function(){
					 console.log("error occured in adding items to defualts")
				 });
		     },
		     displayDetails:function(event){
		    	 var selectedRow = $(event.target).data("indexcode");
		    	 var indexToItemsArr = this.model.get("indexToItems");
		    	 if(indexToItemsArr){
			    	 var selectedDataCodeDetails = indexToItemsArr.filter(function(obj){
				    	return obj.indexCode == selectedRow; 
				     }); 
			    	 if(selectedDataCodeDetails.length == 1){
			    		 DatasUtil.beuatifyDatas(selectedDataCodeDetails[0].itemsArr)
			    		 this.model.set("dataCodeDetails",selectedDataCodeDetails[0]);
			    	 }

			    	var position = $("#tabs").position();
			    	var xPos = position.left;
			    	var yPos = position.top;
			    	$("#detailsPopup").off("popupbeforeposition");
			    	$("#detailsPopup").on("popupbeforeposition",function(){
				    	 var datCodeView = new DataCodeDetails();
				    	 datCodeView.render();
				    	 $("#detailsPopup #dataCodeDetails").html(datCodeView.el).trigger("create");
			    	});	
			    	//register for close event of data's popup
			    	$("#datasPopup").on("popupafterclose",function(){
				    	$("#datasPopup").off("popupafterclose");
			    		$("#detailsPopup").popup("open", {x:xPos,y:yPos,transition:'pop',positionTo:'#tabs'});
			    	});
			    	$("#datasPopup").popup("close");	
			    	//$("#datasPopup").popup("destroy"); -- did not work	
		    	 }   	 
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


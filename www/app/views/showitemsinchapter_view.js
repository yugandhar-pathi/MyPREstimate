
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
		    	 'click #updateEst':'updateEstimate',
		    	 'click .expandSubItems':'showSubItems',
		    	 'click .hideSubItems':'hideSubItems'
		    },	
		    showSubItems : function(event){
		    	var groupToShow = $(event.target).data("class");
		    	$("."+groupToShow).slideToggle();
		    	$(event.target).closest('td').find('.hideWrapperDiv').show();
		    	$(event.target).closest('.showWrapperDiv').hide();
		    	event.stopPropagation();
		    },
		    hideSubItems:function(event){
		    	var groupToHide = $(event.target).data("class");
		    	$("."+groupToHide).slideToggle();
		    	$(event.target).closest('td').find('.showWrapperDiv').show();
		    	$(event.target).closest('.hideWrapperDiv').hide();
		    	event.stopPropagation();
		    },
		    updateEstimate : function(event){
		    	 var selectedItems = $("#itemsInChapter input:checkbox[name=chosenItems]:checked");
		    	 var chosenItemsArray = [];  
		    	 var selectedTable = EstimateModel.model.get("selectedTable");
		    	 var currentGroup = "";
				 selectedItems.each(function(index,ele){
					  var itemGroup = $(ele).data("group");
					  if(!itemGroup){
						 //This data is not having sub items
						 var chosenItem = {
								    "TableName":"",
									"IndexCode":"",
									"description":"",
									"selectedSubItems":[]
						 };
						 chosenItem.TableName = selectedTable;
						 chosenItem.IndexCode = ele.id;
						 chosenItemsArray.push(chosenItem);
					  }else{
						  //This data item is having sub items.
						  if(currentGroup != itemGroup){
							 var chosenItem = {
								    "TableName":"",
									"IndexCode":"",
									"description":"",
									"selectedSubItems":[]
							 };
							 currentGroup = itemGroup;
							 chosenItem.IndexCode = itemGroup;
							 chosenItem.selectedSubItems.push(ele.id);
							 chosenItemsArray.push(chosenItem);
						  }else{
							  //More than one sub items is selected from same data.
							  chosenItemsArray[chosenItemsArray.length - 1].selectedSubItems.push(ele.id);
						  }	  
					  }
					  
				 });	
				 
				 function getIndexDatasArray(datasArray){
					 var indexCodeArr = [];
		 			 for(var i=0;i<datasArray.length;i++){
		 				 var subItemsArr = datasArray[i].selectedSubItems;
		 				 if(subItemsArr.length){
		 					var stringToSave = datasArray[i].IndexCode+"*"+subItemsArr.join("*");
		 					indexCodeArr.push(stringToSave);
		 				 }else{
		 					indexCodeArr.push(datasArray[i].IndexCode);
		 				 }
					 }
		 			 return indexCodeArr;
				 }
				 var exisitngDatas = this.model.get("indexToDatasArray");
				 var exisitngDataItems = getIndexDatasArray(exisitngDatas);
	 			 var chosenDatas = getIndexDatasArray(chosenItemsArray);
	 			 var preSelectedDatasList = []; 
    			 if(exisitngDatas){
        			var preSelectedDatas = exisitngDatas.filter(function(obj){
        				return obj.TableName == selectedTable;
        			});
        			preSelectedDatasList = getIndexDatasArray(preSelectedDatas);
    			 }
    			if(preSelectedDatasList.length == 0 && chosenDatas.length == 0){
    				//no change
    				$("#noChangeText").show();
    				return;
    			}
    			if(preSelectedDatasList.length == 0 && chosenDatas.length > 0){
    				var updatedDatas = exisitngDatas.concat(chosenItemsArray);
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
    			if(preSelectedDatasList.length != 0 && chosenItemsArray.length != 0){
    				//compare
    				var updatedList = [];
    				if(chosenItemsArray.length <= preSelectedDatasList.length){
    					updatedList = _.difference(preSelectedDatasList, chosenDatas);
    				}
    				if(chosenItemsArray.length > preSelectedDatasList.length){
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
    				updatedDatas = updatedDatas.concat(chosenItemsArray);
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


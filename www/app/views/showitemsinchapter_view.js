
define(['views/layout/base_itemview','models/estimateitems_util','views/datacodedetails_view','views/utilities/datas_util'],function(BaseItemView,EstimateModel,DataCodeDetails,DatasUtil){

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
				  /* var chosenItem = {
						    "TableName":"",
							"IndexCode":"",
							"description":"",
							"subitemsArray":[]
				   };
				   chosenItem.IndexCode = ele.id;
				   chosenItem.TableName = selectedTable;*/
				   chosenItems.push(ele.id);
				 });	

				 var exisitngDatas = this.model.get("indexToDatasArray");
				 var exisitngDataItems = [];
	 			 for(var i=0;i<exisitngDatas.length;i++){
	 				exisitngDataItems.push(exisitngDatas[i].IndexCode);
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
	    			if(preSelectedDatasList.length == 0 && chosenItems.length == 0){
	    				//error
	    				return;
	    			}
	    			if(preSelectedDatasList.length == 0 && chosenItems.length > 0){
	    				var updatedList = exisitngDataItems.concat(chosenItems); 
	    				this.updateSelectedDatasToEstimate(datasArr);
	    			}
	    			if(preSelectedDatasList.length > 0 && chosenItems.length == 0){
	    				//delete all
	    				exisitngDatas = _.difference(exisitngDataItems, preSelectedDatasList);
	    				this.updateSelectedDatasToEstimate(exisitngDatas);
	    			}
	    			if(preSelectedDatasList.length != 0 && chosenItems.length != 0){
	    				//compare
	    				
	    			} 

		     },
		     deleteSelectedDatasFromEstimate:function(itemsToDelete){
	    		 var indexList = "\("
				 for(var j=0;j<itemsToDelete.length;j++){
					 indexList += '"'+itemsToDelete[j].IndexCode+'"';
					 if(j<itemsToDelete.length-1){
						 indexList += "," 
					 }
				 }	
	    		 indexList += "\)"
		    	 this.model.get('db').transaction(function (tx) {
					 tx.executeSql('DELETE FROM Defaults where EstimationType="CCROAD" AND IndexCode in '+indexList, [], function (tx, results) {
						 $("#datasPopup").popup("close");
					 });
				})
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
			    	//$("#datasPopup").popup("destroy");	    	
		    	 }

		    	 /*
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
		    	$( "#itemDetails" ).popup( "open",options);	*/	    	 
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


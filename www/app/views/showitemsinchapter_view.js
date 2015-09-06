
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
				 /*var selectedList = this.model.get("selectedDatasToAdd");
				 if(typeof selectedList != 'string' && selectedList.length > 0 ){
					 chosenItems = chosenItems.concat(selectedList); 
				 }
				 this.model.set("selectedDatasToAdd",chosenItems);
				 console.log(chosenItems);*/
				 var exisitngDatas = this.model.get("indexToDatasArray");
    			 if(exisitngDatas){
        			var preSelectedDatasList = exisitngDatas.filter(function(obj){
        				return obj.TableName == selectedTable;
        			});
        			
        			if(preSelectedDatasList.length == 0 && chosenItems.length == 0){
        				//error
        				return;
        			}
        			if(preSelectedDatasList.length == 0 && chosenItems.length > 0){
        				this.updateSelectedDatasToEstimate(chosenItems)
        			}
        			if(preSelectedDatasList.length > 0 && chosenItems.length == 0){
        				//delete all
        				this.deleteSelectedDatasFromEstimate(preSelectedDatasList);
        			}
        			if(preSelectedDatasList.length != 0 && chosenItems.length != 0){
        				//compare
        			}
        			
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
		     updateSelectedDatasToEstimate : function(itemsToAdd){
				 var itemsInSql = "";	
				 var self = this;
				 for(var i=0;i<itemsToAdd.length;i++){
					 if(i==0){
						 itemsInSql += "INSERT INTO '\Defaults\' Select \'CCROAD\' AS \'EstimationType\',"+"\'"+ itemsToAdd[i].TableName +"' AS \'TableName\',"+"\'"+itemsToAdd[i].IndexCode+"' AS \'IndexCode\'"; 
					 }else{
						 itemsInSql +=  "UNION SELECT \'CCROAD\',"+"\'"+itemsToAdd[i].TableName+"\'"+","+"\'"+itemsToAdd[i].IndexCode+"\'";	 
					 }
				 }	 
				 console.log(itemsInSql);
				 this.model.get('db').transaction(function (tx) {	 
					 tx.executeSql(itemsInSql,function(){},function(){
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


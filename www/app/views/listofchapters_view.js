
define(['views/layout/base_itemview','models/estimateitems_util','views/showitemsinchapter_view'],function(BaseItemView,EstimateModel,chapterView){
		var ListOfChapters_View = BaseItemView.extend({
			
			template : Handlebars.templates.selectestimate_listofchapters,
			
			model:EstimateModel.model,
			
			initialize : function(){
				this.model.on('itemsReadFromChapter',this.fillPopupWithDatas,this);
				//this.model.set("selectedDatasToAdd",this.model.get("indexToDatasArray"));
			},
			 
		    events:{
		    	 'tap .listOfChapters':'selectItemsFromChapter',
		    	 //'tap #proceedToEst':'proceedToEstimate',
		    	 'tap #dataBooks':'changeBackground'
		    },   
		     
		    selectItemsFromChapter : function(event){
		    	EstimateModel.model.set('selectedTable',$(event.target).data('table'));
		    	EstimateModel.model.set('chapterTitle',$(event.target).text().split(".")[1]);
		    	EstimateModel.model.prepareTableToItemsMap();
		    },
		    
		    fillPopupWithDatas : function(){
		    	var self = this;
		    	var position = $("#tabs").position();
		    	var xPos = position.left;
		    	var yPos = position.top;

		    	$("#datasPopup").on("popupbeforeposition",function(){
			    	$("#datasPopup").off("popupbeforeposition");
	    			var dataView = new chapterView();
	    			dataView.render();
	    			$("#datasPopup #datasInChapter").html(dataView.el).trigger("create");
		    	});	
		    	
		    	var thisModel = this.model;
		    	$("#datasPopup").off("popupafteropen");
				$("#datasPopup").on("popupafteropen",function(){
			    	var selectedTable = thisModel.get("selectedTable");
	    			var exisitngDatas = thisModel.get("indexToDatasArray");
	    			if(exisitngDatas){
	        			var selectedDatasList = exisitngDatas.filter(function(obj){
	        				return obj.TableName == selectedTable;
	        			});
	        			if(selectedDatasList.length){
	        				for(var data in selectedDatasList){
	        					$("#"+selectedDatasList[data].IndexCode).prop("checked", true);
	        				}
	        			}	   				
	    			}
				});
		    	
		    	$("#datasPopup").popup("open", {x:xPos,y:yPos,transition:'pop',positionTo:'#tabs'});
		    },
		    
		    proceedToEstimate : function(){
		    	this.model.getDefaultItemsForCCRoad();
		    },
		    
		    changeBackground : function(event){
		    	var selectedTab = $(event.target).closest('li').attr('id');
		    	if(selectedTab == "RAndB"){
		    		$(".ui-page").css('background-image','url("css/images/app/RoadsAndBridges.jpg")');	
		    	}
		    	if(selectedTab == "Build"){
		    		$(".ui-page").css('background-image','url("css/images/app/buildings.jpg")');
		    	}
		    	if(selectedTab == "electricItems"){
		    		$(".ui-page").css('background-image','url("css/images/app/eleitems.jpg")');
		    	}
		    },
		    
		    onShow : function(){
		    	var self = this;
		    	$("#listofchapters").addClass('background-datas');
		    	if(!this.model.get("datasAsService")){
		    		//hide the back key
		    		$("#listofchapters #pageBackKey").hide();
			    	$("#listofchapters #datas").addClass('selected');
		    	}else{
		    		$("#listofchapters #newEstimate").addClass('selected');
		    		$("#listofchapters #pageBackKey input").off('tap')
		    		$("#listofchapters #pageBackKey input").on('tap',function(){
		    			self.model.getDefaultDatas();
		    		});
		    	}
		    }

		});
		return ListOfChapters_View;
});



define(['views/layout/base_itemview','models/estimateitems_util'],function(BaseItemView,EstimateModel){
		var ListOfChapters_View = BaseItemView.extend({
			
			template : Handlebars.templates.selectestimate_listofchapters,
			
			model:EstimateModel.model,
			
			initialize : function(){
				this.model.on('itemsReadFromChapter',this.fillPopupWithDatas,this);
			},
			 
		    events:{
		    	 'tap .listOfChapters':'selectItemsFromChapter',
		    	 'tap #addToEstimate':'addSelectedDatasToEstimate',
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
		    	$("#datasPopup").off("popupbeforeposition");
		    	$("#datasPopup").on("popupbeforeposition",function(){
		    		//$("#datasPopup").popup( "option", "positionTo", "window" );
		    		require(['views/showitemsinchapter_view'], function(contentView) {
		    			var dataView = new contentView();
		    			dataView.render();
		    			$("#datasPopup #datasInChapter").html(dataView.el).trigger("create");
		    		});
		    	});				
		    	$("#datasPopup").popup("open", {x:xPos,y:yPos,transition:'pop',positionTo:'#tabs'});
		    },
		    
		    addSelectedDatasToEstimate : function(){
		    	this.model.addDefaultItemsForEstimate();
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
		    	$("#listofchapters").addClass('background-datas');
		    	$("#listofchapters #datas").addClass('selected');
		    	if(!this.model.get("datasAsService")){
		    		//hide the back key
		    		$("#listofchapters #pageBackKey").hide();
		    	}
		    }

		});
		return ListOfChapters_View;
});


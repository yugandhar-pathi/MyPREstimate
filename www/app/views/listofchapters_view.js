
define(['views/layout/base_itemview','models/estimateitems_util','views/showitemsinchapter_view'],function(BaseItemView,EstimateModel,chapterView){
		var ListOfChapters_View = BaseItemView.extend({
			
			template : Handlebars.templates.selectestimate_listofchapters,
			
			model:EstimateModel.model,
			
			initialize : function(){
				this.model.on('itemsReadFromChapter',this.fillPopupWithDatas,this);
			},
			 
		    events:{
		    	 'tap .listOfChapters':'selectItemsFromChapter',
		    	 //'tap #proceedToEst':'proceedToEstimate',
		    	 'tap #dataBooks':'changeBackground',
		    	 'tap #searchButton':'searchDatas'
		    },   
		     
		    selectItemsFromChapter : function(event){  	
		    	$.mobile.loading( "show", {
		    		text: "Loading",
		    		textVisible: true,
		    		theme:'d'
	    		});
		    	EstimateModel.model.set('selectedTable',$(event.target).data('table'));
		    	EstimateModel.model.set('chapterTitle',$(event.target).text().split(".")[1]);
		    	EstimateModel.model.prepareTableToItemsMap();
		    },
		    
		    searchDatas : function(){
		    	var searchText = $("#searchText").val();
		    	if(searchText){
		    		//start searching
			    	$.mobile.loading( "show", {
			    		text: "Searching...",
			    		textVisible: true,
			    		theme:'d'
		    		});
			    	var tableList = [];
		    		var RNBTableList = ['LUCANDC','SiteClearence','EECD','GranSubBases','BasesAndSurface','CCPAVEMENT','CauAndSubMerBridges','HillRoads','PipeCulverts','TrafficSigns',
		    		                 'Foundation','SubStructure','SuperStructure','ProtectionWorks','MaintOfRoads','GEOSYNTHETICS','Horticulture','Repair','SiteClearence'];
		    		var BldTableList = ['Mortar','Earthwork','ConcreteDampProof','BarInFoundation','Brickwork','StoneMasonary','Pointing','Plastering','Flooring','RoofingAndCeiling',
		    		                    'WhiteWashing','PaintingAndVarnishing','WoodWork','DismantlingAndDemolition','MISCELLANEOUS','ANTETERMITETREATMENT','Centring'];
		    		var ElecTableList = ['CONDUITLAYING','WIRING','RUNOFMAINS','SWITCHGEAR','EARTHING','SERVICEMAINS','STREETLIGHT','INTERNALLUMINAIRE','ACANDREFRIGERATION',
		    		                     'WATERHEATERS','WATERPUMPS','BUSBARS','SWAGEDPOLES','CONTROLPANEL','CABLES','TEMPORARY','GENERATORS','REPAIRSTOMOTORS'];
		    		var searchBook = $("#selectDataBook option:selected").val();
		    		if(searchBook == "roadsnbridges"){
		    			tableList = RNBTableList;
		    		}else if(searchBook == "buildings"){
		    			tableList = BldTableList;
		    		}else if(searchBook == "electrical"){
		    			tableList = ElecTableList;
		    		}else if(searchBook == "all"){
		    			tableList = tableList.concat(RNBTableList).concat(BldTableList).concat(ElecTableList);
		    		}
		    		console.log(searchBook);
		    		var resultsFound = 0;
		    		var searchResult = [];
		    		var tableIndex=0;
		    		searchText = searchText.toUpperCase();
		    		var self = this;
		    		var searchTable = function(tableName){
						db.transaction(function (tx) {
							  //Read default items
							  tx.executeSql('SELECT * FROM '+tableName+' WHERE IndexCode is not null', [], function (tx,results) {
								  for(var i=0;i<results.rows.length;i++){
									   var item = JSON.parse(JSON.stringify(results.rows.item(i)));
									   var description = item.Description;
									   if(description.toUpperCase().indexOf(searchText) != -1){ 
								    		var matchFound = {
												    "TableName":tableName,
													"IndexCode":item.IndexCode,
													"Description":description.toUpperCase().replace(searchText,"<span style='background-color:yellow;color:black'>"+searchText+"</span>"),
													"subitemsArray":[]
									    	};
								    		resultsFound++;
								    		searchResult.push(matchFound);
									   }
								  }
								  tableIndex++;					   
								  if(tableIndex<tableList.length){
									  searchTable(tableList[tableIndex]);
								  }else{
									  $.mobile.loading( "hide");
								      self.model.set("datasArray",searchResult);
								      self.model.set("isSearchResult",true);
						    		  var dataView = new chapterView();
						    		  dataView.render();
						    		  $("#searchResult").html(dataView.el).trigger('create'); 
						    		  $("#tableContainer").removeClass("itemschapter-padding")
						
								  }
							  });
						});			  
		    		}
		    		searchTable(tableList[tableIndex]);

		    	}
		    },
		    
		    fillPopupWithDatas : function(){
		    	var self = this;
		    	var position = $("#tabs").position();
		    	var xPos = position.left;
		    	var yPos = position.top;

		    	$("#datasPopup").on("popupbeforeposition",function(){
			    	$("#datasPopup").off("popupbeforeposition");
			    	self.model.set("datasArray",self.model.get("chapterToItemsMap").indexDatasArr);
			    	self.model.set("isSearchResult",false);
	    			var dataView = new chapterView();
	    			dataView.render();
	    			$("#datasPopup #datasInChapter").html(dataView.el).trigger("create");
		    	});	
		    	
		    	var thisModel = this.model;
		    	$("#datasPopup").off("popupafteropen");
				$("#datasPopup").on("popupafteropen",function(){
			    	$.mobile.loading( "hide");
			    	//Code to show list of pre-selected items in table.
			    	var selectedTable = thisModel.get("selectedTable");
	    			var exisitngDatas = thisModel.get("indexToDatasArray");
	    			if(exisitngDatas){
	        			var selectedDatasList = exisitngDatas.filter(function(obj){
	        				return obj.TableName == selectedTable;
	        			});
	        			if(selectedDatasList.length){
	        				for(var data in selectedDatasList){
	        					if(selectedDatasList[data].selectedSubItems.length){
	        						var subDatasArr = selectedDatasList[data].selectedSubItems;
	        						for(var subItem in subDatasArr){
	        							var subData = subDatasArr[subItem].replace(/\./gi, "\\.");
	        							$("."+selectedDatasList[data].IndexCode+" "+"#"+subData).prop("checked",true);
	        						}
	        					}else{
	        						$("#"+selectedDatasList[data].IndexCode).prop("checked", true);
	        					}
	        				}
	        			}	   				
	    			}
				});
				
		    	$("#datasPopup").popup("open", {x:xPos,y:yPos,transition:'pop',positionTo:'#tabs'});
		    },
		    
		    proceedToEstimate : function(){
		    	this.model.getDefaultDatas();
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
		    	if(selectedTab == "search"){
		    		$(".ui-page").css('background-image','none');
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
		    		$("#listofchapters #pageBackKey input").off('click')
		    		$("#listofchapters #pageBackKey input").on('click',function(){
		    			self.model.getDefaultDatas();
		    		});
		    	}
		    }

		});
		return ListOfChapters_View;
});


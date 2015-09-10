
define(['models/headerfootermodel'], function(HeaderFooterModel) {
	    var Router  =  Backbone.Router.extend({	    	
	    		initialize:function(){

	    		},
	    		
				routes : {
					'' : 'defaultRoute',
					"selectestimate":"selectestimate",
					"choosesubitem":"choosesubitemview",
					"leadstatement" : 'displayLeadStmt',
					"pickItemsForEstimate":"pickItemsForEstimate",
					"chooseItemsFromChapter":"chooseItemsFromChapter",
					"listOfChapters":"displayListOfChapters",
					"datasInChpater":"displayItemsInChapter",
					"datasForSelectedItems":"displayDataSheet",
					'abstractEstimate':'displayAbstractEstimate',
					'history':'displayHistoryview'
					
				},
				
				defaultRoute : function() {
					this.changePage('views/login/login_view',new HeaderFooterModel({
						isMenuPanelRequired:false
					}));
				},
				
				selectestimate : function(){
					this.changePage('views/newestimate_view',new HeaderFooterModel({
						isFooterRequired : false,
						isHeaderRequired : true,
						isBackButtonRequired : false,
						headerTitle:"New Estimate",
						isMenuPanelRequired:true
					}));
				},
				
				displayDataSheet : function(){
					this.changePage('views/datasheet_view',new HeaderFooterModel({
						isFooterRequired : false,
						isHeaderRequired : true,
						isBackButtonRequired : true,
						headerTitle:"Review Your Datas",
						backButtonHREF:"leadstatement"
					}));				
				},
						
				displayListOfChapters : function(){
					this.changePage('views/listofchapters_view',new HeaderFooterModel({
						isFooterRequired : false,
						isHeaderRequired : true,
						isBackButtonRequired : true,
						headerTitle:"Datas",
						backButtonHREF:""
					}));
				},
				
				displayItemsInChapter : function(){
					this.changePage('views/showitemsinchapter_view',new HeaderFooterModel({
						isFooterRequired : false,
						isHeaderRequired : true,
						isBackButtonRequired : true,
						headerTitle:"Select Datas",
						backButtonHREF:"listOfChapters"
					}));
				},
				pickItemsForEstimate : function(){
					this.changePage('views/chooseitem_view',new HeaderFooterModel({
						isFooterRequired : false,
						isHeaderRequired : true,
						isBackButtonRequired : true,
						headerTitle:"Default Datas",
						backButtonHREF : 'selectestimate'
					}));
				},
				
				displayLeadStmt : function(){
					this.changePage('views/leadstatement_view',new HeaderFooterModel({
						isFooterRequired : false,
						isHeaderRequired : true,
						isBackButtonRequired : true,
						headerTitle:"Lead Statement",
						backButtonHREF : 'pickItemsForEstimate'
					}));
				},
				displayAbstractEstimate : function(){
					this.changePage('views/abstractestimate_view',new HeaderFooterModel({
						isFooterRequired : false,
						isHeaderRequired : true,
						isBackButtonRequired : true,
						headerTitle:"DETAILED CUM ABSTRACT",
						backButtonHREF : 'leadstatement'
					}));				
				},	
				displayHistoryview : function(){
					this.changePage('views/history_view',new HeaderFooterModel({
						isFooterRequired : false,
						isHeaderRequired : true,
						isBackButtonRequired : false,
						headerTitle:"Estimate History",
						backButtonHREF : 'leadstatement'
					}));					
				},
				choosesubitemview : function(){
					this.changePage('views/choosesubitem_view');						
				},
				changePage:function(contentViewPath,headerfootermodel){
					 require([contentViewPath,'views/layout/page_view','views/layout/header_view','views/layout/menupanel_view'], function(contentView,pageView,headerView,MenuPanel) {
						 	var splitPath = contentViewPath.split('/');
						 	var pageId = "";
						 	if(splitPath.length === 2){
						 		pageId = contentViewPath.split('/')[1].split('_')[0];
						 	}else{
						 		pageId = contentViewPath.split('/')[2].split('_')[0];
						 	}
							
							var transition = $.mobile.defaultPageTransition;	
							
							if(!headerfootermodel.get("isHeaderRequired")){
								headerView = null;
							}
							if(!headerfootermodel.get("isMenuPanelRequired")){
								MenuPanel = null;
							}
							
							pageView.create({
											header:headerView,
											model:headerfootermodel,
											content:contentView,
											menuPanel : MenuPanel,
											pageId:pageId
											
											});
						   

				    	    $('div[data-role="page"]').bind('pagehide', function (event, ui) {
						       /* if(pageId == "showitemsinchapter"){
							         myScroll = new IScroll('#wrapper',{ hScrollbar : false,vScrollbar : true });
						        }*/
				    	    	if(pageId == "datasheet"){
						           /* $("#test").floatThead({
						                scrollContainer: function ($table) {
						                    return $table.closest('#tableContainer');
						                }/*,
						                scrollingTop:function($table){
						                	console.log($table.offset().top);
						                	return $table.offset().top;
						                } //,
						                //useAbsolutePositioning: false
						            });*/
				    	    	}

				    	        $(event.currentTarget).remove();
				    	    });
				    	    
				    	    $.mobile.changePage('#'+pageId, {changeHash:false, transition: 'none'}); 
				     });
				}

			});
	    return Router;

});

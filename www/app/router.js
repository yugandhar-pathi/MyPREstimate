
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
					'abstractEstimate':'displayAbstractEstimate'
				},
				
				defaultRoute : function() {
					this.changePage('views/login/login_view',new HeaderFooterModel({
					}));
				},
				
				selectestimate : function(){
					this.changePage('views/selectestimate_view',new HeaderFooterModel({
						isFooterRequired : false,
						isHeaderRequired : true,
						isBackButtonRequired : false,
						headerTitle:"Choose Estimate"
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
						headerTitle:"Select Chapter",
						backButtonHREF:"pickItemsForEstimate"
					}));
				},
				
				displayItemsInChapter : function(){
					this.changePage('views/showitemsinchapter_view',new HeaderFooterModel({
						isFooterRequired : false,
						isHeaderRequired : true,
						isBackButtonRequired : true,
						headerTitle:"Select Data Items",
						backButtonHREF:"listOfChapters"
					}));
				},
				
				pickItemsForEstimate : function(){
					this.changePage('views/chooseitem_view',new HeaderFooterModel({
						isFooterRequired : false,
						isHeaderRequired : true,
						isBackButtonRequired : false,
						headerTitle:"Select Item",
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
				choosesubitemview : function(){
					this.changePage('views/choosesubitem_view');						
				},
				changePage:function(contentViewPath,headerfootermodel){
					 require([contentViewPath,'views/layout/page_view','views/layout/header_view'], function(contentView,pageView,headerView) {
						 	var splitPath = contentViewPath.split('/');
						 	var pageId = "";
						 	if(splitPath.length === 2){
						 		pageId = contentViewPath.split('/')[1].split('_')[0];
						 	}else{
						 		pageId = contentViewPath.split('/')[2].split('_')[0];
						 	}
							
							var transition = $.mobile.defaultPageTransition;	
							
							//Page
							var page = new pageView({model:headerfootermodel});
						    $(page.el).attr('data-role', 'page');
						    $(page.el).attr('id', pageId);
						    $(page.el).attr('data-theme', 'd');
					        page.render();
					        $('body').append($(page.el));
					        
					        //header
					        if(headerfootermodel.get("isHeaderRequired")){
						        var headerView = new headerView({model:headerfootermodel});
						        headerView.render();
						        $("#"+pageId+" div[data-role='header']").append(headerView.$el.html());				        	
					        }
				        
					        //content
					        var contentView = new contentView();
					        contentView.render();
					        $("#"+pageId+" div[role='main']").append(contentView.$el);
	
				    	    $('div[data-role="page"]').bind('pagehide', function (event, ui) {
				    	        $(event.currentTarget).remove();
				    	    });
				    	    
					        $.mobile.changePage($(page.el), {changeHash:false, transition: 'slideup'}); 
				     });
				}

			});
	    return Router;

});

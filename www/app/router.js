
define([], function() {
	    var Router  =  Backbone.Router.extend({	    	
	    		initialize:function(){

	    		},
	    		
				routes : {
					'' : 'defaultRoute',
					"leadstatement" : 'displayLeadStmt',
					"pickItemsForEstimate":"pickItemsForEstimate",
					"chooseItemsFromChapter":"chooseItemsFromChapter",
					"listOfChapters":"displayListOfChapters",
					"datasInChpater":"displayItemsInChapter",
					"datasForSelectedItems":"displayDataSheet",
					'abstractEstimate':'displayAbstractEstimate'
				},
				
				defaultRoute : function() {
					this.changePage('views/selectestimate_view');
				},
				
				displayDataSheet : function(){
					this.changePage('views/datasheet_view');				
				},
						
				displayListOfChapters : function(){
					this.changePage('views/listofchapters_view');
				},
				
				displayItemsInChapter : function(){
					this.changePage('views/showitemsinchapter_view');
				},
				
				pickItemsForEstimate : function(){
					this.changePage('views/chooseitem_view');
				},
				
				displayLeadStmt : function(){
					this.changePage('views/leadstatement_view');
				},
				displayAbstractEstimate : function(){
					this.changePage('views/abstractestimate_view');				
				},								
				changePage:function(view_path){
					 require([view_path], function(view) {
							var id= view_path.split('/')[1].split('_')[0];
							var transition = $.mobile.defaultPageTransition;							
							var page = new view();
							
						    $(page.el).attr('data-role', 'page');
						    $(page.el).attr('id', id);
						    //$(page.el).attr('data-theme', 'f');
					        page.render();
					        
							$('body').append($(page.el));
	
				    	    $('div[data-role="page"]').bind('pagehide', function (event, ui) {
				    	        $(event.currentTarget).remove();
				    	    });
				    	    
					        $.mobile.changePage($(page.el), {changeHash:false, transition: 'slideup'}); 
				     });
				}

			});
	    return Router;

});

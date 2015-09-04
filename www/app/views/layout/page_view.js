
define(['models/estimateitems_util'],function(EstimateModel){
		var PageLayout = {};
		
		var _ReplaceWithRegion = Backbone.Marionette.Region.extend({
			open : function(view) {
				// Need this to keep Panel/Header/Content/Footer at the
				// same level for panel to work properly
				this.$el.replaceWith(view.el);
			}

		});
		
		PageLayout.create = function(opts){
			var _opts = _.extend({
				header: null,
				content:null,
				menuPanel:null,
				pageId:""
			},opts);
			return new( Backbone.Marionette.Layout.extend({

				template : Handlebars.templates.layout_page,
				
				attributes : function() {
					return {
						'data-theme' : 'd',
						'data-role' : 'page',
						'id':_opts.pageId
					};
				},
				
				initialize : function(){
					$('body').append(this.$el);
					this.render();
				},
				regions: {
				    headerRegion: {
						selector : "[region_id=header]",
						regionType : _ReplaceWithRegion
					},
					contentRegion:{
						selector : "[region_id=content]",
						regionType : _ReplaceWithRegion
					},
					menuPanel:{
						selector : "[region_id=menuPanel]",
						regionType : _ReplaceWithRegion	
					}
				},
				
				onRender : function() {
					console.log("reach layout render complete");

					
					if(_opts.menuPanel){
						var menuPanel = new _opts.menuPanel();
						this.menuPanel.show(menuPanel);
					}
					
					if(_opts.header){
						var headerView = new _opts.header({model:_opts.model});
						this.headerRegion.show(headerView);
					}
					
					var contentView = new _opts.content();	
					this.contentRegion.show(contentView);
					

					
				}
			}))(_opts);
		} 
		

		return PageLayout;
});


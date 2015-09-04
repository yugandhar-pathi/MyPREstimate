
define(['views/layout/base_itemview','models/estimateitems_util'],function(BaseItemView,EstimateModel){
		var ChooseItem_View = BaseItemView.extend({
			
			model:EstimateModel.model,	
			
			template : Handlebars.templates.selectestimate_chooseitem,
			
			events:{
				'tap #proceedToLeadStmt':'proceedToLeadStmt',
				'tap .dataCode':'displayDeleteOption',
				//'tap #deleteDataIndex':'deleteIndexFromDefaults'
				'tap #addDatas':'launchDatas'
			},
			
			initialize : function() {
				this.model.on('reRenderDefaultsView',this.reRender, this);
			},
			launchDatas : function(){
				this.model.set("datasAsService",true);
				appRouter.navigate("#listOfChapters",{trigger:true});
			},
			proceedToLeadStmt : function(){		
				var selectedItems = $("#estimateItems input:checkbox[name=itemsSelected]:checked");
				var proceedToLead = true;
				var indexToTableMap = [];
				selectedItems.each(function(index,ele){
							var indexToTableItem = {
									"indexCode":"",
									"tableName":"",
									"selectedSubItems":[]
								};
							indexToTableItem.indexCode = ele.id;
							var subItems =  $("#estimateItems input:checkbox[name="+ele.id+"]");
							if(subItems.length){
								var selectedSubitems = $("#estimateItems input:checkbox[name="+ele.id+"]:checked");
								if(!selectedSubitems.length){
									proceedToLead = false;
									subItems.each(function(subItemIndex,ele){
										$(this).closest("td").addClass("mandatoryIndicator");
									});
									$('.'+ele.id).on('tap',function(event){
										var subItems = $('.'+ele.id);
										$(subItems).each(function(subItemIndex,ele){
											$(this).closest("td").removeClass("mandatoryIndicator");
										});
									})
								}else{
									selectedSubitems.each(function(subItemIndex,ele){
										indexToTableItem.selectedSubItems.push($(ele).attr('id')) ;
									});	
									console.log(JSON.stringify(indexToTableItem.selectedSubItems));
								}
							}
							indexToTableItem.tableName = $(this).data("table");
							indexToTableMap.push(indexToTableItem);					
						});	
				EstimateModel.model.set("selectedItemsForEstimate",indexToTableMap);
				if(proceedToLead){
					EstimateModel.model.getDatasForEstimate();
					//appRouter.navigate("#leadstatement",{trigger:true});
				}
			},	
			displayDeleteOption : function(event){
				var self = this;
	    	 	$("#deleteData").popup( "open", { x: event.pageX, y: event.pageY } );
	    	 	setTimeout(function(){
		    	 	$("#deleteDataIndex").data('rowid',$(event.target).text());
		    	 	$("#deleteDataIndex").on('tap',self.deleteIndexFromDefaults)
	    	 	},100);
	    	 	event.preventDefault();
			},
			deleteIndexFromDefaults:function(event){
				$("#deleteData").popup("close");
				console.log($(event.target).data('rowid'));
				var dataToDelete = $(event.target).data('rowid');
				EstimateModel.model.deleteDefaultItem(dataToDelete);
			},
			reRender:function(){
				this.$el.html(this.template(EstimateModel.model.attributes)).trigger("create");
				return this;
			}
		});
		return ChooseItem_View
});


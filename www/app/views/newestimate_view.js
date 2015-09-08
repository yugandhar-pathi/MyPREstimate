
define(['views/layout/base_itemview','models/estimateitems_util'],function(BaseItemView,EstimateModel){

		var EstimateItem_View = BaseItemView.extend({
		    
			 template : Handlebars.templates.selectestimate_newestimate,
			 
			 model:EstimateModel.model,
			
			 events:{
				 'tap #displayDefaults':'displayDefaults',
				 'tap #selectCategory':'dispayCategoryPopUp',
				 'tap #selectType':'displayTypePopUp'
			 },
			 
			 categoryList:[],
			 
			 typeList : [],
			 
			 displayDefaults : function(event){
				 this.model.set("estCategory",$("#selCategory").text());
				 this.model.set("estType",$("#selType").text());
				 this.model.set("nameofthework",$("#nameOfwork").val());
				 this.model.getDefaultDatas();
			 },
			 fillPopUp: function(list){
				$("#listOfOptions").empty();
				for(var i = 0;i<list.length;i++){
					$("#listOfOptions").append('<li>'+list[i]+'</li>');
				}
				$("#listOfOptions").listview('refresh');
				$("#listOfOptions").off('tap');
				$("#listOfOptions").on('tap',function(event){
					var selectedCategory = $(event.target).closest('li').text();
					$("#selCategory").text(selectedCategory);
					if($("#1").is(":visible")){
						$("#selType").text("");
						$("#selectType").val("Select");
						$("#selectType").button("refresh");
					}else{
						$("#1").slideDown('1000');
					}
					$("#0 .ui-block-b input").val("Change");
					$("#0 .ui-block-b input").button('refresh');
					$("#selectPopup").popup("close");
				});
			 },
			 fillTypePopUp: function(list){
				$("#listOfOptions").empty();
				for(var i = 0;i<list.length;i++){
					$("#listOfOptions").append('<li>'+list[i]+'</li>');
				}
				$("#listOfOptions").listview('refresh');
				$("#listOfOptions").off('tap');
				$("#listOfOptions").on('tap',function(event){
					var selectedCategory = $(event.target).closest('li').text();
					$("#selType").text(selectedCategory);
					$("#2").slideDown('1000');
					$("#1 .ui-block-b input").val("Change");
					$("#1 .ui-block-b input").button('refresh');
					$("#selectPopup").popup("close");
				});
			 },
			 dispayCategoryPopUp : function(event){
				var self = this;
				$("#selectPopup").off( "popupbeforeposition");
				 if(this.categoryList.length == 0){
					this.model.get("db").transaction(function (tx) {
						tx.executeSql('SELECT DISTINCT Category From DefaultDatas', [], function (tx, results) {
							for(var i = 0;i<results.rows.length;i++){
								self.categoryList.push(results.rows[i].Category);
							}	
							$("#selectPopup").on( "popupbeforeposition", self.fillPopUp(self.categoryList));
							$("#selectPopup").popup( "open", { x: event.pageX, y: event.pageY } );
						});
					})				 
				 }else{
					$("#selectPopup").on( "popupbeforeposition", self.fillPopUp(self.categoryList));
					$("#selectPopup").popup( "open", { x: event.pageX, y: event.pageY } );
				 }
			 },
			 displayTypePopUp : function(event){
				var self = this;
				var typeList = [];
				this.model.get("db").transaction(function (tx) {
					tx.executeSql('SELECT DISTINCT Type From DefaultDatas where Category='+'"'+$("#selCategory").text()+'"', [], function (tx, results) {
						for(var i = 0;i<results.rows.length;i++){
							typeList.push(results.rows[i].Type);
						}	
						$("#selectPopup").on( "popupbeforeposition", self.fillTypePopUp(typeList));
						$("#selectPopup").popup( "open", { x: event.pageX, y: event.pageY } );
					});
				})				 
			 },
			 resetSelection : function(resetFrom){
				 for(var div=resetFrom;div<3;div++){
					 $("#"+div+" .ui-block-a h2 span").text("");
					 $("#"+div+" .ui-block-b input[type='button']").val("Select");
					 $("#"+div).hide();
				 }
				 
			 },
			 onShow : function(){
				 this.resetSelection(1);
				 $("#newestimate #newEstimate").addClass('selected');
			 }

		});
		return EstimateItem_View

});


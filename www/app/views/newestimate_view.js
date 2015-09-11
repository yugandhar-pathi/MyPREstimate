
define(['views/layout/base_itemview','models/estimateitems_util','views/newestimateoptions_view'],function(BaseItemView,EstimateModel,EstOptionsPopUp){

		var EstimateItem_View = BaseItemView.extend({
		    
			 template : Handlebars.templates.selectestimate_newestimate,
			 
			 model:EstimateModel.model,
			
			 events:{
				 'tap #displayDefaults':'displayDefaults',
				 'tap #selectCategory':'dispayCategoryPopUp',
				 'tap #selectType':'displayTypePopUp'
			 },
			 
			 
			 isNewCategory : false,
			 
			 displayDefaults : function(event){
				 var selCategory = $("#selCategory").text();
				 var selType = $("#selType").text();
				 this.model.set("estCategory",selCategory);
				 this.model.set("estType",selType);
				 this.model.set("nameofthework",$("#nameOfWork").val());
				 if(this.isNewCategory){
					 this.model.set("defaultDatasFromDB",[]);
					 this.model.set("indexToDatasArray:","");
					 this.model.get("db").transaction(function (tx) {	 
						 tx.executeSql('Insert into DefaultDatas ("Category","Type","Datas") Values(?,?,?)',[selCategory,selType,""],function(){
							 appRouter.navigate("#pickItemsForEstimate",{trigger:true});
						 });
					 },function(){
						 console.log("error occured in adding items to defualt datas")
					 });
				 }else{
					 this.model.getDefaultDatas();
				 }
				 
			 },
			 fillPopUp: function(list,self){
				$("#listOfOptions").empty();

				var OptionsPopUp = new EstOptionsPopUp();
				$("#listOfOptions").html(OptionsPopUp.template({estOptions:list})).trigger('create');
				$("#optionSelected").off('tap');
				$("#optionSelected").on('tap',function(event){
					var selectedCategory = $("#listOfOptions input[name=estOption]:checked").val();
					if(selectedCategory == "Other"){
						selectedCategory = $("#otherOpt").val();
						if(selectedCategory){
							self.isNewCategory = true;
						}else{
							$(".errorText").hide();
							$("#categMissing").show();
							return;
						}
					}
					if(selectedCategory == undefined){
						$(".errorText").hide();
						$("#selectOption").show();
						return;
					}
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
			 fillTypePopUp: function(list,self){
				$("#listOfOptions").empty();
				var OptionsPopUp = new EstOptionsPopUp();
				$("#listOfOptions").html(OptionsPopUp.template({estOptions:list})).trigger('create');
				$("#optionSelected").off('tap');
				$("#optionSelected").on('tap',function(event){
					var selType = $("#listOfOptions input[name=estOption]:checked").val();
					if(selType == "Other"){
						selType = $("#otherOpt").val();
						if(selType){
							self.isNewCategory = true;
						}else{
							$(".errorText").hide();
							$("#categMissing").show();
							return;
						}
					}
					if(selType == undefined){
						$(".errorText").hide();
						$("#selectOption").show();
						return;
					}
					$("#selType").text(selType);
					$("#2").slideDown('1000');
					$("#1 .ui-block-b input").val("Change");
					$("#1 .ui-block-b input").button('refresh');
					$("#selectPopup").popup("close");
				});
			 },
			 dispayCategoryPopUp : function(event){
				event.preventDefault();
				var categoryList = [];
				var self = this;
				var xPos = Math.round($("#selectCategory").offset().left) + $("#selectCategory").width();
				var yPos = Math.round($("#selectCategory").offset().top) + $("#selectCategory").height()/2;
				$("#selectPopup").off( "popupbeforeposition");
				this.model.get("db").transaction(function (tx) {
					tx.executeSql('SELECT DISTINCT Category From DefaultDatas', [], function (tx, results) {
						for(var i = 0;i<results.rows.length;i++){
							categoryList.push(results.rows.item(i).Category);
						}	
						$("#selectPopup").on( "popupbeforeposition", self.fillPopUp(categoryList,self));
						$("#selectPopup").popup( "open",{ x: xPos, y: yPos } );
					});
				})				 
			 },
			 displayTypePopUp : function(event){
				event.preventDefault();
				var self = this;
				var typeList = [];
				var xPos = Math.round($("#selectType").offset().left) + $("#selectType").width();
				var yPos = Math.round($("#selectType").offset().top) + $("#selectType").height()/2;
				this.model.get("db").transaction(function (tx) {
					tx.executeSql('SELECT DISTINCT Type From DefaultDatas where Category='+'"'+$("#selCategory").text()+'"', [], function (tx, results) {
						for(var i = 0;i<results.rows.length;i++){
							typeList.push(results.rows.item(i).Type);
						}	
						$("#selectPopup").on( "popupbeforeposition", self.fillTypePopUp(typeList,self));
						$("#selectPopup").popup( "open", { x: xPos, y: yPos } );
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


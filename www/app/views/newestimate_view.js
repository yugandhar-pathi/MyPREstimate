
define(['views/layout/base_itemview','models/estimateitems_util'],function(BaseItemView,EstimateModel){

		var EstimateItem_View = BaseItemView.extend({
		    
			 template : Handlebars.templates.selectestimate_newestimate,
			 
			 model:EstimateModel.model,
			
			 events:{
				 'tap #displayDefaults':'displayDefaults',
				 'tap #CategoryOfWork':'dispayCategoryPopUp'
			 },
			 
			 displayDefaults : function(event){
				 this.model.set("nameofthework",$("#nameOfwork").val());
				 this.model.getDefaultItemsForCCRoad();
			 },
			 dispayCategoryPopUp : function(event){
				 $("#selectPopup").popup( "open", { x: event.pageX, y: event.pageY } );
				 
				 setTimeout(function(){
					 $("#listOfOptions").on('tap',function(event){
						 event.stopPropagation();
						 $("#selectPopup").popup("close");
						 
						 $("#selector").text("Category : "+$(event.target).text());
					 });
				 },100);
			 },
			 onShow : function(){
				 $("#newestimate #newEstimate").addClass('selected');
			 }

		});
		return EstimateItem_View

});


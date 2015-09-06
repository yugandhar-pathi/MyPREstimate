
define(['views/layout/base_itemview','models/estimateitems_util'],function(BaseItemView,EstimateModel){

		var DataCodeDetails_View = Backbone.View.extend({
			model:EstimateModel.model,
			initialize: function() {
			
			},
			events:{
				'click #backToPopup':'closePopup'
			},
			template : Handlebars.templates.selectestimate_datacodedetails,			
			
			openDatasPopup : function(){
				$("#datasPopup").popup("close");
			},
			
			closePopup : function(){
		    	var position = $("#tabs").position();
		    	var xPos = position.left;
		    	var yPos = position.top;
		    	//register for close event of datas popup
		    	$("#detailsPopup").on("popupafterclose",function(){
		    		$("#detailsPopup").off("popupafterclose");
		    		$("#datasPopup").popup("open", {x:xPos,y:yPos,transition:'pop',positionTo:'#tabs'});
		    	});
		    	$("#detailsPopup").popup("close");
			},
			render: function() {
			    this.$el.html(this.template(this.model.attributes));
			    return this;
			}

		});
		return DataCodeDetails_View;
		
});


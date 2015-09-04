
define(['views/layout/base_itemview','models/estimateitems_util'],function(BaseItemView,EstimateModel){

		var History_View = BaseItemView.extend({
		    
			model:EstimateModel.model,

			template : Handlebars.templates.selectestimate_history,	
			
			events:{
				'tap #listOfEstimates':'generatePdf'
			},
			selectedEstimateId:"",
			createCopyOfEstimate : function(event){
				//console.log(this.selectedEstimateId);
		    	var timeStamp = (new Date()).getTime();
		    	this.model.createCopyOfEstimate(timeStamp,this.selectedEstimateId);
			},
			
			displayOptions : function(event){
				this.selectedEstimateId = $(event.target).closest('tr').data('estid');
				 $("#histOptions").popup( "open", { x: event.pageX, y: event.pageY } );
				 var self = this;
				 setTimeout(function(){
					 $("#listOfOptions").off('tap');
					 $("#listOfOptions").on('tap',function(event){
						 event.stopPropagation();
						 $("#histOptions").popup("close");
						 self.createCopyOfEstimate(event)
					 });
				 },100);
			},
			
			generatePdf:function(event){
				this.selectedEstimateId = $(event.target).closest('tr').data('estid');
				this.writeDatas();
			},
			writeDatas:function(){
				this.model.readDatasForPDF(this.selectedEstimateId);
				/*var doc = new jsPDF('p', 'pt', 'letter');
	    		require(['views/pdf/pdfdatas_view'], function(datas) {
	    			var dataView = new datas();
	    			dataView.render();
					doc.fromHTML(dataView.el);
					doc.save('Test.pdf');	
	    		});*/
			},
			onShow : function(){
				//$("#historyOption").addClass('selected');
				$("#history #historyOption").addClass('selected');
			}
			

		});
		return History_View;		
});


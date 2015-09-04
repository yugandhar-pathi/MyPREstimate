require.config({

	baseUrl:'./app/',
	
	paths:{
		jquery : '../libs/jquery.mobile/jquery-1.9.1.min',
		jqmconfig:'jqm-config',
		jquerymobile:'../libs/jquery.mobile/jquery.mobile-1.4.5.min',
		lodash : '../libs/backbone/lodash-2.2.1-min',
		backbone : '../libs/backbone/backbone-min-1.1.0',
		handlebars : '../libs/handlebars/handlebars.runtime-v1.1.2',
		handlebarhelper:'utils/handlebars.helpers',
		templates : 'template/compiledtemplate',
		cordova:'../cordova',
		iScroll:'../libs/iScroll/jquery.floatThead-slim.min',
		marionette:'../libs/backbone/backbone.marionette-1.2.0-min',
		jspdf:'../libs/jsPDF-master/jspdf.debug',
		jspdfFromHTML:'../libs/jsPDF-master/jspdf.plugin.from_html',
		jspdfCell :'../libs/jsPDF-master/jspdf.plugin.cell',
		jspdfSplitText:'../libs/jsPDF-master/jspdf.plugin.split_text_to_size',
		fileSaver:'../libs/FileSaver.js-master/FileSaver'
	},
	shim : {
		jquery : {
		    exports : [ '$' ]
		},
		jqmconfig : {
			deps : [ 'jquery' ]
		},
		jquerymobile:{
			deps : [ 'jquery','jqmconfig' ]
		},
		underscore: {
			deps : [ 'jquery' ]
		},
		handlebars : {
			exports : 'Handlebars'
		},
		handlebarhelper : {
			deps : ['handlebars']
		},
		templates : {
			deps : ['handlebars']
		},
		backbone : {
			deps : [ 'lodash' ],
			exports : 'Backbone'

		},
		cordova : {
			deps : [ 'jquery' ]
		},
		iScroll:{
			deps : ['lodash']
		},
		marionette:{
			deps:['backbone']
		},
		jspdf:{
			deps:['jquery']
		},
		jspdfFromHTML:{
			deps:['jspdf']
		},
		jspdfCell :{
			deps:['jspdf']			
		},
		jspdfSplitText:{
			deps:['jspdf']
		},
		fileSaver:{
			deps:['jquery']
		},
		
	}

});

var appRouter = {};

define([ 'jquery','jquerymobile','backbone','handlebars','handlebarhelper','templates','marionette','jspdf','jspdfFromHTML','jspdfCell','jspdfSplitText','fileSaver','iScroll'/*,'cordova'*/], function() {	
    require([ 'router' ], function(router) {
    	$(document).ready(function () {
    	    console.log('document ready');
    	    appRouter = new router();
    	    Backbone.history.start();

    	});
     });
});
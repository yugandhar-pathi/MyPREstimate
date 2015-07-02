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
		//cordova:'../cordova',
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

		}/*,
		cordova : {
			deps : [ 'jquery' ]
		}*/
		
	}

});

var appRouter = {};

define([ 'jquery','jquerymobile','backbone','handlebars','handlebarhelper','templates'], function() {	
    require([ 'router' ], function(router) {
    	$(document).ready(function () {
    	    console.log('document ready');
    	    appRouter = new router();
    	    Backbone.history.start();

    	});
     });
});
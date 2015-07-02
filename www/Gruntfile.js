module.exports = function (grunt) {
  'use strict';

  grunt.loadNpmTasks('grunt-jslint'); // load the task
  
  grunt.loadNpmTasks('grunt-contrib-handlebars'); // load the task

  grunt.initConfig({
	  
	  
      handlebars : {
          compile : {
                 files : {
                        "../www/app/template/compiledtemplate.js" : [ "../../templates/**/*.hbs" ]
                 },
          },
          options : {
                 namespace : 'Handlebars.templates',
                 processName : function(filePath) { // input:
                        // templates/_header.hbs
                        var pieces = filePath.split("/");
                        var lastPiece = pieces[pieces.length - 1]
                                      .split('.hbs');
                        return pieces[pieces.length - 2] + '_'
                                      + lastPiece[0]; // output: _header.hbs
                 }
          }
    },  
    jslint: { // configure the task
      
      client: {
        src: [
          'app/**/*.js'
        ],
        directives: {
          browser: true,
          predef: [
            'jQuery'
          ]
        },
        options: {
          junit: 'out/client-junit.xml'
        }
      }
    }
  });

  grunt.registerTask('default', 'handlebars');
};
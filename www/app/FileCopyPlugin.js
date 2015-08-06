cordova.define("org.apache.cordova.FileCopyPlugin.FileCopyPlugin", function(require, exports, module) { 
	var exec = require('cordova/exec');
	function FileCopyPlugin() { 
		console.log("fileCopyPlugin.js: is created");
	}
	FileCopyPlugin.prototype.Copy = function(aString){ 
		console.log("fileCopyPlugin.js: showToast"); 
		exec(function(result){alert("OK" + result);}, function(result){alert("Error" + result);} ,"FileCopyPlugin","echo",[aString]);
	}
	var FileCopyPlugin = new FileCopyPlugin(); 
	module.exports = FileCopyPlugin;
});



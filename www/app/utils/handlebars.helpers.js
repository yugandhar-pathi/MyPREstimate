
define(function(require) {

	var Handlebars = require('handlebars');

	/*Handlebars
			.registerHelper(
					"LocalizedMessage",
					function(str) {
						// Get the browser or device language
						// var browserLanguage = navigator.language ||
						// navigator.userLanguage;

						var Messages = require('i18n!config/locale/messages');
						var strArray = str.split('.');
						// FIXME Stupid coding Arun.. improve - by Arun :)
						switch (strArray.length) {
						case 1:
							return Messages[strArray[0]];
						case 2:
							return Messages[strArray[0]][strArray[1]];
						case 3:
							return Messages[strArray[0]][strArray[1]][strArray[2]];
						case 4:
							return Messages[strArray[0]][strArray[1]][strArray[2]][strArray[3]];
						}
						;
					});*/

	Handlebars.registerHelper('getExtracted', function(string, extract) {
		if (string != undefined || string != null) {
			if (string.length >= 0) {
				return string.substr(string.length - extract);
			} else
				return "";
		} else
			return "";
	});

	Handlebars.registerHelper('getExtractedDate', function(date) {
		if (date != undefined || date != null) {
			if (date.length >= 0) {				
				var i = date.slice(0,10).split('-');
				var myDate = i[2]+'/'+i[1]+'/'+i[0];
				return myDate.split("T")[0];
			} else
				return "";
		} else
			return "";
	});

	Handlebars.registerHelper("formatPhoneNumber", function(phoneNumber) {
		phoneNumber = phoneNumber.toString();
		return "(" + phoneNumber.substr(0, 3) + ") " + phoneNumber.substr(3, 3)
				+ "-" + phoneNumber.substr(6, 4);
	});

	Handlebars.registerHelper("incrementValue", function(value) {
		return parseInt(value) + 1;
	});

	Handlebars.registerHelper('isNull', function(value, options) {
		if (null == value) {
			return options.fn(this);
		} else {
			return options.inverse(this);
		}
	});

	Handlebars.registerHelper('isNotNull', function(value, options) {
		if (null == value) {
			return options.inverse(this);
		} else {
			return options.fn(this);
		}
	});

	Handlebars.registerHelper('compare', function(lvalue, rvalue, options) {

		if (arguments.length < 3)
			throw new Error("Handlerbars Helper 'compare' needs 2 parameters");

		operator = options.hash.operator || "==";

		var operators = {
			'==' : function(l, r) {
				return l == r;
			},
			'===' : function(l, r) {
				return l === r;
			},
			'!=' : function(l, r) {
				return l != r;
			},
			'<' : function(l, r) {
				return l < r;
			},
			'>' : function(l, r) {
				return l > r;
			},
			'<=' : function(l, r) {
				return l <= r;
			},
			'>=' : function(l, r) {
				return l >= r;
			},
			'typeof' : function(l, r) {
				return typeof l == r;
			}
		};

		if (!operators[operator])
			throw new Error(
					"Handlerbars Helper 'compare' doesn't know the operator "
							+ operator);

		var result = operators[operator](lvalue, rvalue);

		if (result) {
			return options.fn(this);
		} else {
			return options.inverse(this);
		}
	});

	Handlebars.registerHelper('subString', function(string, startIndex,
			endIndex) {
		if (string != undefined) {
			if (startIndex >= 0) {
				return string.substring(startIndex, endIndex);
			} else {
				return string.substring(string.length + startIndex);
			}
		} else
			return "";
	});

	Handlebars.registerHelper('dateFormat', function(date) {
		if (date == null || date == "") {
			date = (new Date()).getTime();
		} else {
			date = date.split("T")[0];
		}
		var d = new Date(date);
		var curr_date = d.getDate();
		var curr_month = d.getMonth() + 1;

		var curr_year = d.getFullYear();
		if (curr_date < 10) {
			curr_date = '0' + curr_date.toString();
		}
		if (curr_month < 10) {
			curr_month = '0' + curr_month.toString();
		}
		curr_year = curr_year.toString();
		
		curr_year = curr_year.substring(curr_year.length - 2);
		curr_year = (curr_year.length == 1) ? "0" + curr_year : curr_year;
		var dateformatted = (curr_month) + "/" + curr_date + "/" + curr_year;
		return dateformatted;
	});

	Handlebars.registerHelper('subStringWithEllipsis', function(string,
			startIndex, endIndex, ellipsisLength) {
		if (string != undefined) {
			if (startIndex >= 0 && endIndex >= 0) {
				var result = string.substring(startIndex, endIndex);
				if (ellipsisLength > 0) {
					var ellipsis = "";
					for (var i = 0; i < ellipsisLength; i++) {
						ellipsis += ".";
					}
					result += ellipsis;
				}
				return result;
			} else
				return "";
		} else
			return "";
	});
	
	Handlebars.registerHelper('ellipsisUserName', function(string,
			startIndex, endIndex, ellipsisLength) {
		if (string != undefined) {
			if (startIndex >= 0 && endIndex >= 0) {
				if(string.length>=endIndex){
					var result = string.substring(startIndex, endIndex);
					if (ellipsisLength > 0) {
						var ellipsis = "";
						for (var i = 0; i < ellipsisLength; i++) {
							ellipsis += ".";
						}
						result += ellipsis;
					}
					return result;
				}else{
					return string;
				}
			} else
				return "";
		}else
			return "";
	});

	Handlebars.registerHelper('decimalFormat', function(number) {
		if (number == undefined) {
			return 0.00;
		}
		if (typeof(number) == "string") {
			number = Number(number);
		}
		if (!isNaN(number) && (number.toString()).search(".") != (-1)) {
			number = (number).toFixed(2);
			number = number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
		}
		return number;
	});
	
	Handlebars.registerHelper('add', function(arg1,arg2) {
		//alert(arg1+"  "+arg2);
		return arg1+arg2;
	});
	
	//isSubHeading
	
	/*Handlebars.registerHelper('isSubHeading', function(arg) {
			var test =  /^[a-z]\)|^[a-z]\&[a-z]\)/.test(arg);
			
			if(test){
				return 1;
			}else{
				var test =  /^Cost\sfor|^Rate\sper/.test(arg);
				if(test )
			}

	});*/
	
    Handlebars.registerHelper('renderHTMLwithSplitAmount', function(
    	    amtToTransfer) {

    	var fullAmount = amtToTransfer;
    	
    	var decimalAmount = "00";
    	if (amtToTransfer) {
    			amtToTransfer = Number(fullAmount).toFixed(2);
	    	    var amountDecimal = amtToTransfer.toString().indexOf(".");
	    	    if (amountDecimal != -1) {
		    		var amountSplit = amtToTransfer.toString().split(".");
		    		decimalAmount = amountSplit[0];
		    		if (amountSplit[1].length == 1)
		    		    amountSplit[1] += "0";
		    		decimalAmount = amountSplit[1];
		    		//decimalAmount = Number(decimalAmount).toFixed(2);
		    		fullAmount = amountSplit[0];
	    	    }
	    	    if (fullAmount == undefined) {
	    	    	fullAmount = 0.00;
	    	    }
	    	    if (typeof (fullAmount) == "string") {
	    	    	fullAmount = Number(fullAmount);
	    		//fullAmount = fullAmount.toFixed(2);
	    	    }
	    	    if (!isNaN(fullAmount)
	    		    && (fullAmount.toString()).search(".") != (-1)) {
	    		fullAmount = fullAmount.toString().replace(
	    			/\B(?=(\d{3})+(?!\d))/g, ",");
	
	    	    }
	    	    /*var html = "<sup class='currency-symbol'>$</sup>" + fullAmount
	    		    + ".<sup class='currency-decimal'>" + decimalAmount
	    		    + "</sup>";*/
	    	    var amount = fullAmount+"."+decimalAmount;
	    	    return new Handlebars.SafeString(amount);
    	}
        });
    
    Handlebars.registerHelper('sumUnits', function(lbdArray) {
    	var sumUnit = 0;
    	for(var lbd in lbdArray){
    		sumUnit += Number(lbdArray[lbd].totalUnits);
    	}
    	return sumUnit;
    });

    Handlebars.registerHelper('dataAmount', function(dataItem) {
    	var sumUnit = 0;
    	var lbdArray = dataItem.lbdsArray;
    	for(var lbd in lbdArray){
    		sumUnit += Number(lbdArray[lbd].totalUnits);
    	}
    	var amount = sumUnit * Number(dataItem.rate);
    	return amount.toFixed("2");
    });

});
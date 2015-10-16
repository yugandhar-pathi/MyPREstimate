define([],function(){
	var lead_util = {
			getLeadDetailsForCode : function(leadCode){
				/* seigCharges are from SSR 
				 * This is temporary code, This should be converted to database later. 
				 */
				var leadMap = {
						"B":{
							"material":"Bricks",
							"seigCharges":"",
							"unit":"tonne"
						},
						"C":{
							"material":"Cement",
							"seigCharges":"",
							"unit":"tonne"
						},
						"E":{
							"material":"Earth",
							"seigCharges":"",
							"unit":"tonne"							
						},
						"G":{
							"material":"Gravel",
							"seigCharges":"",
							"unit":"tonne"	
						},
						"M":{
							"12MM":{
								"material":"12MM H.B.G Metal",
								"seigCharges":"50",
								"unit":"Cum"
							},
							"20MM":{
								"material":"20MM H.B.G Metal",
								"seigCharges":"50",
								"unit":"Cum"
							},
						},
						"SF":{
							"material":"Sand For Filling",
							"seigCharges":"40",
							"unit":"Cum"
						},
						"SM":{
							"material":"Sand For Mortor",
							"seigCharges":"40",
							"unit":"Cum"
						},
						"W":{
							"material":"Water",
							"seigCharges":"",
							"unit":"KL"
						}

				}
				var splitArr = leadCode.split("-");
				if(splitArr.length == 2){
					return leadMap[splitArr[1]];
				}
				if(splitArr.length == 3){
					return leadMap[splitArr[1]][splitArr[2]];
				}
			},
			getLeadGroup : function(leadCode){
				
				var splitArr = leadCode.split("-");
				var code = splitArr[1];
				//Bricks
				if(code == "B"){
					return "water";
				}
				//Water
				if(code == "W"){
					return "water";
				}
				//Earth / Sand /Gravel / Murrum/ Lime/ Surki/
				var group1 = ["SF","SM"];
				if(group1.indexOf(code) != -1){
					return "I"
				}
				
				//Rubble/Size stones/ Cut Stones/ Coarse aggregate
				var group2 = ["M"];
				if(group1.indexOf(code) != -1){
					return "II"
				}
				
				//Cement/ Steel/RCC poles/ AC & GI sheets/ Packed materials
				var group3 = ["C"];
				if(group1.indexOf(code) != -1){
					return "III"
				}
				
				//PCC slabs/Shahabad slabs/ CC & Laterite blocks/Wood
				var group4 = ["L"];
				if(group1.indexOf(code) != -1){
					return "IV"
				}
				
			}
	};
	return lead_util;
});
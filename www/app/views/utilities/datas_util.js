define([],function(){
	var datas_util = {
			beuatifyDatas:function(dataList){
				var costForItem = 0;
				var costForIndex = 0;
				for(var j=0;j<dataList.length;j++){
						var item = dataList[j];
					   //Loop through all rows for data item
					   if(item.Amount != null){
						   //This is to add amount for all items in a data item.
						   costForItem += Number(item.Amount);
					   }
					   var description = item.Description;
					   if(description=="a\)\?\?Labour"){
						   //to correct display of sub heading - not coming correct from database
						   item.Description = "a\) Labour";
					   }
					   var test =  /^[a-z]\)|^[a-z]\&[a-z]\)/.test(description);
					   if(test){
						   //To display subheading in bold.
						   item.descType = "SubHeading";
					   }else{
						   var test =  /^Cost\sfor|^Rate\sper/.test(description);
						   if(test){
							   //to display Rate or Cost items in bold Red
							   item.descType = "RateOrCost"; 
						   }else{
							   item.descType = "Normal";
						   }
					   }
					   if(description != null && (description.indexOf('Cost for ') != -1 || description.indexOf('Cost  for ') != -1 ) && costForItem > 0){
						   item.Amount = costForItem;
						   costForIndex = j; //To update Rate per Unit
					   }
					   if(description != null && description.indexOf('Rate per ') != -1 && j == costForIndex+1){
						   //updating amount per unit
						   var perUnits = description.substr(description.indexOf('/')+1,description.length);									   
						   item.Amount = parseInt(costForItem/Number(perUnits));
					   }
				}   
			},
			getTableName : function(dataCode){
				var keyToTableMap = {
						//Roads And Bridges
						"RBR":{
							"LUCC":"LUCANDC",
							"STCL":"SiteClearence",
							"EECD":"EECD",
							"SBBS":"GranSubBases",
							"BASC":"BasesAndSurface",
							
							"CCPV":"CCPAVEMENT",
							"CWSB":"CauAndSubMerBridges",
							"HLRD":"HillRoads",
							"PCVT":"PipeCulverts",
							"TSRA":"TrafficSigns",
							
							"FNDN":"Foundation",
							"SBST":"SubStructure",
							"SPST":"SuperStructure",
							"PTWK":"ProtectionWorks",
							"MTRD":"MaintOfRoads",
							
							"GSRE":"GEOSYNTHETICS",
							"HRTC":"Horticulture",
							"RPRH":"Repair"
						},
						//Buildings
						"CSTN" : {
							"1":"Mortar",
							"2":"Earthwork",
							"3":"ConcreteDampProof",
							"4":"BarInFoundation",
							"5":"Brickwork",
							
							"6":"StoneMasonary",
							"7":"Pointing",
							"8":"Plastering",
							"9":"Flooring",
							"10":"RoofingAndCeiling",
							
							"11":"WhiteWashing",
							"12":"PaintingAndVarnishing",
							"13":"WoodWork",
							"14":"DismantlingAndDemolition",
							"15":"MISCELLANEOUS",
							
							"16":"ANTETERMITETREATMENT",
							"17":"Centring"
						},
						//Electrical
						"ELEC":{
							"1":"CONDUITLAYING",
							"2":"WIRING",
							"3":"RUNOFMAINS",
							"4":"SWITCHGEAR",
							"5":"EARTHING",
							
							"6":"SERVICEMAINS",
							"7":"STREETLIGHT",
							"8":"INTERNALLUMINAIRE",
							"9":"ACANDREFRIGERATION",
							"10":"WATERHEATERS",
							
							"11":"WATERPUMPS",
							"12":"BUSBARS",
							"13":"SWAGEDPOLES",
							"14":"CONTROLPANEL",
							"15":"CABLES",
							
							"16":"TEMPORARY",
							"17":"GENERATORS",
							"18":"REPAIRSTOMOTORS"
						}

				};
				var splitDataArr = dataCode.split("-");
				var dataBook = splitDataArr[0].toUpperCase();;
				if(dataBook == "RBR"){
					var tableKey = splitDataArr[1];
					return keyToTableMap[dataBook][tableKey];
				}
				dataBook = splitDataArr[1].toUpperCase();
				if(dataBook == "CSTN"){
					return keyToTableMap[dataBook][splitDataArr[2]];
				}
				dataBook = dataCode.toUpperCase();
				dataBook = dataBook.substring(dataBook.indexOf('ELEC'),dataBook.length);
				splitDataArr = dataBook.split("-");
				dataBook = splitDataArr[0];
				if(dataBook == "ELEC"){
					var tableKey = splitDataArr[1];
					return keyToTableMap[dataBook][tableKey];
				}
			}
	};
	return datas_util;
});
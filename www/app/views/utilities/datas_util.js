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
			getLeadCodesInDataItem : function(dataList){
				   var leadCodes = [];
				   //var isMaterial = false;
				   var leadMaterialsInDataItem = [];
				   var metalMeasures = [];
				   for(var j=0;j<dataList.length;j++){
					   var item = dataList[j];
					   var description = item.Description;
					   if(item.Remarks){
						   var leadMater = item.Remarks;
						   if(item.Remarks == "L3"){
							   var aggr1 = description.indexOf('mm');
							   var aggr2 = description.substring(aggr1+2).indexOf('mm');
							   
							   var metalType1 = description.substring(aggr1-4,aggr1);
							   if(isNaN(metalType1)){
								   metalType1 = metalType1.substring(1,metalType1.length);
							   }
							   console.log("metalmm is:"+metalType1);
							   if(!_.contains(metalMeasures, metalType1)){
								   if(!isNaN(metalType1))
									   metalMeasures.push(metalType1)
							   }
							   
							   var metalType2 = description.substring(aggr1+aggr2-3,aggr1+aggr2+1);
							   if(isNaN(metalType2)){
								   metalType2 = metalType2.substring(1,metalType2.length);
							   }
							   console.log("metalmm is:"+metalType2);
							   
							   if(!_.contains(metalMeasures, metalType2)){
								   if(!isNaN(metalType2))
									   metalMeasures.push(metalType2)
							   }
						   }
						   leadMaterialsInDataItem.push(item.Remarks);	
					   }
				   }
				   
				  //--adding to lead begin----
				  //check if lead Material's has L1 - Sand
				  if( _.contains(leadMaterialsInDataItem, "L1") ){
					  //check if lead Material's also has L2 - Cement
					  if( _.contains(leadMaterialsInDataItem, "L2")){
						  if(!_.contains(leadCodes, "L1B")){
							  leadCodes.push("L1B");
						  }
					  }else{
						  //only L1 and no L2
						  if(!_.contains(leadCodes, "L1A")){
							  leadCodes.push("L1A");
						  }
					  }	  
				  }
				  if( _.contains(leadMaterialsInDataItem, "L3") ){
					  for(var measure in metalMeasures){
						  var leadMetal = "L3"+metalMeasures[measure]+" "+"mm";
						  if(!_.contains(leadCodes, leadMetal)){
							  leadCodes.push(leadMetal);
						  }
					  }
				  }
				  for(var leadItem in leadMaterialsInDataItem){
					  if(leadMaterialsInDataItem[leadItem] == "L2"){
						  if(!_.contains(leadCodes, "L2")){
							  leadCodes.push("L2");
						  }
					  }
				  }
				  return leadCodes;
	
			},
			prepareLeadMaterialMap : function(leadCodes,EstimateModel){
				   var dbData = "";
				   var dbLeadMaterials = EstimateModel.get("leadMaterialsFromDB");
				   if(!dbLeadMaterials){
					   //read from db
					   EstimateModel.getDefaultLeadMaterialsFromDB();
					   return;
				   }
				   var leadMaterialObjects = [];
				   for(var code in leadCodes){
					   var leadMaterialItem = {
								"material":"",
								"sourceOfSupply":"",
								"leadInKM":"",
								"initialCost":"",
								"convCharges":"",
								"seigCharges":"",
								"totalCost":"",
								"unit":"",
								"isMetal":false,
								"code":"",
								"loadMeans":"ignoreLoad",
								"unLoadMeans":"ignoreUnLoad",
								"considerIdleCharges":"no"
					   }
					   if(leadCodes[code]=="L1A"){
						   dbData = dbLeadMaterials.filter(function(obj){ return obj.Quality == "Filling"});
						   leadMaterialItem.material = "Sand for Filling";
						   leadMaterialItem.initialCost = dbData[0].InitialCost;
						   leadMaterialItem.seigCharges = dbData[0].SeigCharges;
						   leadMaterialItem.unit = dbData[0].Unit;
						   leadMaterialItem.code = "L1A";
					   }
					   if(leadCodes[code]=="L1B"){
						   dbData = dbLeadMaterials.filter(function(obj){ return obj.Quality == "Mortor"});
						   leadMaterialItem.material = "Sand for Mortor";
						   leadMaterialItem.initialCost = dbData[0].InitialCost;
						   leadMaterialItem.seigCharges = dbData[0].SeigCharges;
						   leadMaterialItem.unit = dbData[0].Unit;
						   leadMaterialItem.code = "L1B";
					   }
					   if(leadCodes[code]=="L2"){
						   dbData = dbLeadMaterials.filter(function(obj){ return obj.LeadMaterial == "L2"});
						   leadMaterialItem.material = "Cement";
						   leadMaterialItem.initialCost = dbData[0].InitialCost;
						   leadMaterialItem.seigCharges = dbData[0].SeigCharges;
						   leadMaterialItem.unit = dbData[0].Unit;
						   leadMaterialItem.code = "L2";
					   }
					   if(leadCodes[code].indexOf("L3") != -1){
						   leadMaterialItem.material = leadCodes[code].substring(2,leadCodes[code].length)+" H.B.G metal";
						   var metalMM = Number(leadMaterialItem.material.substring(0,2));
						   dbData = dbLeadMaterials.filter(function(obj){ return obj.LeadMaterial == "L3" && Number(obj.Quality) >= metalMM});
						   leadMaterialItem.initialCost = dbData[0].InitialCost;
						   leadMaterialItem.seigCharges = dbData[0].SeigCharges;
						   leadMaterialItem.unit = dbData[0].Unit;
						   leadMaterialItem.isMetal = true;
						   leadMaterialItem.code = "L3";
					   }
					   leadMaterialObjects.push(leadMaterialItem);
				   }
				   EstimateModel.set("listOfLeadMaterials",leadMaterialObjects);
				   appRouter.navigate("leadstatement",{trigger:true});
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
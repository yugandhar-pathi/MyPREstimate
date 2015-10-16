define([],function(){
	var datas_util = {
			leadMaterials:[],
			
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
						   //To display sub heading in bold.
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
			updateRateAndUnit:function(codeToData){
				var costForItem = 0;
				var costForIndex = 0;
				var dataList = codeToData.datas;
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
						   //To display sub heading in bold.
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
						   codeToData.rate = item.Amount;
					   }
					   
					   if(description != null && description.indexOf('Unit =') != -1){
						   //Unit
						   codeToData.unit = description.substring(7,description.length);	
					   }
					   if(item.Remarks != null){
						   this.leadMaterials.push(item.Remarks);
					   }
				}   
			},
			/*formatDatas : function(indexToDataItem){
				//this.beuatifyDatas(indexToDataItem.itemsArr);
				this.updateRateAndUnit(indexToDataItem);
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
	
			},*/
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
			},
			getListOfDatasForEstimate : function(EstimateModel){
				this.leadMaterials = [];
				var defaultDatas = EstimateModel.get("indexToDatasArray");
				var codeToDatasArr = [];
				for(var data in defaultDatas){
					var dataItem = defaultDatas[data];
					if(dataItem.selectedSubItems.length == 0){
						var codeToData = {
						   "IndexCode":dataItem.IndexCode,
						   "description":dataItem.description,
						   "itemIndex":"",
				   		   "datas":dataItem.itemsArr,
						   "rate":"",
						   "unit":""
						};
						this.updateRateAndUnit(codeToData);
						codeToData.itemIndex = codeToDatasArr.length;
						codeToDatasArr.push(codeToData);
					}else{
						var subItemsArr = defaultDatas[data].selectedSubItems;
						for(var subItem in subItemsArr){
							var subDataId = subItemsArr[subItem];
							var codeToData = {
							   "IndexCode":"",
							   "description":"",
							   "itemIndex":"",
					   		   "datas":this.getDataItemsForSubData(subDataId,dataItem),
							   "rate":"",
							   "unit":""
							};
							var subItemdesc = "";
							var subItemIndexCode = "";
							function getIdAndDesc(subDataId){
								var subItem = dataItem.subitemsArray.filter(function(obj){
									return obj.subDataId == subDataId
								});
								if(subItem.length){
									if(subItemdesc.length){
										subItemdesc = subItem[0].subItemDesc+" * "+subItemdesc;
										subItemIndexCode = subItem[0].subItemID+"*"+subItemIndexCode;
									}else{
										subItemdesc = subItem[0].subItemDesc;
										subItemIndexCode = subItem[0].subItemID;
									}
									//1.1.1L
									if(subDataId.indexOf("L") != -1){
										if(subDataId.length > 2){
											getIdAndDesc(subDataId.slice(0,-3))
										}
									}else{
										if(subDataId.length >= 1){
											getIdAndDesc(subDataId.slice(0,-2))
										}
									}									
								}
							}
							getIdAndDesc(subDataId);
							codeToData.description = dataItem.description+" * "+subItemdesc;
							codeToData.IndexCode = dataItem.IndexCode+"*"+subItemIndexCode;
							codeToData.datas[0].Description = dataItem.description+" * "+subItemdesc;
							codeToData.datas[0].IndexCode = dataItem.IndexCode+"*"+subItemIndexCode;
							codeToData.itemIndex = codeToDatasArr.length;
							this.updateRateAndUnit(codeToData);
							codeToDatasArr.push(codeToData);
						}
						
					}
				}
				EstimateModel.set("leadCodesInEstimate",this.leadMaterials);
				EstimateModel.set("codeToDatas",codeToDatasArr);
	
			},
			getDataItemsForSubData : function(subDataId,parentData){
				var dataItems = parentData.itemsArr;
				var subItemDatas = [];
				var startPush = false;
				for(var item in dataItems){
					var dataItem = dataItems[item];
					if(startPush && dataItem.SubDatas){
						//one more data started, stop and return
						return subItemDatas;
					}
					if(dataItem.SubDatas == subDataId){
						startPush = true;
					}
					if(startPush){
						subItemDatas.push(dataItem);
					}
				}
				this.beuatifyDatas(subItemDatas);
				return subItemDatas; // if last subdata is selected.
			},
	};
	return datas_util;
});
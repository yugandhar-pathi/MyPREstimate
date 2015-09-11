
define([ 'models/base_model','views/utilities/datas_util'], function(BaseModel,DatasUtil) {

	var App = {};

	App.BaseDataSheetModel = (function() {

		var BaseDataSheetModel = {};

		var model = BaseModel.extend({

			defaults : {
				db:null,
				defualtItems:"",
				defaultDatasFromDB:[],
				selectedTable:"",
				tableToItemMap:"",
				testItems:"",
				datas:"",
				selectedItemsForEstimate:"",
				codeToDatas:"",
				chapterToItemsMap:"",
				codeToRates:"",
				datasAsService:false,
				indexToDatasArray:"",
				chapterTitle:"",
				estCategory:"",
				estType:"",
				//selectedDatasToAdd:"",
				tableList:['BasesAndSurface','CauAndSubMerBridges','CCPAVEMENT','EECD','Foundation','GEOSYNTHETICS','GranSubBases','HillRoads','Horticulture','LUCANDC','MaintOfRoads','PipeCulverts','ProtectionWorks','Repair','SiteClearence','SubStructure','SuperStructure','TrafficSigns'],
				leadMaterialItem:{
					"material":"",
					"sourceOfSupply":"",
					"leadInKM":"",
					"initialCost":"",
					"convCharges":"",
					"seigCharges":"",
					"totalCost":"",
					"unit":"",
					"isMetal":false
				},
				dataItemToLBDsArr : [],
				dataItemToLBDs:{
					"dataItem":"",
					"lbds" : {
						'length':"",
						'breadth':"",
						'depth':"",
						'totalUnits':"",
						'quantity':""
					}
				},
				listOfLeadMaterials:[],
				leadMaterialsFromDB:"",
				convChargesFromDB:"",
				nameofthework:"",
				estimateHistory:"",
				estimateDetails:{
					"nameOfWork":"Hello",
					"Category":"Road",
					"Type":"Cement Concrete Pavement",
					"Cost":"12L"
				}
			},
			initialize : function(options) {
				db = openDatabase('RoadsAndBridges','', 'Test DB', 5 * 1024 * 1024);
				if(db == null){
					console.log("Cannot read bad luck !!")
				}else{
					console.log("+++++++++++++"+db);
				}
				this.getDefaultLeadMaterialsFromDB();
				this.set('db',db);
			},
			getDefaultDatas : function(){
				
				var category =  this.get("estCategory");
				var type =  this.get("estType");
				var indexToDatasArray = [];
				var self= this;
				db.transaction(function (tx) {
					  //Read default items
					  tx.executeSql('SELECT DATAS FROM DefaultDatas WHERE Category='+'"'+category+'"'+' AND Type = '+'"'+type+'"', [], function (tx, defaultItems) {
						console.log("successfully read");
						var defDatas = defaultItems.rows.item(0).Datas.split(",");
						console.log(defaultItems.rows.item(0).Datas);
						self.set("defaultDatasFromDB",defDatas);
						var i = 0;
						if(defDatas.length > 0){
							var getItems = function(indexCode){
								   //var indexCode = defaultItems.rows..IndexCode;
								   var splitArr = indexCode.split("-");
								   	   splitArr[splitArr.length-1] = Number(splitArr[splitArr.length-1])+1;
								   var nextIndexCode = splitArr.join("-");	   
								   var tableName = DatasUtil.getTableName(indexCode);
								   tx.executeSql('SELECT * FROM '+tableName+' WHERE rowid>=(select rowid FROM '+tableName+' WHERE IndexCode="'+indexCode+'") AND rowid<(Select rowid from '+tableName+' where IndexCode="'+nextIndexCode+'")', [], function (tx, results) {
									   if(results.rows.length > 0){

										   var indexToTableItem = {
												    "TableName":tableName,
													"IndexCode":"",
													"description":"",
													"subitemsArray":[]
										   };
										   indexToTableItem.IndexCode = indexCode;
										   var subitemsArray = [];
										   for(var j=0;j<results.rows.length;j++){
											   var item = JSON.parse(JSON.stringify(results.rows.item(j)));
											   var subitem = {
													"SlNo":"",
													"descritpion":""
											   }
											   if(j==0){
												  indexToTableItem.description = item.Description;  
											   }else{
												   if(item.SNo){
													   subitem.SlNo = item.SNo;
													   subitem.descritpion = item.Description;
													   subitemsArray.push(subitem);
													   console.log("subitems:"+JSON.stringify(subitemsArray));
												   }
											   }
											  
											   if(item.SubBullet){
												   subitem.SlNo = item.SubBullet;
												   subitem.descritpion = item.Description;
												   subitemsArray.push(subitem);
												   console.log("subitems:"+JSON.stringify(subitemsArray));
											   }
											   
										   }
										   if(subitemsArray.length > 1){
											   indexToTableItem.subitemsArray = subitemsArray;
											   console.log("indexToTableItem:"+JSON.stringify(indexToTableItem));
										   }
										   indexToDatasArray.push(indexToTableItem);
									   }
									   i++;
									   if(i<defDatas.length){
										   getItems(defDatas[i]);
									   }else{
										   self.set("indexToDatasArray",indexToDatasArray);
										   appRouter.navigate("#pickItemsForEstimate",{trigger:true});  					   
									   }
								   },null);
								   
								   
								   /*console.log('SELECT * FROM '+ results.rows.item(i).TableName +' WHERE IndexCode = '+'"'+results.rows.item(i).IndexCode+'"');
								   tx.executeSql('SELECT * FROM '+ results.rows.item(i).TableName +' WHERE IndexCode = '+'"'+results.rows.item(i).IndexCode+'"', [], function (tx, items) {
									   
									   if(items.rows.length > 0){
										   console.log(items.rows.item(0));
										   var item = items.rows.item(0);
										   item.TableName = results.rows.item(i).TableName;
										   ccroaddefualtItems.push(item);
									   }
									   i++;
									   if(i<results.rows.length){
										   getItems(i);
									   }else{
										   console.log(ccroaddefualtItems);
										   self.set("defualtItems",ccroaddefualtItems);
										   appRouter.navigate("pickItemsForEstimate",{trigger:true});
									   }
								   },null);*/
								};
								getItems(defDatas[0]);
						}
					  }, null);
				});

			},
			/*getSubItemsForEstimate:function(){
				var selIndexLength = this.get("selectedItemsForEstimate").length;
				var self= this;
				var i=0;
				var indexToTableItems = [];
				var proceedToLead = true;
				db.transaction(function (tx) {	  
					    var materialRowIds = [];
						var getItems = function(){
						   var sNo = self.get("selectedItemsForEstimate")[i].indexCode.split("-")[2];
						   var nextSNo = Number(sNo)+1;
						   var tableName = self.get("selectedItemsForEstimate")[i].tableName;
						   //console.log('SELECT * FROM '+tableName+' WHERE rowid>=(select rowid FROM '+tableName+' WHERE SNo="'+sNo+'") AND rowid<(Select rowid from '+tableName+' where SNo="'+nextSNo+'")');
						   tx.executeSql('SELECT * FROM '+tableName+' WHERE rowid>=(select rowid FROM '+tableName+' WHERE SNo="'+sNo+'") AND rowid<(Select rowid from '+tableName+' where SNo="'+nextSNo+'")', [], function (tx, results) {
							   if(results.rows.length > 0){

								   var indexToTableItem = {
											"IndexCode":"",
											"description":"",
											"subitems":[]
								   };
								   indexToTableItem.IndexCode = self.get("selectedItemsForEstimate")[i].indexCode;
								   var subitems = [];
								   for(var j=0;j<results.rows.length;j++){
									   var item = JSON.parse(JSON.stringify(results.rows.item(j)));
									   var subitem = {
											"SlNo":"",
											"descritpion":""
									   }
									   if(j==0){
										  indexToTableItem.description = item.Description;  
									   }
									  
									   if(item.SubBullet){
										   subitem.SlNo = item.SubBullet;
										   subitem.descritpion = item.Description;
										   subitems.push(subitem);
										   console.log("subitems:"+JSON.stringify(subitems));
									   }
								   }
								   if(subitems.length > 1){
									   proceedToLead = false;
									   indexToTableItem.subitems = subitems;
									   console.log("indexToTableItem:"+JSON.stringify(indexToTableItem));
									   indexToTableItems.push(indexToTableItem);
								   }
							   }
							   i++;
							   if(i<self.get("selectedItemsForEstimate").length){
								   getItems(i);
							   }else{
								   self.set("indexToTableItems",indexToTableItems);
								   if(proceedToLead){
									   appRouter.navigate("#leadstatement",{trigger:true});  
								   }else{
									   appRouter.navigate("#choosesubitem",{trigger:true});
								   }						   
								   
							   }
						   },null);
						};
						getItems(i);
						
				});
			},*/
			getDatasForEstimate : function(){
				var selIndexLength = this.get("selectedItemsForEstimate").length;
				var self= this;
				var i=0;
				var codeToDatas = [];
				//var materialsInSelectedDatas = [];
				var leadCodes = [];
				db.transaction(function (tx) {	  
					    //var materialRowIds = [];
						var getItems = function(){
							
						   var indexCode = self.get("selectedItemsForEstimate")[i].indexCode;
						   var splitArr = indexCode.split("-");
						   	   splitArr[splitArr.length-1] = Number(splitArr[splitArr.length-1])+1;
						   var nextIndexCode = splitArr.join("-");	
							   
						   //var indexCode = self.get("selectedItemsForEstimate")[i].indexCode.split("-");
						   //var nextIndexCode = Number(sNo)+1;
						   var tableName = self.get("selectedItemsForEstimate")[i].tableName;
						   var selectedSubItems = self.get("selectedItemsForEstimate")[i].selectedSubItems;
						   var pushAll = true;
						   var leadMaterialsInDataItem = [];
						   var metalMeasures = [];
						   /*if(selectedSubItem != ""){
							   pushAll = false;
						   }*/
						   console.log('SELECT * FROM '+tableName+' WHERE rowid>=(select rowid FROM '+tableName+' WHERE IndexCode="'+indexCode+'") AND rowid<(Select rowid from '+tableName+' where IndexCode="'+nextIndexCode+'")');
						   tx.executeSql('SELECT * FROM '+tableName+' WHERE rowid>=(select rowid FROM '+tableName+' WHERE IndexCode="'+indexCode+'") AND rowid<(Select rowid from '+tableName+' where IndexCode="'+nextIndexCode+'")', [], function (tx, results) {
							   if(results.rows.length > 0){
								   var codeToData = {
										   code:self.get("selectedItemsForEstimate")[i].indexCode,
										   itemIndex:i,
								   		   datas:[]
								   };
								   var costForItem = 0;
								   
								   //var isMaterial = false;
								   leadMaterialsInDataItem = [];
								   metalMeasures = [];
								   for(var j=0;j<results.rows.length;j++){
									   var item = JSON.parse(JSON.stringify(results.rows.item(j)));
									   var description = item.Description;
									   if(item.SubBullet ){
										   //resetting cost for item when it comes across sub bullet
										   costForItem = 0;
										   if(selectedSubItems.indexOf(item.SubBullet) != -1 ){
											   pushAll = true; 
										   }else{
											   pushAll = false;
										   }
									   }

									   if(j == 0 || pushAll){
										   codeToData.datas.push(item);
									   }  
									   
									   /*if(pushAll && isMaterial){
										   if(/^\([a-z]\)/.test(description) || description.indexOf('a+b+c') != -1){
											   isMaterial = false;
										   }else{
											   materialsInSelectedDatas.push(description);
										   }
									   }
									   
									   //code to get list of materials
									   if(pushAll){
										   if(description != null && description.indexOf('Material') !=-1 && description.indexOf('Material') < 9){
											   //List of Labour rows started.
											   isMaterial = true;
										   }							   
									   }*/
									   
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
								   DatasUtil.beuatifyDatas(codeToData.datas);
								   codeToDatas.push(codeToData);
							   }


							   i++;
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
							   
							   //--adding to lead end-----
							   if(i<self.get("selectedItemsForEstimate").length){
								  getItems(i);
							   }else{
								   self.set("codeToDatas",codeToDatas);
								  
								   var dbData = "";
								   var dbLeadMaterials = self.get("leadMaterialsFromDB");
								   if(leadCodes.length > 0){
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
									   self.set("listOfLeadMaterials",leadMaterialObjects);
									   appRouter.navigate("leadstatement",{trigger:true});
								   }else{
									   appRouter.navigate("datasForSelectedItems",{trigger:true});
								   }
								  

								

								   //console.log(materialsInSelectedDatas.join("\n"));
							   }
						   },null);
						};
						getItems(i);
	

					});

			},
			prepareTableToItemsMap : function(){
				var resultRows=[];
				
				var selectedTable= this.get("selectedTable");
				var chapterToItem = [];
				var chapterToItemsMap = {
						tableName:"",
						indexDatas:[]       
				};
				var indexToItemsArray = [];
				var indexToItems = {//empty the array
						indexCode : "",
						itemIndex : "",
						itemsArr :[]
				};
				
				var thisModel = this;
				db.transaction(function (tx) {
					var i = 0;
					chapterToItem.tableName = selectedTable;
					//alert("selectedTable");
					tx.executeSql('SELECT * FROM '+selectedTable, [], function (tx, results) {
						console.log("successfully read");
						for(var j=0;j<results.rows.length;j++){

							var item = JSON.parse(JSON.stringify(results.rows.item(j)));
							if(item.IndexCode){
								item.tableName = selectedTable;
								chapterToItemsMap.indexDatas.push(item);
								if(j){
									//for the first item don't push to array 
									indexToItemsArray.push(indexToItems);
									indexToItems = {//empty the array
											indexCode : "",
											itemsArr :[]
									};
								} 
								indexToItems.indexCode = item.IndexCode;
								indexToItems.itemIndex = item.SNo;
							}
							indexToItems.itemsArr.push(item);
				
						}
						//to push last item in the chapter
						indexToItemsArray.push(indexToItems);
						console.log(indexToItemsArray);

						thisModel.set("indexToItems",indexToItemsArray);
						thisModel.set("chapterToItemsMap",chapterToItemsMap);
						//appRouter.navigate("datasInChpater",{trigger:true});
						thisModel.trigger("itemsReadFromChapter");
					 }, null);		
					});

			},
			addDefaultItemsForEstimate : function(){
					 var itemsToAdd = this.get("selectedDatasToAdd");
					 var itemsInSql = "";	
					 var self = this;
					 for(var i=0;i<itemsToAdd.length;i++){
						 if(i==0){
							 itemsInSql += "INSERT INTO '\Defaults\' Select \'CCROAD\' AS \'EstimationType\',"+"\'"+ itemsToAdd[i].TableName +"' AS \'TableName\',"+"\'"+itemsToAdd[i].IndexCode+"' AS \'IndexCode\'"; 
						 }else{
							 itemsInSql +=  "UNION SELECT \'CCROAD\',"+"\'"+itemsToAdd[i].tableName+"\'"+","+"\'"+itemsToAdd[i].indexCode+"\'";	 
						 }
					 }	 
					 console.log(itemsInSql);
					 db.transaction(function (tx) {	 
						 tx.executeSql(itemsInSql,function(){},function(){self.getDefaultItemsForCCRoad()});
					 },function(){console.log("error occured in adding items to defualts")});
			},
			runQuery : function(query){
				console.log(query);
				var resultRows=[];
				db.transaction(function (tx) {
					   tx.executeSql(query, [], function (tx, results) {
						console.log("successfully read");
						resultRows = results.rows;
						console.log(resultRows);
						return resultRows;
					 }, null);
				});

			},
			deleteDefaultItem : function(dataToDelete){
				var self = this;
				var dataToDel = [];
				dataToDel.push(dataToDelete);
				var updatedList =  _.difference(this.get("defaultDatasFromDB"), dataToDel);
				this.set("defaultDatasFromDB",updatedList);
				var itemsToUpdate = updatedList.join(",");
				var type = this.get("estType");
				db.transaction(function (tx) {
					tx.executeSql('UPDATE DefaultDatas SET Datas=? WHERE Type=?',[itemsToUpdate,type], function (tx, results) {
						var defaultDatas = self.get("indexToDatasArray");
						var newDefaults = [];
						for(var index in defaultDatas){
							if(defaultDatas[index].IndexCode != dataToDelete){
								newDefaults.push(defaultDatas[index])
							}
						}
						self.set("indexToDatasArray",newDefaults);
						self.trigger("reRenderDefaultsView");
					});
				})
			},
			getDefaultLeadMaterialsFromDB:function(){
				var self = this;
				var leadMaterialDetailsFromDB = [];
				db.transaction(function (tx) {
					tx.executeSql('Select * FROM LeadRates', [], function (tx, results) {
						for(var i=0;i<results.rows.length; i++){
							leadMaterialDetailsFromDB.push(JSON.parse(JSON.stringify(results.rows.item(i))));
						}
						self.set("leadMaterialsFromDB",leadMaterialDetailsFromDB);
						console.log(leadMaterialDetailsFromDB);
					});
				})
				this.getConvChargesFromDB();
			},
			getConvChargesFromDB:function(){
				var self = this;
				var convChargesFromDB = [];
				db.transaction(function (tx) {
					tx.executeSql('Select * FROM ConvCharges', [], function (tx, results) {
						for(var i=0;i<results.rows.length; i++){
							convChargesFromDB.push(JSON.parse(JSON.stringify(results.rows.item(i))));
						}
						self.set("convChargesFromDB",convChargesFromDB);
						console.log(convChargesFromDB);
					});
				})
				
			},

			
			createCopyOfEstimate : function(newEstId,parentEstId){
				var self = this;
				db.transaction(function (tx) {
					//Read Parent estimate details
					tx.executeSql('SELECT * FROM UserEstimateHistory', [], function (tx, results) {
						if(results.rows.length == 1){
							var estDetails = JSON.parse(JSON.stringify(results.rows.item(0)));
							self.set("estimateDetails",estDetails);
						}
						//Read Lead data
						tx.executeSql('SELECT * FROM UserLeadData', [], function (tx, results) {
							var leadDataArr = [];
							for(var leadData =0;leadData <results.rows.length;leadData++){
								var leadMaterial = JSON.parse(JSON.stringify(results.rows.item(leadData)));
								leadDataArr.push( leadMaterial );	
							}
							self.set("listOfLeadMaterials",leadDataArr);
							//Read Data's
							tx.executeSql('SELECT * FROM UserEstimateLBDs', [], function (tx, results) {
								var codeToRates = [];
								for(var lbdData =0;lbdData < results.rows.length;lbdData++){
									var leadMaterial = JSON.parse(JSON.stringify(results.rows.item(lbdData)));
									codeToRates.push( leadMaterial );
								}
								self.set("codeToRates",codeToRates);
								//Read Data's
								tx.executeSql('SELECT * FROM UserEstimateDatas', [], function (tx, results) {
									var userDatas = [];
									for(var userData =0;userData < results.rows.length;userData++){
										var leadMaterial = JSON.parse(JSON.stringify(results.rows.item(userData)));
										userDatas.push( leadMaterial );
									}
									self.set("selectedItemsForEstimate",userDatas);
									//Creapte copy of Data's
									self.saveEstimateDetails(newEstId);
								});
								
							});
							
						});
						
					});
				})
			},
			readEstimateHistory:function(){
				var estimateHistory = [];
				var self = this;
				db.transaction(function (tx) {
					tx.executeSql('SELECT * FROM UserEstimateHistory', [], function (tx, results) {
						for(var i=0;i<results.rows.length; i++){
							estimateHistory.push(JSON.parse(JSON.stringify(results.rows.item(i))));
						}
						self.set("estimateHistory",estimateHistory);
						console.log(estimateHistory);
						appRouter.navigate("#history",{trigger:true});
					});
				})
			},
			readDatasForPDF : function(EstimateID){
				var selectedItemsForEstimate = [];
				var self = this;
				db.transaction(function (tx) {
					tx.executeSql('SELECT * FROM UserEstimateDatas where EstimateID="'+EstimateID+'"', [], function (tx, results) {
						for(var i=0;i<results.rows.length; i++){
							var indexToTableItem = {
									"indexCode":"",
									"tableName":"",
									"selectedSubItems":[]
								};
							var savedDataItem = JSON.parse(JSON.stringify(results.rows.item(i)));
							var dataCodes = savedDataItem.data.split('*');
							indexToTableItem.indexCode = dataCodes[0];
							indexToTableItem.tableName = savedDataItem.tableName;
							for(var subItems = 1;subItems<dataCodes.length;subItems++){
								indexToTableItem.selectedSubItems.push(dataCodes[subItems]);
							}
							selectedItemsForEstimate.push(indexToTableItem);
						}
						self.set("selectedItemsForEstimate",selectedItemsForEstimate);
						self.getDatasForEstimate();
					});
				})
			},
		
			/*,
			getMaterialsTobeConsideredInLead:function(){
				var self = this;
				var selectedDatas = this.get("indexToTableItem");
				db.transaction(function (tx) {
					tx.executeSql('DELETE FROM Defaults where IndexCode="'+dataToDelete+'"', [], function (tx, results) {
						var defaultDatas = self.get("indexToDatasArray");
						var newDefaults = [];
						for(var index in defaultDatas){
							if(defaultDatas[index].IndexCode != dataToDelete){
								newDefaults.push(defaultDatas[index])
							}
						}
						self.set("indexToDatasArray",newDefaults);
						self.trigger("reRenderDefaultsView");
					});
				})
			}*/
		});

		_.extend(model.prototype.defaults, BaseModel.prototype.defaults);

		BaseDataSheetModel.model = new model();

		return BaseDataSheetModel;

	})();

	return App.BaseDataSheetModel;
});


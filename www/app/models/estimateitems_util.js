
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
				leadCodesInEstimate:[],
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
				//this.getDefaultLeadMaterialsFromDB();
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

						self.set("defaultDatasFromDB",defDatas);
						var i = 0;
						if(defDatas.length > 0){
							var getItems = function(indexCode){
								
									var selectedSubItems = [];
									var dataCodeSplit = indexCode.split("*");
									for(var j=0;j<dataCodeSplit.length;j++){
										if(j == 0){
											indexCode = dataCodeSplit[j];	
										}else{
											selectedSubItems.push(dataCodeSplit[j]);
										}
									}
								   var splitArr = indexCode.split("-");
								   	   splitArr[splitArr.length-1] = Number(splitArr[splitArr.length-1])+1;
								   var nextIndexCode = splitArr.join("-");	   
								   var tableName = DatasUtil.getTableName(indexCode);
								   tx.executeSql('SELECT * FROM '+tableName+' WHERE rowid>=(select rowid FROM '+tableName+' WHERE IndexCode="'+indexCode+'") AND rowid<(Select rowid from '+tableName+' where IndexCode="'+nextIndexCode+'")', [], function (tx, results) {
									   if(results.rows.length > 0){
										   var indexToDataItem = {
												    "TableName":tableName,
												    "dataIndex":i,
													"IndexCode":indexCode,
													"description":"",
													"itemsArr":[],
													"subitemsArray":[], //To save list of sub items
													"selectedSubItems":selectedSubItems //To save selected once ex: 1L, 1.1.2L...
										   };
										   for(var j=0;j<results.rows.length;j++){
											   var item = JSON.parse(JSON.stringify(results.rows.item(j)));
											   var subitem = {
													"subIndex":"",
													"subItemID":"",
													"subItemDesc":"",
													"subDataId":""
											   }
											   if(j==0){
												   indexToDataItem.description = item.Description;  
											   }
											   //To capture sub items in Building data's - item.SNo
											   //To capture sub items in RNB data's - item.SubBullet
											   if((item.SNo && j !=0) || item.SubBullet){
												   if(item.SNo){
													   subitem.subItemID = item.SNo;
												   }
												   if(item.SubBullet){
													   subitem.subItemID = item.SubBullet; 
												   }
												   subitem.subDataId = item.SubDatas;
												   subitem.subItemDesc = item.Description;
												   subitem.subIndex = indexToDataItem.subitemsArray.length;
												   indexToDataItem.subitemsArray.push(subitem);
												  // console.log("subitems:"+JSON.stringify(subitemsArray));
											   }
											   
											   indexToDataItem.itemsArr.push(item);
										   }
										   //DatasUtil.formatDatas(indexToDataItem);
										   indexToDatasArray.push(indexToDataItem);
									   }
									   i++;
									   if(i<defDatas.length){
										   getItems(defDatas[i]);
									   }else{
										   self.set("indexToDatasArray",indexToDatasArray);
										   DatasUtil.getListOfDatasForEstimate(self);
										   appRouter.navigate("#pickItemsForEstimate",{trigger:true});  					   
									   }
								   },null);
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
			},
			getDatasForEstimate : function(){
				var selIndexLength = this.get("selectedItemsForEstimate").length;
				var self= this;
				var i=0;
				var codeToDatas = [];
				var leadsInSelectedDatas = [];
				db.transaction(function (tx) {	  
						var getItems = function(){	
						   var indexCode = self.get("selectedItemsForEstimate")[i].indexCode;
						   var splitArr = indexCode.split("-");
						   	   splitArr[splitArr.length-1] = Number(splitArr[splitArr.length-1])+1;
						   var nextIndexCode = splitArr.join("-");	
						   
						   var tableName = self.get("selectedItemsForEstimate")[i].tableName;
						   var selectedSubItems = self.get("selectedItemsForEstimate")[i].selectedSubItems;
						   var pushAll = true;
						   console.log('SELECT * FROM '+tableName+' WHERE rowid>=(select rowid FROM '+tableName+' WHERE IndexCode="'+indexCode+'") AND rowid<(Select rowid from '+tableName+' where IndexCode="'+nextIndexCode+'")');
						   tx.executeSql('SELECT * FROM '+tableName+' WHERE rowid>=(select rowid FROM '+tableName+' WHERE IndexCode="'+indexCode+'") AND rowid<(Select rowid from '+tableName+' where IndexCode="'+nextIndexCode+'")', [], function (tx, results) {
							   if(results.rows.length > 0){
								   var codeToData = {
										   code:self.get("selectedItemsForEstimate")[i].indexCode,
										   itemIndex:i,
								   		   datas:[]
								   };
								   var costForItem = 0;
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
								   }
								   DatasUtil.beuatifyDatas(codeToData.datas);
								   var leadCodesInDataItem = DatasUtil.getLeadCodesInDataItem(codeToData.datas);
								   
								   for(var leadCode in leadCodesInDataItem){
									   if( !_.contains(leadsInSelectedDatas,leadCodesInDataItem[leadCode] )){
										   leadsInSelectedDatas.push(leadCodesInDataItem[leadCode]);
									   }
								   }
								   codeToDatas.push(codeToData);
							   }
							   i++;					   
							   if(i<self.get("selectedItemsForEstimate").length){
								  getItems(i);
							   }else{
								   self.set("codeToDatas",codeToDatas);
								   if(leadsInSelectedDatas.length > 0){
									   self.set("leadCodesInEstimate",leadsInSelectedDatas);
									   DatasUtil.prepareLeadMaterialMap(leadsInSelectedDatas,self);
								   }else{
									   appRouter.navigate("datasForSelectedItems",{trigger:true});
								   }
								   //console.log(materialsInSelectedDatas.join("\n"));
							   }
						   },null);
						};
						getItems(i);
	

					});

			},*/
			prepareTableToItemsMap : function(){
				var resultRows=[];
				
				var selectedTable= this.get("selectedTable");
				var chapterToItem = [];
				var chapterToItemsMap = {
						tableName:"",
						indexDatasArr:[]
				};
				var indexToItemsArray = [];
				var indexToItems = {//empty the array
						indexCode : "",
						itemIndex : "",
						itemsArr :[]
				};
				
			   var indexData = {
						item:"",
						subitemsArray:[]
					} 
				
				var thisModel = this;
				db.transaction(function (tx) {
					var i = 0;
					chapterToItem.tableName = selectedTable;
					//alert("selectedTable");
					tx.executeSql('SELECT * FROM '+selectedTable, [], function (tx, results) {
						console.log("successfully read");
						for(var j=0;j<results.rows.length;j++){
							
							var item = JSON.parse(JSON.stringify(results.rows.item(j)));
							var isIndexItem = false;
							if(item.IndexCode){
								isIndexItem = true;
								if(j){
									//for the first item don't push to array 
									indexToItemsArray.push(indexToItems);
									chapterToItemsMap.indexDatasArr.push(indexData);
									indexToItems = {//empty the array
											indexCode : "",
											itemsArr :[]
									};
									indexData = {
											item:"",
											subitemsArray:[]
									} 
								} 
								item.tableName = selectedTable;
								indexData.item = item;
								indexToItems.indexCode = item.IndexCode;
								indexToItems.itemIndex = item.SNo;
							}
							/* */
							
							 var subitem = {
									"subIndex":"",
									"subItemID":"",
									"subItemDesc":"",
									"subDataId":""
							   }

							   //To capture sub items in Building data's - item.SNo
							   //To capture sub items in RNB data's - item.SubBullet
							   if((item.SNo && !isIndexItem) || item.SubBullet){
								   if(item.SNo){
									   subitem.subItemID = item.SNo;
								   }
								   if(item.SubBullet){
									   subitem.subItemID = item.SubBullet; 
								   }
								   subitem.subDataId = item.SubDatas;
								   subitem.subItemDesc = item.Description;
								   subitem.subIndex = indexData.subitemsArray.length;
								   indexData.subitemsArray.push(subitem);
								  // console.log("subitems:"+JSON.stringify(subitemsArray));
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
						self.getConvChargesFromDB();
					});
				})
				//this.getConvChargesFromDB();
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
						//DatasUtil.prepareLeadMaterialMap(self.get("leadCodesInEstimate"),self);
						appRouter.navigate("leadstatement",{trigger:true});
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


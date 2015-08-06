

define([ 'models/base_model'], function(BaseModel) {

	var App = {};

	App.BaseDataSheetModel = (function() {

		var BaseDataSheetModel = {};

		var model = BaseModel.extend({

			defaults : {
				db:null,
				defualtItems:"",
				selectedTable:"",
				tableToItemMap:"",
				testItems:"",
				datas:"",
				selectedItemsForEstimate:"",
				codeToDatas:"",
				chapterToItemsMap:"",
				codeToRates:"",
				
				indexToDatasArray:"",
				chapterTitle:"",
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
				listOfLeadMaterials:[]
			},
			initialize : function(options) {
				db = openDatabase('RoadsAndBridges','', 'Test DB', 5 * 1024 * 1024);
				if(db == null){
					console.log("Cannot read bad luck !!")
				}else{
					console.log("+++++++++++++"+db);
				}
			},
			getDefaultItemsForCCRoad : function(){
				var indexToDatasArray = [];
				var self= this;
				db.transaction(function (tx) {
					  //Read default items
					  tx.executeSql('SELECT * FROM DEFAULTS WHERE EstimationType = "CCROAD"', [], function (tx, defaultItems) {
						console.log("successfully read");
						var i=0;
						var getItems = function(){
						   var sNo = defaultItems.rows.item(i).IndexCode.split("-")[2];
						   var nextSNo = Number(sNo)+1;
						   var tableName = defaultItems.rows.item(i).TableName;
						   tx.executeSql('SELECT * FROM '+tableName+' WHERE rowid>=(select rowid FROM '+tableName+' WHERE SNo="'+sNo+'") AND rowid<(Select rowid from '+tableName+' where SNo="'+nextSNo+'")', [], function (tx, results) {
							   if(results.rows.length > 0){

								   var indexToTableItem = {
										    "TableName":tableName,
											"IndexCode":"",
											"description":"",
											"subitemsArray":[]
								   };
								   indexToTableItem.IndexCode = defaultItems.rows.item(i).IndexCode;
								   var subitemsArray = [];
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
							   if(i<defaultItems.rows.length){
								   getItems(i);
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
						getItems(i);
	
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
						   var sNo = self.get("selectedItemsForEstimate")[i].indexCode.split("-")[2];
						   var nextSNo = Number(sNo)+1;
						   var tableName = self.get("selectedItemsForEstimate")[i].tableName;
						   var selectedSubItems = self.get("selectedItemsForEstimate")[i].selectedSubItems;
						   var pushAll = true;
						   var leadMaterialsInDataItem = [];
						   var metalMeasures = [];
						   /*if(selectedSubItem != ""){
							   pushAll = false;
						   }*/
						   console.log('SELECT * FROM '+tableName+' WHERE rowid>=(select rowid FROM '+tableName+' WHERE SNo="'+sNo+'") AND rowid<(Select rowid from '+tableName+' where SNo="'+nextSNo+'")');
						   tx.executeSql('SELECT * FROM '+tableName+' WHERE rowid>=(select rowid FROM '+tableName+' WHERE SNo="'+sNo+'") AND rowid<(Select rowid from '+tableName+' where SNo="'+nextSNo+'")', [], function (tx, results) {
							   if(results.rows.length > 0){
								   var codeToData = {
										   code:self.get("selectedItemsForEstimate")[i].indexCode,
										   itemIndex:i,
								   		   datas:[]
								   };
								   var costForItem = 0;
								   var costForIndex = 0;
								   //var isMaterial = false;
								   leadMaterialsInDataItem = [];
								   metalMeasures = [];
								   for(var j=0;j<results.rows.length;j++){
									   
									   //Loop through all rows for data item
									   if(results.rows.item(j).Amount != null){
										   //This is to add amount for all items in a data item.
										   costForItem += Number(results.rows.item(j).Amount);
									   }
									   var item = JSON.parse(JSON.stringify(results.rows.item(j)));
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
									   }*/
									   
									   //code to get list of materials
									   if(pushAll){
										   if(description != null && description.indexOf('Material') !=-1 && description.indexOf('Material') < 9){
											   //List of Labour rows started.
											   isMaterial = true;
										   }							   
									   }
									   
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
								   codeToDatas.push(codeToData);
							   }


							   i++;
							   //--adding to lead begin----
							  //check if lead Material's has L1
							  if( _.contains(leadMaterialsInDataItem, "L1") ){
								  //check if lead Material's also has L2
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
													"isMetal":false
										   }
										   if(leadCodes[code]=="L1A"){
											   leadMaterialItem.material = "Sand for Filling";
											   leadMaterialItem.initialCost = "320";
											   leadMaterialItem.seigCharges = "20";
											   leadMaterialItem.unit = "Cum";
										   }
										   if(leadCodes[code]=="L1B"){
											   leadMaterialItem.material = "Sand for Mortor";
											   leadMaterialItem.initialCost = "320";
											   leadMaterialItem.seigCharges = "20";
											   leadMaterialItem.unit = "Cum";
										   }
										   if(leadCodes[code]=="L2"){
											   leadMaterialItem.material = "Cement";
											   leadMaterialItem.initialCost = "320";
											   leadMaterialItem.seigCharges = "20";
											   leadMaterialItem.unit = "Cum";
										   }
										   if(leadCodes[code].indexOf("L3") != -1){
											   leadMaterialItem.material = leadCodes[code].substring(2,leadCodes[code].length)+" H.B.G metal";
											   leadMaterialItem.initialCost = "320";
											   leadMaterialItem.seigCharges = "20";
											   leadMaterialItem.unit = "Cum";
											   leadMaterialItem.isMetal = true;
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
						appRouter.navigate("datasInChpater",{trigger:true});
					 }, null);		
					});

			},
			addDefaultItemsForEstimate : function(){
					 var itemsToAdd = this.get("chosenItems");
					 var itemsInSql = "";	
					 var self = this;
					 for(var i=0;i<itemsToAdd.length;i++){
						 if(i==0){
							 itemsInSql += "INSERT INTO '\Defaults\' Select \'CCROAD\' AS \'EstimationType\',"+"\'"+ itemsToAdd[i].tableName +"' AS \'TableName\',"+"\'"+itemsToAdd[i].indexCode+"' AS \'IndexCode\'"; 
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
			}/*,
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


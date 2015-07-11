

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
				//indexToTableItems:"",
				indexToDatasArray:"",
				tableList:['BasesAndSurface','CauAndSubMerBridges','CCPAVEMENT','EECD','Foundation','GEOSYNTHETICS','GranSubBases','HillRoads','Horticulture','LUCANDC','MaintOfRoads','PipeCulverts','ProtectionWorks','Repair','SiteClearence','SubStructure','SuperStructure','TrafficSigns'],
				leadMaterials : [{
					"material":"Sand for Mortor",
					"initialCost":"385",
					"seigCharges":"40",
					"unit":"Cum"
				},{
					"material":"Sand for Filling",
					"initialCost":"285",
					"seigCharges":"40",
					"unit":"Cum"
				}],
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
				db.transaction(function (tx) {	  
					    var materialRowIds = [];
						var getItems = function(){
						   var sNo = self.get("selectedItemsForEstimate")[i].indexCode.split("-")[2];
						   var nextSNo = Number(sNo)+1;
						   var tableName = self.get("selectedItemsForEstimate")[i].tableName;
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
									   if(item.SubBullet){
										   //resetting cost for item when it comes across sub bullet
										   costForItem = 0;
									   }
									   
									   codeToData.datas.push(item);
								   }
								   codeToDatas.push(codeToData);
							   }
							   i++;
							   if(i<self.get("selectedItemsForEstimate").length){
								   getItems(i);
							   }else{
								   self.set("codeToDatas",codeToDatas);
								   appRouter.navigate("datasForSelectedItems",{trigger:true});
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

			}
		});

		_.extend(model.prototype.defaults, BaseModel.prototype.defaults);

		BaseDataSheetModel.model = new model();

		return BaseDataSheetModel;

	})();

	return App.BaseDataSheetModel;
});


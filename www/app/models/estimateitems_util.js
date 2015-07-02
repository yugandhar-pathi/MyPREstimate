

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
				var ccroaddefualtItems = [];
				var self= this;
				db.transaction(function (tx) {
					  tx.executeSql('SELECT * FROM DEFAULTS WHERE EstimationType = "CCROAD"', [], function (tx, results) {
						console.log("successfully read");
						var i=0;
						var getItems = function(){
						   console.log('SELECT * FROM '+ results.rows.item(i).TableName +' WHERE IndexCode = '+'"'+results.rows.item(i).IndexCode+'"');
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
						   },null);
						};
						getItems(i);
	
					  }, null);
				});

			},
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
				var chapterToItemsMap = {
						tableName:"",
						items:[]
				};
	
				var thisModel = this;
				db.transaction(function (tx) {
					var i = 0;
					chapterToItemsMap.tableName = selectedTable;
					console.log(chapterToItemsMap.name);
					console.log('SELECT * FROM '+selectedTable+' where indexcode not null'+'----'+i);
					tx.executeSql('SELECT * FROM '+selectedTable+' where indexcode not null', [], function (tx, results) {
						console.log("successfully read");
						for(var j=0;j<results.rows.length;j++){
							var item = JSON.parse(JSON.stringify(results.rows.item(j)));
							item.tableName = selectedTable
							chapterToItemsMap.items.push(item);
						}
						console.log(chapterToItemsMap.items[0].tableName);
						console.log(chapterToItemsMap.items);
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


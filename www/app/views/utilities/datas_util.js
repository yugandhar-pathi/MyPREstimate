define([],function(){
	var datas_util = {
			beuatifyDatas:function(dataList){
				var costForItem = 0;
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
			}
	};
	return datas_util;
});
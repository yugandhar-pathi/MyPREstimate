// var doc = new jsPDF('p', 'pt', 'letter');
								   //--------------BEGIN ------------------------------------
								   
								  // $(document).on("click", "#btnExportToPDF", function () { 

								        //var table1 = tableToJson($('#table1').get(0)),
								    var cellWidth = 35,
								        rowCount = 0,
								        cellContents,
								        leftMargin = 2,
								        topMargin = 12,
								        topMarginTable = 55,
								        headerRowHeight = 33,
								        rowHeight = 9,

								     l = {
								         orientation: 'l',
								         unit: 'mm',
								         format: 'a3',
								         compress: true,
								         fontSize: 8,
								         lineHeight: 4,
								         autoSize: true,
								         printHeaders: true
								     };

								    var doc = new jsPDF(l, 'pt', 'letter');

								    doc.setProperties({
								        title: 'Test PDF Document',
								        subject: 'This is the subject',
								        author: 'author',
								        keywords: 'generated, javascript, web 2.0, ajax',
								        creator: 'author'
								    });

								    doc.cellInitialize();
								    

								   $.each(codeToDatas, function (j, code)
								    {

									   var rowCount = 0;


								        $.each(code.datas, function (i, data) {
								        	 rowCount++;
								            if (rowCount == 1) {
								                doc.margins = 1;
								                doc.setFont("helvetica");
								                doc.setFontType("bold");
								                doc.setFontSize(9);
								                Object.keys(data).forEach(function(key,index) { 
								                	//key = the name of the object key 
								                	//index = the ordinal position of the key within the object 
								                	 var cellContent = data[key];
								                	 if(!cellContent){
								                		 cellContent = " ";
								                	 }
								                	 if(index == 0 || index == 2 || index == 4 || index == 6 || index == 8){
								                		 cellWidth = 70;
								                		 doc.cell(leftMargin, topMargin, cellWidth, headerRowHeight, cellContent, i)
								                	 }else{
								                		 cellWidth = 35;
								                	 }
								                	 
								                	});
								                
											    /*for (var property in data) {
											        if (object.hasOwnProperty(property)) {
											            // do stuff
											        	 doc.cell(leftMargin, topMargin, cellWidth, headerRowHeight, object, i)
											        }
											    }*/
								               
								            }
								            else if (rowCount == 2) {
								                doc.margins = 1;
								                doc.setFont("times");
								               // doc.setFontType("italic");  // or for normal font type use ------ doc.setFontType("normal");
								                doc.setFontSize(9);                    

								                //doc.cell(leftMargin, topMargin, cellWidth, rowHeight, cellContent, i);
								                Object.keys(data).forEach(function(key,index) { 
								                	//key = the name of the object key 
								                	//index = the ordinal position of the key within the object 
								                	 var cellContent = data[key];
								                	 if(!cellContent){
								                		 cellContent = " ";
								                	 }
								                	 doc.cell(leftMargin, topMargin, cellWidth, headerRowHeight, cellContent, i)
								                	});
								            }
								            else {

								                doc.margins = 1;
								                doc.setFont("courier");
								                doc.setFontType("bolditalic");
								                doc.setFontSize(9);                    

								                //doc.cell(leftMargin, topMargin, cellWidth, rowHeight, cellContent, i);  // 1st=left margin    2nd parameter=top margin,     3rd=row cell width      4th=Row height
								                Object.keys(data).forEach(function(key,index) { 
								                	 //key = the name of the object key 
								                	 //index = the ordinal position of the key within the object 
								               	    var rowHeight = doc.splitTextToSize(String(data.Description),50);
								                	//var rowHeight = 
								                	 var textArr = [];
								                	 var cellContent = data[key];
								                	 if(!cellContent){
								                		 cellContent = " ";
								                		 textArr.push(cellContent);
								                	 }else{
								                		 //cellContent = cellContent.match(/(.{1,40})/g);
								                		 /*if(cellContent.length > 40){
									                		 for(var k = 40; k < cellContent.length; k += 40){ // length 4, for example
									                			 textArr.push(cellContent.slice(k-40, k));
									                		 }	 
								                		 }else{
								                			 textArr.push(cellContent); // last fragment
								                		 }*/
								                	
								                		 textArr = ["hello","yes"];
								                	 }
								                	 doc.cell(leftMargin, topMargin, cellWidth, headerRowHeight, rowHeight, i);
								                	});
								            }
								        })
								    })

								doc.save('sample Report.pdf');  //})
								   
								   
								   
								   //-----------------END--------------------------------------
						    		/*require(['views/pdf/pdfdatas_view'], function(datas) {
						    			
						    			var dataView = new datas();
						    			dataView.render();
										doc.fromHTML(dataView.el);
										doc.save('Test.pdf');	
						    		});*/
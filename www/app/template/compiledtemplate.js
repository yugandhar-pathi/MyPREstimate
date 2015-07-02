this["Handlebars"] = this["Handlebars"] || {};
this["Handlebars"]["templates"] = this["Handlebars"]["templates"] || {};

this["Handlebars"]["templates"]["selectestimate_abstractestimate"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, functionType="function", self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\r\n		  <tr>\r\n		    <td>"
    + escapeExpression((helper = helpers.add || (depth0 && depth0.add),options={hash:{},data:data},helper ? helper.call(depth0, (data == null || data === false ? data : data.index), 1, options) : helperMissing.call(depth0, "add", (data == null || data === false ? data : data.index), 1, options)))
    + "</td>\r\n		    <td colspan=\"7\">";
  if (helper = helpers.description) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.description); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\r\n		    <td></td>\r\n		    <td></td>\r\n		    <td></td>\r\n		    <td></td>\r\n		    <td></td>\r\n		  </tr>\r\n		  <tr>\r\n		    <td></td>\r\n		    <td></td>\r\n		    <td style=\"width:6%\"><input type=\"number\" class=\"measurement\" data-index=\""
    + escapeExpression(((stack1 = (data == null || data === false ? data : data.index)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" id=\"Nos1"
    + escapeExpression(((stack1 = (data == null || data === false ? data : data.index)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"/></td>\r\n		    <td>X</td>\r\n		    <td style=\"width:6%\"><input type=\"number\" class=\"measurement\" data-index=\""
    + escapeExpression(((stack1 = (data == null || data === false ? data : data.index)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" id=\"Nos2"
    + escapeExpression(((stack1 = (data == null || data === false ? data : data.index)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"/></td>\r\n		    <td style=\"width:10%\"><input type=\"number\" class=\"measurement\" data-index=\""
    + escapeExpression(((stack1 = (data == null || data === false ? data : data.index)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" id=\"length"
    + escapeExpression(((stack1 = (data == null || data === false ? data : data.index)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"/></td>\r\n		    <td style=\"width:10%\"><input type=\"number\" class=\"measurement\" data-index=\""
    + escapeExpression(((stack1 = (data == null || data === false ? data : data.index)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" id=\"breadth"
    + escapeExpression(((stack1 = (data == null || data === false ? data : data.index)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"/></td>\r\n		    <td style=\"width:10%\"><input type=\"number\" class=\"measurement\" data-index=\""
    + escapeExpression(((stack1 = (data == null || data === false ? data : data.index)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" id=\"depth"
    + escapeExpression(((stack1 = (data == null || data === false ? data : data.index)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"/></td>\r\n		    <td id=\"totalUnits"
    + escapeExpression(((stack1 = (data == null || data === false ? data : data.index)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"></td>\r\n		    <td></td>\r\n		    <td></td>\r\n		    <td></td>\r\n		    <td></td>\r\n		  </tr>\r\n		  <tr>\r\n		    <td></td>\r\n		    <td></td>\r\n		    <td></td>\r\n		    <td></td>\r\n		    <td></td>\r\n		    <td></td>\r\n		    <td></td>\r\n		    <td></td>\r\n		    <td id=\"quantity"
    + escapeExpression(((stack1 = (data == null || data === false ? data : data.index)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"></td>\r\n		    <td>Cum</td>\r\n		    <td id=\"itemRate"
    + escapeExpression(((stack1 = (data == null || data === false ? data : data.index)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">";
  if (helper = helpers.rate) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.rate); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\r\n		    <td>/1cum</td>\r\n		    <td id=\"totalAmount"
    + escapeExpression(((stack1 = (data == null || data === false ? data : data.index)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"></td>\r\n		  </tr>\r\n		";
  return buffer;
  }

  buffer += "<div data-theme=\"b\" data-role=\"header\" data-position=\"fixed\">\r\n  	<a href=\"#leadstatement\" data-icon=\"arrow-l\">Back</a>\r\n	<h1 class=\"ui-title\">DETAILED CUM ABSTRACT</h1>\r\n</div><!-- /header -->\r\n\r\n<div role=\"main\" class=\"ui-content\" id=\"pageContent\">\r\n	<table data-role=\"table\" class=\"ui-body-d ui-shadow table-stripe ui-responsive\">\r\n	  <thead>\r\n	  	  <tr>\r\n		    <th colspan=\"8\"></th>\r\n		    <th colspan=\"5\"><strong>Est.Cost.Rs:<span id=\"absEstimateCost\"></span>Lakhs</strong></th>\r\n		  </tr>\r\n		  <tr>\r\n		    <th rowspan=\"2\">S.No</th>\r\n		    <th rowspan=\"2\">Description of item</th>\r\n		    <th colspan=\"3\" rowspan=\"2\">Nos</th>\r\n		    <th colspan=\"3\">Measurements</th>\r\n		    <th colspan=\"2\" rowspan=\"2\" >Qunatity</th>\r\n		    <th colspan=\"2\" rowspan=\"2\">Rate/Per</th>\r\n		    <th rowspan=\"2\">Amount</th>\r\n		  </tr>\r\n		  <tr>\r\n		    <th>L</th>\r\n		    <th>B</th>\r\n		    <th>D</th>\r\n		  </tr>\r\n	  </thead>\r\n	  <tbody>\r\n	  ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.codeToRates), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "  \r\n	  </tbody>\r\n	</table>\r\n</div><!-- /content -->";
  return buffer;
  });

this["Handlebars"]["templates"]["selectestimate_chooseitem"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, functionType="function", self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\r\n		  <tr>\r\n		    <td>"
    + escapeExpression((helper = helpers.add || (depth0 && depth0.add),options={hash:{},data:data},helper ? helper.call(depth0, (data == null || data === false ? data : data.index), 1, options) : helperMissing.call(depth0, "add", (data == null || data === false ? data : data.index), 1, options)))
    + "</td>\r\n		    <td>"
    + escapeExpression(((stack1 = (depth0 && depth0.IndexCode)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</td>\r\n		    <td>"
    + escapeExpression(((stack1 = (depth0 && depth0.Description)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</td>\r\n		    <td><input data-table=\""
    + escapeExpression(((stack1 = (depth0 && depth0.TableName)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" type=\"checkbox\" name=\"itemsSelected\" checked id=\""
    + escapeExpression(((stack1 = (depth0 && depth0.IndexCode)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"/></td>\r\n		  </tr>\r\n		  ";
  return buffer;
  }

  buffer += "<div data-theme=\"d\" data-role=\"header\" >\r\n	<a class=\"ui-btn-left ui-btn-corner-all ui-btn ui-icon-home ui-btn-icon-notext ui-shadow\" href=\"\" id=\"homePage\">Home</a>\r\n	<h1 class=\"ui-title\">Select Item</h1>\r\n</div><!-- /header -->\r\n\r\n<div role=\"main\" class=\"ui-content\" id=\"pageContent\">\r\n	<h2>DEFAULT ITEMS FOR CC ROAD ESTIMATION:</h2>			\r\n	<div>\r\n		<table data-role=\"table\" class=\"ui-body-d ui-shadow table-stripe ui-responsive\">\r\n		<thead>\r\n		  <tr>\r\n		    <th>Sl.No</th>\r\n		    <th>Item-Code</th>\r\n		    <th>Description</th>\r\n		    <th>Choose</th>\r\n		  </tr>\r\n		 </thead>\r\n		 <tbody id=\"estimateItems\"> \r\n		  ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.defualtItems), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n		  </tbody>\r\n		</table>\r\n	</div>\r\n	<input type=\"submit\" onclick=\"window.location.href='#listOfChapters'\" value=\"Add Other Items to Estimate\">\r\n	<input type=\"submit\" id=\"proceedToLeadStmt\" value=\"Proceed To Lead Statement\">\r\n</div><!-- /content -->\r\n";
  return buffer;
  });

this["Handlebars"]["templates"]["selectestimate_datasheet"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n	  	";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.datas), {hash:{},inverse:self.noop,fn:self.programWithDepth(2, program2, data, depth0),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n	  ";
  return buffer;
  }
function program2(depth0,data,depth1) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\r\n	  		";
  stack1 = (helper = helpers.compare || (depth0 && depth0.compare),options={hash:{
    'operator': ("==")
  },inverse:self.programWithDepth(5, program5, data, depth1),fn:self.programWithDepth(3, program3, data, depth1),data:data},helper ? helper.call(depth0, (data == null || data === false ? data : data.index), 0, options) : helperMissing.call(depth0, "compare", (data == null || data === false ? data : data.index), 0, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n	  	";
  return buffer;
  }
function program3(depth0,data,depth2) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\r\n		      <tr>\r\n		      	<td><strong>";
  if (helper = helpers.IndexCode) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.IndexCode); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</strong></td>\r\n		  		<td><strong>"
    + escapeExpression((helper = helpers.add || (depth2 && depth2.add),options={hash:{},data:data},helper ? helper.call(depth0, (depth2 && depth2.itemIndex), 1, options) : helperMissing.call(depth0, "add", (depth2 && depth2.itemIndex), 1, options)))
    + "</strong></td>\r\n		  		<td colspan=\"2\"><strong>";
  if (helper = helpers.Description) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.Description); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</strong></td>\r\n		  		<td></td>\r\n		  		<td></td>\r\n		  		<td></td>	\r\n		  	  </tr>		\r\n	  		";
  return buffer;
  }

function program5(depth0,data,depth2) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\r\n	  		  ";
  stack1 = (helper = helpers.isNull || (depth0 && depth0.isNull),options={hash:{},inverse:self.programWithDepth(22, program22, data, depth2),fn:self.program(6, program6, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.SubBullet), options) : helperMissing.call(depth0, "isNull", (depth0 && depth0.SubBullet), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n		  	";
  return buffer;
  }
function program6(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\r\n				  <tr>\r\n				    <td>";
  if (helper = helpers.Quantity) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.Quantity); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\r\n				    <td>";
  if (helper = helpers.Unit) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.Unit); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\r\n				    ";
  stack1 = (helper = helpers.compare || (depth0 && depth0.compare),options={hash:{
    'operator': ("==")
  },inverse:self.program(9, program9, data),fn:self.program(7, program7, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.descType), "Normal", options) : helperMissing.call(depth0, "compare", (depth0 && depth0.descType), "Normal", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n				    	<td>";
  if (helper = helpers.RateRs) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.RateRs); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\r\n				    ";
  stack1 = (helper = helpers.isNull || (depth0 && depth0.isNull),options={hash:{},inverse:self.program(16, program16, data),fn:self.program(14, program14, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.Unit), options) : helperMissing.call(depth0, "isNull", (depth0 && depth0.Unit), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n				    <td>";
  if (helper = helpers.Unit) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.Unit); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\r\n				    ";
  stack1 = (helper = helpers.isNull || (depth0 && depth0.isNull),options={hash:{},inverse:self.program(20, program20, data),fn:self.program(18, program18, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.Amount), options) : helperMissing.call(depth0, "isNull", (depth0 && depth0.Amount), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n				  </tr>\r\n			  ";
  return buffer;
  }
function program7(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\r\n				    	<td>";
  if (helper = helpers.Description) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.Description); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\r\n				    ";
  return buffer;
  }

function program9(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\r\n				    	";
  stack1 = (helper = helpers.compare || (depth0 && depth0.compare),options={hash:{
    'operator': ("==")
  },inverse:self.program(12, program12, data),fn:self.program(10, program10, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.descType), "RateOrCost", options) : helperMissing.call(depth0, "compare", (depth0 && depth0.descType), "RateOrCost", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "			    \r\n				    ";
  return buffer;
  }
function program10(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\r\n					    	<td style=\"color:red\"><strong>";
  if (helper = helpers.Description) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.Description); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</strong></td>\r\n					    ";
  return buffer;
  }

function program12(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\r\n					    	<td><strong>";
  if (helper = helpers.Description) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.Description); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</strong></td>				    	\r\n					    ";
  return buffer;
  }

function program14(depth0,data) {
  
  
  return "\r\n				    	<td></td>\r\n				    ";
  }

function program16(depth0,data) {
  
  
  return "\r\n				    	<td>1</td>\r\n				    ";
  }

function program18(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\r\n				    	<td>";
  if (helper = helpers.Amount) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.Amount); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\r\n				    ";
  return buffer;
  }

function program20(depth0,data) {
  
  var buffer = "", helper, options;
  buffer += "\r\n				    	<td>"
    + escapeExpression((helper = helpers.renderHTMLwithSplitAmount || (depth0 && depth0.renderHTMLwithSplitAmount),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.Amount), options) : helperMissing.call(depth0, "renderHTMLwithSplitAmount", (depth0 && depth0.Amount), options)))
    + "</td>  \r\n				    ";
  return buffer;
  }

function program22(depth0,data,depth3) {
  
  var buffer = "", stack1, helper;
  buffer += "\r\n				 <tr>\r\n				    <td>";
  if (helper = helpers.Quantity) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.Quantity); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\r\n				    <td><strong>";
  if (helper = helpers.SubBullet) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.SubBullet); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</strong></td>\r\n				    <td><strong>";
  if (helper = helpers.Description) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.Description); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</strong></td>\r\n				     <td>";
  if (helper = helpers.RateRs) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.RateRs); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\r\n				    <td></td>\r\n				    <td>";
  if (helper = helpers.Unit) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.Unit); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\r\n				    <td><input type=\"radio\" name=\""
    + escapeExpression(((stack1 = (depth3 && depth3.code)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"</td>\r\n				  </tr>		  		  \r\n			  ";
  return buffer;
  }

  buffer += "<div data-theme=\"d\" data-role=\"header\" >\r\n 	<a href=\"#leadstatement\" data-icon=\"arrow-l\" data-position=\"fixed\">Back</a>\r\n	<h1 class=\"ui-title\">Review Your Datas</h1>\r\n</div><!-- /header -->\r\n\r\n<div role=\"main\" class=\"ui-content\">\r\n	<table data-role=\"table\" class=\"ui-body-d ui-shadow table-stripe ui-responsive\">\r\n	  <thead>\r\n		  <tr>\r\n		    <th colspan=\"2\">NAME OF THE WORK:</th>\r\n		    <th colspan=\"5\">Testlakjsdfl alskjdflaksjdf</th>\r\n		  </tr>\r\n		  <tr>\r\n		    <th colspan=\"4\"></th>\r\n		    <th colspan=\"3\">ESt.Cost Rs:1.00Lakhs</th>\r\n		  </tr>\r\n		  <tr>\r\n		    <th colspan=\"2\">Quantity</th>\r\n		    <th>Description</th>\r\n		    <th>Rate</th>\r\n		    <th colspan=\"2\">Per</th>\r\n		    <th>Amount</th>\r\n		  </tr>\r\n	  </thead>\r\n	  <tbody>\r\n	  ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.codeToDatas), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n	  </tbody>\r\n	</table>\r\n	<input type=\"submit\" value=\"PROCEED TO ABSTRACT ESTIMATE\" id=\"abstractEstimate\"/>\r\n</div>";
  return buffer;
  });

this["Handlebars"]["templates"]["selectestimate_leadstatement"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, functionType="function", self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\r\n		  <tr>\r\n		  	<td>"
    + escapeExpression((helper = helpers.add || (depth0 && depth0.add),options={hash:{},data:data},helper ? helper.call(depth0, (data == null || data === false ? data : data.index), 1, options) : helperMissing.call(depth0, "add", (data == null || data === false ? data : data.index), 1, options)))
    + "</td>\r\n		  	<td>";
  if (helper = helpers.material) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.material); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\r\n		  	<td style=\"width:10%\"><input type=\"text\" data-id=\"sourceOfSupply\"/></td>\r\n		  	<td style=\"width:10%\"><input type=\"text\" class='distance' data-index="
    + escapeExpression(((stack1 = (data == null || data === false ? data : data.index)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " id=\"distance"
    + escapeExpression(((stack1 = (data == null || data === false ? data : data.index)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"/></td>\r\n		  	<td id=\"initialCost"
    + escapeExpression(((stack1 = (data == null || data === false ? data : data.index)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">";
  if (helper = helpers.initialCost) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.initialCost); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\r\n		  	<td id=\"convCharges"
    + escapeExpression(((stack1 = (data == null || data === false ? data : data.index)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"></td>\r\n		  	<td id=\"seig-charges"
    + escapeExpression(((stack1 = (data == null || data === false ? data : data.index)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">";
  if (helper = helpers.seigCharges) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.seigCharges); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\r\n		  	<td></td>\r\n		  	<td id=\"totalCost"
    + escapeExpression(((stack1 = (data == null || data === false ? data : data.index)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"></td>\r\n		  	<td>";
  if (helper = helpers.unit) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.unit); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\r\n		  </tr>\r\n	  	";
  return buffer;
  }

  buffer += "<div data-role=\"header\" data-theme=\"d\" data-position=\"fixed\">\r\n  <a href=\"#pickItemsForEstimate\" data-icon=\"arrow-l\">Back</a>\r\n  <h1>Lead Statement</h1>\r\n</div>\r\n\r\n<div role=\"main\" class=\"ui-content\">\r\n	<table data-role=\"table\" class=\"ui-body-d ui-shadow table-stripe ui-responsive\">\r\n	<thead>\r\n	  <tr>\r\n	  	<th>Sl.No</th>\r\n	  	<th>Description of material</th>\r\n	  	<th>Source of supply</th>\r\n	  	<th>Lead in KM</th>\r\n	  	<th>Initial Cost</th>\r\n	  	<th>Conveyance Charges</th>\r\n	  	<th>Seig-Charges balance</th>\r\n	  	<th>Deduct stacting char</th>\r\n	  	<th>Total Cost</th>\r\n	  	<th>Unit</th>\r\n	  </tr>\r\n	 </thead>\r\n	 <tbody>\r\n	  <tr>\r\n	  	<td>1</td>\r\n	  	<td>2</td>\r\n	  	<td>3</td>\r\n	  	<td>4</td>\r\n	  	<td>5</td>\r\n	  	<td>6</td>\r\n	  	<td>7</td>\r\n	  	<td>8</td>\r\n	  	<td>9</td>\r\n	  	<td>10</td>\r\n	  </tr>\r\n	  	";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.leadMaterials), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n	 </tbody>\r\n	</table>\r\n	\r\n	<input type=\"submit\" id=\"proceedToDataSheet\" value=\"PROCEED TO DATAS\">\r\n</div>";
  return buffer;
  });

this["Handlebars"]["templates"]["selectestimate_listofchapters"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div data-theme=\"b\" data-role=\"header\" data-position=\"fixed\">\r\n  	<a href=\"#pickItemsForEstimate\" data-icon=\"arrow-l\">Back</a>\r\n	<h1 class=\"ui-title\">Select Chapter</h1>\r\n</div><!-- /header -->\r\n\r\n<div role=\"main\" class=\"ui-content\" id=\"pageContent\">\r\n<h2>From which chapter do you wish to select ?</h2>\r\n		<ul data-role=\"listview\" id=\"listOfChapters\">\r\n			<li><a data-table=\"LUCANDC\">LOADING, UNLOADING, CARRIAGE and CRUSHING OF MATERIALS</a></li>\r\n			<li><a data-table=\"SiteClearence\">SITE CLEARANCE</a></li>\r\n			<li><a data-table=\"EECD\">EARTHWORK, EROSION CONTROL AND DRAINAGE</a></li>\r\n			<li><a data-table=\"GranSubBases\">GRANULAR SUB-BASES, BASES (NON-BITUMINOUS) AND SHOULDERS</a></li>\r\n			<li><a data-table=\"BasesAndSurface\">BASES AND SURFACE COURSES (BITUMINOUS)</a></li>\r\n			<li><a data-table=\"CCPAVEMENT\">CEMENT CONCRETE PAVEMENT</a></li> \r\n			<li><a data-table=\"CauAndSubMerBridges\">CAUSEWAY AND SUBMERSIBLE BRIDGES</a></li>\r\n			<li><a data-table=\"HillRoads\">HILL ROADS</a></li>\r\n			<li><a data-table=\"PipeCulverts\">PIPE CULVERTS</a></li>\r\n			<li><a data-table=\"TrafficSigns\">TRAFFIC SIGNS, MARKINGS AND OTHER ROAD APPURTENANCES</a></li> \r\n			<li><a data-table=\"Foundation\">FOUNDATION</a></li>\r\n			<li><a data-table=\"SubStructure\">SUBSTRUCTURE</a></li> \r\n			<li><a data-table=\"SuperStructure\">SUPERSTRUCTURE</a></li>\r\n			<li><a data-table=\"ProtectionWorks\">PROTECTION WORKS</a></li>\r\n			<li><a data-table=\"MaintOfRoads\">MAINTENANCE OF ROADS</a></li>\r\n			<li><a data-table=\"GEOSYNTHETICS\">GEOSYNTHETICS AND REINFORCED EARTH</a></li> \r\n			<li><a data-table=\"Repair\">REPAIR AND REHABILITATION </a></li> \r\n		</ul>\r\n</div><!-- /content -->";
  });

this["Handlebars"]["templates"]["selectestimate_selectestimate"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div data-theme=\"e\" data-role=\"header\" >\r\n	<h1 class=\"ui-title\">Choose Estimate</h1>\r\n</div><!-- /header -->\r\n\r\n<div role=\"main\" class=\"ui-content\" id=\"pageContent\">\r\n	<div data-role=\"collapsible\" data-theme=\"b\" data-content-theme=\"b\">\r\n		<h2>Roads And Bridges</h2>\r\n		<ul data-role=\"listview\" id=\"listItems\">\r\n			<li><a data-table=\"CCROAD\">Cement Concrete Road</a></li>\r\n			<li><a>Hill Road</a></li>\r\n			<li><a>PIPE CULVERTS</a></li>\r\n			<li><a>PROTECTION WORKS</a></li>\r\n			<li><a>MAINTENANCE OF ROADS</a></li>\r\n			<li><a>REPAIR AND REHABILITATION</a></li> \r\n		</ul>\r\n	</div>\r\n</div><!-- /content -->\r\n\r\n\r\n\r\n";
  });

this["Handlebars"]["templates"]["selectestimate_showitemsinchapter"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\r\n				  <tr>\r\n				    <td>"
    + escapeExpression(((stack1 = (depth0 && depth0.SNo)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</td>\r\n				    <td style=\"width:15%\">"
    + escapeExpression(((stack1 = (depth0 && depth0.IndexCode)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</td>\r\n				    <td class=\"description\" id=\"";
  if (helper = helpers.tableName) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.tableName); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "+"
    + escapeExpression(((stack1 = (depth0 && depth0.SNo)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">"
    + escapeExpression(((stack1 = (depth0 && depth0.Description)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</td>\r\n				    <td><input type=\"checkbox\" name=\"chosenItems\" id=\""
    + escapeExpression(((stack1 = (depth0 && depth0.IndexCode)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"></td>\r\n				  </tr>\r\n			  ";
  return buffer;
  }

  buffer += "<div data-theme=\"b\" data-role=\"header\" data-position=\"fixed\">\r\n	 <a href=\"#listOfChapters\" data-icon=\"arrow-l\">Back</a>\r\n	<h1 class=\"ui-title\">Select Data Items</h1>\r\n</div><!-- /header -->\r\n\r\n<div role=\"main\" class=\"ui-content\" id=\"pageContent\">\r\n		<h2>Select Your Datas From ";
  if (helper = helpers.selectedTable) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.selectedTable); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</h2>\r\n		<table data-role=\"table\" class=\"ui-body-d ui-shadow table-stripe ui-responsive\">\r\n		  <thead>\r\n		  <tr>\r\n		    <th>Sl.No</th>\r\n		    <th style=\"width:15%\">Item-Code</th>\r\n		    <th>Description</th>\r\n		    <th>Choose</th>\r\n		  </tr>\r\n		  </thead>\r\n		  <tbody id=\"itemsInChapter\">\r\n			  ";
  stack1 = helpers.each.call(depth0, ((stack1 = (depth0 && depth0.chapterToItemsMap)),stack1 == null || stack1 === false ? stack1 : stack1.items), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n		  </tbody>\r\n		</table>\r\n		\r\n		<div data-role=\"popup\" id=\"popupBasic\">\r\n		  <p>This is a completely basic popup, no options set.</p>\r\n		</div>\r\n		\r\n</div><!-- /content -->\r\n\r\n\r\n\r\n<div data-role=\"footer\" data-theme=\"a\" role=\"contentinfo\" class=\"ui-footer ui-bar-a\">\r\n	<a class=\"ui-btn-right\" id=\"proceedToItems\">Next</a>\r\n	<h1>hello</h1>\r\n</div>\r\n	\r\n\r\n";
  return buffer;
  });
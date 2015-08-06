this["Handlebars"] = this["Handlebars"] || {};
this["Handlebars"]["templates"] = this["Handlebars"]["templates"] || {};

this["Handlebars"]["templates"]["layout_header"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\r\n	<a href=\"#";
  if (helper = helpers.backButtonHREF) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.backButtonHREF); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-icon=\"arrow-l\">Back</a>\r\n";
  return buffer;
  }

  stack1 = helpers['if'].call(depth0, (depth0 && depth0.isBackButtonRequired), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n<h1>";
  if (helper = helpers.headerTitle) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.headerTitle); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</h1>";
  return buffer;
  });

this["Handlebars"]["templates"]["layout_page"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, self=this;

function program1(depth0,data) {
  
  
  return "\r\n	<div data-role=\"header\" data-position=\"fixed\">\r\n		\r\n	</div>\r\n";
  }

function program3(depth0,data) {
  
  
  return "\r\n	<div data-role=\"footer\">\r\n\r\n	</div>\r\n";
  }

  buffer += "\r\n";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.isHeaderRequired), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n<div role=\"main\" class=\"ui-content\">\r\n	\r\n</div>\r\n\r\n";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.isFooterRequired), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n\r\n";
  return buffer;
  });

this["Handlebars"]["templates"]["login_login"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div data-role=\"fieldcontain\" class=\"ui-content\" style=\"margin:10% 5% 10% 5%\">\r\n	<div data-role=\"fieldcontain\">\r\n		<label for=\"username\">UserName<sup style=\"color:red\"><b>*</b></sup></label>\r\n		<input type=\"text\" id=\"username\"/>\r\n	</div>\r\n	<div data-role=\"fieldcontain\">\r\n		<label for=\"password\">Password<sup style=\"color:red\"><b>*</b></sup></label>\r\n		<input type=\"password\" id=\"password\"/>\r\n	</div>\r\n	<br/>\r\n	<input type=\"submit\" data-theme=\"e\" id=\"login\" value=\"Login\"/>\r\n</div>\r\n";
  });

this["Handlebars"]["templates"]["selectestimate_abstractestimate"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, functionType="function", self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\r\n	  <tr>\r\n	    <td>"
    + escapeExpression((helper = helpers.add || (depth0 && depth0.add),options={hash:{},data:data},helper ? helper.call(depth0, (data == null || data === false ? data : data.index), 1, options) : helperMissing.call(depth0, "add", (data == null || data === false ? data : data.index), 1, options)))
    + "</td>\r\n	    <td colspan=\"7\">";
  if (helper = helpers.description) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.description); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " <div style=\"float:right\" id=\"addLBD\" data-icon=\"arrow-l\" data-index=\""
    + escapeExpression(((stack1 = (data == null || data === false ? data : data.index)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">Add</div></td>\r\n	    <td></td>\r\n	    <td></td>\r\n	    <td></td>\r\n	    <td></td>\r\n	    <td></td>\r\n	  </tr>\r\n	  <tr>\r\n	    <td></td>\r\n	    <td></td>\r\n	    <td style=\"width:6%\"><div id=\"Nos1"
    + escapeExpression(((stack1 = (data == null || data === false ? data : data.index)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"/></td>\r\n	    <td>X</td>\r\n	    <td style=\"width:6%\"><div id=\"Nos2"
    + escapeExpression(((stack1 = (data == null || data === false ? data : data.index)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"/></td>\r\n	    <td style=\"width:10%\"><div id=\"length"
    + escapeExpression(((stack1 = (data == null || data === false ? data : data.index)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"></div></td>\r\n	    <td style=\"width:10%\"><div id=\"breadth"
    + escapeExpression(((stack1 = (data == null || data === false ? data : data.index)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"></div></td>\r\n	    <td style=\"width:10%\"><div id=\"depth"
    + escapeExpression(((stack1 = (data == null || data === false ? data : data.index)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"></div></td>\r\n	    <td id=\"totalUnits"
    + escapeExpression(((stack1 = (data == null || data === false ? data : data.index)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"></td>\r\n	    <td></td>\r\n	    <td></td>\r\n	    <td></td>\r\n	    <td></td>\r\n	  </tr>\r\n	  <tr>\r\n	    <td></td>\r\n	    <td></td>\r\n	    <td></td>\r\n	    <td></td>\r\n	    <td></td>\r\n	    <td></td>\r\n	    <td></td>\r\n	    <td></td>\r\n	    <td id=\"quantity"
    + escapeExpression(((stack1 = (data == null || data === false ? data : data.index)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"></td>\r\n	    <td>Cum</td>\r\n	    <td id=\"itemRate"
    + escapeExpression(((stack1 = (data == null || data === false ? data : data.index)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">";
  if (helper = helpers.rate) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.rate); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\r\n	    <td>/1cum</td>\r\n	    <td id=\"totalAmount"
    + escapeExpression(((stack1 = (data == null || data === false ? data : data.index)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"></td>\r\n	  </tr>\r\n	";
  return buffer;
  }

  buffer += "<table data-role=\"table\" class=\"ui-body-d ui-shadow table-stripe ui-responsive\">\r\n  <thead>\r\n  	  <tr>\r\n	    <th colspan=\"8\"></th>\r\n	    <th colspan=\"5\"><strong>Est.Cost.Rs:<span id=\"absEstimateCost\"></span>Lakhs</strong></th>\r\n	  </tr>\r\n	  <tr>\r\n	    <th rowspan=\"2\">S.No</th>\r\n	    <th rowspan=\"2\">Description of item</th>\r\n	    <th colspan=\"3\" rowspan=\"2\">Nos</th>\r\n	    <th colspan=\"3\">Measurements</th>\r\n	    <th colspan=\"2\" rowspan=\"2\" >Qunatity</th>\r\n	    <th colspan=\"2\" rowspan=\"2\">Rate/Per</th>\r\n	    <th rowspan=\"2\">Amount</th>\r\n	  </tr>\r\n	  <tr>\r\n	    <th>L</th>\r\n	    <th>B</th>\r\n	    <th>D</th>\r\n	  </tr>\r\n  </thead>\r\n  <tbody>\r\n  ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.codeToRates), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "  \r\n  </tbody>\r\n</table>\r\n<div data-role=\"popup\" id=\"getLBDData\" data-arrow=\"true\" class=\"ui-content\">\r\n 	<a href=\"#\" data-rel=\"back\" class=\"ui-btn ui-corner-all ui-shadow ui-btn-a ui-icon-delete ui-btn-icon-notext ui-btn-right\">Close</a>\r\n 	<div data-role=\"fieldset\">\r\n	 	<div class=\"ui-grid-a\">\r\n			<div class=\"ui-block-a\" style=\"padding-top:5%;width:50%\"><label>Length:</label></div>\r\n			<div class=\"ui-block-b\"><input type=\"text\" id=\"length\"></div>\r\n		</div>\r\n		<div class=\"ui-grid-a\">\r\n			<div class=\"ui-block-a\" style=\"padding-top:5%;width:50%\"><label>Breadth:</label></div>\r\n			<div class=\"ui-block-b\"><input type=\"text\" id=\"breadth\"></div>\r\n		</div>\r\n		<div class=\"ui-grid-a\">\r\n			<div class=\"ui-block-a\" style=\"padding-top:5%;width:50%\"><label>Depth:</label></div>\r\n			<div class=\"ui-block-b\"><input type=\"text\" id=\"depth\"></div>\r\n		</div>\r\n	</div>\r\n	<input type=\"button\" value=\"Save\" id=\"saveLBD\"/>\r\n</div>\r\n";
  return buffer;
  });

this["Handlebars"]["templates"]["selectestimate_chooseitem"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\r\n		  <tr class=\""
    + escapeExpression(((stack1 = (depth0 && depth0.IndexCode)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\r\n		    <td>"
    + escapeExpression((helper = helpers.add || (depth0 && depth0.add),options={hash:{},data:data},helper ? helper.call(depth0, (data == null || data === false ? data : data.index), 1, options) : helperMissing.call(depth0, "add", (data == null || data === false ? data : data.index), 1, options)))
    + "</td>\r\n		    <td><div class=\"dataCode\" style=\"padding:1px;border:1px dotted blue\">"
    + escapeExpression(((stack1 = (depth0 && depth0.IndexCode)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</div></td>\r\n		    <td>"
    + escapeExpression(((stack1 = (depth0 && depth0.description)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</td>\r\n		    <td><input data-table=\""
    + escapeExpression(((stack1 = (depth0 && depth0.TableName)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" type=\"checkbox\" name=\"itemsSelected\" checked id=\""
    + escapeExpression(((stack1 = (depth0 && depth0.IndexCode)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"/></td>\r\n		  </tr>\r\n		   ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.subitemsArray), {hash:{},inverse:self.noop,fn:self.programWithDepth(2, program2, data, depth0),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n	  ";
  return buffer;
  }
function program2(depth0,data,depth1) {
  
  var buffer = "", stack1;
  buffer += "	  \r\n		   	  <tr class=\""
    + escapeExpression(((stack1 = (depth1 && depth1.IndexCode)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">  \r\n			    <td></td>\r\n			    <td>"
    + escapeExpression(((stack1 = (depth0 && depth0.SlNo)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</td>\r\n			    <td>"
    + escapeExpression(((stack1 = (depth0 && depth0.descritpion)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</td>\r\n			    <td><input type=\"checkbox\" class=\""
    + escapeExpression(((stack1 = (depth1 && depth1.IndexCode)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" name=\""
    + escapeExpression(((stack1 = (depth1 && depth1.IndexCode)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" id=\""
    + escapeExpression(((stack1 = (depth0 && depth0.SlNo)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"/></td> \r\n		   	  </tr> \r\n		   ";
  return buffer;
  }

  buffer += "<p><strong><i>Default datas for CC Road estimation:<i></strong></p>			\r\n<div>\r\n	<table data-role=\"table\" class=\"ui-body-d ui-shadow table-stripe ui-responsive\">\r\n	<thead>\r\n	  <tr>\r\n	    <th>Sl.No</th>\r\n	    <th>Item-Code</th>\r\n	    <th>Description</th>\r\n	    <th>Choose</th>\r\n	  </tr>\r\n	 </thead>\r\n	 <tbody id=\"estimateItems\"> \r\n	  ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.indexToDatasArray), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n	  </tbody>\r\n	</table>\r\n</div>\r\n<input type=\"submit\" onclick=\"window.location.href='#listOfChapters'\" value=\"Add Other Items to Estimate\">\r\n<input type=\"submit\" id=\"proceedToLeadStmt\" value=\"Proceed To Lead Statement\">\r\n\r\n<div data-role=\"popup\" id=\"deleteData\" data-arrow=\"true\" class=\"ui-content\">\r\n 	<a href=\"#\" data-rel=\"back\" class=\"ui-btn ui-corner-all ui-shadow ui-btn-a ui-icon-delete ui-btn-icon-notext ui-btn-right\">Close</a>\r\n 	<input type=\"submit\" value=\"Delete?\" id=\"deleteDataIndex\">\r\n</div>";
  return buffer;
  });

this["Handlebars"]["templates"]["selectestimate_choosesubitem"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\r\n		<table data-role=\"table\" class=\"ui-body-d ui-shadow table-stripe ui-responsive\">\r\n			<thead>\r\n				<tr>\r\n					<th>";
  if (helper = helpers.IndexCode) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.IndexCode); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</th>\r\n					<th>";
  if (helper = helpers.description) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.description); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</th>\r\n					<th>Choose</th>\r\n				</tr>\r\n			</thead>\r\n			<tbody>\r\n				";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.subitems), {hash:{},inverse:self.noop,fn:self.programWithDepth(2, program2, data, depth0),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n			</tbody>\r\n		</table>\r\n		<br>\r\n	";
  return buffer;
  }
function program2(depth0,data,depth1) {
  
  var buffer = "", stack1, helper;
  buffer += "\r\n					<tr>\r\n						<td>";
  if (helper = helpers.SlNo) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.SlNo); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\r\n						<td>";
  if (helper = helpers.descritpion) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.descritpion); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\r\n						<td><input type=\"radio\" name=\""
    + escapeExpression(((stack1 = (depth1 && depth1.IndexCode)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"/></td>\r\n					</tr>\r\n				";
  return buffer;
  }

  buffer += "<div data-theme=\"d\" data-role=\"header\" >\r\n 	<a href=\"#selectestimate\" data-icon=\"arrow-l\" data-position=\"fixed\">Back</a>\r\n	<h1 class=\"ui-title\">Pick Your Choice</h1>\r\n</div><!-- /header -->\r\n<div role=\"main\" class=\"ui-content\">\r\n	<h2>Which method would you like to choose?:</h2>	\r\n	";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.indexToTableItems), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n	<input type=\"submit\" id=\"proceedToLeadStmt\" value=\"Proceed To Lead Statement\">\r\n</div>";
  return buffer;
  });

this["Handlebars"]["templates"]["selectestimate_datasheet"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n  	";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.datas), {hash:{},inverse:self.noop,fn:self.programWithDepth(2, program2, data, depth0),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n  ";
  return buffer;
  }
function program2(depth0,data,depth1) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\r\n  		";
  stack1 = (helper = helpers.compare || (depth0 && depth0.compare),options={hash:{
    'operator': ("==")
  },inverse:self.program(5, program5, data),fn:self.programWithDepth(3, program3, data, depth1),data:data},helper ? helper.call(depth0, (data == null || data === false ? data : data.index), 0, options) : helperMissing.call(depth0, "compare", (data == null || data === false ? data : data.index), 0, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n  	";
  return buffer;
  }
function program3(depth0,data,depth2) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\r\n	      <tr>\r\n	      	<td><strong>";
  if (helper = helpers.IndexCode) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.IndexCode); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</strong></td>\r\n	  		<td><strong>"
    + escapeExpression((helper = helpers.add || (depth2 && depth2.add),options={hash:{},data:data},helper ? helper.call(depth0, (depth2 && depth2.itemIndex), 1, options) : helperMissing.call(depth0, "add", (depth2 && depth2.itemIndex), 1, options)))
    + "</strong></td>\r\n	  		<td colspan=\"2\"><strong>";
  if (helper = helpers.Description) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.Description); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</strong></td>\r\n	  		<td></td>\r\n	  		<td></td>\r\n	  		<td></td>	\r\n	  	  </tr>		\r\n  		";
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\r\n  		  ";
  stack1 = (helper = helpers.isNull || (depth0 && depth0.isNull),options={hash:{},inverse:self.program(22, program22, data),fn:self.program(6, program6, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.SubBullet), options) : helperMissing.call(depth0, "isNull", (depth0 && depth0.SubBullet), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n	  	";
  return buffer;
  }
function program6(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\r\n			  <tr>\r\n			    <td>";
  if (helper = helpers.Quantity) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.Quantity); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\r\n			    <td>";
  if (helper = helpers.Unit) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.Unit); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\r\n			    ";
  stack1 = (helper = helpers.compare || (depth0 && depth0.compare),options={hash:{
    'operator': ("==")
  },inverse:self.program(9, program9, data),fn:self.program(7, program7, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.descType), "Normal", options) : helperMissing.call(depth0, "compare", (depth0 && depth0.descType), "Normal", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n			    	<td>";
  if (helper = helpers.RateRs) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.RateRs); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\r\n			    ";
  stack1 = (helper = helpers.isNull || (depth0 && depth0.isNull),options={hash:{},inverse:self.program(16, program16, data),fn:self.program(14, program14, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.Unit), options) : helperMissing.call(depth0, "isNull", (depth0 && depth0.Unit), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n			    <td>";
  if (helper = helpers.Unit) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.Unit); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\r\n			    ";
  stack1 = (helper = helpers.isNull || (depth0 && depth0.isNull),options={hash:{},inverse:self.program(20, program20, data),fn:self.program(18, program18, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.Amount), options) : helperMissing.call(depth0, "isNull", (depth0 && depth0.Amount), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n			  </tr>\r\n		  ";
  return buffer;
  }
function program7(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\r\n			    	<td>";
  if (helper = helpers.Description) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.Description); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\r\n			    ";
  return buffer;
  }

function program9(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\r\n			    	";
  stack1 = (helper = helpers.compare || (depth0 && depth0.compare),options={hash:{
    'operator': ("==")
  },inverse:self.program(12, program12, data),fn:self.program(10, program10, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.descType), "RateOrCost", options) : helperMissing.call(depth0, "compare", (depth0 && depth0.descType), "RateOrCost", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "			    \r\n			    ";
  return buffer;
  }
function program10(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\r\n				    	<td style=\"color:red\"><strong>";
  if (helper = helpers.Description) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.Description); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</strong></td>\r\n				    ";
  return buffer;
  }

function program12(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\r\n				    	<td><strong>";
  if (helper = helpers.Description) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.Description); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</strong></td>				    	\r\n				    ";
  return buffer;
  }

function program14(depth0,data) {
  
  
  return "\r\n			    	<td></td>\r\n			    ";
  }

function program16(depth0,data) {
  
  
  return "\r\n			    	<td>1</td>\r\n			    ";
  }

function program18(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\r\n			    	<td>";
  if (helper = helpers.Amount) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.Amount); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\r\n			    ";
  return buffer;
  }

function program20(depth0,data) {
  
  var buffer = "", helper, options;
  buffer += "\r\n			    	<td>"
    + escapeExpression((helper = helpers.renderHTMLwithSplitAmount || (depth0 && depth0.renderHTMLwithSplitAmount),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.Amount), options) : helperMissing.call(depth0, "renderHTMLwithSplitAmount", (depth0 && depth0.Amount), options)))
    + "</td>  \r\n			    ";
  return buffer;
  }

function program22(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\r\n			 <tr>\r\n			    <td>";
  if (helper = helpers.Quantity) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.Quantity); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\r\n			    <td><strong>";
  if (helper = helpers.SubBullet) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.SubBullet); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</strong></td>\r\n			    <td><strong>";
  if (helper = helpers.Description) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.Description); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</strong></td>\r\n			     <td>";
  if (helper = helpers.RateRs) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.RateRs); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\r\n			    <td></td>\r\n			    <td>";
  if (helper = helpers.Unit) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.Unit); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\r\n			    <td></td>\r\n			  </tr>		  		  \r\n		  ";
  return buffer;
  }

  buffer += "<table data-role=\"table\" class=\"ui-body-d ui-shadow table-stripe ui-responsive\">\r\n  <thead>\r\n	  <tr>\r\n	    <th colspan=\"2\">NAME OF THE WORK:</th>\r\n	    <th colspan=\"5\">Testlakjsdfl alskjdflaksjdf</th>\r\n	  </tr>\r\n	  <tr>\r\n	    <th colspan=\"4\"></th>\r\n	    <th colspan=\"3\">ESt.Cost Rs:1.00Lakhs</th>\r\n	  </tr>\r\n	  <tr>\r\n	    <th colspan=\"2\">Quantity</th>\r\n	    <th>Description</th>\r\n	    <th>Rate</th>\r\n	    <th colspan=\"2\">Per</th>\r\n	    <th>Amount</th>\r\n	  </tr>\r\n  </thead>\r\n  <tbody>\r\n  ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.codeToDatas), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n  </tbody>\r\n</table>\r\n<input type=\"submit\" value=\"PROCEED TO ABSTRACT ESTIMATE\" id=\"abstractEstimate\"/>\r\n\r\n\r\n";
  return buffer;
  });

this["Handlebars"]["templates"]["selectestimate_leadstatement"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, functionType="function", self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\r\n    <tr class=\"leadRows\">\r\n    	";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.isMetal), {hash:{},inverse:self.program(4, program4, data),fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n  		<td><div id=\"source"
    + escapeExpression(((stack1 = (data == null || data === false ? data : data.index)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">";
  if (helper = helpers.sourceOfSupply) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.sourceOfSupply); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</div></td>\r\n	  	";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.isMetal), {hash:{},inverse:self.program(8, program8, data),fn:self.program(6, program6, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n		<td><div id=\"initialCost"
    + escapeExpression(((stack1 = (data == null || data === false ? data : data.index)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">";
  if (helper = helpers.initialCost) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.initialCost); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</div></td>\r\n		";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.isMetal), {hash:{},inverse:self.program(12, program12, data),fn:self.program(10, program10, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n  	</tr>\r\n  	";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.isMetal), {hash:{},inverse:self.noop,fn:self.program(14, program14, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n  ";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\r\n	  		<td rowspan=\"3\">"
    + escapeExpression((helper = helpers.add || (depth0 && depth0.add),options={hash:{},data:data},helper ? helper.call(depth0, (data == null || data === false ? data : data.index), 1, options) : helperMissing.call(depth0, "add", (data == null || data === false ? data : data.index), 1, options)))
    + "</td>\r\n	  		<td rowspan=\"3\"><div class=\"material\" style=\"padding:1px;border:1px dotted blue\" id=\""
    + escapeExpression(((stack1 = (data == null || data === false ? data : data.index)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">";
  if (helper = helpers.material) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.material); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</div></td>\r\n	  	";
  return buffer;
  }

function program4(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\r\n	  		<td>"
    + escapeExpression((helper = helpers.add || (depth0 && depth0.add),options={hash:{},data:data},helper ? helper.call(depth0, (data == null || data === false ? data : data.index), 1, options) : helperMissing.call(depth0, "add", (data == null || data === false ? data : data.index), 1, options)))
    + "</td>\r\n	  		<td><div class=\"material\" style=\"padding:1px;border:1px dotted blue\" id=\""
    + escapeExpression(((stack1 = (data == null || data === false ? data : data.index)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">";
  if (helper = helpers.material) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.material); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</div></td>\r\n	  	";
  return buffer;
  }

function program6(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\r\n		  	<td rowspan=\"3\"><div id=\"distance"
    + escapeExpression(((stack1 = (data == null || data === false ? data : data.index)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">";
  if (helper = helpers.leadInKM) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.leadInKM); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</div></td>\r\n		";
  return buffer;
  }

function program8(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\r\n		  	<td><div id=\"distance"
    + escapeExpression(((stack1 = (data == null || data === false ? data : data.index)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">";
  if (helper = helpers.leadInKM) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.leadInKM); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</div></td>		\r\n		";
  return buffer;
  }

function program10(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\r\n		  	<td rowspan=\"3\"><div id=\"convCharges"
    + escapeExpression(((stack1 = (data == null || data === false ? data : data.index)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">";
  if (helper = helpers.convCharges) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.convCharges); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</div></td>\r\n		  	<td rowspan=\"3\"><div id=\"seigCharges"
    + escapeExpression(((stack1 = (data == null || data === false ? data : data.index)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">";
  if (helper = helpers.seigCharges) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.seigCharges); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</div></td>\r\n		  	<td rowspan=\"3\"></td>\r\n		  	<td rowspan=\"3\"><div id=\"totalCost"
    + escapeExpression(((stack1 = (data == null || data === false ? data : data.index)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">";
  if (helper = helpers.totalCost) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.totalCost); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</div></td>\r\n		  	<td rowspan=\"3\"><div id=\"unit"
    + escapeExpression(((stack1 = (data == null || data === false ? data : data.index)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">";
  if (helper = helpers.unit) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.unit); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</div></td>	\r\n	  	";
  return buffer;
  }

function program12(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\r\n		  	<td><div id=\"convCharges"
    + escapeExpression(((stack1 = (data == null || data === false ? data : data.index)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">";
  if (helper = helpers.convCharges) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.convCharges); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</div></td>\r\n		  	<td><div id=\"seigCharges"
    + escapeExpression(((stack1 = (data == null || data === false ? data : data.index)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">";
  if (helper = helpers.seigCharges) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.seigCharges); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</div></td>\r\n		  	<td></td>\r\n		  	<td><div id=\"totalCost"
    + escapeExpression(((stack1 = (data == null || data === false ? data : data.index)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">";
  if (helper = helpers.totalCost) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.totalCost); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</div></td>\r\n		  	<td><div id=\"unit"
    + escapeExpression(((stack1 = (data == null || data === false ? data : data.index)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">";
  if (helper = helpers.unit) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.unit); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</div></td>	\r\n	  	";
  return buffer;
  }

function program14(depth0,data) {
  
  
  return "\r\n  	  <tr>\r\n	  	<td>Blasting charges</td>	  	\r\n	  	<td>70</td>	\r\n  	  </tr>\r\n  	  <tr>\r\n	  	<td>Machine crushing</td>	 \r\n	  	<td>246</td>	 	\r\n  	  </tr>\r\n  	";
  }

  buffer += "<table data-role=\"table\" class=\"ui-body-d ui-shadow table-stripe ui-responsive\">\r\n<thead>\r\n  <tr>\r\n  	<th>Sl.No</th>\r\n  	<th>Description of material</th>\r\n  	<th>Source of supply</th>\r\n  	<th>Lead in KM</th>\r\n  	<th>Initial Cost</th>\r\n  	<th>Conveyance Charges</th>\r\n  	<th>Seig-Charges balance</th>\r\n  	<th>Deduct stacting char</th>\r\n  	<th>Total Cost</th>\r\n  	<th>Unit</th>\r\n  </tr>\r\n </thead>\r\n <tbody>\r\n  <tr>\r\n  	<td>1</td>\r\n  	<td>2</td>\r\n  	<td>3</td>\r\n  	<td>4</td>\r\n  	<td>5</td>\r\n  	<td>6</td>\r\n  	<td>7</td>\r\n  	<td>8</td>\r\n  	<td>9</td>\r\n  	<td>10</td>\r\n  </tr>\r\n  ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.listOfLeadMaterials), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n\r\n </tbody>\r\n</table>\r\n\r\n<input type=\"submit\" id=\"proceedToDataSheet\" value=\"PROCEED TO DATAS\">\r\n\r\n<div data-role=\"popup\" id=\"getData\" data-arrow=\"true\" class=\"ui-content\">\r\n 	<a href=\"#\" data-rel=\"back\" class=\"ui-btn ui-corner-all ui-shadow ui-btn-a ui-icon-delete ui-btn-icon-notext ui-btn-right\">Close</a>\r\n 	<div data-role=\"fieldset\">\r\n	 	<div class=\"ui-grid-a\">\r\n			<div class=\"ui-block-a\" style=\"padding-top:5%;width:50%\"><label>Source Of Supply<sup style=\"color:red\"><b>*</b></sup>:</div>\r\n			<div class=\"ui-block-b\"><input type=\"text\" id=\"sourceOfSupply\"></div>\r\n		</div><!-- /grid-b -->\r\n		<div class=\"ui-grid-a\">\r\n			<div class=\"ui-block-a\" style=\"padding-top:5%;width:50%\"><label>Lead in KM<sup style=\"color:red\"><b>*</b></sup>:</div>\r\n			<div class=\"ui-block-b\"><input type=\"text\" id=\"distance\"></div>\r\n		</div><!-- /grid-b -->\r\n		<div class=\"ui-grid-b\" class=\"ui-content\" style=\"padding-top:5%\">\r\n			<div class=\"ui-block-a\"><label>Lift By<sup style=\"color:red\"><b>*</b></sup>:</div>\r\n			<div class=\"ui-block-b\"><div class=\"ui-grid-a\"><div class=\"ui-block-a\"><label style=\"padding-top:1%\">Manual</label></div><div class=\"ui-block-b\" style=\"padding-top:3%\"><input type=\"radio\" name=\"liftMeans\"></div></div></div>\r\n			<div class=\"ui-block-c\"><div class=\"ui-grid-a\"><div class=\"ui-block-a\"><label style=\"padding-top:1%\">Machine</label></div><div class=\"ui-block-b\" style=\"padding-top:3%\"><input type=\"radio\" name=\"liftMeans\"></div></div></div>\r\n		</div><!-- /grid-b -->\r\n	</div>\r\n	<input type=\"button\" value=\"Save\" id=\"saveLeadData\"/>\r\n</div>\r\n";
  return buffer;
  });

this["Handlebars"]["templates"]["selectestimate_listofchapters"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<p><strong><i>From which chapter do you wish to select ?</i></strong></p>\r\n<div class=\"ui-grid-b\">\r\n	<div class=\"ui-block-a listOfChapters\"><div data-table=\"LUCANDC\" class=\"ui-bar ui-bar-a\" style=\"height:70px\">1.LOADING, UNLOADING, CARRIAGE and CRUSHING OF MATERIALS</div></div>\r\n	<div class=\"ui-block-b listOfChapters\"><div data-table=\"SiteClearence\" class=\"ui-bar ui-bar-a\" style=\"height:70px\">2.SITE CLEARANCE</div></div>\r\n	<div class=\"ui-block-c listOfChapters\"><div data-table=\"EECD\" class=\"ui-bar ui-bar-a\" style=\"height:70px\">3.EARTHWORK, EROSION CONTROL AND DRAINAGE</div></div>\r\n</div><!-- /grid-b -->\r\n<div class=\"ui-grid-b\">\r\n	<div class=\"ui-block-a listOfChapters\"><div data-table=\"GranSubBases\" class=\"ui-bar ui-bar-d\" style=\"height:70px\">4.GRANULAR SUB-BASES, BASES (NON-BITUMINOUS) AND SHOULDERS</div></div>\r\n	<div class=\"ui-block-b listOfChapters\"><div data-table=\"BasesAndSurface\" class=\"ui-bar ui-bar-d\" style=\"height:70px\">5.BASES AND SURFACE COURSES (BITUMINOUS)</div></div>\r\n	<div class=\"ui-block-c listOfChapters\"><div data-table=\"CCPAVEMENT\" class=\"ui-bar ui-bar-d\" style=\"height:70px\">6.CEMENT CONCRETE PAVEMENT</div></div>\r\n</div><!-- /grid-b -->\r\n<div class=\"ui-grid-b\">\r\n	<div class=\"ui-block-a listOfChapters\" ><div data-table=\"CauAndSubMerBridges\" class=\"ui-bar ui-bar-c\" style=\"height:70px\">7.CAUSEWAY AND SUBMERSIBLE BRIDGES</div></div>\r\n	<div class=\"ui-block-b listOfChapters\" ><div data-table=\"HillRoads\" class=\"ui-bar ui-bar-c\" style=\"height:70px\">8.HILL ROADS</div></div>\r\n	<div class=\"ui-block-c listOfChapters\" ><div data-table=\"PipeCulverts\" class=\"ui-bar ui-bar-c\" style=\"height:70px\">9.PIPE CULVERTS</div></div>\r\n</div><!-- /grid-b -->\r\n<div class=\"ui-grid-b\">\r\n	<div class=\"ui-block-a listOfChapters\"><div data-table=\"TrafficSigns\" class=\"ui-bar ui-bar-d\" style=\"height:70px\">10.TRAFFIC SIGNS, MARKINGS AND OTHER ROAD APPURTENANCES</div></div>\r\n	<div class=\"ui-block-b listOfChapters\"><div data-table=\"Foundation\" class=\"ui-bar ui-bar-d\" style=\"height:70px\">11.FOUNDATION</div></div>\r\n	<div class=\"ui-block-c listOfChapters\"><div data-table=\"SubStructure\" class=\"ui-bar ui-bar-d\" style=\"height:70px\">12.SUBSTRUCTURE</div></div>\r\n</div><!-- /grid-b -->\r\n<div class=\"ui-grid-b\">\r\n	<div class=\"ui-block-a listOfChapters\"><div data-table=\"SuperStructure\" class=\"ui-bar ui-bar-a\" style=\"height:70px\">13.SUPERSTRUCTURE</div></div>\r\n	<div class=\"ui-block-b listOfChapters\"><div data-table=\"ProtectionWorks\" class=\"ui-bar ui-bar-a\" style=\"height:70px\">14.PROTECTION WORKS</div></div>\r\n	<div class=\"ui-block-c listOfChapters\"><div data-table=\"MaintOfRoads\" class=\"ui-bar ui-bar-a\" style=\"height:70px\">15.MAINTENANCE OF ROADS</div></div>\r\n</div><!-- /grid-b -->\r\n<div class=\"ui-grid-b\">\r\n	<div class=\"ui-block-a listOfChapters\"><div data-table=\"GEOSYNTHETICS\" class=\"ui-bar ui-bar-d\" style=\"height:70px\">16.GEOSYNTHETICS AND REINFORCED EARTH</div></div>\r\n	<div class=\"ui-block-b listOfChapters\"><div data-table=\"Horticulture\" class=\"ui-bar ui-bar-d\" style=\"height:70px\">17.Horticulture</div></div>\r\n	<div class=\"ui-block-c listOfChapters\"><div data-table=\"Repair\" class=\"ui-bar ui-bar-d\" style=\"height:70px\">18.REPAIR AND REHABILITATION</div></div>\r\n</div><!-- /grid-b -->\r\n";
  });

this["Handlebars"]["templates"]["selectestimate_selectestimate"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div data-role=\"collapsible\">\r\n	<h2>Roads And Bridges</h2>\r\n	<ul data-role=\"listview\" id=\"listItems\">\r\n		<li><a data-table=\"CCROAD\">Cement Concrete Road</a></li>\r\n		<li><a>Hill Road</a></li>\r\n		<li><a>PIPE CULVERTS</a></li>\r\n		<li><a>PROTECTION WORKS</a></li>\r\n		<li><a>MAINTENANCE OF ROADS</a></li>\r\n		<li><a>REPAIR AND REHABILITATION</a></li> \r\n	</ul>\r\n</div>\r\n\r\n\r\n\r\n\r\n";
  });

this["Handlebars"]["templates"]["selectestimate_showitemsinchapter"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\r\n			  <tr>\r\n			    <td>";
  if (helper = helpers.SNo) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.SNo); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\r\n			    <td style=\"width:15%\">";
  if (helper = helpers.IndexCode) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.IndexCode); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\r\n			    <td class=\"description\" id=\"";
  if (helper = helpers.tableName) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.tableName); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + escapeExpression(((stack1 = (depth0 && depth0.SNo)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-indexCode=\"";
  if (helper = helpers.IndexCode) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.IndexCode); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">"
    + escapeExpression(((stack1 = (depth0 && depth0.Description)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</td>\r\n			    <td><input type=\"checkbox\" name=\"chosenItems\" id=\""
    + escapeExpression(((stack1 = (depth0 && depth0.IndexCode)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"></td>\r\n			  </tr>\r\n		  ";
  return buffer;
  }

  buffer += "\r\n<p><strong><i>Datas in ";
  if (helper = helpers.chapterTitle) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.chapterTitle); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + ":</i></strong><p>\r\n\r\n <div id=\"tableContainer\">\r\n	<table data-role=\"table\" class=\"table-stroke table-stripe ui-responsive\" id=\"tableItems\">\r\n	  <thead>\r\n	  <tr>\r\n	    <th>Sl.No</th>\r\n	    <th style=\"width:15%\">Item-Code</th>\r\n	    <th>Description</th>\r\n	    <th>Choose</th>\r\n	  </tr>\r\n	  </thead>\r\n	  <tbody id=\"itemsInChapter\">\r\n		  ";
  stack1 = helpers.each.call(depth0, ((stack1 = (depth0 && depth0.chapterToItemsMap)),stack1 == null || stack1 === false ? stack1 : stack1.indexDatas), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n	  </tbody>\r\n	</table>\r\n</div>\r\n\r\n\r\n<div data-role=\"popup\" id=\"itemDetails\" data-position-to=\"window\" class=\"ui-content\">\r\n	<p>This is a basic popup</p>\r\n</div>\r\n<input type=\"submit\" id=\"proceedToItems\" value=\"Add to My Estimate\"/>\r\n\r\n	\r\n\r\n";
  return buffer;
  });
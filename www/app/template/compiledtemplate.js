this["Handlebars"] = this["Handlebars"] || {};
this["Handlebars"]["templates"] = this["Handlebars"]["templates"] || {};

this["Handlebars"]["templates"]["layout_header"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n				<div id=\"pageBackKey\" style=\"float:left;margin-top:-0.3em\">\r\n					";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.backButtonHREF), {hash:{},inverse:self.program(4, program4, data),fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n				</div>\r\n			";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\r\n						<input type=\"button\" data-inline=\"true\" onclick=\"window.location.href='#";
  if (helper = helpers.backButtonHREF) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.backButtonHREF); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "'\"  data-icon=\"back\" data-mini=\"true\" data-iconpos=\"notext\" />\r\n					";
  return buffer;
  }

function program4(depth0,data) {
  
  
  return "\r\n						<input type=\"button\" data-inline=\"true\" data-icon=\"back\" data-mini=\"true\" data-iconpos=\"notext\" />\r\n					";
  }

function program6(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\r\n				<div id=\"rightButton\" style=\"margin-top:-0.3em\">\r\n					<input type=\"button\" id=\"";
  if (helper = helpers.rightButtonID) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.rightButtonID); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-inline=\"true\" data-mini=\"true\" value=\"";
  if (helper = helpers.rightButtonValue) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.rightButtonValue); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"/>\r\n				</div>\r\n			";
  return buffer;
  }

  buffer += "\r\n	<div class=\"ui-grid-b\" style=\"padding-left:120px;margin-top:0.7em\">\r\n		<div class=\"ui-block-a\" style=\"width:15%\">\r\n			";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.isBackButtonRequired), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n		</div>\r\n		<div class=\"ui-block-b\" style=\"width:70%\">\r\n			<h2 style= \"display:inline\">";
  if (helper = helpers.headerTitle) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.headerTitle); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</h2>\r\n		</div>\r\n		<div class=\"ui-block-c\" style=\"width:15%\">\r\n			";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.isRightButtonRequired), {hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n		</div>\r\n	</div>\r\n\r\n<hr />\r\n\r\n";
  return buffer;
  });

this["Handlebars"]["templates"]["layout_menupanel"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"menu-panel ui-bar-d\" id=\"menuPanel\">\r\n	<div class=\"panel-main-nav\">\r\n		<!-- <div class=\"svg apmap\"></div> -->\r\n		<p style=\"margin:-10px 10px 23px 20px;\" >Menu</p>\r\n		<div class=\"transparent-button large-button\" id=\"newEstimate\">\r\n			<div></div>\r\n			<span>New Estimate</span>\r\n		</div>\r\n\r\n		<div class=\"transparent-button large-button\" id=\"datas\">\r\n			<div></div>\r\n			<p>Datas</p>\r\n		</div>\r\n\r\n		<div class=\"transparent-button large-button\" id=\"historyOption\">\r\n			<div></div>\r\n			<p>History</p>\r\n		</div>\r\n\r\n\r\n		<div class=\"panel-sub-nav\">\r\n			<div id=\"editProfile\">\r\n				<div></div>\r\n				<p>Edit Profile</p>\r\n			</div>\r\n\r\n			<div id=\"Help\">\r\n				<div></div>\r\n				<p>Help</p>\r\n			</div>\r\n\r\n			<div id=\"developer\">\r\n				<div></div>\r\n				<p>About Developer</p>\r\n			</div>\r\n		</div>\r\n		<div id=\"logout\" class=\"logout\">\r\n			<p>Logout</p>\r\n		</div>\r\n	</div>\r\n\r\n</div>\r\n\r\n";
  });

this["Handlebars"]["templates"]["layout_page"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div region_id=\"menuPanel\"></div>\r\n<div region_id=\"header\"></div>\r\n<div region_id=\"content\"></div>";
  });

this["Handlebars"]["templates"]["login_login"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div data-role=\"fieldcontain\" style=\"margin:10% 5% 10% 5%\">\r\n	<div data-role=\"fieldcontain\">\r\n		<label for=\"username\">UserName<sup style=\"color:red\"><b>*</b></sup></label>\r\n		<input type=\"text\" id=\"username\"/>\r\n	</div>\r\n	<div data-role=\"fieldcontain\">\r\n		<label for=\"password\">Password<sup style=\"color:red\"><b>*</b></sup></label>\r\n		<input type=\"password\" id=\"password\"/>\r\n	</div>\r\n	<br/>\r\n	<input type=\"submit\" data-theme=\"e\" data-disabled=\"true\" id=\"login\" value=\"Login\"/>\r\n</div>\r\n";
  });

this["Handlebars"]["templates"]["pdf_pdfdatas"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
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
    + "</strong></td>\r\n	  		<td><strong>";
  if (helper = helpers.Description) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.Description); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</strong></td>\r\n	  		<td></td>\r\n	  		<td></td>\r\n	  		<td></td>\r\n	  		<td></td>	\r\n	  	  </tr>		\r\n  		";
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
    + escapeExpression((helper = helpers.decimalFormat || (depth0 && depth0.decimalFormat),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.Amount), options) : helperMissing.call(depth0, "decimalFormat", (depth0 && depth0.Amount), options)))
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

  buffer += "<table border=\"1\">\r\n  <thead>\r\n     <tr>\r\n        <th style=\"width:50px\">Quantity</th>\r\n		<th style=\"width:30px\">Nos</th>\r\n		<th style=\"width:300px\">Description</th>\r\n		<th style=\"width:50px\">Rate</th>\r\n		<th style=\"width:50px\">Per</th>\r\n		<th style=\"width:50px\">Per</th>\r\n		<th style=\"width:50px\">Amount</th>\r\n      </tr>\r\n  </thead>\r\n  <tbody>\r\n  ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.codeToDatas), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n  </tbody>\r\n</table>\r\n\r\n";
  return buffer;
  });

this["Handlebars"]["templates"]["selectestimate_abstractestimate"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\r\n		  <tr>\r\n		    <td><strong>"
    + escapeExpression((helper = helpers.add || (depth0 && depth0.add),options={hash:{},data:data},helper ? helper.call(depth0, (data == null || data === false ? data : data.index), 1, options) : helperMissing.call(depth0, "add", (data == null || data === false ? data : data.index), 1, options)))
    + "</strong></td>\r\n		    ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.subBullets)),stack1 == null || stack1 === false ? stack1 : stack1.length), {hash:{},inverse:self.program(2, program2, data),fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n		    <td></td>\r\n		    <td></td>\r\n		    <td></td>\r\n		    <td></td>\r\n		    <td></td>\r\n		  </tr>\r\n		  ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.subBullets)),stack1 == null || stack1 === false ? stack1 : stack1.length), {hash:{},inverse:self.program(7, program7, data),fn:self.programWithDepth(4, program4, data, depth0),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n		";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\r\n		    	<td colspan=\"7\"><strong>";
  if (helper = helpers.description) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.description); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</strong></td>\r\n		    ";
  return buffer;
  }

function program4(depth0,data,depth1) {
  
  var buffer = "", stack1;
  buffer += "\r\n		  	";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.subBullets), {hash:{},inverse:self.noop,fn:self.programWithDepth(5, program5, data, depth1),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n		  ";
  return buffer;
  }
function program5(depth0,data,depth2) {
  
  var buffer = "", stack1, helper;
  buffer += "\r\n			  <tr>\r\n			    <td><strong>";
  if (helper = helpers.itemID) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.itemID); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</strong></td>\r\n			    <td colspan=\"7\"><strong>";
  if (helper = helpers.subItemDesc) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.subItemDesc); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</strong></td>\r\n			    <td></td>\r\n			    <td></td>\r\n			    <td></td>\r\n			    <td></td>\r\n			    <td></td>\r\n			  </tr>\r\n			  <tr>\r\n			    <td></td>\r\n			    <td><input type=\"button\" data-iconpos=\"notext\" style=\"float:right\" id=\"addLBD\" data-icon=\"plus\" data-index=\""
    + escapeExpression(((stack1 = (depth2 && depth2.dataIndex)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "-"
    + escapeExpression(((stack1 = (data == null || data === false ? data : data.index)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"/></td>\r\n			    <td style=\"width:6%\"><div id=\"Nos1"
    + escapeExpression(((stack1 = (depth2 && depth2.dataIndex)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "-"
    + escapeExpression(((stack1 = (data == null || data === false ? data : data.index)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"/></td>\r\n			    <td>X</td>\r\n			    <td style=\"width:6%\"><div id=\"Nos2"
    + escapeExpression(((stack1 = (depth2 && depth2.dataIndex)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "-"
    + escapeExpression(((stack1 = (data == null || data === false ? data : data.index)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"/></td>\r\n			    <td style=\"width:10%\"><div id=\"length"
    + escapeExpression(((stack1 = (depth2 && depth2.dataIndex)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "-"
    + escapeExpression(((stack1 = (data == null || data === false ? data : data.index)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"></div></td>\r\n			    <td style=\"width:10%\"><div id=\"breadth"
    + escapeExpression(((stack1 = (depth2 && depth2.dataIndex)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "-"
    + escapeExpression(((stack1 = (data == null || data === false ? data : data.index)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"></div></td>\r\n			    <td style=\"width:10%\"><div id=\"depth"
    + escapeExpression(((stack1 = (depth2 && depth2.dataIndex)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "-"
    + escapeExpression(((stack1 = (data == null || data === false ? data : data.index)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"></div></td>\r\n			    <td id=\"totalUnits"
    + escapeExpression(((stack1 = (depth2 && depth2.dataIndex)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "-"
    + escapeExpression(((stack1 = (data == null || data === false ? data : data.index)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"></td>\r\n			    <td></td>\r\n			    <td></td>\r\n			    <td></td>\r\n			    <td></td>\r\n			  </tr>\r\n			  <tr>\r\n			    <td></td>\r\n			    <td></td>\r\n			    <td></td>\r\n			    <td></td>\r\n			    <td></td>\r\n			    <td></td>\r\n			    <td></td>\r\n			    <td></td>\r\n			    <td id=\"quantity"
    + escapeExpression(((stack1 = (depth2 && depth2.dataIndex)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "-"
    + escapeExpression(((stack1 = (data == null || data === false ? data : data.index)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"></td>\r\n			    <td>Cum</td>\r\n			    <td id=\"itemRate"
    + escapeExpression(((stack1 = (depth2 && depth2.dataIndex)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "-"
    + escapeExpression(((stack1 = (data == null || data === false ? data : data.index)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"><strong>";
  if (helper = helpers.subItemRate) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.subItemRate); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</strong></td>\r\n			    <td>/1cum</td>\r\n			    <td id=\"totalAmount"
    + escapeExpression(((stack1 = (depth2 && depth2.dataIndex)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "-"
    + escapeExpression(((stack1 = (data == null || data === false ? data : data.index)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"></td>\r\n			  </tr>\r\n			";
  return buffer;
  }

function program7(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\r\n		  	 <tr>\r\n			    <td></td>\r\n			    <td><input type=\"button\" data-iconpos=\"notext\" style=\"float:right\" id=\"addLBD\" data-icon=\"plus\" data-index=\""
    + escapeExpression(((stack1 = (data == null || data === false ? data : data.index)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"/></td>\r\n			    <td style=\"width:6%\"><div id=\"Nos1"
    + escapeExpression(((stack1 = (data == null || data === false ? data : data.index)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"/></td>\r\n			    <td>X</td>\r\n			    <td style=\"width:6%\"><div id=\"Nos2"
    + escapeExpression(((stack1 = (data == null || data === false ? data : data.index)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"/></td>\r\n			    <td style=\"width:10%\"><div id=\"length"
    + escapeExpression(((stack1 = (data == null || data === false ? data : data.index)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"></div></td>\r\n			    <td style=\"width:10%\"><div id=\"breadth"
    + escapeExpression(((stack1 = (data == null || data === false ? data : data.index)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"></div></td>\r\n			    <td style=\"width:10%\"><div id=\"depth"
    + escapeExpression(((stack1 = (data == null || data === false ? data : data.index)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"></div></td>\r\n			    <td id=\"totalUnits"
    + escapeExpression(((stack1 = (data == null || data === false ? data : data.index)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"></td>\r\n			    <td></td>\r\n			    <td></td>\r\n			    <td></td>\r\n			    <td></td>\r\n			  </tr>\r\n			  <tr>\r\n			    <td></td>\r\n			    <td></td>\r\n			    <td></td>\r\n			    <td></td>\r\n			    <td></td>\r\n			    <td></td>\r\n			    <td></td>\r\n			    <td></td>\r\n			    <td id=\"quantity"
    + escapeExpression(((stack1 = (data == null || data === false ? data : data.index)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"></td>\r\n			    <td>Cum</td>\r\n			    <td id=\"itemRate"
    + escapeExpression(((stack1 = (data == null || data === false ? data : data.index)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"><strong>";
  if (helper = helpers.rate) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.rate); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</strong></td>\r\n			    <td>/1cum</td>\r\n			    <td id=\"totalAmount"
    + escapeExpression(((stack1 = (data == null || data === false ? data : data.index)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"></td>\r\n			  </tr>\r\n		  ";
  return buffer;
  }

  buffer += "	<table data-role=\"table\" class=\"ui-body-d ui-shadow table-stripe ui-responsive\">\r\n	  <thead>\r\n	  	  <tr>\r\n		    <th colspan=\"8\"></th>\r\n		    <th colspan=\"5\"><strong>Est.Cost.Rs:<span id=\"absEstimateCost\"></span>Lakhs</strong></th>\r\n		  </tr>\r\n		  <tr>\r\n		    <th rowspan=\"2\">S.No</th>\r\n		    <th rowspan=\"2\">Description of item</th>\r\n		    <th colspan=\"3\" rowspan=\"2\">Nos</th>\r\n		    <th colspan=\"3\">Measurements</th>\r\n		    <th colspan=\"2\" rowspan=\"2\" >Qunatity</th>\r\n		    <th colspan=\"2\" rowspan=\"2\">Rate/Per</th>\r\n		    <th rowspan=\"2\">Amount</th>\r\n		  </tr>\r\n		  <tr>\r\n		    <th>L</th>\r\n		    <th>B</th>\r\n		    <th>D</th>\r\n		  </tr>\r\n	  </thead>\r\n	  <tbody>\r\n	  ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.codeToRates), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "  \r\n	  </tbody>\r\n	</table>\r\n	<input type=\"submit\" value=\"Save Estimate\" id=\"saveEstimate\"/>\r\n	<div data-role=\"popup\" id=\"getLBDData\" data-arrow=\"true\" class=\"ui-content\">\r\n	 	<a href=\"#\" data-rel=\"back\" class=\"ui-btn ui-corner-all ui-shadow ui-btn-a ui-icon-delete ui-btn-icon-notext ui-btn-right\">Close</a>\r\n	 	<P id=\"mandatoryText\" style=\"color:red\"><i><strong>Please enter all mandatory* fields</strong></i></p>\r\n	 	<div data-role=\"fieldset\">\r\n	 		<div class=\"ui-grid-a\">\r\n				<div class=\"ui-block-a\" style=\"padding-top:5%;width:50%\"><label>NOs:<sup style=\"color:red\"><b>*</b></sup></label></div>\r\n				<div class=\"ui-block-b\">\r\n					 <div class=\"ui-grid-b\">\r\n						<div class=\"ui-block-a\"><input type=\"text\" class=\"lbdinput\" id=\"nos1\"></div>\r\n						<div class=\"ui-block-b\"><label style=\"padding-left:40%;padding-top:15%\"><strong>X</strong></label></div>\r\n						<div class=\"ui-block-c\"><input type=\"text\" class=\"lbdinput\" id=\"nos2\"></div>\r\n					</div>\r\n				</div>\r\n			</div>\r\n		 	<div class=\"ui-grid-a\">\r\n				<div class=\"ui-block-a\" style=\"padding-top:5%;width:50%\"><label>Length<sup style=\"color:red\"><b>*</b></sup>:</label></div>\r\n				<div class=\"ui-block-b\"><input type=\"text\" class=\"lbdinput\" id=\"length\"></div>\r\n			</div>\r\n			<div class=\"ui-grid-a\">\r\n				<div class=\"ui-block-a\" style=\"padding-top:5%;width:50%\"><label>Breadth<sup style=\"color:red\"><b>*</b></sup>:</label></div>\r\n				<div class=\"ui-block-b\"><input type=\"text\" class=\"lbdinput\" id=\"breadth\"></div>\r\n			</div>\r\n			<div class=\"ui-grid-a\">\r\n				<div class=\"ui-block-a\" style=\"padding-top:5%;width:50%\"><label>Depth<sup style=\"color:red\"><b>*</b></sup>:</label></div>\r\n				<div class=\"ui-block-b\"><input type=\"text\" class=\"lbdinput\" id=\"depth\"></div>\r\n			</div>\r\n		</div>\r\n		<input type=\"button\" value=\"Save\" id=\"saveLBD\"/>\r\n	</div>\r\n\r\n";
  return buffer;
  });

this["Handlebars"]["templates"]["selectestimate_chooseitem"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "		\r\n	<div>\r\n		<table data-role=\"table\" class=\"ui-body-d ui-shadow table-stripe ui-responsive\">\r\n		<thead>\r\n		  <tr>\r\n		    <th>Sl.No</th>\r\n		    <th>Item-Code</th>\r\n		    <th>Description</th>\r\n		    <th>Choose</th>\r\n		  </tr>\r\n		 </thead>\r\n		 <tbody id=\"estimateItems\"> \r\n		  ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.indexToDatasArray), {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n		  </tbody>\r\n		</table>\r\n	</div>\r\n";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\r\n			  <tr class=\""
    + escapeExpression(((stack1 = (depth0 && depth0.IndexCode)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\r\n			    <td>"
    + escapeExpression((helper = helpers.add || (depth0 && depth0.add),options={hash:{},data:data},helper ? helper.call(depth0, (data == null || data === false ? data : data.index), 1, options) : helperMissing.call(depth0, "add", (data == null || data === false ? data : data.index), 1, options)))
    + "</td>\r\n			    <td><div class=\"dataCode info-button\">"
    + escapeExpression(((stack1 = (depth0 && depth0.IndexCode)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</div></td>\r\n			    <td>"
    + escapeExpression(((stack1 = (depth0 && depth0.description)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</td>\r\n			    <td><input data-table=\""
    + escapeExpression(((stack1 = (depth0 && depth0.TableName)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" type=\"checkbox\" name=\"itemsSelected\" checked id=\""
    + escapeExpression(((stack1 = (depth0 && depth0.IndexCode)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"/></td>\r\n			  </tr>\r\n			   ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.subitemsArray), {hash:{},inverse:self.noop,fn:self.programWithDepth(3, program3, data, depth0),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n		  ";
  return buffer;
  }
function program3(depth0,data,depth1) {
  
  var buffer = "", stack1;
  buffer += "	  \r\n			   	  <tr class=\""
    + escapeExpression(((stack1 = (depth1 && depth1.IndexCode)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">  \r\n				    <td></td>\r\n				    <td>"
    + escapeExpression(((stack1 = (depth0 && depth0.SlNo)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</td>\r\n				    <td>"
    + escapeExpression(((stack1 = (depth0 && depth0.descritpion)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</td>\r\n				    <td><input type=\"checkbox\" class=\""
    + escapeExpression(((stack1 = (depth1 && depth1.IndexCode)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" name=\""
    + escapeExpression(((stack1 = (depth1 && depth1.IndexCode)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" id=\""
    + escapeExpression(((stack1 = (depth0 && depth0.SlNo)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"/></td> \r\n			   	  </tr> \r\n			   ";
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\r\n	<h2>There are no default data's for ";
  if (helper = helpers.estType) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.estType); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + ".</h2>\r\n";
  return buffer;
  }

  buffer += "\r\n<p><strong><i>Default datas for ";
  if (helper = helpers.estType) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.estType); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + ":<i></strong></p>	\r\n";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.defaultDatasFromDB)),stack1 == null || stack1 === false ? stack1 : stack1.length), {hash:{},inverse:self.program(5, program5, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n<br/>\r\n<br/>\r\n<br/>\r\n<br/>\r\n\r\n<div class=\"footer-buttons\">\r\n	<hr />\r\n	<div class=\"ui-grid-a\">\r\n		<div class=\"ui-block-a footer-left\">\r\n			<input type=\"button\" id=\"addDatas\" data-icon=\"plus\" data-iconpos=\"left\" value=\"Add More Datas\" data-inline=\"true\"/>\r\n		</div>\r\n		<div class=\"ui-block-b footer-right\">\r\n			<input type=\"button\" data-inline=\"true\" data-icon=\"arrow-r\" data-iconpos=\"right\" value=\"Proceed To Lead\" id=\"proceedToLeadStmt\"/>\r\n		</div>\r\n	</div>\r\n</div>\r\n\r\n<div data-role=\"popup\" id=\"deleteData\" data-arrow=\"true\" class=\"ui-content\">\r\n 	<a href=\"#\" data-rel=\"back\" class=\"ui-btn ui-corner-all ui-shadow ui-btn-a ui-icon-delete ui-btn-icon-notext ui-btn-right\">Close</a>\r\n 	<input type=\"submit\" value=\"Delete?\" id=\"deleteDataIndex\">\r\n</div>\r\n";
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

this["Handlebars"]["templates"]["selectestimate_datacodedetails"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data,depth1) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\r\n		  		";
  stack1 = (helper = helpers.compare || (depth0 && depth0.compare),options={hash:{
    'operator': ("==")
  },inverse:self.programWithDepth(4, program4, data, depth1),fn:self.programWithDepth(2, program2, data, depth1),data:data},helper ? helper.call(depth0, (data == null || data === false ? data : data.index), 0, options) : helperMissing.call(depth0, "compare", (data == null || data === false ? data : data.index), 0, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n		  	";
  return buffer;
  }
function program2(depth0,data,depth2) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\r\n			      <tr>\r\n			      	<td><strong>";
  if (helper = helpers.IndexCode) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.IndexCode); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</strong></td>\r\n			  		<td><strong>"
    + escapeExpression((helper = helpers.add || (depth2 && depth2.add),options={hash:{},data:data},helper ? helper.call(depth0, (depth2 && depth2.itemIndex), 1, options) : helperMissing.call(depth0, "add", (depth2 && depth2.itemIndex), 1, options)))
    + "</strong></td>\r\n			  		<td colspan=\"2\"><strong>";
  if (helper = helpers.Description) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.Description); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</strong></td>\r\n			  		<td></td>\r\n			  		<td></td>\r\n			  		<td></td>	\r\n			  	  </tr>		\r\n		  		";
  return buffer;
  }

function program4(depth0,data,depth2) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\r\n		  		  ";
  stack1 = (helper = helpers.isNull || (depth0 && depth0.isNull),options={hash:{},inverse:self.programWithDepth(21, program21, data, depth2),fn:self.program(5, program5, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.SubBullet), options) : helperMissing.call(depth0, "isNull", (depth0 && depth0.SubBullet), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n			  	";
  return buffer;
  }
function program5(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\r\n					  <tr>\r\n					    <td>";
  if (helper = helpers.Quantity) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.Quantity); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\r\n					    <td>";
  if (helper = helpers.Unit) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.Unit); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\r\n					    ";
  stack1 = (helper = helpers.compare || (depth0 && depth0.compare),options={hash:{
    'operator': ("==")
  },inverse:self.program(8, program8, data),fn:self.program(6, program6, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.descType), "Normal", options) : helperMissing.call(depth0, "compare", (depth0 && depth0.descType), "Normal", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n					    	<td>";
  if (helper = helpers.RateRs) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.RateRs); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\r\n					    ";
  stack1 = (helper = helpers.isNull || (depth0 && depth0.isNull),options={hash:{},inverse:self.program(15, program15, data),fn:self.program(13, program13, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.Unit), options) : helperMissing.call(depth0, "isNull", (depth0 && depth0.Unit), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n					    <td>";
  if (helper = helpers.Unit) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.Unit); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\r\n					    ";
  stack1 = (helper = helpers.isNull || (depth0 && depth0.isNull),options={hash:{},inverse:self.program(19, program19, data),fn:self.program(17, program17, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.Amount), options) : helperMissing.call(depth0, "isNull", (depth0 && depth0.Amount), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n					  </tr>\r\n				  ";
  return buffer;
  }
function program6(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\r\n					    	<td>";
  if (helper = helpers.Description) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.Description); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\r\n					    ";
  return buffer;
  }

function program8(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\r\n					    	";
  stack1 = (helper = helpers.compare || (depth0 && depth0.compare),options={hash:{
    'operator': ("==")
  },inverse:self.program(11, program11, data),fn:self.program(9, program9, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.descType), "RateOrCost", options) : helperMissing.call(depth0, "compare", (depth0 && depth0.descType), "RateOrCost", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "			    \r\n					    ";
  return buffer;
  }
function program9(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\r\n						    	<td style=\"color:red\"><strong>";
  if (helper = helpers.Description) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.Description); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</strong></td>\r\n						    ";
  return buffer;
  }

function program11(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\r\n						    	<td><strong>";
  if (helper = helpers.Description) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.Description); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</strong></td>				    	\r\n						    ";
  return buffer;
  }

function program13(depth0,data) {
  
  
  return "\r\n					    	<td></td>\r\n					    ";
  }

function program15(depth0,data) {
  
  
  return "\r\n					    	<td>1</td>\r\n					    ";
  }

function program17(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\r\n					    	<td>";
  if (helper = helpers.Amount) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.Amount); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\r\n					    ";
  return buffer;
  }

function program19(depth0,data) {
  
  var buffer = "", helper, options;
  buffer += "\r\n					    	<td>"
    + escapeExpression((helper = helpers.renderHTMLwithSplitAmount || (depth0 && depth0.renderHTMLwithSplitAmount),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.Amount), options) : helperMissing.call(depth0, "renderHTMLwithSplitAmount", (depth0 && depth0.Amount), options)))
    + "</td>  \r\n					    ";
  return buffer;
  }

function program21(depth0,data,depth3) {
  
  var buffer = "", stack1, helper;
  buffer += "\r\n					 <tr>\r\n					    <td>";
  if (helper = helpers.Quantity) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.Quantity); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\r\n					    <td><strong>";
  if (helper = helpers.SubBullet) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.SubBullet); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</strong></td>\r\n					    <td><strong>";
  if (helper = helpers.Description) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.Description); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</strong></td>\r\n					     <td>";
  if (helper = helpers.RateRs) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.RateRs); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\r\n					    <td></td>\r\n					    <td>";
  if (helper = helpers.Unit) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.Unit); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\r\n					    <td><input type=\"radio\" name=\""
    + escapeExpression(((stack1 = (depth3 && depth3.code)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"</td>\r\n					  </tr>		  		  \r\n				  ";
  return buffer;
  }

  buffer += "<div class=\"ui-grid-b\" style=\"margin-top:0.7em\">\r\n	<div class=\"ui-block-a\" style=\"width:15%;\">\r\n		<div style=\"margin-top:-0.3em\">\r\n			<input type=\"button\" id=\"backToPopup\" data-inline=\"true\" data-icon=\"back\" data-mini=\"true\" data-iconpos=\"notext\" />\r\n		</div>\r\n	</div>\r\n	<div class=\"ui-block-b\" style=\"width:70%;text-align:center\">\r\n		<h2 style= \"display:inline;\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.dataCodeDetails)),stack1 == null || stack1 === false ? stack1 : stack1.indexCode)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</h2>\r\n	</div>\r\n	<div class=\"ui-block-c\" style=\"width:15%\">\r\n\r\n	</div>\r\n</div>\r\n\r\n<hr />\r\n\r\n\r\n	<table data-role=\"table\" class=\"ui-body-d ui-shadow table-stripe ui-responsive\">\r\n		<thead>\r\n		  <tr>\r\n		    <th colspan=\"2\">Quantity</th>\r\n		    <th>Description</th>\r\n		    <th>Rate</th>\r\n		    <th colspan=\"2\">Per</th>\r\n		    <th>Amount</th>\r\n		  </tr>\r\n		</thead>\r\n		<tbody>\r\n		  	";
  stack1 = helpers.each.call(depth0, ((stack1 = (depth0 && depth0.dataCodeDetails)),stack1 == null || stack1 === false ? stack1 : stack1.itemsArr), {hash:{},inverse:self.noop,fn:self.programWithDepth(1, program1, data, depth0),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n\r\n		  </tbody>\r\n	</table>\r\n\r\n\r\n";
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
  },inverse:self.program(5, program5, data),fn:self.programWithDepth(3, program3, data, depth1),data:data},helper ? helper.call(depth0, (data == null || data === false ? data : data.index), 0, options) : helperMissing.call(depth0, "compare", (data == null || data === false ? data : data.index), 0, options));
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

function program5(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\r\n	  		  ";
  stack1 = (helper = helpers.isNull || (depth0 && depth0.isNull),options={hash:{},inverse:self.program(22, program22, data),fn:self.program(6, program6, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.SubBullet), options) : helperMissing.call(depth0, "isNull", (depth0 && depth0.SubBullet), options));
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
    + escapeExpression((helper = helpers.decimalFormat || (depth0 && depth0.decimalFormat),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.Amount), options) : helperMissing.call(depth0, "decimalFormat", (depth0 && depth0.Amount), options)))
    + "</td>  \r\n				    ";
  return buffer;
  }

function program22(depth0,data) {
  
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
    + "</td>\r\n				    <td></td>\r\n				  </tr>		  		  \r\n			  ";
  return buffer;
  }

  buffer += "<div id=\"tableContainer\">\r\n	<table data-role=\"table\" id=\"tableItems\" class=\"ui-body-d ui-shadow table-stripe ui-responsive\">\r\n	  <thead>\r\n		  <tr>\r\n		    <th colspan=\"2\">NAME OF THE WORK:</th>\r\n		    <th colspan=\"5\">Testlakjsdfl alskjdflaksjdf</th>\r\n		  </tr>\r\n		  <tr>\r\n		    <th colspan=\"4\"></th>\r\n		    <th colspan=\"3\">ESt.Cost Rs:1.00Lakhs</th>\r\n		  </tr>\r\n		  <tr>\r\n		    <th colspan=\"2\">Quantity</th>\r\n		    <th>Description</th>\r\n		    <th>Rate</th>\r\n		    <th colspan=\"2\">Per</th>\r\n		    <th>Amount</th>\r\n		  </tr>\r\n	  </thead>\r\n	  <tbody>\r\n	  ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.codeToDatas), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n	  </tbody>\r\n	</table>\r\n	<br/>\r\n	<br/>\r\n	<br/>\r\n	<br/>\r\n	<div class=\"footer-buttons\">\r\n		<hr />\r\n		<div class=\"ui-grid-a\">\r\n			<div class=\"ui-block-a footer-left\">\r\n				<input type=\"button\" value=\"Clear Selection\" data-inline=\"true\"/>\r\n			</div>\r\n			<div class=\"ui-block-b footer-right\">\r\n				<input type=\"button\" data-inline=\"true\" data-icon=\"arrow-r\" data-iconpos=\"right\" value=\"PROCEED TO ABSTRACT ESTIMATE\" id=\"abstractEstimate\"/>\r\n			</div>\r\n		</div>\r\n	</div>\r\n</div>\r\n";
  return buffer;
  });

this["Handlebars"]["templates"]["selectestimate_history"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\r\n			  <tr data-estId=\"";
  if (helper = helpers.EstimateID) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.EstimateID); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\r\n			    <td>"
    + escapeExpression((helper = helpers.add || (depth0 && depth0.add),options={hash:{},data:data},helper ? helper.call(depth0, (data == null || data === false ? data : data.index), 1, options) : helperMissing.call(depth0, "add", (data == null || data === false ? data : data.index), 1, options)))
    + "</td>\r\n			    <td>";
  if (helper = helpers.Type) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.Type); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\r\n			    <td>";
  if (helper = helpers.nameOfWork) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.nameOfWork); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\r\n			    <td>";
  if (helper = helpers.Cost) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.Cost); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\r\n			  </tr>\r\n		  ";
  return buffer;
  }

  buffer += "<p><strong><i>List of estimates you created:</i></strong><p>\r\n\r\n <div id=\"tableContainer\">\r\n	<table data-role=\"table\" class=\"table-stroke table-stripe ui-responsive\">\r\n	  <thead>\r\n	  <tr>\r\n	    <th>Sl.No</th>\r\n	    <th>Type of the work</th>\r\n	    <th>Name of the work</th>\r\n	    <th>Cost</th>\r\n	  </tr>\r\n	  </thead>\r\n	  <tbody id=\"listOfEstimates\">\r\n		  ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.estimateHistory), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n	  </tbody>\r\n	</table>\r\n</div>	\r\n<div data-role=\"popup\" id=\"histOptions\" data-arrow=\"true\" class=\"ui-content ui-bar-d\" style=\"width:120%\">\r\n 	<a href=\"#\" data-rel=\"back\" class=\"ui-btn ui-corner-all ui-shadow ui-btn-a ui-icon-delete ui-btn-icon-notext ui-btn-right\">Close</a>\r\n 	<ul data-role=\"listview\" id=\"listOfOptions\" data-icon=\"false\">\r\n 		<li>Create Copy</li>\r\n 		<li>Edit</li>	\r\n 		<li>e-mail</li>\r\n 		<li>Delete</li>\r\n 	</ul>\r\n</div>\r\n";
  return buffer;
  });

this["Handlebars"]["templates"]["selectestimate_leadstatement"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, functionType="function", self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\r\n		    <tr class=\"leadRows\">\r\n		    	";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.isMetal), {hash:{},inverse:self.program(4, program4, data),fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n		  		<td><div id=\"source"
    + escapeExpression(((stack1 = (data == null || data === false ? data : data.index)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">";
  if (helper = helpers.sourceOfSupply) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.sourceOfSupply); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</div></td>\r\n			  	";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.isMetal), {hash:{},inverse:self.program(8, program8, data),fn:self.program(6, program6, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n				<td><div id=\"initialCost"
    + escapeExpression(((stack1 = (data == null || data === false ? data : data.index)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">"
    + escapeExpression((helper = helpers.decimalFormat || (depth0 && depth0.decimalFormat),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.initialCost), options) : helperMissing.call(depth0, "decimalFormat", (depth0 && depth0.initialCost), options)))
    + "</div></td>\r\n				";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.isMetal), {hash:{},inverse:self.program(12, program12, data),fn:self.program(10, program10, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n		  	</tr>\r\n		  	";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.isMetal), {hash:{},inverse:self.noop,fn:self.program(14, program14, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n		  ";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\r\n			  		<td rowspan=\"3\">"
    + escapeExpression((helper = helpers.add || (depth0 && depth0.add),options={hash:{},data:data},helper ? helper.call(depth0, (data == null || data === false ? data : data.index), 1, options) : helperMissing.call(depth0, "add", (data == null || data === false ? data : data.index), 1, options)))
    + "</td>\r\n			  		<td rowspan=\"3\"><div class=\"material info-button\" data-code=\"";
  if (helper = helpers.code) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.code); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" id=\""
    + escapeExpression(((stack1 = (data == null || data === false ? data : data.index)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">";
  if (helper = helpers.material) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.material); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</div></td>\r\n			  	";
  return buffer;
  }

function program4(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\r\n			  		<td>"
    + escapeExpression((helper = helpers.add || (depth0 && depth0.add),options={hash:{},data:data},helper ? helper.call(depth0, (data == null || data === false ? data : data.index), 1, options) : helperMissing.call(depth0, "add", (data == null || data === false ? data : data.index), 1, options)))
    + "</td>\r\n			  		<td><div class=\"material info-button\" data-code=\"";
  if (helper = helpers.code) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.code); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" id=\""
    + escapeExpression(((stack1 = (data == null || data === false ? data : data.index)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">";
  if (helper = helpers.material) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.material); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</div></td>\r\n			  	";
  return buffer;
  }

function program6(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\r\n				  	<td rowspan=\"3\"><div id=\"distance"
    + escapeExpression(((stack1 = (data == null || data === false ? data : data.index)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">";
  if (helper = helpers.leadInKM) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.leadInKM); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</div></td>\r\n				";
  return buffer;
  }

function program8(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\r\n				  	<td><div id=\"distance"
    + escapeExpression(((stack1 = (data == null || data === false ? data : data.index)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">";
  if (helper = helpers.leadInKM) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.leadInKM); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</div></td>		\r\n				";
  return buffer;
  }

function program10(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\r\n				  	<td rowspan=\"3\"><div id=\"convCharges"
    + escapeExpression(((stack1 = (data == null || data === false ? data : data.index)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">"
    + escapeExpression((helper = helpers.decimalFormat || (depth0 && depth0.decimalFormat),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.convCharges), options) : helperMissing.call(depth0, "decimalFormat", (depth0 && depth0.convCharges), options)))
    + "</div></td>\r\n				  	<td rowspan=\"3\"><div id=\"seigCharges"
    + escapeExpression(((stack1 = (data == null || data === false ? data : data.index)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">"
    + escapeExpression((helper = helpers.decimalFormat || (depth0 && depth0.decimalFormat),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.seigCharges), options) : helperMissing.call(depth0, "decimalFormat", (depth0 && depth0.seigCharges), options)))
    + "</div></td>\r\n				  	<td rowspan=\"3\"><div id=\"LUC"
    + escapeExpression(((stack1 = (data == null || data === false ? data : data.index)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"></div></td>\r\n				  	<td rowspan=\"3\"><div id=\"totalCost"
    + escapeExpression(((stack1 = (data == null || data === false ? data : data.index)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">"
    + escapeExpression((helper = helpers.decimalFormat || (depth0 && depth0.decimalFormat),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.totalCost), options) : helperMissing.call(depth0, "decimalFormat", (depth0 && depth0.totalCost), options)))
    + "</div></td>\r\n				  	<td rowspan=\"3\"><div id=\"unit"
    + escapeExpression(((stack1 = (data == null || data === false ? data : data.index)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">";
  if (helper = helpers.unit) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.unit); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</div></td>	\r\n			  	";
  return buffer;
  }

function program12(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\r\n				  	<td><div id=\"convCharges"
    + escapeExpression(((stack1 = (data == null || data === false ? data : data.index)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">"
    + escapeExpression((helper = helpers.decimalFormat || (depth0 && depth0.decimalFormat),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.convCharges), options) : helperMissing.call(depth0, "decimalFormat", (depth0 && depth0.convCharges), options)))
    + "</div></td>\r\n				  	<td><div id=\"seigCharges"
    + escapeExpression(((stack1 = (data == null || data === false ? data : data.index)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">"
    + escapeExpression((helper = helpers.decimalFormat || (depth0 && depth0.decimalFormat),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.seigCharges), options) : helperMissing.call(depth0, "decimalFormat", (depth0 && depth0.seigCharges), options)))
    + "</div></td>\r\n				  	<td><div id=\"LUC"
    + escapeExpression(((stack1 = (data == null || data === false ? data : data.index)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"></div></td>\r\n				  	<td><div id=\"totalCost"
    + escapeExpression(((stack1 = (data == null || data === false ? data : data.index)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">"
    + escapeExpression((helper = helpers.decimalFormat || (depth0 && depth0.decimalFormat),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.totalCost), options) : helperMissing.call(depth0, "decimalFormat", (depth0 && depth0.totalCost), options)))
    + "</div></td>\r\n				  	<td><div id=\"unit"
    + escapeExpression(((stack1 = (data == null || data === false ? data : data.index)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">";
  if (helper = helpers.unit) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.unit); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</div></td>	\r\n			  	";
  return buffer;
  }

function program14(depth0,data) {
  
  
  return "\r\n		  	  <tr>\r\n			  	<td>Blasting charges</td>	  	\r\n			  	<td>70</td>	\r\n		  	  </tr>\r\n		  	  <tr>\r\n			  	<td>Machine crushing</td>	 \r\n			  	<td>246</td>	 	\r\n		  	  </tr>\r\n		  	";
  }

  buffer += "\r\n	<div class=\"ui-grid-a\">\r\n		<div class=\"ui-block-a\" style=\"width:20%;\">\r\n			<label><strong>Name of the Work:</strong></label>\r\n		</div>\r\n		<div class=\"ui-block-b\">\r\n			<label><strong><i>";
  if (helper = helpers.nameofthework) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.nameofthework); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</strong></i></label>		\r\n		</div>\r\n	</div>\r\n	\r\n	<div id=\"myPdf\">\r\n		<table data-role=\"table\" style=\"margin-top:2%\" class=\"ui-body-d ui-shadow table-stripe ui-responsive\">\r\n		<thead>\r\n		  <tr>\r\n		  	<th>Sl.No</th>\r\n		  	<th>Description of material</th>\r\n		  	<th>Source of supply</th>\r\n		  	<th>Lead in KM</th>\r\n		  	<th>Initial Cost</th>\r\n		  	<th>Conveyance Charges</th>\r\n		  	<th>Seig-Charges balance</th>\r\n		  	<th>Loading/Unloading charges</th>\r\n		  	<th>Total Cost</th>\r\n		  	<th>Unit</th>\r\n		  </tr>\r\n		 </thead>\r\n		 <tbody>\r\n		  <tr>\r\n		  	<td>1</td>\r\n		  	<td>2</td>\r\n		  	<td>3</td>\r\n		  	<td>4</td>\r\n		  	<td>5</td>\r\n		  	<td>6</td>\r\n		  	<td>7</td>\r\n		  	<td>8</td>\r\n		  	<td>9</td>\r\n		  	<td>10</td>\r\n		  </tr>\r\n		  ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.listOfLeadMaterials), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n		\r\n		 </tbody>\r\n		</table>\r\n	</div>\r\n	<input type=\"submit\" id=\"proceedToDataSheet\" value=\"PROCEED TO DATAS\">\r\n	\r\n	<div data-role=\"popup\" id=\"getData\" data-arrow=\"true\" class=\"ui-content\" style=\"width:120%\" data-overlay-theme=\"b\">\r\n	 	<a href=\"#\" data-rel=\"back\" class=\"ui-btn ui-corner-all ui-shadow ui-btn-a ui-icon-delete ui-btn-icon-notext ui-btn-right\">Close</a>\r\n	 	<P id=\"mandatoryText\" style=\"color:red\"><i><strong>Please enter all mandatory* fields</strong></i></p>\r\n	 	<div data-role=\"fieldset\">\r\n		 	<div class=\"ui-grid-a\">\r\n				<div class=\"ui-block-a\" style=\"padding-top:5%;width:50%\"><label>Source Of Supply<sup style=\"color:red\"><b>*</b></sup>:</div>\r\n				<div class=\"ui-block-b\"><input type=\"text\" id=\"sourceOfSupply\"></div>\r\n			</div><!-- /grid-b -->\r\n			<div class=\"ui-grid-a\">\r\n				<div class=\"ui-block-a\" style=\"padding-top:5%;width:50%\"><label>Lead in KM<sup style=\"color:red\"><b>*</b></sup>:</div>\r\n				<div class=\"ui-block-b\"><input type=\"text\" id=\"distance\"></div>\r\n			</div><!-- /grid-b -->\r\n			<div class=\"ui-grid-c\" class=\"ui-content\" style=\"padding-top:5%\" id=\"loadMeans\">\r\n				<div class=\"ui-block-a\">\r\n					<label>Loading Charges<sup style=\"color:red\"><b>*</b></sup>:</label>\r\n				</div>\r\n				<div class=\"ui-block-b\">\r\n					<div class=\"ui-grid-a\">\r\n						<div class=\"ui-block-a\">\r\n							<label style=\"padding-top:2%;float:right\">Ignore</label>\r\n						</div>\r\n						<div class=\"ui-block-b\" style=\"padding-top:4%\">\r\n							<input type=\"radio\" name=\"loadMeans\" value=\"ignoreLoad\">\r\n						</div>\r\n					</div>\r\n				</div>\r\n				<div class=\"ui-block-c\">\r\n					<div class=\"ui-grid-a\">\r\n						<div class=\"ui-block-a\">\r\n							<label style=\"padding-top:2%;float:right\">Manual</label>\r\n						</div>\r\n						<div class=\"ui-block-b\" style=\"padding-top:4%\">\r\n							<input type=\"radio\" name=\"loadMeans\" value=\"manual\">\r\n						</div>\r\n					</div>\r\n				</div>\r\n				<div class=\"ui-block-d\">\r\n					<div class=\"ui-grid-a\" id=\"machineryMeans\">\r\n						<div class=\"ui-block-a\">\r\n							<label style=\"padding-top:2%;float:right\">M/C</label>\r\n						</div>\r\n						<div class=\"ui-block-b\" style=\"padding-top:4%\">\r\n							<input type=\"radio\" name=\"loadMeans\" value=\"machinery\">\r\n						</div>\r\n					</div>\r\n				</div>\r\n			</div><!-- /grid-c -->\r\n			<div class=\"ui-grid-c\" class=\"ui-content\" style=\"padding-top:5%;\" id=\"loadIdleCharges\">\r\n				<div class=\"ui-block-a\">\r\n					<label>Truck Idle Charges(Load)<sup style=\"color:red\"><b>*</b></sup>:</label>\r\n				</div>\r\n				<div class=\"ui-block-c\" id=\"noIdleCharges\">\r\n					<div class=\"ui-grid-a\">\r\n						<div class=\"ui-block-a\">\r\n							<label style=\"padding-top:4%;float:right\">No</label>\r\n						</div>\r\n						<div class=\"ui-block-b\" style=\"padding-top:5%\">\r\n							<input type=\"radio\" name=\"LIC\" value=\"no\">\r\n						</div>\r\n					</div>\r\n				</div>\r\n				<div class=\"ui-block-b\">\r\n					<div class=\"ui-grid-a\">\r\n						<div class=\"ui-block-a\">\r\n							<label style=\"padding-top:4%;float:right\">Yes</label>\r\n						</div>\r\n						<div class=\"ui-block-b\" style=\"padding-top:5%\">\r\n							<input type=\"radio\" name=\"LIC\" value=\"yes\">\r\n						</div>\r\n					</div>\r\n				</div>\r\n				<div class=\"ui-block-d\">\r\n				</div>\r\n			</div><!-- /grid-c -->\r\n			<div class=\"ui-grid-c\" class=\"ui-content\" style=\"padding-top:5%\" id=\"unloadMeans\">\r\n				<div class=\"ui-block-a\">\r\n					<label>Unloading Charges<sup style=\"color:red\"><b>*</b></sup>:</label>\r\n				</div>\r\n				<div class=\"ui-block-d\">\r\n					<div class=\"ui-grid-a\">\r\n						<div class=\"ui-block-a\">\r\n							<label style=\"padding-top:2%;float:right\">Ignore</label>\r\n						</div>\r\n						<div class=\"ui-block-b\" style=\"padding-top:4%\">\r\n							<input type=\"radio\" name=\"unLoadMeans\" value=\"ignoreUnLoad\">\r\n						</div>\r\n					</div>\r\n				</div>\r\n				<div class=\"ui-block-b\">\r\n					<div class=\"ui-grid-a\">\r\n						<div class=\"ui-block-a\">\r\n							<label style=\"padding-top:2%;float:right\">Manual</label>\r\n						</div>\r\n						<div class=\"ui-block-b\" style=\"padding-top:4%\">\r\n							<input type=\"radio\" name=\"unLoadMeans\" value=\"manualUnLoad\">\r\n						</div>\r\n					</div>\r\n				</div>\r\n				<div class=\"ui-block-c\">\r\n					<div class=\"ui-grid-a\" id=\"machineryMeans\">\r\n						<div class=\"ui-block-a\">\r\n							<label style=\"padding-top:2%;float:right\">M/C</label>\r\n						</div>\r\n						<div class=\"ui-block-b\" style=\"padding-top:4%\">\r\n							<input type=\"radio\" name=\"unLoadMeans\" value=\"machineryUnLoad\">\r\n						</div>\r\n					</div>\r\n				</div>\r\n			</div><!-- /grid-c -->\r\n			<div class=\"ui-grid-c\" class=\"ui-content\" style=\"padding-top:5%;\" id=\"unloadIdleCharges\">\r\n				<div class=\"ui-block-a\">\r\n					<label>Truck Idle Charges<sup style=\"color:red\"><b>*</b></sup>:</label>\r\n				</div>\r\n				<div class=\"ui-block-c\" id=\"noIdleCharges\">\r\n					<div class=\"ui-grid-a\">\r\n						<div class=\"ui-block-a\">\r\n							<label style=\"padding-top:4%;float:right\">No</label>\r\n						</div>\r\n						<div class=\"ui-block-b\" style=\"padding-top:5%\">\r\n							<input type=\"radio\" name=\"UIC\" value=\"no\">\r\n						</div>\r\n					</div>\r\n				</div>\r\n				<div class=\"ui-block-b\">\r\n					<div class=\"ui-grid-a\">\r\n						<div class=\"ui-block-a\">\r\n							<label style=\"padding-top:4%;float:right\">Yes</label>\r\n						</div>\r\n						<div class=\"ui-block-b\" style=\"padding-top:5%\">\r\n							<input type=\"radio\" name=\"UIC\" value=\"yes\">\r\n						</div>\r\n					</div>\r\n				</div>\r\n				<div class=\"ui-block-d\">\r\n				</div>\r\n			</div><!-- /grid-c -->\r\n		</div>\r\n		<input type=\"button\" value=\"Save\" id=\"saveLeadData\"/>\r\n	</div>\r\n";
  return buffer;
  });

this["Handlebars"]["templates"]["selectestimate_listofchapters"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "\r\n<!-- <p><strong><i>From which chapter do you wish to select ?</i></strong></p> -->\r\n\r\n<div data-role=\"tabs\" id=\"tabs\">\r\n	 <div data-role=\"navbar\">\r\n	 	<ul id=\"dataBooks\">\r\n		  <li id=\"RAndB\"><a href=\"#RoadsNBridges\" data-ajax=\"false\" class=\"ui-btn-active\">Roads And Bridges</a></li>\r\n		  <li id=\"Build\"><a href=\"#buildings\" data-ajax=\"false\">Buildings</a></li>\r\n		  <li id=\"electricItems\"><a href=\"#elecItems\" data-ajax=\"false\">Electrical Items</a></li>\r\n		</ul>\r\n	 </div>\r\n	 <div id=\"RoadsNBridges\" style=\"margin-top:2%\">\r\n		<div class=\"ui-grid-b\">\r\n			<div class=\"ui-block-a listOfChapters\"><div data-table=\"LUCANDC\" class=\"ui-bar ui-bar-a\" style=\"height:70px\">1.LOADING, UNLOADING, CARRIAGE and CRUSHING OF MATERIALS</div></div>\r\n			<div class=\"ui-block-b listOfChapters\"><div data-table=\"SiteClearence\" class=\"ui-bar ui-bar-a\" style=\"height:70px\">2.SITE CLEARANCE</div></div>\r\n			<div class=\"ui-block-c listOfChapters\"><div data-table=\"EECD\" class=\"ui-bar ui-bar-a\" style=\"height:70px\">3.EARTHWORK, EROSION CONTROL AND DRAINAGE</div></div>\r\n		</div><!-- /grid-b -->\r\n		<div class=\"ui-grid-b\">\r\n			<div class=\"ui-block-a listOfChapters\"><div data-table=\"GranSubBases\" class=\"ui-bar ui-bar-d\" style=\"height:70px\">4.GRANULAR SUB-BASES, BASES (NON-BITUMINOUS) AND SHOULDERS</div></div>\r\n			<div class=\"ui-block-b listOfChapters\"><div data-table=\"BasesAndSurface\" class=\"ui-bar ui-bar-d\" style=\"height:70px\">5.BASES AND SURFACE COURSES (BITUMINOUS)</div></div>\r\n			<div class=\"ui-block-c listOfChapters\"><div data-table=\"CCPAVEMENT\" class=\"ui-bar ui-bar-d\" style=\"height:70px\">6.CEMENT CONCRETE PAVEMENT</div></div>\r\n		</div><!-- /grid-b -->\r\n		<div class=\"ui-grid-b\">\r\n			<div class=\"ui-block-a listOfChapters\" ><div data-table=\"CauAndSubMerBridges\" class=\"ui-bar ui-bar-c\" style=\"height:70px\">7.CAUSEWAY AND SUBMERSIBLE BRIDGES</div></div>\r\n			<div class=\"ui-block-b listOfChapters\" ><div data-table=\"HillRoads\" class=\"ui-bar ui-bar-c\" style=\"height:70px\">8.HILL ROADS</div></div>\r\n			<div class=\"ui-block-c listOfChapters\" ><div data-table=\"PipeCulverts\" class=\"ui-bar ui-bar-c\" style=\"height:70px\">9.PIPE CULVERTS</div></div>\r\n		</div><!-- /grid-b -->\r\n		<div class=\"ui-grid-b\">\r\n			<div class=\"ui-block-a listOfChapters\"><div data-table=\"TrafficSigns\" class=\"ui-bar ui-bar-d\" style=\"height:70px\">10.TRAFFIC SIGNS, MARKINGS AND OTHER ROAD APPURTENANCES</div></div>\r\n			<div class=\"ui-block-b listOfChapters\"><div data-table=\"Foundation\" class=\"ui-bar ui-bar-d\" style=\"height:70px\">11.FOUNDATION</div></div>\r\n			<div class=\"ui-block-c listOfChapters\"><div data-table=\"SubStructure\" class=\"ui-bar ui-bar-d\" style=\"height:70px\">12.SUBSTRUCTURE</div></div>\r\n		</div><!-- /grid-b -->\r\n		<div class=\"ui-grid-b\">\r\n			<div class=\"ui-block-a listOfChapters\"><div data-table=\"SuperStructure\" class=\"ui-bar ui-bar-a\" style=\"height:70px\">13.SUPERSTRUCTURE</div></div>\r\n			<div class=\"ui-block-b listOfChapters\"><div data-table=\"ProtectionWorks\" class=\"ui-bar ui-bar-a\" style=\"height:70px\">14.PROTECTION WORKS</div></div>\r\n			<div class=\"ui-block-c listOfChapters\"><div data-table=\"MaintOfRoads\" class=\"ui-bar ui-bar-a\" style=\"height:70px\">15.MAINTENANCE OF ROADS</div></div>\r\n		</div><!-- /grid-b -->\r\n		<div class=\"ui-grid-b\">\r\n			<div class=\"ui-block-a listOfChapters\"><div data-table=\"GEOSYNTHETICS\" class=\"ui-bar ui-bar-d\" style=\"height:70px\">16.GEOSYNTHETICS AND REINFORCED EARTH</div></div>\r\n			<div class=\"ui-block-b listOfChapters\"><div data-table=\"Horticulture\" class=\"ui-bar ui-bar-d\" style=\"height:70px\">17.Horticulture</div></div>\r\n			<div class=\"ui-block-c listOfChapters\"><div data-table=\"Repair\" class=\"ui-bar ui-bar-d\" style=\"height:70px\">18.REPAIR AND REHABILITATION</div></div>\r\n		</div><!-- /grid-b -->\r\n	</div>\r\n	<div id =\"buildings\" style=\"margin-top:2%\">\r\n		<div class=\"ui-grid-b\">\r\n			<div class=\"ui-block-a listOfChapters\"><div data-table=\"Mortar\" class=\"ui-bar ui-bar-a\" style=\"height:70px\">1.MORTARS</div></div>\r\n			<div class=\"ui-block-b listOfChapters\"><div data-table=\"Earthwork\" class=\"ui-bar ui-bar-a\" style=\"height:70px\">2.EARTH WORK EXCAVATION FOR FOUNDATIONS</div></div>\r\n			<div class=\"ui-block-c listOfChapters\"><div data-table=\"ConcreteDampProof\" class=\"ui-bar ui-bar-a\" style=\"height:70px\">3.CONCRETE, DAMP PROOF COURSE & REINFORCEMENT</div></div>\r\n		</div><!-- /grid-b -->\r\n		<div class=\"ui-grid-b\">\r\n			<div class=\"ui-block-a listOfChapters\"><div data-table=\"BarInFoundation\" class=\"ui-bar ui-bar-d\" style=\"height:70px\">4.Supplying, fitting and placing HYSD bar reinforcement in foundation</div></div>\r\n			<div class=\"ui-block-b listOfChapters\"><div data-table=\"Brickwork\" class=\"ui-bar ui-bar-d\" style=\"height:70px\">5.BRICK WORK, HONEY - COMBWORK</div></div>\r\n			<div class=\"ui-block-c listOfChapters\"><div data-table=\"StoneMasonary\" class=\"ui-bar ui-bar-d\" style=\"height:70px\">6.STONE MASONRY, DAMP PROOF COURSE, DRY STONE PACKING, QUARRY RUBBISH & GRAVEL BACKING</div></div>\r\n		</div><!-- /grid-b -->\r\n		<div class=\"ui-grid-b\">\r\n			<div class=\"ui-block-a listOfChapters\" ><div data-table=\"Pointing\" class=\"ui-bar ui-bar-c\" style=\"height:70px\">7.POINTING</div></div>\r\n			<div class=\"ui-block-b listOfChapters\" ><div data-table=\"Plastering\" class=\"ui-bar ui-bar-c\" style=\"height:70px\">8.PLASTERING</div></div>\r\n			<div class=\"ui-block-c listOfChapters\" ><div data-table=\"Flooring\" class=\"ui-bar ui-bar-c\" style=\"height:70px\">9.FLOORING</div></div>\r\n		</div><!-- /grid-b -->\r\n		<div class=\"ui-grid-b\">\r\n			<div class=\"ui-block-a listOfChapters\"><div data-table=\"RoofingAndCeiling\" class=\"ui-bar ui-bar-d\" style=\"height:70px\">10.ROOFING & CEILING</div></div>\r\n			<div class=\"ui-block-b listOfChapters\"><div data-table=\"WhiteWashing\" class=\"ui-bar ui-bar-d\" style=\"height:70px\">11.WHITE WASHING, COLOUR WASHING & DISTEMPERING</div></div>\r\n			<div class=\"ui-block-c listOfChapters\"><div data-table=\"PaintingAndVarnishing\" class=\"ui-bar ui-bar-d\" style=\"height:70px\">12.PAINTING & VARNISHING</div></div>\r\n		</div><!-- /grid-b -->\r\n		<div class=\"ui-grid-b\">\r\n			<div class=\"ui-block-a listOfChapters\"><div data-table=\"WoodWork\" class=\"ui-bar ui-bar-a\" style=\"height:70px\">13.WOOD WORK, ALUMINUM DOORS, WINDOWS, VENTILATORS Etc.,</div></div>\r\n			<div class=\"ui-block-b listOfChapters\"><div data-table=\"DismantlingAndDemolition\" class=\"ui-bar ui-bar-a\" style=\"height:70px\">14.DISMANTLING & DEMOLITION</div></div>\r\n			<div class=\"ui-block-c listOfChapters\"><div data-table=\"MISCELLANEOUS\" class=\"ui-bar ui-bar-a\" style=\"height:70px\">15.MISCELLANEOUS BUILDING ITEMS </div></div>\r\n		</div><!-- /grid-b -->\r\n		<div class=\"ui-grid-b\">\r\n			<div class=\"ui-block-a listOfChapters\"><div data-table=\"ANTETERMITETREATMENT\" class=\"ui-bar ui-bar-d\" style=\"height:70px\">16.ANTE-TERMITE TREATMENT</div></div>\r\n			<div class=\"ui-block-b listOfChapters\"><div data-table=\"Centring\" class=\"ui-bar ui-bar-d\" style=\"height:70px\">17.CENTERING, FORM WORK etc.</div></div>\r\n			<div class=\"ui-block-c listOfChapters\"><div data-table=\"\" class=\"ui-bar ui-bar-d\" style=\"height:70px\">18.User Defined Data's</div></div>\r\n		</div><!-- /grid-b -->\r\n	</div>\r\n	<div id =\"elecItems\" style=\"margin-top:2%\">\r\n		<div class=\"ui-grid-b\">\r\n			<div class=\"ui-block-a listOfChapters\"><div data-table=\"CONDUITLAYING\" class=\"ui-bar ui-bar-a\" style=\"height:70px\">1.CONDUIT LAYING</div></div>\r\n			<div class=\"ui-block-b listOfChapters\"><div data-table=\"WIRING\" class=\"ui-bar ui-bar-a\" style=\"height:70px\">2.WIRING</div></div>\r\n			<div class=\"ui-block-c listOfChapters\"><div data-table=\"RUNOFMAINS\" class=\"ui-bar ui-bar-a\" style=\"height:70px\">3.RUN OF MAINS</div></div>\r\n		</div><!-- /grid-b -->\r\n		<div class=\"ui-grid-b\">\r\n			<div class=\"ui-block-a listOfChapters\"><div data-table=\"SWITCHGEAR\" class=\"ui-bar ui-bar-d\" style=\"height:70px\">4.SWITCH GEAR & MCB DISTRIBUTION BOARD</div></div>\r\n			<div class=\"ui-block-b listOfChapters\"><div data-table=\"EARTHING\" class=\"ui-bar ui-bar-d\" style=\"height:70px\">5.EARTHING</div></div>\r\n			<div class=\"ui-block-c listOfChapters\"><div data-table=\"SERVICEMAINS\" class=\"ui-bar ui-bar-d\" style=\"height:70px\">6.SERVICE MAINS & LTOH LINES</div></div>\r\n		</div><!-- /grid-b -->\r\n		<div class=\"ui-grid-b\">\r\n			<div class=\"ui-block-a listOfChapters\" ><div data-table=\"STREETLIGHT\" class=\"ui-bar ui-bar-c\" style=\"height:70px\">7.STREET LIGHT LUMINARIES</div></div>\r\n			<div class=\"ui-block-b listOfChapters\" ><div data-table=\"INTERNALLUMINAIRE\" class=\"ui-bar ui-bar-c\" style=\"height:70px\">8.INTERNAL LUMINAIRE</div></div>\r\n			<div class=\"ui-block-c listOfChapters\" ><div data-table=\"ACANDREFRIGERATION\" class=\"ui-bar ui-bar-c\" style=\"height:70px\">9.AC AND REFRIGERATION , FANS</div></div>\r\n		</div><!-- /grid-b -->\r\n		<div class=\"ui-grid-b\">\r\n			<div class=\"ui-block-a listOfChapters\"><div data-table=\"WATERHEATERS\" class=\"ui-bar ui-bar-d\" style=\"height:70px\">10.WATER HEATERS</div></div>\r\n			<div class=\"ui-block-b listOfChapters\"><div data-table=\"WATERPUMPS\" class=\"ui-bar ui-bar-d\" style=\"height:70px\">11.WATER PUMPS</div></div>\r\n			<div class=\"ui-block-c listOfChapters\"><div data-table=\"BUSBARS\" class=\"ui-bar ui-bar-d\" style=\"height:70px\">12.BUS BARS</div></div>\r\n		</div><!-- /grid-b -->\r\n		<div class=\"ui-grid-b\">\r\n			<div class=\"ui-block-a listOfChapters\"><div data-table=\"SWAGEDPOLES\" class=\"ui-bar ui-bar-a\" style=\"height:70px\">13.SWAGED POLES</div></div>\r\n			<div class=\"ui-block-b listOfChapters\"><div data-table=\"CONTROLPANEL\" class=\"ui-bar ui-bar-a\" style=\"height:70px\">14.CONTROL PANEL & METERING EQUIPMENT</div></div>\r\n			<div class=\"ui-block-c listOfChapters\"><div data-table=\"CABLES\" class=\"ui-bar ui-bar-a\" style=\"height:70px\">15.CABLES / CABLE GLANDS / LUGS</div></div>\r\n		</div><!-- /grid-b -->\r\n		<div class=\"ui-grid-b\">\r\n			<div class=\"ui-block-a listOfChapters\"><div data-table=\"TEMPORARY\" class=\"ui-bar ui-bar-d\" style=\"height:70px\">16.TEMPORARY ILLUMINATION</div></div>\r\n			<div class=\"ui-block-b listOfChapters\"><div data-table=\"GENERATORS\" class=\"ui-bar ui-bar-d\" style=\"height:70px\">17.GENERATORS AND TRANSFORMERS</div></div>\r\n			<div class=\"ui-block-c listOfChapters\"><div data-table=\"REPAIRSTOMOTORS\" class=\"ui-bar ui-bar-d\" style=\"height:70px\">18.REPAIRS TO MOTORS & REWINDING</div></div>\r\n		</div><!-- /grid-b -->\r\n	</div>\r\n</div>\r\n\r\n<div data-role=\"popup\" id=\"datasPopup\" class=\"ui-content\" data-overlay-theme=\"b\" style=\"width:800px;height:450px;overflow-x:hidden\">\r\n	<div id=\"datasInChapter\"></div>\r\n</div>\r\n<div data-role=\"popup\" id=\"detailsPopup\" class=\"ui-content\" data-overlay-theme=\"b\" style=\"width:800px;height:450px;overflow-y:scroll;overflow-x:hidden\">\r\n	<div id=\"dataCodeDetails\"></div>\r\n</div>\r\n";
  });

this["Handlebars"]["templates"]["selectestimate_newestimate"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"ui-bar-c\" id=\"0\">\r\n	<div class=\"ui-grid-a\" style=\"margin:1em\">\r\n		<div class=\"ui-block-a\">\r\n			<h2>Category<sup style=\"color:red\"><b>*</b></sup><i>:&nbsp;<span id=\"selCategory\"></span></i></h2>\r\n		</div>\r\n		<div class=\"ui-block-b\">\r\n			<div style=\"margin-top:0.8em\">\r\n				<input type=\"button\" data-inline=\"true\" data-theme=\"d\" data-mini=\"true\" value=\"Select\" id=\"selectCategory\"/>\r\n			</div>\r\n		</div>\r\n	</div>\r\n</div>\r\n<div class=\"ui-bar-c\" id=\"1\">\r\n	<div class=\"ui-grid-a\" style=\"margin:1em\">\r\n		<div class=\"ui-block-a\">\r\n			<h2>Type<sup style=\"color:red\"><b>*</b></sup><i>:&nbsp;<span id=\"selType\"></span></i></h2>\r\n		</div>\r\n		<div class=\"ui-block-b\">\r\n			<div style=\"margin-top:0.8em\">\r\n				<input type=\"button\" data-inline=\"true\" data-theme=\"d\" data-mini=\"true\" value=\"Select\" id=\"selectType\"/>\r\n			</div>\r\n		</div>\r\n	</div>\r\n</div>\r\n<div class=\"ui-bar-c\" id=\"2\">\r\n	<div class=\"ui-grid-a\" style=\"margin:1em\">\r\n		<div class=\"ui-block-a\" style=\"width:30%\">\r\n			<h2>Name of the work<sup style=\"color:red\"><b>*</b></sup>:&nbsp;</h2>\r\n		</div>\r\n		<div class=\"ui-block-b\" style=\"width:70%;\">\r\n			<div style=\"margin-top:0.8em\">\r\n				<textarea id=\"nameOfWork\"></textarea>\r\n			</div>\r\n		</div>\r\n	</div>\r\n</div>\r\n\r\n\r\n<div class=\"footer-buttons\">\r\n	<hr />\r\n	<div class=\"ui-grid-a\">\r\n		<div class=\"ui-block-a footer-left\">\r\n			<input type=\"button\" value=\"Clear Selection\" data-inline=\"true\"/>\r\n		</div>\r\n		<div class=\"ui-block-b footer-right\">\r\n			<input type=\"button\" data-inline=\"true\" data-icon=\"arrow-r\" data-iconpos=\"right\" value=\"Proceed To Estimate\" id=\"displayDefaults\"/>\r\n		</div>\r\n	</div>\r\n</div>\r\n\r\n\r\n<div data-role=\"popup\" id=\"selectPopup\" data-arrow=\"true\" class=\"ui-content ui-bar-d\">\r\n 	<a href=\"#\" data-rel=\"back\" class=\"ui-btn ui-corner-all ui-shadow ui-btn-a ui-icon-delete ui-btn-icon-notext ui-btn-right\">Close</a>\r\n 	<div id=\"listOfOptions\">\r\n 	</div>\r\n</div>\r\n\r\n\r\n\r\n\r\n";
  });

this["Handlebars"]["templates"]["selectestimate_newestimateoptions"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "";
  buffer += "\r\n		<div class=\"ui-grid-a\">\r\n			<div class=\"ui-block-a\" style=\"width:80%\">\r\n				<h3>"
    + escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0))
    + "</h3>\r\n			</div>\r\n			<div class=\"ui-block-b\" style=\"width:20%;float:right\">\r\n				<input type=\"radio\" name=\"estOption\" style=\"margin-top:0.6em\" value=\""
    + escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0))
    + "\"/>\r\n			</div>\r\n		</div>\r\n	";
  return buffer;
  }

  buffer += "<div>\r\n	<p id=\"selectOption\" class=\"errorText\" style=\"color:red;display:none\"><i><strong>No Option selected</strong></i></p>\r\n	<p id=\"categMissing\" class=\"errorText\" style=\"color:red;display:none\"><i><strong>Enter Category</strong></i></p>\r\n	";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.estOptions), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n	<div class=\"ui-grid-a\">\r\n		<div class=\"ui-block-a\" style=\"width:80%\">\r\n			<input type=\"text\" placeholder=\"Other\" id=\"otherOpt\" />\r\n		</div>\r\n		<div class=\"ui-block-b\" style=\"width:20%;float:right\">\r\n			<input type=\"radio\" name=\"estOption\" style=\"margin-top:0.6em\" value=\"Other\"/>\r\n		</div>\r\n	</div>\r\n	<input type=\"button\" id=\"optionSelected\" value=\"Done\"/>\r\n</div>\r\n\r\n";
  return buffer;
  });

this["Handlebars"]["templates"]["selectestimate_showitemsinchapter"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  
  return "\r\n			<div style=\"float:right;margin-top:-0.3em\">\r\n				<input type=\"button\" id=\"updateEst\" value=\"Update Est\" data-inline=\"true\" data-icon=\"plus\" data-mini=\"true\" data-iconpos=\"right\" />\r\n			</div>\r\n		";
  }

function program3(depth0,data) {
  
  
  return "\r\n	    	<th>Choose</th>\r\n	    ";
  }

function program5(depth0,data,depth1) {
  
  var buffer = "", stack1, helper;
  buffer += "\r\n			  <tr>\r\n			    <td>";
  if (helper = helpers.SNo) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.SNo); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\r\n			    <td style=\"width:15%\">";
  if (helper = helpers.IndexCode) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.IndexCode); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\r\n			    <td class=\"description\"><div data-indexcode=\"";
  if (helper = helpers.IndexCode) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.IndexCode); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" class=\"info-button\">"
    + escapeExpression(((stack1 = (depth0 && depth0.Description)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</div></td>\r\n			    ";
  stack1 = helpers['if'].call(depth0, (depth1 && depth1.datasAsService), {hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n			  </tr>\r\n		  ";
  return buffer;
  }
function program6(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n			   		<td><input type=\"checkbox\" name=\"chosenItems\" id=\""
    + escapeExpression(((stack1 = (depth0 && depth0.IndexCode)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"></td>\r\n			    ";
  return buffer;
  }

  buffer += "<!--\r\n<div style=\"text-align:center\">\r\n		<div style=\"float:left;margin-top:-0.3em\">\r\n			<input type=\"button\" id=\"backButton\" data-inline=\"true\" data-icon=\"back\" data-mini=\"true\" data-iconpos=\"notext\" />\r\n		</div>\r\n		<h2 style= \"display:inline\">";
  if (helper = helpers.chapterTitle) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.chapterTitle); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</h2>\r\n		<div style=\"float:right;margin-top:-0.5em\"\">\r\n			<input type=\"button\" id=\"addToQ\" value=\"Add To Q\" data-inline=\"true\" data-icon=\"plus\" data-mini=\"true\" data-iconpos=\"right\" />\r\n		</div>\r\n	<hr />\r\n</div>\r\n-->\r\n<div class=\"ui-grid-b\" style=\"margin-top:0.7em\">\r\n	<div class=\"ui-block-a\" style=\"width:15%;\">\r\n		<div style=\"margin-top:-0.3em\">\r\n			<input type=\"button\" id=\"backButton\" data-inline=\"true\" data-icon=\"back\" data-mini=\"true\" data-iconpos=\"notext\" />\r\n		</div>\r\n	</div>\r\n	<div class=\"ui-block-b\" style=\"width:70%;text-align:center\">\r\n		<h2 style= \"display:inline;\">";
  if (helper = helpers.chapterTitle) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.chapterTitle); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</h2>\r\n	</div>\r\n	<div class=\"ui-block-c\" style=\"width:15%\">\r\n		";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.datasAsService), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n	</div>\r\n</div>\r\n\r\n<hr />\r\n\r\n <P id=\"noChangeText\" style=\"color:red;display:none\"><i><strong>There is no change to Update.</strong></i></p>\r\n <div id=\"tableContainer\" style=\"padding-top:2em\">\r\n	<table data-role=\"table\" class=\"table-stroke table-stripe ui-responsive\" id=\"tableItems\">\r\n	  <thead>\r\n	  <tr>\r\n	    <th>Sl.No</th>\r\n	    <th style=\"width:15%\">Item-Code</th>\r\n	    <th>Description</th>\r\n	    ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.datasAsService), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n	  </tr>\r\n	  </thead>\r\n	  <tbody id=\"itemsInChapter\">\r\n		  ";
  stack1 = helpers.each.call(depth0, ((stack1 = (depth0 && depth0.chapterToItemsMap)),stack1 == null || stack1 === false ? stack1 : stack1.indexDatas), {hash:{},inverse:self.noop,fn:self.programWithDepth(5, program5, data, depth0),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n	  </tbody>\r\n	</table>\r\n</div>\r\n	\r\n\r\n	\r\n\r\n";
  return buffer;
  });
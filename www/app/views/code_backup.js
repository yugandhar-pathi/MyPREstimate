<!--
{{#each indexToItems}} 
<div style="display:none" id="{{itemIndex}}">
	<table data-role="table" class="ui-body-d ui-shadow table-stripe ui-responsive">
		<thead>
		  <tr>
		    <th colspan="2">Quantity</th>
		    <th>Description</th>
		    <th>Rate</th>
		    <th colspan="2">Per</th>
		    <th>Amount</th>
		  </tr>
		</thead>
		<tbody>
		  	{{#each this.itemsArr}}
		  		{{#compare @index 0 operator="=="}}
			      <tr>
			      	<td><strong>{{IndexCode}}</strong></td>
			  		<td><strong>{{add ../../itemIndex 1}}</strong></td>
			  		<td colspan="2"><strong>{{Description}}</strong></td>
			  		<td></td>
			  		<td></td>
			  		<td></td>	
			  	  </tr>		
		  		{{else}}
		  		  {{#isNull SubBullet}}
					  <tr>
					    <td>{{Quantity}}</td>
					    <td>{{Unit}}</td>
					    {{#compare descType "Normal" operator="=="}}
					    	<td>{{Description}}</td>
					    {{else}}
					    	{{#compare descType "RateOrCost" operator="=="}}
						    	<td style="color:red"><strong>{{Description}}</strong></td>
						    {{else}}
						    	<td><strong>{{Description}}</strong></td>				    	
						    {{/compare}}			    
					    {{/compare}}
					    	<td>{{RateRs}}</td>
					    {{#isNull Unit}}
					    	<td></td>
					    {{else}}
					    	<td>1</td>
					    {{/isNull}}
					    <td>{{Unit}}</td>
					    {{#isNull Amount}}
					    	<td>{{Amount}}</td>
					    {{else}}
					    	<td>{{renderHTMLwithSplitAmount Amount}}</td>  
					    {{/isNull}}
					  </tr>
				  {{else}}
					 <tr>
					    <td>{{Quantity}}</td>
					    <td><strong>{{SubBullet}}</strong></td>
					    <td><strong>{{Description}}</strong></td>
					     <td>{{RateRs}}</td>
					    <td></td>
					    <td>{{Unit}}</td>
					    <td><input type="radio" name="{{ ../../../code}}"</td>
					  </tr>		  		  
				  {{/isNull}}
			  	{{/compare}}
		  	{{/each}}

		  </tbody>
	</table>
</div>
{{/each}}
-->

define(['models/estimate_model','views/estimateItem_view'],function(EstimateModel,EstimateItem){
	/*var App={};
	
	App.Estimate_View = (function(){*/
		var Estimate_View = Backbone.View.extend({
	
				el : "#todo-page",
			
				template : _.template($("#todo-page-template").html()),
			
				model: new EstimateModel(),
				
				events : {
					'click #create-new-todo' : 'createTodo'
				},
			
				render : function() {
					this.$el.html(this.template());
					var thisObj = this;
					/*todoCollection.each(function(EstimateModel) {
						thisObj.appendTodo(EstimateModel);
					});*/
					return this;
				},
			
				createTodo : function() {
					this.model.set("title", $("#todo_title").val());
					this.model.set("completed", $("#todo_completed").is(':checked'));
					if (this.model.isValid()) {
						this.appendTodo(this.model);
						//todoCollection.push(EstimateModel);
					} else {
						errorHandler(EstimateModel.validationError);
					}
					$("#todo_title").val("").focus();
				},
			
				appendTodo : function(EstimateModel) {
					var todoView = new EstimateItem({
						model : EstimateModel
					});
					this.$el.find("#todo").append(todoView.render().el);
				}
			});
	
			
			return new Estimate_View();
	/*});
	return App.Estimate_View;*/
});


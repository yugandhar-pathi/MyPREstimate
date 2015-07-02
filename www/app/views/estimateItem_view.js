
define(['models/estimate_model'],function(EstimateModel){
	/*var App={};
	
	App.EstimateItem_View = (function(){*/
		var EstimateItem_View = Backbone.View.extend({

			tagName : 'li',

			// Cache the template function for a single item.
			template : _.template($('#item-template').html()),

			events : {
				'dblclick label' : 'edit',
				// 'keypress .edit' : 'updateOnEnter',
				'blur .edit' : 'close',
				'change .todo_check' : 'updateCheckBox'
			},

			// Called when the view is first created
			initialize : function() {
				// this.$el = $('#todo');
				// Later we'll look at:
				// this.listenTo(someCollection, 'all', this.render);
				// but you can actually run this example right now by
				// calling todoView.render();
			},

			// Re-render the titles of the todo item.
			render : function() {
				this.$el.html(this.template(this.model.attributes));
				// $el here is a reference to the jQuery element
				// associated with the view, todoTpl is a reference
				// to an Underscore template and model.attributes
				// contains the attributes of the model.
				// Altogether, the statement is replacing the HTML of
				// a DOM element with the result of instantiating a
				// template with the model's attributes.
				// this.input = this.$('.edit');
				return this;
			},

			edit : function() {
				// executed when todo label is double clicked
				this.$(".edit").val(this.model.attributes.title).show().focus();
				this.$("label").hide();
			},

			close : function() {
				// executed when todo loses focus
				var editedTitle = this.$(".edit");
				if (editedTitle.val().length) {
					this.model.set("title", editedTitle.val());
					this.$("label").text(editedTitle.val()).show();
				} else {
					this.$("label").text(this.model.get("title")).show();
				}
				editedTitle.hide();
			},

			updateOnEnter : function(e) {
				// executed on each keypress when in todo edit mode,
				// but we'll wait for enter to get in action
			},

			updateCheckBox : function() {
				this.model.set("completed", this.$(".todo_check").is(':checked'));
			}
		});
		return EstimateItem_View
	/*});
	return App.EstimateItem_View;*/
});


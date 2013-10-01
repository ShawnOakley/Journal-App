Journal.Views.PostsForm = Backbone.View.extend({

  initialize: function() {
    console.log(this.model)
    // this.listenTo(this.model, 'error', this.displayErrors)
  },

  events: {
    "submit .post-form" : "submit"
  },

  render: function() {
    var that = this;

    var renderedForm = JST["posts/form"]({
      post: that.model
    });

    that.$el.html(renderedForm);

    return that;
  },

  submit: function(event) {
    var that = this;
    event.preventDefault();
    var formData = $(event.currentTarget).serializeJSON();

    if(that.model.isNew()) {
      that.collection.create(formData.post);
      Backbone.history.navigate("#/")
    } else {
      that.model.save(formData.post,
        {success: function(){Backbone.history.navigate("#/");},
        error: that.displayErrors.bind(that)
      });
    }
  },

  displayErrors: function(model, xhr, options) {
    var that = this;
    var errors = xhr.responseJSON

    errors.forEach(function(error){
      that.$el.prepend("<div>"+error+"</div>");
    });
  }

});
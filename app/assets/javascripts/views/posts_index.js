Journal.Views.PostsIndex = Backbone.View.extend({

  initialize: function(){

    var renderCallback = this.render.bind(this);

    this.listenTo(this.collection, "add", renderCallback);
    this.listenTo(this.collection, "change:title", renderCallback);
    this.listenTo(this.collection, "remove", renderCallback);
    this.listenTo(this.collection, "reset", renderCallback);
  },

  events: {
    "click button.delete": "deletePost"
  },

  render: function(){
    var that = this;

    var ul = $("<ul></ul>");
    _(that.collection.models).each(function (post) {
      var $li = $("<li></li>");
      $li.text(post.get("title"));
      $delBtn = $("<button data-id=\"" + post.get("id") +
        "\" class=\"delete\">Delete</button>");

      ul.append($li).append($delBtn);
    });

    that.$el.html(ul);
    return that;
  },

  deletePost: function(event) {
    var obj_id = $(event.currentTarget).attr('data-id')
    var model = this.collection.get(obj_id)
    model.destroy();
    this.collection.remove(model);
  }

});
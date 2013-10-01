Journal.Views.PostsIndex = Backbone.View.extend({

  initialize: function(collection){
    this.collection = collection;
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

    $('body').append(that.$el.html(ul));
    return that;
  },

});
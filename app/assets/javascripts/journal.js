window.Journal = {

  Models: {},
  Collections: {},
  Views: {},
  Routers: {},

  initialize: function ($sidebar, $content, posts) {

    this._installSidebar($sidebar, posts)

    new Journal.Routers.PostsRouter($content, posts)
    Backbone.history.start()

  },

  _installSidebar: function ($sidebar, posts) {
      var that = this;

      var postView = new Journal.Views.PostsIndex({
        collection: posts
      });

      $sidebar.html(postView.render().$el)
  }
}

$(document).ready(function() {

  $.ajax({
    url: '/posts',
    type: 'get',
    dataType: 'json',
    success: function(data){

      var posts = new Journal.Collections.Posts();

      posts.add(data);

    }
  });


});
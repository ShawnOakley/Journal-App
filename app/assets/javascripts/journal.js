window.Journal = {

  Models: {},
  Collections: {},
  Views: {},
  Routers: {},

  initialize: function ($rootEl, posts) {

    new Journal.Routers.PostsRouter($rootEl, posts)
    Backbone.history.start()
    // $rootEl.html(postView.render().$el);
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
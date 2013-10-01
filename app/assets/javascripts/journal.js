window.Journal = {

  Models: {},
  Collections: {},
  Views: {},
  Routers: {},

  initialize: function ($rootEl, posts) {
    // var posts = new Journal.Collections.Posts();
    // posts.add(data);
    var postView = new Journal.Views.PostsIndex({
      collection: posts
    });

    $rootEl.html(postView.render().$el);
  }
}

$(function() {

  $.ajax({
    url: '/posts',
    type: 'get',
    dataType: 'json',
    success: function(data){

      var posts = new Journal.Collections.Posts();

      posts.add(data);

      console.log(posts)
    }
  });

});
Journal.Routers.PostsRouter = Backbone.Router.extend({
  initialize: function($rootEl, posts) {
   this.$rootEl = $rootEl;
   this.posts = posts;
  },

  routes: {
    "": "new",
    "posts/new" : "new",
    "posts/:id": "show",
    "posts/:id/edit" : "edit"

  },

  new: function () {
    var that = this;
    var post = new Journal.Models.Post();
    console.log(typeof post);
    var postView = new Journal.Views.PostsForm({
      model: post,
      collection: that.posts
    });

    that.$rootEl.html(postView.render().$el);
  },

  show: function(id){
    var that = this;
    var selected_post = that.posts.get(id);
    var postView = new Journal.Views.PostsShow({
      model: selected_post
    });

    that.$rootEl.html(postView.render().$el);
  },

  edit: function(id){
    var that = this;
    var selected_post = that.posts.get(id);
    var postView = new Journal.Views.PostsForm({
      model: selected_post
    });

    that.$rootEl.html(postView.render().$el);
  }
})
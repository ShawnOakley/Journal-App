Journal.Routers.PostsRouter = Backbone.Router.extend({
  initialize: function($rootEl, posts) {
   this.$rootEl = $rootEl;
   this.posts = posts;
  },

  routes: {
    "": "index",
    "posts/:id": "show"
  },

  index: function (){
    var that = this;
    var postView = new Journal.Views.PostsIndex({
      collection: that.posts
    });
    that.$rootEl.html(postView.render().$el)
  },

  show: function(id){
    var that = this;
    var selected_post = that.posts.get(id);
    var postView = new Journal.Views.PostsShow({
      model: selected_post
    });

    that.$rootEl.html(postView.render().$el);
  }
})
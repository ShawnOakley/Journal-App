var Journal.Collections.Posts = Backbone.Collection.extend({
  url: "/posts",
  model: Post
});
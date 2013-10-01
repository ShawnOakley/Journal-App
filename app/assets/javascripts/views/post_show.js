Journal.Views.PostsShow = Backbone.View.extend({

  initialize: function() {


  },

  render: function() {
    var that = this
    var title = that.model.get("title")
    var body = that.model.get("body")
    var htmlString = "<h2>" + title + "</h2></br><h3>" + body + "</h3>"
    that.$el.html(htmlString);
    that.$el.append("<a href=\'/#\'>Link Back</a>")
    return that;
  }

});
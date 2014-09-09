var app = app || {};

app.AppView = Backbone.View.extend({
  el: '#main',
  initialize: function(){

  },
  render: function(){
    this.$el.html( app.templates.appView);
    this.collection.each(function (p) {
      var view = new app.PostListView({ model: p });
      var li
    })

  }
});
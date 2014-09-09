var app = app || {};

app.PostListView = Backbone.View.extend({
    tagName: 'li',
    events: {
      'click': 'view'
    },
    initialize: function(){
      this.render();
    },
    render: function(){
      var complied_list_html = Handlebars.compile(app.templates.PostListView);

      var model = complied_list_html(this.model.toJSON());

      this.$el.html(model);

      return this.el;

    },
    view: function(){
      app.router.navigate('posts/' + this.model.get('id'), true );
    }
});
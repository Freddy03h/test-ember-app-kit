var PostIndexRoute = Ember.Route.extend({
  renderTemplate: function() {
    this.controllerFor('application').set('title', this.currentModel.get('title'));
    // Render default outlet   
    this.render();
    // render extra outlets
    this.render("post-menu", {
      outlet: "menu-right",
      into: "application" // important when using at root level
    });
    this.render("button/back", {
      outlet: "menu-left",
      into: "application" // important when using at root level
    });
  }
});

export default PostIndexRoute;
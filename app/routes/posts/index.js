var PostsIndexRoute = Ember.Route.extend({
  renderTemplate: function() {
  	this.controllerFor('application').set('title', 'List of posts');
    // Render default outlet   
    this.render();
    // render extra outlets
    this.render("post-menu", {
      outlet: "menu-right",
      into: "application" // important when using at root level
    });

    this.render("categories/index", {
      outlet: "extra",
      into: "application" // important when using at root level
    });
  }
});

export default PostsIndexRoute;
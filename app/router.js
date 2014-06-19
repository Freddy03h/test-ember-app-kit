var Router = Ember.Router.extend(); // ensure we don't share routes between all Router instances

Router.map(function() {
  //this.route('component-test');
  //this.route('helper-test');
  // this.resource('posts', function() {
  //   this.route('new');
  // });
  this.resource('posts', function(){
    this.resource('post', { path:'/:post_id' }, function(){
      //this.route('edit');
    });
    //this.route('create');
  });
});

export default Router;

var PostsController = Ember.ArrayController.extend(Ember.Evented, {
  actions:{
    open: function(){
      this.trigger('open');
    }
  }
});

export default PostsController;
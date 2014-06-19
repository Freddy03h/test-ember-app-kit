var PostsController = Ember.ArrayController.extend({
  actions:{
    open: function(){
      console.log('open action on postS');
    }
  }
});

export default PostsController;
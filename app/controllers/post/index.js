var PostController = Ember.ObjectController.extend({
  actions:{
    back: function(){
      this.transitionToRouteAnimated('posts', {main: 'slideRight'});
    },
    open: function(){
      console.log('open action on post');
    }
  }
});

export default PostController;
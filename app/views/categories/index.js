var CategoriesIndexView = Ember.View.extend({
  tagName: ['div'],
  elementId: 'categories-selection',
  classNames: ['layer-scrollable layer-toggle with-topbar with-bottombar'],
  layoutName: ['layout/wrap'],
  classNameBindings: ['isOpen:open'],
  isOpen: false,

  didInsertElement: function () {
    this.get('controller').on('open', this, function(){
      this.set('isOpen', !this.get('isOpen') );
    });
  }
});

export default CategoriesIndexView;
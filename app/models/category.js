var attr = DS.attr,
    hasMany = DS.hasMany,
    belongsTo = DS.belongsTo;

var Category = DS.Model.extend({
  title: attr(),
  posts: hasMany('posts')
});

export default Category;
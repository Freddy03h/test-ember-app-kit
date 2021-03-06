var attr = DS.attr,
    hasMany = DS.hasMany,
    belongsTo = DS.belongsTo;

var Post = DS.Model.extend({
  title: attr(),
  comments: hasMany('comment'),
  category: belongsTo('category'),
  user: attr(),
  body: attr()
});

export default Post;
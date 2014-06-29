require("es6-shim");
module.exports = function(server) {

  // Create an API namespace, so that the root does not
  // have to be repeated for each end point.
  server.namespace('/api', function() {

    var postsData = {
      "posts": [{
        "id": 1,
        "title": "Rails is omakase",
        "category": 'fram',
        "comments": [1, 2],
        "user" : "dhh",
        "body" : "ferfgry fyergf regfy greuygf uyerg ufyer"
      }, {
        "id": 5,
        "title": "Ruby is red",
        "category": 'lang',
        "comments": [],
        "user" : "fdgdfg",
        "body" : "cdjoenr fg dfg sdfgdsfg urhv u"
      }, {
        "id": 2,
        "title": "Ember is toto",
        "category": 'fram',
        "comments": [3, 4],
        "user" : "dhc",
        "body" : "cdjoenr foncoireniuner uihrevurhv u"
      }, {
        "id": 3,
        "title": "JavaScript is kawai",
        "category": 'lang',
        "comments": [5],
        "user" : "tyu",
        "body" : "cddgdfgfg dfg dfgfdfihrevurhv u"
      }, {
        "id": 4,
        "title": "jQuery is less important",
        "category": 'libr',
        "comments": [],
        "user" : "eoefh",
        "body" : "esfaz oaiz zuhdoi zdiuhaz d"
      }],

      "categories": [{
        "id": 'lang',
        "title": "Language"
      }, {
        "id": 'fram',
        "title": "Framework"
      }, {
        "id": 'libr',
        "title": "Library"
      }],

      "comments": [{
        "id": 1,
        "body": "Rails is unagi"
      }, {
        "id": 2,
        "body": "Omakase O_o"
      }, {
        "id": 3,
        "body": "Ember is titi"
      }, {
        "id": 4,
        "body": "Toto O_o"
      }, {
        "id": 5,
        "body": "nyancat"
      }]
    };

    server.get('/posts', function(req, res) {
      res.send(postsData);
    });

    server.get('/categories', function(req, res) {
      res.send({categories: postsData.categories});
    });

    // Return fixture data for '/api/posts/:id'
    server.get('/posts/:id', function(req, res) {
      var idParam = parseInt(req.params.id, 10);

      var post = postsData.posts.find(function(element, index, array){ return element.id === idParam; });

      var comments = postsData.comments.filter(function(element, index, array){ return post.comments.indexOf(element.id) >= 0; });

      var category = postsData.categories.find(function(element, index, array){ return element.id === post.category; });

      res.send({post :post, comments: comments, category: category});
    });

  });
};

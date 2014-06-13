require("es6-shim");
module.exports = function(server) {

  // Create an API namespace, so that the root does not
  // have to be repeated for each end point.
  server.namespace('/api', function() {

    var postsData = {
      "posts": [{
        "id": 1,
        "title": "Rails is omakase",
        "comments": [1, 2],
        "user" : "dhh",
        "body" : "ferfgry fyergf regfy greuygf uyerg ufyer"
      }, {
        "id": 2,
        "title": "Ember is toto",
        "comments": [3, 4],
        "user" : "dhc",
        "body" : "cdjoenr foncoireniuner uihrevurhv u"
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
      }]
    };

    server.get('/posts', function(req, res) {
      res.send(postsData);
    });

    // Return fixture data for '/api/posts/:id'
    server.get('/posts/:id', function(req, res) {
      var idParam = parseInt(req.params.id, 10);
      var post = postsData.posts.find(function(element, index, array){ return element.id === idParam; });
      var comments = postsData.comments.filter(function(element, index, array){ return post.comments.indexOf(element.id) >= 0; });
      res.send({post :post, comments: comments});
    });

  });
};

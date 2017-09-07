var Article = require("../models/Article");

module.exports = {

  create: function(req, res) {
    console.log(`Controller log // req.body.article = ${JSON.stringify(req.body.article)}`);
    let article = req.body.article;
    let result = {}

    result._id = article._id
    result.title = article.headline.main;
    result.date = article.pub_date;
    result.url = article.web_url;
    result.byline = article.byline.original;

    let entry = new Article(result);
    
    entry.save().then(function(doc) {
      res.json(doc);
    }).catch(function(err) {
      res.json(err);
    });
  },
  getSaved: function (req, res) {
    Article.find()
    .then(function(doc) {
      res.json(doc);
      // console.log(doc);
    }).catch(function(err) {
      res.json(err);
    });
  },
  // This method handles updating Articles
  update: function(req, res) {
    Article.update({
      _id: req.params.id
    },
      req.body
    ).then(function(doc) {
      res.json(doc);
    }).catch(function(err) {
      res.json(err);
    });
  },
  // This method handles deleting Articles
  destroy: function(req, res) {
    Article.remove({
      _id: req.params.id
    }).then(function(doc) {
      res.json(doc);
    }).catch(function(err) {
      res.json(err);
    });
  }
};

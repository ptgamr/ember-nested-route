module.exports = function(app) {
  var express = require('express');
  var categoriesRouter = express.Router();

  var CATEGORIES = [
    {id: 1, name: 'cat 1'},
    {id: 2, name: 'cat 2'},
    {id: 3, name: 'cat 3'},
    {id: 4, name: 'cat 4'},
    {id: 5, name: 'cat 5'},
    {id: 6, name: 'cat 6'},
    {id: 7, name: 'cat 7'},
    {id: 8, name: 'cat 8'},
    {id: 9, name: 'cat 9'},
    {id: 10, name: 'cat 10'},
    {id: 11, name: 'cat 11'},
    {id: 12, name: 'cat 12'}
  ];

  categoriesRouter.get('/', function(req, res) {
    res.send({
      'categories': CATEGORIES
    });
  });

  categoriesRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  categoriesRouter.get('/:id', function(req, res) {
    res.send({
      'categories': CATEGORIES[Number(req.params.id) - 1]
    });
  });

  categoriesRouter.put('/:id', function(req, res) {
    res.send({
      'categories': {
        id: req.params.id
      }
    });
  });

  categoriesRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/categories', categoriesRouter);
};

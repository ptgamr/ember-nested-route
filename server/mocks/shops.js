module.exports = function(app) {
  var express = require('express');
  var shopsRouter = express.Router();

  shopsRouter.get('/', function(req, res) {
    res.send({
      'shops': [
        {id: 1, name: 'shop 1', categories: [1,2,3,10]},
        {id: 2, name: 'shop 2', categories: [4,5]},
        {id: 3, name: 'shop 3', categories: [7,8,9,10,11,12]}
      ]
    });
  });

  shopsRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  shopsRouter.get('/:id', function(req, res) {
    res.send({
      'shops': {
        id: req.params.id
      }
    });
  });

  shopsRouter.put('/:id', function(req, res) {
    res.send({
      'shops': {
        id: req.params.id
      }
    });
  });

  shopsRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/shops', shopsRouter);
};

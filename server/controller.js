var helpers = require('../db/dbhelpers.js');

// define your controllers
var controller = {
  get: (req, res) => {
    helpers.get()
    .then( data => res.status(200).send(data))
    .catch( err => res.status(400).send(err))
  },
  post: (req, res) => {
    helpers.post(req.body)
    .then( () => res.status(200).send('posted'))
    .catch( err => res.status(400).send(err))
  },
  put: (req, res) => {
    helpers.put(req.params._id, req.body)
    .then( () => res.status(200).send('updated'))
    .catch( err => res.status(400).send(err))
  },
  delete: (req, res) => {
    helpers.delete(req.params._id)
    .then( () => res.status(200).send('deleted'))
    .catch( err => res.status(400).send(err))
  }
};

module.exports = controller;  
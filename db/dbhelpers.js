var Todo = require('./');

var helpers = {
  // add your queries here
  get: () => Todo.find({}).sort({priority: 1}).limit(5), //limit to 5 results
  post: (item) => Todo.create(item),
  put: (_id, priority) => Todo.findOneAndUpdate({_id}, priority),
  delete: (_id) => Todo.deleteOne({_id})
};

module.exports = helpers
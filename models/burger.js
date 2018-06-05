var orm = require("../config/orm.js")

var burger = {
  all: function(cb) {
    orm.all(function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(burger,cb) {
    orm.create(burger, function(res) {
      cb(res);
    });
  },
  update: function(burger,cb) {
    orm.update(burger, function(res) {
      cb(res);
    });
  }
}


  


// Export the database functions for the controller (catsController.js).
module.exports = burger;

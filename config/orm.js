var sqlConnection = require("./connection.js")


var orm = {
  
	all: function (cb){
    
  
  var sql = 'SELECT * FROM burgers' 
  
  
    sqlConnection.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Result: " + result);
      cb(result);
    });
  
  
  },
  	create: function(insert,cb){
      

    
        //what is insert parameter?
        //example {burger_name:"bacon_guacamole", devoured: False}
        console.log(insert)
      var sql = "INSERT INTO burgers (burger_name, devoured) VALUES (" + "'" + insert.burger_name + "'" + "," + insert.devoured + ")"
      
      console.log(sql)
    
    
    
      sqlConnection.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Result: " + result);
        cb(result);
      });
    
  
    },
  	update: function (updateId, cb){
      
    
       // {burger_name:"bacon_guacamole", devoured: False, id:5}
    
          
    
      var sql = 'UPDATE burgers SET devoured = true WHERE id = ' + updateId  
    
      
    
      sqlConnection.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Result: " + result);
        cb(result);
      });
    
    
    }
}

module.exports = orm;


// INSERT INTO table_name (column1, column2, column3, ...)
// VALUES (value1, value2, value3, ...);

// UPDATE table_name
// SET column1 = value1, column2 = value2, ...
// WHERE condition;

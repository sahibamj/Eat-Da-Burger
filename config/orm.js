var connection = require("../config/connection.js");


let orm = {

    selectAll: (tableName, callback)=>{
      let queryString = "SELECT * FROM ??"
  
      connection.query(queryString, tableName, (err, data)=>{
        if (err){console.error("ERROR: " + err.stack)}
        callback(data)
      })
    }
  }

 

module.exports = orm;
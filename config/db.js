
const mysql = require('mysql2');

const db = {
  /* don't expose password or any sensitive info, done only for demo */
  host: 'p3nlmysql173plsk.secureserver.net',
  user: 'user12345',
  password: 'Akh123456@',
  database: 'src_check'
}
var connection;

function handleDisconnect() {
  console.log("I am Trying....")
  connection = mysql.createConnection(db); 

  connection.connect(function(err) {              
    if(err) {                                 
      console.log('error when connecting to db:', err);
      setTimeout(handleDisconnect, 2000); 
    }   

  });                                     
  connection.on('error', function(err) {
    console.log('db error', err);
    if(err.code === 'PROTOCOL_CONNECTION_LOST') { 
      handleDisconnect();                       
    } else {                                    
      throw err;                               
    }
  });
}

handleDisconnect();
module.exports = connection;



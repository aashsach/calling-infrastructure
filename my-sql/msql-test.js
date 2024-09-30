const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost', // or use the host's IP address
  port: 3360, // mapped port
  user: 'jambones',
  password: 'jambones',
  database: 'jambones'
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err.stack);
    return;
  }
  console.log('Connected to MySQL as id', connection.threadId);
});

connection.end();
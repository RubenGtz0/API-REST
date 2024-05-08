const mysql = require('mysql');

//Set database connection credentials
const config ={
    host: '192.168.1.232',
    user: 'root',
    password: 'root',
    database: 'API'
};

//Create a MySQL pool
const pool = mysql.createPool(config);

//Export the pool
module.exports=pool;
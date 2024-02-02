const mysql = require('mysql');

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    datbase: process.env.DB_PASS,
    database: process.env.DB_NAME
});
connection.connect((error) => {
    if (error) throw error;
    console.log('conectado ao banco de dados: ${process.env.DB_NAME}')



});
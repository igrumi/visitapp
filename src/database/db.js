import mysql from "mysql2";

export const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'visitapp_db'
});

connection.connect(function(err){
    if (err) throw err;
    console.log('¡Conexión exitosa!');
});


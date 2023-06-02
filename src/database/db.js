import mysql from "mysql2";

export const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'visitapp_2'
});

connection.connect(function(err){
    if (err) throw err;
    console.log('¡Conexión exitosa!');
});


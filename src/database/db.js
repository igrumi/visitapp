import mysql from "mysql2";

export const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'visitapp_db'
});

connection.connect(function(err){
    if (err) throw err;
    console.log('¡Conexión exitosa!');
});

export const getUsuarios = async () => {
    try {
      const [rows] = await connection.execute('SELECT * FROM USUARIO');
        return rows;
    } catch (error) {
        console.error('Error al obtener los usuarios:', error);
        throw error;
    }
};

export const getUsuario = async (rut) => {
    try {
      const [rows] = await connection.execute('SELECT * FROM USUARIO WHERE rut = ?', [rut]);
        if (rows.length > 0) {
        return rows[0];
        } else {
        return null;
        }
    } catch (error) {
        console.error('Error al obtener el usuario:', error);
        throw error;
    }
};

export const agregarUsuario = async (usuario) => {
    try {
        
        await connection.execute('INSERT INTO USUARIO (rut, nombre, correo, contrasena, rol, estado) VALUES (?, ?, ?, ?, ?, ?)', [
        usuario.rut,
        usuario.nombre,
        usuario.correo,
        usuario.contrasena,
        usuario.rol,
        usuario.estado,
        ]);
    } catch (error) {
        console.error('Error al agregar el usuario:', error);
        throw error;
    }
};

export const editarUsuario = async (rut, datosUsuario) => {
    try {
        await connection.execute('UPDATE USUARIO SET nombre = ?, correo = ?, contrasena = ?, rol = ?, estado = ? WHERE rut = ?', [
        datosUsuario.nombre,
        datosUsuario.correo,
        datosUsuario.contrasena,
        datosUsuario.rol,
        datosUsuario.estado,
        rut,
        ]);
    } catch (error) {
        console.error('Error al editar el usuario:', error);
        throw error;
    }
};
  // Eliminar un usuario por su ID
export const disableUser = async (rut) => {
    try {
        await connection.execute('UPDATE USUARIO SET estado = 2 WHERE rut = ?', [rut]);
    } catch (error) {
        console.error('Error al eliminar el usuario:', error);
        throw error;
    }
};

export const enableUser = async (rut) => {
    try {
        await connection.execute('UPDATE USUARIO SET estado = 1 WHERE rut = ?', [rut]);
    } catch (error) {
        console.error('Error al eliminar el usuario:', error);
        throw error;
    }
};



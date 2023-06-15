import { connection } from "../database/db.js";
import bcryptjs  from 'bcryptjs';


// Obtener la lista de usuarios
export const getUsuarios = (req, res) => {
  const { rol } = req.user;

  const queryActivos = "SELECT * FROM USUARIO WHERE estado = 1 ORDER BY rol"; // Obtener usuarios activos
  const queryInactivos = "SELECT * FROM USUARIO WHERE estado = 2 ORDER BY rol"; // Obtener usuarios inactivos

  connection.query(queryActivos, (errActivos, usuariosActivos) => {
    if (errActivos) {
      console.error(errActivos);
      return res.status(500).send("Error al obtener la lista de usuarios activos");
    }

    connection.query(queryInactivos, (errInactivos, usuariosInactivos) => {
      if (errInactivos) {
        console.error(errInactivos);
        return res.status(500).send("Error al obtener la lista de usuarios inactivos");
      }

      res.render("users", { rol, usuariosActivos, usuariosInactivos });
    });
  });
};


// Mostrar el formulario de edición de usuario
export const mostrarFormularioEdicion = (req, res) => {
  const { rut } = req.params;
  const query = "SELECT * FROM USUARIO WHERE rut = ? AND estado = 1"; // Obtener usuario activo por rut
  connection.query(query, [rut], (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).send("Error al obtener los datos del usuario");
    }
    if (results.length === 0) {
      return res.status(404).send("Usuario no encontrado");
    }
    const usuario = results[0];
    res.render("edit_users", { usuario });
  });
};

export const mostrarFormularioEdicionInactive = (req, res) => {
  const { rut } = req.params;
  const query = "SELECT * FROM USUARIO WHERE rut = ? AND estado = 2"; // Obtener usuario activo por rut
  connection.query(query, [rut], (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).send("Error al obtener los datos del usuario");
    }
    if (results.length === 0) {
      return res.status(404).send("Usuario no encontrado");
    }
    const usuario = results[0];
    res.render("edit_users_inactive", { usuario });
  });
};

// Agregar un nuevo usuario
export const agregarUsuario = async (req, res) => {
  const { rut, nombre, correo, contrasena, rol } = req.body;
  const passwordHash = await bcryptjs.hash(contrasena, 8);

  const query = "INSERT INTO USUARIO (rut, nombre, correo, contrasena) VALUES (?, ?, ?, ?)"; // Insertar usuario con estado activo
  connection.query("INSERT INTO USUARIO SET ?", {rut, nombre, correo, contrasena:passwordHash, rol}, (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).send("Error al agregar el usuario");
    }
    res.redirect("/users");
  });
};

// Editar un usuario existente
export const editarUsuario = async (req, res) => {
  const { rut } = req.params;
  const { nombre, correo, contrasena, rol } = req.body;
  const passwordHash = await bcryptjs.hash(contrasena, 8);
  const query = "UPDATE USUARIO SET nombre = ?, correo = ?, contrasena = ?, rol = ? WHERE rut = ? AND estado = 1"; // Actualizar usuario activo por rut
  connection.query(query, [nombre, correo, passwordHash, rol, rut], (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).send("Error al editar el usuario");
    }
    res.redirect("/users");
  });
};

export const editarUsuarioInactive = (req, res) => {
  const { rut } = req.params;
  const { nombre, correo, contrasena, rol } = req.body;
  const query = "UPDATE USUARIO SET nombre = ?, correo = ?, contrasena = ?, rol = ? WHERE rut = ? AND estado = 2"; // Actualizar usuario activo por rut
  connection.query(query, [nombre, correo, contrasena, rol, rut], (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).send("Error al editar el usuario");
    }
    res.redirect("/users");
  });
};

// Mostrar el formulario de confirmación de eliminación de usuario
export const mostrarFormularioDeshabilitacion = (req, res) => {
  const { rut } = req.params;
  const query = "SELECT * FROM USUARIO WHERE rut = ? AND estado = 1"; // Obtener usuario activo por rut
  connection.query(query, [rut], (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).send("Error al obtener los datos del usuario");
    }
    if (results.length === 0) {
      return res.status(404).send("Usuario no encontrado");
    }
    const usuario = results[0];
    res.render("disable_users", { usuario });
  });
};

export const mostrarFormularioHabilitacion = (req, res) => {
  const { rut } = req.params;
  const query = "SELECT * FROM USUARIO WHERE rut = ? AND estado = 2"; // Obtener usuario inactivo por rut
  connection.query(query, [rut], (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).send("Error al obtener los datos del usuario");
    }
    if (results.length === 0) {
      return res.status(404).send("Usuario no encontrado");
    }
    const usuario = results[0];
    res.render("enable_users", { usuario });
  });
};

// Eliminar un usuario
export const disableUser = (req, res) => {
  const { rut } = req.params;
  const query = "UPDATE USUARIO SET estado = 2 WHERE rut = ? AND estado = 1"; // Actualizar estado del usuario a "inactivo"
  connection.query(query, [rut], (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).send("Error al eliminar el usuario");
    }
    res.redirect("/users");
  });
};

export const enableUser = (req, res) => {
  const { rut } = req.params;
  const query = "UPDATE USUARIO SET estado = 1 WHERE rut = ? AND estado = 2"; // Actualizar estado del usuario a "inactivo"
  connection.query(query, [rut], (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).send("Error al eliminar el usuario");
    }
    res.redirect("/users");
  });
};

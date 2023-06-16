import { connection } from "../database/db.js";


export const getReport = async (req, res) => {
  const data = await new Promise((resolve, reject) => {
    return connection.query('SELECT rut, nombre, correo, rol, estado from USUARIO', [], (error, results) => {
      error && reject(error);
      resolve(results);
    })
  })

  res.status(200).json({ data });
}
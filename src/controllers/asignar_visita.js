import { connection } from "../database/db.js"

const obtenerAsistentes = async () => {
    try {
      const asistentes = await new Promise((resolve, reject) => {
        connection.query("SELECT * FROM usuario", (err, rows) => {
          if (err) {
            reject(err);
            return;
          }
  
          resolve(rows);
        });
      });
  
      return asistentes;
    } catch (error) {
      console.error('Error al ejecutar la consulta:', error);
    }
  };

  const obtenerHogares = async () => {
    try {
      const hogares = await new Promise((resolve, reject) => {
        connection.query("SELECT * FROM hogar", (err, rows) => {
          if (err) {
            reject(err);
            return;
          }
  
          resolve(rows);
        });
      });
  
      return hogares;
    } catch (error) {
      console.error('Error al ejecutar la consulta:', error);
    }
  };

export const asignar_visita = async (req, res) => {
    const asistentes = await obtenerAsistentes()
    const hogares = await obtenerHogares()

    return res.render("asignar_visita", {asistentes, hogares})
}
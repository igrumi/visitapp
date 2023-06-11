import { query } from "express";
import { connection } from "../database/db.js"

const obtenerAsistentes = async () => {
  try {
    const asistentes = await new Promise((resolve, reject) => {
      connection.query("SELECT * FROM usuario WHERE rol = 'usuario' AND estado = '1' ", (err, rows) => {
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

  try {
    const { direhogar, asistentes, motivo } = req.body;
    if (motivo != null){
      console.log(req.body)
      connection.query('INSERT INTO visita (motivo,rut,id_hogar) VALUES (?,?,?)',
      [motivo,asistentes,direhogar])
      return res.redirect('/menu_add_visit');
    }
  } catch {
  }
  return res.render("asignar_visita", { asistentes, hogares});
}
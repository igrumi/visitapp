import { query } from "express";
import { connection } from "../database/db.js"

const obvisidispo = async () => {
    try {
        const visdispo = await new Promise((resolve, reject) => {
            connection.query("SELECT * FROM visita v JOIN hogar h on v.id_hogar=h.id_hogar \
                            JOIN jefe_hogar jh on h.rut_jh=jh.rut_jh WHERE estado ='Incompleto' ", (err, rows) => {
                resolve(rows);
            });
        });
        return visdispo;
    } catch (error) {
        console.error('Error al ejecutar la consulta:', error);
    } 
};

const asis_dispo = async () => {
    try{
        const list_asis = await new Promise ((resolve,reject) => {
            connection.query("SELECT * FROM usuario", (err,rows) => {
                resolve(rows);
            });
        });
        return list_asis;
    } catch (error){
        console.error('Error al ejecutar la consulta:', error);
    }
}


export const visitas_disponibles = async (req, res) => {
    const visdispo = await obvisidispo()
    const list_asis = await asis_dispo()

    return res.render("visitas_disponibles", {visdispo, list_asis});
}

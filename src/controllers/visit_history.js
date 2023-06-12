import { connection } from "../database/db.js";

export const visit_history = async (req, res) => {
    const { rol } = req.user;
    const { date_ini, date_end} = req.body
    const list_visi_usu = await new Promise((resolve, reject) => {
        connection.query("SELECT * FROM visita v JOIN hogar h on v.id_hogar=h.id_hogar \
                                        JOIN jefe_hogar jh on h. id_hogar=jh. id_hogar WHERE v.rut = ? AND fecha_visi BETWEEN ? AND ?", 
                                        [req.user.rut, date_ini, date_end], async (err, results) => {
            if (err) {
                reject(err);
            }
            resolve(results);
        });
    });

    return res.render("visit_history", {rol, list_visi_usu });
}
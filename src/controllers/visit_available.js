import { connection } from "../database/db.js"

export const visit_available = async (req, res) => {
    const { rol } = req.user;
    const list_visi = await new Promise((resolve, reject) => {
        connection.query("SELECT * FROM visita v JOIN hogar h on v.id_hogar=h.id_hogar \
                                        JOIN jefe_hogar jh on h.id_hogar=jh.id_hogar WHERE estado ='Incompleto' AND v.rut = ? ORDER BY 1 DESC", [req.user.rut], async (err, results) => {
            if (err) {
                reject(err);
            }
            resolve(results);
        });
    });


    return res.render("visit_available", { list_visi, rol});
}

import { connection } from "../database/db.js";

export const edit_visit = (req, res) => {
    const { homeId } = req.params;
    const { rol } = req.user;
    const { jh_name, jh_last_name, jh_rut, jh_phone, jh_email, jh_address, jh_commune } = req.body;

    connection.query('UPDATE hogar SET  direccion = ?, comuna = ?  WHERE id_hogar = ?',
        [jh_address, jh_commune, homeId]);
    return res.render("edit_visit", { homeId, rol });
}

export const edit_visit_render = (req, res) => {
    const { homeId } = req.params;
    const { rol } = req.user;

    return res.render("edit_visit", { homeId, rol });
}

import { connection } from "../database/db.js";

export const state_benefits = (req, res) => {

    const { homeId, rutIntegrante } = req.params;

    const { be_desc} = req.body;

    connection.query('INSERT INTO beneficios_estatales( tipo_beneficio,  rut_integrante) VALUES(?,?)',
    [be_desc, Number(rutIntegrante)]
    )

    return res.redirect(`/health_situation/${homeId}/${rutIntegrante}`)
}

export const state_benefits_render = (req, res) => {
    const { rol } = req.user;
    const { homeId, rutIntegrante} = req.params;
    return res.render("state_benefits", {rol, homeId, rutIntegrante});
}
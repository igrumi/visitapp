import { connection } from "../database/db.js";

export const health_situation = (req, res) => {
    
    const { homeId, rutIntegrante} = req.params;
    const { i_disease, i_disability, i_observation} = req.body;

    connection.query('INSERT INTO situacion_salud ( tipo_enfermedad, discapacidad, observacion, rut_integrante)\
                    VALUES(?,?,?,?)',[i_disease, i_disability, i_observation, Number(rutIntegrante)]
    );

    return res.redirect(`/family_comp/${homeId}`)
}

export const health_situation_render = (req, res) => {

    const { rol } = req.user;
    const { homeId, rutIntegrante} = req.params;

    return res.render("health_situation", {rol, homeId, rutIntegrante});
}
import { connection } from "../database/db.js";

export const home_situation = (req, res) => {
    
    const { homeId } = req.params;
    const { home_situation, social_rel } = req.body;

    connection.query('INSERT INTO situacion_vivienda(situacion_vivienda, relaciones_sociales, id_hogar) \
                    VALUES(?,?,?)',[home_situation, social_rel, Number(homeId)]);
    return res.redirect(`/spiritual_needs/${homeId}`)
}

export const home_situation_render = (req, res) => {
    
    const { homeId } = req.params;

    return res.render("home_situation", { homeId });
}
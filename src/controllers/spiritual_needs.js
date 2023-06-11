import { connection } from "../database/db.js";

export const spiritual_needs = (req, res) => {

    const { homeId } = req.params;
    const { bendicion_casa, bautismos, uncion_enfermos, primera_comunion, confirmacion } = req.body;

    connection.query('INSERT INTO necesidades_espirituales( bendicion_casa, bautismo, uncion_enfermos,\
        primera_comunion, confirmacion, id_hogar) VALUES(?,?,?,?,?,?)', 
        [bendicion_casa, bautismos, uncion_enfermos, primera_comunion, confirmacion, Number(homeId)]);

    connection.query('UPDATE visita SET estado = "completo", fecha_visi = NOW()  WHERE id_hogar = ?', [homeId]);
    
    return res.redirect(`/visit_available`)
}

export const spiritual_needs_render = (req, res) => {

    const { rol } = req.user;
    const { homeId } = req.params;

    return res.render("spiritual_needs", { rol, homeId });
}

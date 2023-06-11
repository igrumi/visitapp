import { connection } from "../database/db.js";

export const economic_situation = (req, res) => {
    
    const { homeId, rutIntegrante } = req.params;
    
    const { i_incomes, i_jobtype, i_unemployment, i_prevision } = req.body;

    connection.query('INSERT INTO situacion_economica (ingresos, tipo_empleo, desempleo, prevision, rut_integrante) VALUES (?,?,?,?,?)',
    [Number(i_incomes), i_jobtype, i_unemployment, i_prevision, Number(rutIntegrante)]
    )
    return res.redirect(`/state_benefits/${homeId}/${rutIntegrante}`)
}

export const econo_situa_render = (req, res) => {
    
    const { homeId, rutIntegrante} = req.params;
    return res.render("economic_situation", { homeId, rutIntegrante });

}
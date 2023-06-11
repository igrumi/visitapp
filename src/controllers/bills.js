import { connection } from "../database/db.js";

export const bills = (req, res) => {

    const { homeId } = req.params;
    const { bills_basic, bills_alim, bills_clothing, bills_hygiene,
        bills_tuition, bills_home, bills_medical, bills_other } = req.body;

    connection.query('INSERT INTO gastos ( gastos_basicos, alimentacion, vestimenta,  higiene,\
        colegiatura, dividendo, gastos_medicos, otro_gasto, id_hogar) VALUES (?,?,?,?,?,?,?,?,?)',
        [Number(bills_basic), Number(bills_alim), Number(bills_clothing), Number(bills_hygiene), 
        Number(bills_tuition),Number(bills_home), Number(bills_medical), Number(bills_other), Number(homeId)]
    )
    
    return res.redirect(`/home_situation/${homeId}`)
}

export const bills_render = (req, res) => {

    const { rol } = req.user;
    const { homeId } = req.params;
    return res.render("bills", { rol, homeId });
}
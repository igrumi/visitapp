import { connection } from "../database/db.js";

export const addVisitaForm = async (req, res) => {
    try {
        const { jh_rut, jh_name, jh_last_name, jh_age, jh_birthdate, jh_nat, jh_marital_status, jh_phone, jh_email, jh_commune } = req.body

        const {jh_address} = req.body
        connection.query('INSERT INTO hogar (direccion,comuna) VALUES (?,?)',[jh_address,jh_commune], (error) =>{
            if (error) {
                console.log(error);
            }else{
                
            }
        });
        const list_asis = connection.query("SELECT * FROM hogar WHERE direccion = ?",[jh_address], async (err, results) => {
            connection.query('INSERT INTO jefe_hogar (rut,nombre,apellidos,edad,fecha_nac,nacionalidad,estado_civil, celular,correo, id_hogar) VALUES (?,?,?,?,?,?,?,?,?,?)',
            [Number(jh_rut), jh_name, jh_last_name, Number(jh_age), new Date(jh_birthdate), jh_nat, jh_marital_status, Number(jh_phone), jh_email, Number(results[0].id_hogar) ],)
            if (err) {
                console.log(err);
            } else {
                res.redirect('menu_add_visit')
            }
        });
    }catch {

    }
    
    
}
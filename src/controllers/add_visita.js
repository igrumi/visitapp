import { connection } from "../database/db.js";


export const add_visita = async (req, res) => {
    try {
        const {jh_rut,jh_name,jh_last_name,jh_age,jh_birthdate,jh_nat,jh_marital_status,jh_phone,jh_email,jh_address,jh_commune} = req.body
        console.log(req.body)
        connection.query('INSERT INTO jefe_hogar (rut,nombre,edad,fecha_nac,nacionalidad,estado_civil,celular,apellidos,correo) VALUES (?,?,?,?,?,?,?,?,?)',
        [jh_rut,jh_name,jh_age,jh_birthdate,jh_nat,jh_marital_status,jh_phone,jh_last_name,jh_email,],(error, results) => {
                if (error) {
                    console.log(error);
                } else {
                    res.render('register', {
                        alert: true,
                        alertTitle: "Registro visita",
                        alertMessage: "¡Registro de visita exitoso!",
                        alertIcon: 'success',
                        showConfirmButton: true,
                        time: 1500,
                        ruta: ''
                    })
                }
            });
        connection.query('INSERT INTO hogar (direccion,comuna,tipo_vivienda, rut_jh) VALUES (?,?,1,?)',
            [jh_address,jh_commune,slc_livingplace,jh_rut],(error, results) => {
                    if (error) {
                        console.log(error);
                    } 
                });
    }
    catch {

    }
}

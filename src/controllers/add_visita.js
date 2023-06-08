import { connection } from "../database/db.js";


export const add_visita = async (req, res) => {
    try {
        const {jh_name,jh_last_name,jh_rut,jh_phone,jh_email,jh_adress,jh_commune,slc_livingplace} = req.body
        console.log(req.body)
        connection.query('INSERT INTO jefe_hogar (rut_jh,nombre,apellido,celular,correo) VALUES (?,?,?,?,?)',
        [jh_rut,jh_name,jh_last_name,jh_phone,jh_email],(error, results) => {
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
        connection.query('INSERT INTO hogar (situacion_vivienda,relaciones_sociales,direccion,comuna,beneficios_estatales, tipo_vivienda) VALUES (?,?,1,?,?)',
            [jh_adress,jh_commune,jh_rut,slc_livingplace],(error, results) => {
                    if (error) {
                        console.log(error);
                    } 
                });
    }
    catch {

    }
}

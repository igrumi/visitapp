import { connection } from "../database/db.js";


export const add_visita = async (req, res) => {
    try {
        const {nombreJH,apellidoJH,rutJH,celularJH,correoJH,direJH,comunaJH,slc_vivienda} = req.body
        console.log(req.body)
        connection.query('INSERT INTO jefe_hogar (rut_jh,nombre,apellido,celular,correo) VALUES (?,?,?,?,?)',
        [rutJH,nombreJH,apellidoJH,celularJH,correoJH],(error, results) => {
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
        connection.query('INSERT INTO hogar (direccion,tipo_vivienda,id_gasto,comuna,rut_jh) VALUES (?,?,1,?,?)',
            [direJH,slc_vivienda,comunaJH,rutJH],(error, results) => {
                    if (error) {
                        console.log(error);
                    } 
                });
    }
    catch {

    }
}

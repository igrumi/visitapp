import { connection } from "../database/db.js";


export const add_visita = async (req, res) => {
    try {
        const { nombreJH, rutJH, celularJH, comunaV, direccionV } = req.body
        console.log(req.body)
        connection.query('INSERT INTO jefe_hogar (rut,nombre_completo,direccion,celular,comuna) VALUES (?,?,?,?,?)',
        [rutJH,nombreJH,direccionV,celularJH,comunaV],(error, results) => {
                if (error) {
                    console.log(error);
                } else {
                    res.render('register', {
                        alert: true,
                        alertTitle: "Registro visita",
                        alertMessage: "¡Registro de visita exitoso!",
                        alertIcon: 'success',
                        showConfirmButton: false,
                        time: 1500,
                        ruta: 'add_visita'
                    })
                }
            });
    }
    catch {

    }
}

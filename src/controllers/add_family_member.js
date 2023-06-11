import { connection } from "../database/db.js";

export const add_family_member = (req, res) => {

    console.log(req.user);
    console.log(req.body);
    const { homeId } = req.params;

    const { i_name, i_last_name, i_rut, i_birthdate,
        i_age, i_kinship, i_gender,
        i_marital_status, i_ed_level, i_email, i_phone } = req.body;

    console.log(req.body);

    connection.query('INSERT INTO \
        integrante(rut, nombre, parentesco, edad, sexo, \
        nivel_educacional, apellidos,  fecha_nacimiento,  estado_civil, celular, correo, id_hogar) \
        VALUES (?,?,?,?,?,?,?,?,?,?,?,?)',
        [Number(i_rut), i_name, i_kinship, i_age, i_gender, i_ed_level, i_last_name, new Date(i_birthdate),
            i_marital_status, Number(i_phone), i_email, Number(homeId)
        ]
    )

    return res.redirect(`/economic_situation/${homeId}/${i_rut}`)
}

export const add_family = (req, res) => {
    const { homeId } = req.params;
    const { rol } = req.user;

    return res.render("add_family_member", { homeId, rol })
}

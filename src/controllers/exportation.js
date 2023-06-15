import { connection } from "../database/db.js";
import xlsx from "xlsx";

export const exportation = async (req, res) => {
    const lista_visitas = await new Promise((resolve, reject) => {
        connection.query("SELECT * FROM visita v JOIN hogar h on v.id_hogar=h.id_hogar", async (err, results) => {
            if (err) {
                reject(err);    
            }
            resolve(results);
        })
    })

    const { rol } = req.user;
    return res.render("exportation", {rol, lv: lista_visitas})
}

export const exporting = async (req, res) => {
    const { rol } = req.user;
    const lista_visitas = await new Promise((resolve, reject) => {
        connection.query("SELECT * FROM visita v JOIN hogar h on v.id_hogar=h.id_hogar", async (err, results) => {
            if (err) {
                reject(err);    
            }
            resolve(results);
        })
    })

    const data = [];
    
    

    if("all" in req.body){
        data.push(Object.keys(lista_visitas[0]));
        lista_visitas.forEach(visita => {
            data.push(Object.values(visita))
        });
    }else if ("selected" in req.body) {
        data.push(Object.keys(lista_visitas[0]));
        lista_visitas.forEach(visita => {
            String(visita.id_hogar) in req.body && data.push(Object.values(visita));
        })
    }

    const worksheet = xlsx.utils.aoa_to_sheet(data)
    const workbook = xlsx.utils.book_new();
    xlsx.utils.book_append_sheet(workbook, worksheet, "Visistas")

    const resumen = [];
    const resumen_datos = await new Promise((resolve, reject) => {
        connection.query('SELECT h.id_hogar "Id_hogar", ROUND(AVG(COALESCE(i.edad , j.edad))) "Edad_promedio", COUNT(i.sexo)+1 "Genero", COUNT(i.nivel_educacional) "Nivel_educacional", COUNT(i.estado_civil)+1 "Estado_civil", COUNT(j.nacionalidad)+1 "Nacionalidad" FROM `hogar` h LEFT JOIN `jefe_hogar` j ON h.id_hogar = j.id_hogar LEFT JOIN `integrante` i ON h.id_hogar = i.id_hogar GROUP BY Id_hogar;', async (err, results) => {
            if (err) {
                reject(err);    
            }
            resolve(results);
        })
    })
    resumen.push(Object.keys(resumen_datos[0]));
    if("all" in req.body){
        resumen_datos.forEach(dato => {
            resumen.push(Object.values(dato))
        });
    }else if ("selected" in req.body) {
        resumen_datos.forEach(dato => {
            String(dato.id_hogar) in req.body && resumen.push(Object.values(dato));
        })
    }
    const resumenworksheet = xlsx.utils.aoa_to_sheet(resumen)
    xlsx.utils.book_append_sheet(workbook, resumenworksheet, "resumen hogares")
    
    xlsx.writeFile(workbook, "./public/Visitas.xlsx")

    return res.render("exporting", {rol, lv: lista_visitas})
}
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
    xlsx.writeFile(workbook, "./public/Visitas.xlsx")

    return res.render("exporting", {rol, lv: lista_visitas})
}
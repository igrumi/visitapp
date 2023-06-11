import { connection } from "../database/db.js";

export const bills = (req, res) => {
    
    

}

export const bills_render = (req, res) => {

    const { homeId } = req.params;
    return res.render("bills", { homeId });
}
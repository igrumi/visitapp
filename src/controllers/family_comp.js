import { connection } from "../database/db.js";

export const family_comp = async (req, res) => {
  const { rol } = req.user;
  const { homeId } = req.params;
  const query = "SELECT * FROM integrante WHERE id_hogar = ?";
  const members = await new Promise((resolve, reject) => {
    connection.query(query, [+homeId], (err, results) => {
      if (err) reject(err);
      console.log(results);
      resolve(results);
    });
  });
  console.log(members);
  return res.render("family_comp", { rol, homeId, members });
};

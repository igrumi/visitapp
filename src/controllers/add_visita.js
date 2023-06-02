export const add_visita = (req, res) => {
    const { rol } = req.user;
    return res.render("add_visita", {rol});
}
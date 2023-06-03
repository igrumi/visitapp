export const jefe_hogar = (req, res) => {
    const { rol } = req.user;
    return res.render("jefe_hogar", {rol});
}
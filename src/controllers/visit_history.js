export const visit_history = (req, res) => {
    const { rol } = req.user;
    return res.render("visit_history", {rol});
}
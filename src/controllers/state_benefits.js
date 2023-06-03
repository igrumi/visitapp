export const state_benefits = (req, res) => {
    const { rol } = req.user;
    return res.render("state_benefits", {rol});
}
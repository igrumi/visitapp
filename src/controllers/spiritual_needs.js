export const spiritual_needs = (req, res) => {
    const { rol } = req.user;
    return res.render("spiritual_needs", {rol});
}

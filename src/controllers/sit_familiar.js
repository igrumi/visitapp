export const sit_familiar = (req, res) => {
    const { rol } = req.user;
    return res.render("sit_familiar", {rol})
}
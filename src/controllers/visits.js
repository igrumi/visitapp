export const visits = (req, res) => {
    const { rol } = req.user;
    return res.render("visits", {rol})
}
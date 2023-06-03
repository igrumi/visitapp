export const menu_add_visit = (req, res) => {
    const { rol } = req.user;
    return res.render("menu_add_visit", {rol})
}
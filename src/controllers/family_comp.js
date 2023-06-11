export const family_comp = (req, res) => {
    
    const { homeId } = req.params;
    const { rol } = req.user;
    return res.render("family_comp", {homeId, rol});
}

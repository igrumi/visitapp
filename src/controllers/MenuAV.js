export const MenuAV = (req, res) => {
    const arr = ["jimi", "pepito", "alejandro"]

    return res.render("MenuAV", {arr})
}
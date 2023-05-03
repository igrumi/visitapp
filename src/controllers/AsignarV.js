export const AsignarV = (req, res) => {
    const asistentes = ["jimi", "pepito", "alejandro"]
    const visitas = ["gorriones 123", "patios 987", "patata 876"]
    
    return res.render("AsignarV", {asistentes, visitas})
}
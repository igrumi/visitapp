export const asignar_visita = (req, res) => {
    const asistentes = ["jimi", "pepito", "alejandro"]
    const visitas = ["gorriones 123", "patios 987", "patata 876"]
    
    return res.render("asignar_visita", {asistentes, visitas})
}
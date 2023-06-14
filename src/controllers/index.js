export const index = (req, res) => {
  const nombre = req.user?.nombre;
  const rol = req.user?.rol;
  return res.render('index', {nombre, rol});
}
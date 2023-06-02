export const index = (req, res) => {
  const { nombre } = req.user;
  const { rol } = req.user;
  return res.render('index', {nombre, rol});
}
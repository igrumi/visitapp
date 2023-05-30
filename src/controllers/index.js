export const index = (req, res) => {
  const { nombre } = req.user
  return res.render('index', {nombre});
}
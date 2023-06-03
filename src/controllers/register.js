export const register = (req, res) => {
  const { rol } = req.user;
    return res.render('register', {rol});
  }
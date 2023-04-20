export const welcomeAPI = (_, res) => {
  return res.status(200).json({ message: 'Welcome!' });
}
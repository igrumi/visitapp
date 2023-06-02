import express from 'express';
import { welcome } from '../controllers/welcome.js';
import { navbar } from "../controllers/navbar.js";
import { add_visita } from "../controllers/add_visita.js";
import { asignar_visita } from "../controllers/asignar_visita.js";
import { menu_add_visita } from "../controllers/menu_add_visita.js";
import { login } from "../controllers/login.js";
import { registerUser } from "../controllers/authController.js";
import { register } from "../controllers/register.js";
import { visitas_disponibles } from "../controllers/visitas_disponibles.js";

export const router = express.Router();

router.get('/', welcome);
router.get('/index', welcome);
router.get('/navbar', navbar);
router.get("/menu_add_visita", menu_add_visita);
router.post("/add_visita", add_visita);
router.get('/add_visita', (req, res) => {
  res.render('add_visita');
});
router.post("/asignar_visita", asignar_visita);
router.get("/asignar_visita", asignar_visita);
router.get("/login", login);
router.get("/visitas_disponibles", visitas_disponibles);
router.post("/register", registerUser);
router.get('/register', (req, res) => {
  res.render('register');
});

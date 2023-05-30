import express from 'express';
import { index } from '../controllers/index.js';
import { sit_familiar } from '../controllers/sit_familiar.js';
import { jefe_hogar } from '../controllers/jefe_hogar.js';
import { health_situation } from '../controllers/health_situation.js';
import { family_comp } from '../controllers/family_comp.js';
import { add_family_member } from '../controllers/add_family_member.js';
import { navbar } from "../controllers/navbar.js";
import { add_visita } from "../controllers/add_visita.js";
import { asignar_visita } from "../controllers/asignar_visita.js";
import { menu_add_visita } from "../controllers/menu_add_visita.js";
import { login } from "../controllers/login.js";
import { registerUser } from "../controllers/authController.js";
import { loginUser } from "../controllers/authController.js"
import { register } from "../controllers/register.js";
import { isAuthenticated,logout } from '../controllers/authController.js';

export const router = express.Router();

router.get('/', isAuthenticated, index);
router.get('/navbar', navbar);
router.get('/health_situation', health_situation);
router.get('/add_family_member', isAuthenticated, add_family_member);
router.get('/family_comp', family_comp);
router.get("/menu_add_visita",  isAuthenticated, menu_add_visita);
router.get("/sit_familiar", sit_familiar);
router.get("/jefe_hogar", jefe_hogar);
router.get("/add_visita", add_visita);
router.get("/asignar_visita", asignar_visita);
router.get("/logout", logout);
router.post("/login", loginUser);
router.post("/register", registerUser);

router.get('/login', (req, res) => {
  res.render('login')
});

router.get('/register', (req, res) => {
    res.render('register');
});



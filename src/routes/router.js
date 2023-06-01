import express from 'express';
import { index } from '../controllers/index.js';
import { sit_familiar } from '../controllers/sit_familiar.js';
import { jefe_hogar } from '../controllers/jefe_hogar.js';
import { health_situation } from '../controllers/health_situation.js';
import { family_comp } from '../controllers/family_comp.js';
import { add_family_member } from '../controllers/add_family_member.js';
import { economic_situation } from "../controllers/economic_situation.js";
//import { navbar } from "../controllers/navbar.js";
import { add_visita } from "../controllers/add_visita.js";
import { asignar_visita } from "../controllers/asignar_visita.js";
import { menu_add_visit } from "../controllers/menu_add_visit.js";
import { state_benefits } from "../controllers/state_benefits.js";
import { bills } from "../controllers/bills.js";
import { visits } from "../controllers/visits.js";
import { home_situation } from "../controllers/home_situation.js";
import { home_to_visit } from "../controllers/home_to_visit.js";
import { spiritual_needs } from "../controllers/spiritual_needs.js";
import { visit_history } from "../controllers/visit_history.js";
import { login } from "../controllers/login.js";
import { registerUser } from "../controllers/authController.js";
import { loginUser } from "../controllers/authController.js"
import { register } from "../controllers/register.js";
import { isAuthenticated,logout } from '../controllers/authController.js';

export const router = express.Router();

router.get('/', isAuthenticated, index);
//router.get('/navbar', navbar);
router.get('/bills', bills);
router.get('/spiritual_needs', spiritual_needs);
router.get('/home_situation', home_situation);
router.get('/visits', visits);
router.get('/home_to_visit', home_to_visit);
router.get('/visit_history', visit_history);
router.get('/state_benefits', state_benefits);
router.get('/economic_situation', economic_situation);
router.get('/health_situation', health_situation);
router.get('/add_family_member', isAuthenticated, add_family_member);
router.get('/family_comp', family_comp);
router.get("/menu_add_visit",  isAuthenticated, menu_add_visit);
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



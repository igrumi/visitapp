import express from 'express';
import { index } from '../controllers/index.js';
import { sit_familiar } from '../controllers/sit_familiar.js';
import { jefe_hogar } from '../controllers/jefe_hogar.js';
import { health_situation } from '../controllers/health_situation.js';
import { family_comp } from '../controllers/family_comp.js';
import { add_family_member } from '../controllers/add_family_member.js';
import { economic_situation } from "../controllers/economic_situation.js";
//import { navbar } from "../controllers/navbar.js";
//import { add_visita } from "../controllers/add_visita.js";
import { asignar_visita } from "../controllers/asignar_visita.js";
import { menu_add_visit } from "../controllers/menu_add_visit.js";
import { state_benefits } from "../controllers/state_benefits.js";
import { bills } from "../controllers/bills.js";
import { visits } from "../controllers/visits.js";
import { home_situation } from "../controllers/home_situation.js";
import { home_to_visit } from "../controllers/home_to_visit.js";
import { spiritual_needs } from "../controllers/spiritual_needs.js";
import { visit_history } from "../controllers/visit_history.js";
import { general_situation } from "../controllers/general_situation.js";
import { login } from "../controllers/login.js";
import { registerUser } from "../controllers/authController.js";
import { loginUser } from "../controllers/authController.js"
import { register } from "../controllers/register.js";
import { isAuthenticated,logout } from '../controllers/authController.js';
import { checkRoleAuth } from '../middleware/roleAuth.js'
import { addVisitaForm } from '../controllers/add_visita.js';

export const router = express.Router();

router.get('/', isAuthenticated, index);
//router.get('/navbar', navbar);
router.get('/bills', isAuthenticated, bills);
router.get('/general_situation', isAuthenticated, general_situation);
router.get('/spiritual_needs', isAuthenticated, spiritual_needs);
router.get('/home_situation', isAuthenticated, home_situation);
router.get('/visits', isAuthenticated, visits);
router.get('/home_to_visit', isAuthenticated, home_to_visit);
router.get('/visit_history', isAuthenticated, visit_history);
router.get('/state_benefits', isAuthenticated, state_benefits);
router.get('/economic_situation', isAuthenticated, economic_situation);
router.get('/health_situation', isAuthenticated, health_situation);
router.get('/add_family_member', isAuthenticated, add_family_member);
router.get('/family_comp', isAuthenticated, family_comp);
router.get("/menu_add_visit",  isAuthenticated, menu_add_visit);
router.get("/sit_familiar", isAuthenticated, sit_familiar);
router.get("/jefe_hogar", isAuthenticated, jefe_hogar);
//router.get("/add_visita", isAuthenticated, add_visita);
router.get("/asignar_visita", isAuthenticated, checkRoleAuth('admin'), asignar_visita);
router.get("/logout", logout);
router.post("/login", loginUser);
router.post("/register", registerUser);

router.get('/login', (req, res) => {
  res.render('login')
});

router.get('/add_visita', isAuthenticated, (req, res) => {
  const { rol } = req.user;
    return res.render("add_visita", {rol});
});

router.post("/add_visita_insert", addVisitaForm);

router.get('/register', isAuthenticated, checkRoleAuth('admin'), register);



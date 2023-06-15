import express from 'express';
import { index } from '../controllers/index.js';
import { sit_familiar } from '../controllers/sit_familiar.js';
import { jefe_hogar } from '../controllers/jefe_hogar.js';
import { health_situation } from '../controllers/health_situation.js';
import { health_situation_render } from '../controllers/health_situation.js';
import { family_comp } from '../controllers/family_comp.js';
import { add_family_member } from '../controllers/add_family_member.js';
import { add_family } from '../controllers/add_family_member.js';
import { economic_situation } from "../controllers/economic_situation.js";
import { econo_situa_render } from "../controllers/economic_situation.js";
//import { navbar } from "../controllers/navbar.js";
//import { add_visita } from "../controllers/add_visita.js";
import { asignar_visita } from "../controllers/asignar_visita.js";
import { menu_add_visit } from "../controllers/menu_add_visit.js";
import { state_benefits } from "../controllers/state_benefits.js";
import { state_benefits_render } from "../controllers/state_benefits.js";
import { bills } from "../controllers/bills.js";
import { bills_render } from "../controllers/bills.js";
import { visits } from "../controllers/visits.js";
import { home_situation } from "../controllers/home_situation.js";
import { home_situation_render } from "../controllers/home_situation.js";
import { home_to_visit } from "../controllers/home_to_visit.js";
import { spiritual_needs } from "../controllers/spiritual_needs.js";
import { spiritual_needs_render } from "../controllers/spiritual_needs.js";
import { visit_history } from "../controllers/visit_history.js";
import { general_situation } from "../controllers/general_situation.js";
import { report } from "../controllers/report.js";
import { login } from "../controllers/login.js";
import { registerUser } from "../controllers/authController.js";
import { loginUser } from "../controllers/authController.js"
import { register } from "../controllers/register.js";
import { isAuthenticated,logout } from '../controllers/authController.js';
import { checkRoleAuth } from '../middleware/roleAuth.js'
import { addVisitaForm } from '../controllers/add_visita.js';
import { visit_available } from '../controllers/visit_available.js';
import { edit_visit } from '../controllers/edit_visit.js';
import { edit_visit_render } from '../controllers/edit_visit.js';
import {
  getUsuarios,
  agregarUsuario,
  editarUsuario,
  mostrarFormularioEdicion,
  mostrarFormularioEdicionInactive,
  disableUser,
  enableUser,
  editarUsuarioInactive,
  mostrarFormularioDeshabilitacion,
  mostrarFormularioHabilitacion
} from "../controllers/adminUsers.js";
import { rejects } from 'assert';

export const router = express.Router();

router.get('/', isAuthenticated, index);

router.get('/general_situation', isAuthenticated, general_situation);
router.get('/report', isAuthenticated, report);

router.get('/home_situation', isAuthenticated, home_situation);
router.get('/visits', isAuthenticated, visits);
router.get('/home_to_visit', isAuthenticated, home_to_visit);

router.get("/menu_add_visit",  isAuthenticated, menu_add_visit);
router.get("/sit_familiar", isAuthenticated, sit_familiar);
router.get("/jefe_hogar", isAuthenticated, jefe_hogar);
router.get("/asignar_visita", isAuthenticated, checkRoleAuth('admin'), asignar_visita);
router.get("/logout", logout);
router.post("/register", registerUser);

router.post("/login", loginUser);
router.get('/login', (req, res) => {
  res.render('login')
});

router.post("/add_visita", addVisitaForm);
router.get('/add_visita', isAuthenticated, (req, res) => {
  const { rol } = req.user;
    return res.render("add_visita", {rol});
});

router.get('/register', isAuthenticated, checkRoleAuth('admin'), register);

router.post("/asignar_visita", asignar_visita);
router.get("/asignar_visita", isAuthenticated, checkRoleAuth('admin'), asignar_visita);

router.get("/visit_available", isAuthenticated, visit_available);

// RUTAS MENU AGREGAR INTEGRANTE
router.get('/family_comp/:homeId', isAuthenticated, family_comp);


// RUTAS FORMULARIO AGREGAR INTEGRANTE
router.get('/add_family_member/:homeId', isAuthenticated, add_family, (req, res) =>{
    const { rol } = req.user;
    return res.render("/add_family_member", {rol});
});
router.post('/add_family_member/:homeId', isAuthenticated, add_family_member);
// RUTAS SITUACION ECONOMICA
router.get('/economic_situation/:homeId/:rutIntegrante', isAuthenticated, econo_situa_render);
router.post('/economic_situation/:homeId/:rutIntegrante', isAuthenticated, economic_situation);
// RUTAS BENEFICIOS ESTATALES
router.get('/state_benefits/:homeId/:rutIntegrante', isAuthenticated, state_benefits_render);
router.post('/state_benefits/:homeId/:rutIntegrante', isAuthenticated, state_benefits);
// RUTAS SITUACION SALUD
router.get('/health_situation/:homeId/:rutIntegrante', isAuthenticated, health_situation_render);
router.post('/health_situation/:homeId/:rutIntegrante', isAuthenticated, health_situation);
// RUTAS GASTOS
router.get('/bills/:homeId', isAuthenticated, bills_render);
router.post('/bills/:homeId', isAuthenticated, bills);
// RUTAS SITUACION VIVIENDA
router.get('/home_situation/:homeId', isAuthenticated, home_situation_render);
router.post('/home_situation/:homeId', isAuthenticated, home_situation);
// RUTAS NECESIDADES ESPIRITUALES
router.get('/spiritual_needs/:homeId', isAuthenticated, spiritual_needs_render);
router.post('/spiritual_needs/:homeId', isAuthenticated, spiritual_needs);
// RUTA HISTORIAL DE VIISITAS
router.get('/visit_history', isAuthenticated, visit_history);
router.post('/visit_history', isAuthenticated, visit_history);
// RUTA EDITAR HOGAR
router.get('/edit_visit/:homeId', isAuthenticated, edit_visit_render);
router.post('/edit_visit/:homeId', isAuthenticated, edit_visit);
// GENERAR RUTA DE VISITA GOOGLE MAPS
router.post("/prueba/formulario", (req, res) => {
  //const { direccion } = req.body;
  //const direOfi = 'Padre Alonso de Ovalle 1586';
  //if (!direccion){
  //  return res.redirect('/visit_available')
  //}
  ////res.redirect(`https://www.google.com/maps/dir/${direOfi}/${direccion.join('/')}`);
  //res.redirect(`https://www.google.com/maps/dir/${direOfi}/${typeof direccion !== 'string' ? direccion.join('/') : ''+direccion}`);
  res.render('visit_available.ejs');
})

// RUTAS MANTENEDOR USUARIOS
// Ruta para obtener la lista de usuarios
router.get("/users", isAuthenticated, checkRoleAuth('admin'), getUsuarios);

// Ruta para mostrar el formulario de agregar usuario
router.get("/users/add", isAuthenticated, checkRoleAuth('admin'), agregarUsuario);

// Ruta para agregar un nuevo usuario
router.post("/users/add", isAuthenticated, checkRoleAuth('admin'), agregarUsuario);

// Ruta para mostrar el formulario de edición de usuario
router.get("/users/edit/:rut", isAuthenticated, checkRoleAuth('admin'), mostrarFormularioEdicion);
router.get("/users/edit_inactive/:rut", isAuthenticated, checkRoleAuth('admin'), mostrarFormularioEdicionInactive);

// Ruta para editar un usuario existente
router.post("/users/edit/:rut", isAuthenticated, checkRoleAuth('admin'), editarUsuario);
router.post("/users/edit_inactive/:rut", isAuthenticated, checkRoleAuth('admin'), editarUsuarioInactive);


// Ruta para mostrar el formulario de confirmación de deshabilitación/habilitación de usuario
router.get("/users/disable/:rut", isAuthenticated, checkRoleAuth('admin'), mostrarFormularioDeshabilitacion);
router.get("/users/enable/:rut", isAuthenticated, checkRoleAuth('admin'), mostrarFormularioHabilitacion);

// Ruta para deshabilitación/habilitación de un usuario
router.post("/users/disable/:rut", isAuthenticated, checkRoleAuth('admin'), disableUser);
router.post("/users/enable/:rut", isAuthenticated, checkRoleAuth('admin'), enableUser);

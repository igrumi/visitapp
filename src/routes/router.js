import express from 'express';
import { welcome } from '../controllers/welcome.js';
import { MenuAV } from "../controllers/MenuAV.js";
import { AgregarV } from "../controllers/AgregarV.js";
import { AsignarV } from "../controllers/AsignarV.js";

export const router = express.Router();

router.get('/', welcome);
router.get('/MenuAV', MenuAV);
router.get("/AgregarV", AgregarV);
router.get("/AsignarV", AsignarV);
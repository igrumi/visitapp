import express from 'express';
import { welcome } from '../controllers/welcome.js';
import { MenuAV } from "../controllers/MenuAV.js"

export const router = express.Router();

router.get('/', welcome);
router.get('/MenuAV', MenuAV);
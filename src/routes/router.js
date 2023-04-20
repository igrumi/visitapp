import express from 'express';
import { welcome } from '../controllers/welcome.js';

export const router = express.Router();

router.get('/', welcome);
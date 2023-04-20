import express from 'express';
import { welcomeAPI } from '../controllers/welcomeApi.js';

export const routerApi = express.Router();

routerApi.get('/', welcomeAPI);
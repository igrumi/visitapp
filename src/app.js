import express from 'express';
import session from 'express-session';
import dotenv from 'dotenv';
import { routerApi } from './routes/routerApi.js';
import { router } from './routes/router.js';
import path from 'path';
import { fileURLToPath } from 'url';
import cookieParser from 'cookie-parser';

export const app = express();

// Views
app.set('view engine', 'ejs');
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.set('views', path.join(__dirname, 'views'));

//Static files
app.use(express.static('public'));

// Data procesing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

import bcryptjs from 'bcryptjs';
/*
const session = required('express-session');
app.use(session({
    secret:'secret',
    resave: true,
    saveUnitialized: true
}));*/

//env vars
dotenv.config();


// Cookies
app.use(cookieParser());

// Routes
app.use('/api', routerApi);
app.use('/', router)


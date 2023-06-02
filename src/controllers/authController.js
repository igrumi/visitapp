import jwt from 'jsonwebtoken';
import bcryptjs  from 'bcryptjs';
import { connection } from '../database/db.js';
import { promisify } from 'util';

//Procedure
export const registerUser = async (req, res) => {
    try {
        const { rut, nombre, correo, contrasenaUser, rol} = req.body;
        const passwordHash = await bcryptjs.hash(contrasenaUser, 8);
        console.log(req.body)
        connection.query('INSERT INTO usuario SET ?', 
            {rut:rut, 
            nombre:nombre,
            correo:correo,
            contrasena:passwordHash,
            rol:'usuario'}, (error, results) => {
            if(error) {
                console.log(error);
            }else{
                res.render('register',{
                    alert: true,
                    alertTitle: "Registro",
                    alertMessage: "Successful Registration!",
                    alertIcon: 'success',
                    showConfirmButton: false,
                    timer: 1500,
                    ruta: ''
                })
            }
            //res.redirect('/login');
        });
    }catch(err) {
        console.log(err);
    }

}

export const loginUser = async (req, res) => {
    try {
        const { correo } = req.body;
        const { contrasenaUser } = req.body;
        if(!correo || !contrasenaUser) {
            res.render('login', {
                alert: true,
                alertTitle: '¡Oops!',
                alertMessage: 'Ingrese su correo y contraseña',
                alertIcon: 'Info',
                showConfirmButton: true,
                timer: false,
                ruta: 'login'
            });
        }else {
            connection.query('SELECT * FROM usuario WHERE correo = ?', [correo], async (err, results) => {
                if( results.length === 0 || ! await bcryptjs.compare(contrasenaUser, results[0].contrasena)) {
                    res.render('login', {
                        alert: true,
                        alertTitle: 'Error',
                        alertMessage: 'Usuario o clave incorrectas',
                        alertIcon: 'error',
                        showConfirmButton: true,
                        timer: false,
                        ruta: 'login'
                    });
                }else {
                    const rut = results[0].rut;
                    

                    const token = jwt.sign({rut:rut}, process.env.JWT_SECRET, {
                        expiresIn: process.env.JWT_TOKEN_EXPIRES
                    });
                    /*const cookieOptions = {
                        expires: new Date(Date.now()+process.env.JWT_COOKIE_EXPIRES * 24 * 60 * 60 * 1000),
                        httpOnly: true
                    };*/

                    res.cookie('jwt', token);

                    //const role = determineUserRole(results[0]);
                    //setRoleAndView(req.session, rol);

                    res.render('login', {
                        alert: true,
                        alertTitle: 'Iniciando Sesión',
                        alertMessage: 'Redirigiendo',
                        alertIcon: 'success',
                        showConfirmButton: false,
                        timer: 800,
                        ruta: ''
                    })
                }
            });
        }
        
    }catch(err) {
        console.log(err);
    }

}

export const isAuthenticated = async (req, res, next) => {
    if(req.cookies.jwt) {
        try {
            const decode = await promisify(jwt.verify)(req.cookies.jwt, process.env.JWT_SECRET);
            connection.query('SELECT * FROM usuario WHERE rut = ?', [decode.rut], (error, results) => {
                if(!results) {
                    return next()
                }
                req.user = results[0];
                req.isAuthenticated = true;
                //console.log(req.user);
                return next();
            });
        } catch (err) {
            console.log(err);
            return next();
        }
    }else {
        res.redirect('/login');
    }
}

export const logout = (req, res) => {
    res.clearCookie('jwt');
    return res.redirect('/');
}

export const isAdmin = (req, res, next) => {
    try {
        const { rol } = req.user;
        if(rol === 'admin') {
            return next();
        }else {
            res.redirect('/');
        }
    }catch(err) {
        console.log(error);
    }
}


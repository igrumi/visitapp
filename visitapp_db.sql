-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 07-06-2023 a las 00:04:27
-- Versión del servidor: 10.4.24-MariaDB
-- Versión de PHP: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `visitapp_db`
--

-- --------------------------------------------------------
-- --------------------------------------------------------
USE `visitapp_db` ;


--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE IF NOT EXISTS `visitapp_db`.`usuario` (
  `rut` int(11) NOT NULL PRIMARY KEY,
  `nombre` varchar(45) NOT NULL,
  `correo` varchar(45) NOT NULL,
  `contrasena` varchar(45) NOT NULL,
  `rol` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


-- --------------------------------------------------------
-- Estructura de tabla para la tabla `hogar`

CREATE TABLE IF NOT EXISTS `visitapp_db`. `Hogar` (
  `id` int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `situacion_vivienda` varchar(255) NOT NULL DEFAULT 'n/a',
  `relaciones_sociales` varchar(255) NOT NULL DEFAULT 'n/a',
  `direccion` varchar(45) NOT NULL,
  `comuna` varchar(45) NOT NULL,
  `beneficios_estatales` varchar(100) NOT NULL DEFAULT 'n/a',
  `tipo_vivienda` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Estructura de tabla para la tabla `Situacion_Vivienda`

CREATE TABLE IF NOT EXISTS `visitapp_db`. `Situacion_Vivienda` (
  `id` int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `situacion_vivienda` varchar(255) NOT NULL DEFAULT 'n/a',
  `relaciones_sociales` varchar(255) NOT NULL DEFAULT 'n/a',
  `beneficios_estatales` varchar(100) NOT NULL DEFAULT 'n/a',
  `tipo_vivienda` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------
-- Estructura de tabla para la tabla `gastos`

CREATE TABLE IF NOT EXISTS `visitapp_db`.`Gastos` (
  `id` int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `gastos_basicos` int(11) NOT NULL DEFAULT 1,
  `alimentacion` int(11) NOT NULL DEFAULT 1,
  `vestimenta` int(11) NOT NULL DEFAULT 1,
  `higiene` int(11) NOT NULL DEFAULT 1,
  `colegiatura` int(11) NOT NULL DEFAULT 1,
  `dividendo` int(11) NOT NULL DEFAULT 1,
  `gastos_medicos` int(11) NOT NULL DEFAULT 1,
  `otro_gasto` int(11) NOT NULL DEFAULT 1,
  `id_hogar` int(11) NOT NULL,
  FOREIGN KEY (`id_hogar`) REFERENCES `visitapp_db`.`Hogar` (`id`)
  ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


-- --------------------------------------------------------
-- Estructura de tabla para la tabla `integrante`

CREATE TABLE IF NOT EXISTS `visitapp_db`.`Integrante` (
  `rut` int(9) NOT NULL PRIMARY KEY,
  `nombre` varchar(100) NOT NULL,
  `parentesco` varchar(45) NOT NULL,
  `edad` varchar(45) NOT NULL,
  `sexo` varchar(45) DEFAULT NULL,
  `nivel_educacional` varchar(45) DEFAULT NULL,
  `apellidos` varchar(100) NOT NULL,
  `fecha_nacimiento` date NOT NULL,
  `estado_civil` varchar(45) NOT NULL,
  `celular` int(9) NOT NULL,
  `correo` varchar(100) NOT NULL,
  `id_hogar` int(11) NOT NULL,
  FOREIGN KEY (`id_hogar`) REFERENCES `visitapp_db`.`Hogar` (`id`)
  ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


-- --------------------------------------------------------
-- Estructura de tabla para la tabla `jefe_hogar`

CREATE TABLE IF NOT EXISTS `visitapp_db`.`Jefe_Hogar` (
  `rut` int(9) NOT NULL PRIMARY KEY,
  `nombre` varchar(100) NOT NULL,
  `edad` int(3) DEFAULT NULL,
  `fecha_nac` date DEFAULT NULL,
  `nacionalidad` varchar(45) DEFAULT NULL,
  `estado_civil` varchar(45) DEFAULT NULL,
  `celular` int(9) NOT NULL,
  `apellidos` varchar(100) NOT NULL,
  `correo` varchar(100) NOT NULL,
  `id_hogar` int(11) NOT NULL,
  FOREIGN KEY (`id_hogar`) REFERENCES `visitapp_db`.`Hogar` (`id`)
  ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


-- --------------------------------------------------------
-- Estructura de tabla para la tabla `necesidades_espirituales`

CREATE TABLE IF NOT EXISTS `visitapp_db`.`Necesidades_Espirituales` (
  `id` int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `bendicion_casa` varchar(45) NOT NULL DEFAULT 'n/a',
  `bautismo` varchar(45) NOT NULL DEFAULT 'n/a',
  `uncion_enfermos` varchar(45) NOT NULL DEFAULT 'n/a',
  `primera_comunion` varchar(45) NOT NULL DEFAULT 'n/a',
  `confirmacion` varchar(45) NOT NULL DEFAULT 'n/a',
  `id_hogar` int(11) NOT NULL,
  FOREIGN KEY (`id_hogar`) REFERENCES `visitapp_db`.`Hogar` (`id`)
  ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


-- Estructura de tabla para la tabla `situacion_economica`

CREATE TABLE IF NOT EXISTS `visitapp_db`.`Situacion_Economica` (
  `id` int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `ingresos` int(11) NOT NULL DEFAULT 0,
  `tipo_empleo` varchar(45) NOT NULL DEFAULT 'n/a',
  `desempleo` varchar(45) NOT NULL DEFAULT 'n/a',
  `prevision` varchar(45) NOT NULL DEFAULT 'n/a',
  `rut_jh` int(11) NOT NULL DEFAULT 1,
  `rut_integrante` int(11) NOT NULL DEFAULT 1,
  FOREIGN KEY (`rut_jh`) REFERENCES `visitapp_db`.`Jefe_Hogar` (`rut`) 
  ON DELETE NO ACTION ON UPDATE NO ACTION,
  FOREIGN KEY (`rut_integrante`) REFERENCES `visitapp_db`.`Integrante` (`rut`)
  ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


-- Estructura de tabla para la tabla `situacion_salud`

CREATE TABLE IF NOT EXISTS `visitapp_db`.`Situacion_Salud` (
  `id` int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `tipo_enfermedad` varchar(45) NOT NULL DEFAULT 'n/a',
  `discapacidad` varchar(45) NOT NULL DEFAULT 'n/a',
  `observacion` varchar(150) NOT NULL DEFAULT 'n/a',
  `rut_integrante` int(11) NOT NULL DEFAULT 1,
  `rut_jh` int(11) NOT NULL DEFAULT 1,
  FOREIGN KEY (`rut_integrante`) REFERENCES `visitapp_db`.`Integrante` (`rut`)
  ON DELETE NO ACTION ON UPDATE NO ACTION,
  FOREIGN KEY (`rut_jh`) REFERENCES `visitapp_db`.`Jefe_Hogar` (`rut`)
  ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `visita`
--

CREATE TABLE IF NOT EXISTS `visitapp_db`.`visita` (
  `id` int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `motivo` varchar(45) NOT NULL,
  `estado` varchar(20) NOT NULL DEFAULT 'incompleto',
  `fecha_visi` date DEFAULT NULL,
  `rut_usuario` int(11) NOT NULL,
  `id_hogar` int(11) NOT NULL,
  FOREIGN KEY (`rut_usuario`) REFERENCES `visitapp_db`.`Usuario` (`rut`)
  ON DELETE NO ACTION ON UPDATE NO ACTION,
  FOREIGN KEY (`id_hogar`) REFERENCES `visitapp_db`.`Hogar` (`id`)
  ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

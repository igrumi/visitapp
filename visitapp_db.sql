-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 11-06-2023 a las 06:08:04
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

--
-- Estructura de tabla para la tabla `beneficios_estatales`
--

CREATE TABLE `beneficios_estatales` (
  `id_beneficio` int(11) NOT NULL,
  `tipo_beneficio` varchar(255) NOT NULL,
  `rut_integrante` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `beneficios_estatales`
--

INSERT INTO `beneficios_estatales` (`id_beneficio`, `tipo_beneficio`, `rut_integrante`) VALUES
(1, 'gratuidad', 33),
(2, 'gratuidad', 33),
(3, 'gratuidad', 33);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `gastos`
--

CREATE TABLE `gastos` (
  `id` int(11) NOT NULL,
  `gastos_basicos` int(11) NOT NULL DEFAULT 1,
  `alimentacion` int(11) NOT NULL DEFAULT 1,
  `vestimenta` int(11) NOT NULL DEFAULT 1,
  `higiene` int(11) NOT NULL DEFAULT 1,
  `colegiatura` int(11) NOT NULL DEFAULT 1,
  `dividendo` int(11) NOT NULL DEFAULT 1,
  `gastos_medicos` int(11) NOT NULL DEFAULT 1,
  `otro_gasto` int(11) NOT NULL DEFAULT 1,
  `id_hogar` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `gastos`
--

INSERT INTO `gastos` (`id`, `gastos_basicos`, `alimentacion`, `vestimenta`, `higiene`, `colegiatura`, `dividendo`, `gastos_medicos`, `otro_gasto`, `id_hogar`) VALUES
(1, 1000, 1000, 1000, 1000, 1000, 1000, 10000, 10000, 35),
(2, 1000, 1000, 1000, 1000, 1000, 1000, 10000, 10000, 35);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `hogar`
--

CREATE TABLE `hogar` (
  `id_hogar` int(11) NOT NULL,
  `direccion` varchar(45) NOT NULL,
  `comuna` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `hogar`
--

INSERT INTO `hogar` (`id_hogar`, `direccion`, `comuna`) VALUES
(33, 'general prieto 1717', 'independencia'),
(35, 'morande 924', 'santiago'),
(36, 'providencia 455', 'providencia');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `integrante`
--

CREATE TABLE `integrante` (
  `rut` int(9) NOT NULL,
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
  `id_hogar` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `integrante`
--

INSERT INTO `integrante` (`rut`, `nombre`, `parentesco`, `edad`, `sexo`, `nivel_educacional`, `apellidos`, `fecha_nacimiento`, `estado_civil`, `celular`, `correo`, `id_hogar`) VALUES
(11, 'diego', 'hijo', '44', 'dasds', 'sadas', 'gaviria', '2222-02-21', 'asdsad', 21232, 'sadas', 35),
(22, 'sdadas', 'dasd', '22', 'assad', 'dsad', 'asas', '2222-02-21', 'sadsa', 111, 'asds', 35),
(33, 'diego', 'sadas', '22', 'sadas', 'asda', 'asas', '3333-03-30', 'asdsad', 21232, 'asds', 35);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `jefe_hogar`
--

CREATE TABLE `jefe_hogar` (
  `rut` int(9) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `edad` int(3) DEFAULT NULL,
  `fecha_nac` date DEFAULT NULL,
  `nacionalidad` varchar(45) DEFAULT NULL,
  `estado_civil` varchar(45) DEFAULT NULL,
  `celular` int(9) NOT NULL,
  `apellidos` varchar(100) NOT NULL,
  `correo` varchar(100) NOT NULL,
  `id_hogar` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `jefe_hogar`
--

INSERT INTO `jefe_hogar` (`rut`, `nombre`, `edad`, `fecha_nac`, `nacionalidad`, `estado_civil`, `celular`, `apellidos`, `correo`, `id_hogar`) VALUES
(201234678, 'Ignacio', 23, '1999-05-18', 'chileno', 'soltero', 934567890, 'Grumi', 'ignacio@ignacio.com', 36),
(239901761, 'Adelaida', 44, '1980-09-24', 'colombiano', 'casada', 989856789, 'Ordoñez', 'adelaida@adelaida.com', 35),
(254684570, 'Diego Ferney', 46, '1977-06-23', 'colombiano', 'casado', 971238995, 'Gaviria', 'diego@diego.com', 33);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `necesidades_espirituales`
--

CREATE TABLE `necesidades_espirituales` (
  `id` int(11) NOT NULL,
  `bendicion_casa` varchar(45) NOT NULL DEFAULT 'n/a',
  `bautismo` varchar(45) NOT NULL DEFAULT 'n/a',
  `uncion_enfermos` varchar(45) NOT NULL DEFAULT 'n/a',
  `primera_comunion` varchar(45) NOT NULL DEFAULT 'n/a',
  `confirmacion` varchar(45) NOT NULL DEFAULT 'n/a',
  `id_hogar` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `necesidades_espirituales`
--

INSERT INTO `necesidades_espirituales` (`id`, `bendicion_casa`, `bautismo`, `uncion_enfermos`, `primera_comunion`, `confirmacion`, `id_hogar`) VALUES
(2, 'yes', 'no', 'yes', 'no', 'no', 35),
(3, 'yes', 'no', 'no', 'yes', 'yes', 35),
(4, 'yes', 'no', 'no', 'yes', 'yes', 35);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `situacion_economica`
--

CREATE TABLE `situacion_economica` (
  `id` int(11) NOT NULL,
  `ingresos` int(11) NOT NULL DEFAULT 0,
  `tipo_empleo` varchar(45) NOT NULL DEFAULT 'n/a',
  `desempleo` varchar(45) NOT NULL DEFAULT 'n/a',
  `prevision` varchar(45) NOT NULL DEFAULT 'n/a',
  `rut_integrante` int(11) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `situacion_economica`
--

INSERT INTO `situacion_economica` (`id`, `ingresos`, `tipo_empleo`, `desempleo`, `prevision`, `rut_integrante`) VALUES
(1, 500000, 'programador', 'no', 'fonasa', 33);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `situacion_salud`
--

CREATE TABLE `situacion_salud` (
  `id` int(11) NOT NULL,
  `tipo_enfermedad` varchar(45) NOT NULL DEFAULT 'n/a',
  `discapacidad` varchar(45) NOT NULL DEFAULT 'n/a',
  `observacion` varchar(150) NOT NULL DEFAULT 'n/a',
  `rut_integrante` int(11) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `situacion_salud`
--

INSERT INTO `situacion_salud` (`id`, `tipo_enfermedad`, `discapacidad`, `observacion`, `rut_integrante`) VALUES
(2, 'n/a', 'n/a', 'esta entero', 33);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `situacion_vivienda`
--

CREATE TABLE `situacion_vivienda` (
  `id` int(11) NOT NULL,
  `situacion_vivienda` varchar(255) NOT NULL,
  `relaciones_sociales` varchar(255) NOT NULL,
  `id_hogar` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `situacion_vivienda`
--

INSERT INTO `situacion_vivienda` (`id`, `situacion_vivienda`, `relaciones_sociales`, `id_hogar`) VALUES
(1, '3 dormitorios, 6 camas', 'no se hablan  con nadie', 35),
(2, '3 dormitorios, 6 camas', 'no se hablan  con nadie', 35);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE `usuario` (
  `rut` int(11) NOT NULL,
  `nombre` varchar(45) NOT NULL,
  `correo` varchar(45) NOT NULL,
  `contrasena` varchar(255) NOT NULL,
  `rol` varchar(20) NOT NULL,
  `estado` tinyint(4) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`rut`, `nombre`, `correo`, `contrasena`, `rol`, `estado`) VALUES
(222, 'Arturo', 'arturo@arturo.com', '$2a$08$6KcpuXa9Wq42xh2p4BssLuV6Wqu6oTS4xoXhE/9KxrVN8LBY2PgQu', 'usuario', 1),
(333, 'Fernando', 'fernando@fernando.com', '$2a$08$nkHSwVsKE.FLCTSH0h6REuUUEgAC9JBOLWlo1sRV/g8QOVQLWa9Lq', 'usuario', 1),
(444, 'Genesis', 'genesis@genesis.com', '$2a$08$ZKuYUlY0BY7Ke4K.QAzey.1hEL8QrY27CBESS54ozT/L9IJIgivuO', 'usuario', 1),
(555, 'Jessica', 'jessica@jessica.com', '$2a$08$H/grKeX.AB2NhSw8PwD6UOX.OUotKoMpaKlBFtTE52zvPHFK4L9hy', 'usuario', 0),
(256536048, 'Diego', 'diego@diego.com', '$2a$08$XWAPp6QWQ42HuzatZLRL1.qY7RCigSH6S1h0TlANwuZu2ghLIPcI6', 'admin', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `visita`
--

CREATE TABLE `visita` (
  `id` int(11) NOT NULL,
  `motivo` varchar(45) NOT NULL,
  `estado` varchar(20) NOT NULL DEFAULT 'incompleto',
  `fecha_visi` date DEFAULT NULL,
  `rut` int(11) NOT NULL,
  `id_hogar` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `visita`
--

INSERT INTO `visita` (`id`, `motivo`, `estado`, `fecha_visi`, `rut`, `id_hogar`) VALUES
(4, 'primera visita', 'incompleto', NULL, 222, 33),
(5, 'prueba', 'completo', '2023-06-11', 222, 35),
(6, 'prueba', 'incompleto', NULL, 222, 36);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `beneficios_estatales`
--
ALTER TABLE `beneficios_estatales`
  ADD PRIMARY KEY (`id_beneficio`),
  ADD KEY `fk_beneficios_estatales_integrante` (`rut_integrante`);

--
-- Indices de la tabla `gastos`
--
ALTER TABLE `gastos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_situacion_vivienda_hogar` (`id_hogar`);

--
-- Indices de la tabla `hogar`
--
ALTER TABLE `hogar`
  ADD PRIMARY KEY (`id_hogar`);

--
-- Indices de la tabla `integrante`
--
ALTER TABLE `integrante`
  ADD PRIMARY KEY (`rut`),
  ADD KEY `id_hogar` (`id_hogar`);

--
-- Indices de la tabla `jefe_hogar`
--
ALTER TABLE `jefe_hogar`
  ADD PRIMARY KEY (`rut`),
  ADD KEY `id_hogar` (`id_hogar`);

--
-- Indices de la tabla `necesidades_espirituales`
--
ALTER TABLE `necesidades_espirituales`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_hogar` (`id_hogar`);

--
-- Indices de la tabla `situacion_economica`
--
ALTER TABLE `situacion_economica`
  ADD PRIMARY KEY (`id`),
  ADD KEY `rut_integrante` (`rut_integrante`);

--
-- Indices de la tabla `situacion_salud`
--
ALTER TABLE `situacion_salud`
  ADD PRIMARY KEY (`id`),
  ADD KEY `rut_integrante` (`rut_integrante`);

--
-- Indices de la tabla `situacion_vivienda`
--
ALTER TABLE `situacion_vivienda`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_situacion_vivienda_hogar` (`id_hogar`);

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`rut`);

--
-- Indices de la tabla `visita`
--
ALTER TABLE `visita`
  ADD PRIMARY KEY (`id`),
  ADD KEY `rut_usuario` (`rut`),
  ADD KEY `id_hogar` (`id_hogar`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `beneficios_estatales`
--
ALTER TABLE `beneficios_estatales`
  MODIFY `id_beneficio` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `gastos`
--
ALTER TABLE `gastos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `hogar`
--
ALTER TABLE `hogar`
  MODIFY `id_hogar` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;

--
-- AUTO_INCREMENT de la tabla `necesidades_espirituales`
--
ALTER TABLE `necesidades_espirituales`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `situacion_economica`
--
ALTER TABLE `situacion_economica`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `situacion_salud`
--
ALTER TABLE `situacion_salud`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `situacion_vivienda`
--
ALTER TABLE `situacion_vivienda`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `visita`
--
ALTER TABLE `visita`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `beneficios_estatales`
--
ALTER TABLE `beneficios_estatales`
  ADD CONSTRAINT `fk_beneficios_estatales_integrante` FOREIGN KEY (`rut_integrante`) REFERENCES `integrante` (`rut`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `gastos`
--
ALTER TABLE `gastos`
  ADD CONSTRAINT `gastos_ibfk_1` FOREIGN KEY (`id_hogar`) REFERENCES `hogar` (`id_hogar`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `integrante`
--
ALTER TABLE `integrante`
  ADD CONSTRAINT `integrante_ibfk_1` FOREIGN KEY (`id_hogar`) REFERENCES `hogar` (`id_hogar`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `jefe_hogar`
--
ALTER TABLE `jefe_hogar`
  ADD CONSTRAINT `jefe_hogar_ibfk_1` FOREIGN KEY (`id_hogar`) REFERENCES `hogar` (`id_hogar`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `necesidades_espirituales`
--
ALTER TABLE `necesidades_espirituales`
  ADD CONSTRAINT `necesidades_espirituales_ibfk_1` FOREIGN KEY (`id_hogar`) REFERENCES `hogar` (`id_hogar`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `situacion_economica`
--
ALTER TABLE `situacion_economica`
  ADD CONSTRAINT `situacion_economica_ibfk_2` FOREIGN KEY (`rut_integrante`) REFERENCES `integrante` (`rut`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `situacion_salud`
--
ALTER TABLE `situacion_salud`
  ADD CONSTRAINT `situacion_salud_ibfk_1` FOREIGN KEY (`rut_integrante`) REFERENCES `integrante` (`rut`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `situacion_vivienda`
--
ALTER TABLE `situacion_vivienda`
  ADD CONSTRAINT `fk_situacion_vivienda_hogar` FOREIGN KEY (`id_hogar`) REFERENCES `hogar` (`id_hogar`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `visita`
--
ALTER TABLE `visita`
  ADD CONSTRAINT `visita_ibfk_1` FOREIGN KEY (`rut`) REFERENCES `usuario` (`rut`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `visita_ibfk_2` FOREIGN KEY (`id_hogar`) REFERENCES `hogar` (`id_hogar`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

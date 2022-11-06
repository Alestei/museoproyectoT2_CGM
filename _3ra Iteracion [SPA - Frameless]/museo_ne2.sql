-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 05-11-2022 a las 02:28:23
-- Versión del servidor: 10.4.25-MariaDB
-- Versión de PHP: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `museo`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `autores_obra`
--

CREATE TABLE `autores_obra` (
  `ID_obra` int(11) NOT NULL,
  `ID_obraAutor` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `guia`
--

CREATE TABLE `guia` (
  `ID_Guia` int(11) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `apellido` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `guia`
--

INSERT INTO `guia` (`ID_Guia`, `nombre`, `apellido`) VALUES
(1, 'Javier', 'Pérez'),
(2, 'Elisabet', 'Martinez'),
(3, 'Martina', 'Lofreid');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `guia_idioma`
--

CREATE TABLE `guia_idioma` (
  `ID_idioma` int(11) NOT NULL,
  `ID_guia` int(11) NOT NULL,
  `ultima_vez` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `guia_idioma`
--

INSERT INTO `guia_idioma` (`ID_idioma`, `ID_guia`, `ultima_vez`) VALUES
(3, 3, NULL),
(1, 2, NULL),
(1, 1, NULL),
(2, 1, NULL),
(3, 1, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `idioma`
--

CREATE TABLE `idioma` (
  `ID_idioma` int(11) NOT NULL,
  `idioma` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `idioma`
--

INSERT INTO `idioma` (`ID_idioma`, `idioma`) VALUES
(1, 'Español'),
(2, 'Inglés'),
(3, 'Portugués');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `obra`
--

CREATE TABLE `obra` (
  `ID_obra` int(11) NOT NULL,
  `nombreObra` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `obra_autor`
--

CREATE TABLE `obra_autor` (
  `ID_obraAutor` int(11) NOT NULL,
  `autorObra` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sala`
--

CREATE TABLE `sala` (
  `ID_sala` int(11) NOT NULL,
  `nombre_sala` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `sala`
--

INSERT INTO `sala` (`ID_sala`, `nombre_sala`) VALUES
(1, 'Sala 1 - Renacimiento'),
(2, 'Sala 2 - Minimalismo'),
(3, 'Sala 3 - Cubismo');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sala_obra`
--

CREATE TABLE `sala_obra` (
  `ID_obra` int(11) NOT NULL,
  `ID_sala` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `visitante`
--

CREATE TABLE `visitante` (
  `ID_VISITANTE` int(11) NOT NULL,
  `Nombre` varchar(100) NOT NULL,
  `Apellido` varchar(100) NOT NULL,
  `Correo` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `visitante`
--

INSERT INTO `visitante` (`ID_VISITANTE`, `Nombre`, `Apellido`, `Correo`) VALUES
(1, 'Mario', 'Echeverria', 'mdech@argenmail.ar'),
(2, 'Pablo', 'Rosales', 'prosas@yahoo.es'),
(3, 'Julio', 'Peñin', 'peninjuli@outlook.com.ar'),
(4, 'Gabriel', 'Fernández', 'gfern@myspace.com');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `visita_guiada`
--

CREATE TABLE `visita_guiada` (
  `ID_VG` int(11) NOT NULL,
  `nombreVisita` varchar(100) NOT NULL,
  `FHora` datetime NOT NULL,
  `ID_guia` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `visita_guiada`
--

INSERT INTO `visita_guiada` (`ID_VG`, `nombreVisita`, `FHora`, `ID_guia`) VALUES
(1, 'Minimalismo: Antes y el después', '2022-10-31 14:57:00', 2),
(2, 'Renoissance Heroes', '2022-10-25 18:41:00', 1),
(3, 'Cubismo: uma arte geométrica', '2022-10-17 19:01:00', 3);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `visita_guiada_idioma`
--

CREATE TABLE `visita_guiada_idioma` (
  `ID_VG` int(11) NOT NULL,
  `ID_idioma` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `visita_guiada_idioma`
--

INSERT INTO `visita_guiada_idioma` (`ID_VG`, `ID_idioma`) VALUES
(1, 1),
(2, 2),
(3, 3);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `visita_guiada_salas`
--

CREATE TABLE `visita_guiada_salas` (
  `ID_VG` int(11) NOT NULL,
  `ID_sala` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `visita_guiada_salas`
--

INSERT INTO `visita_guiada_salas` (`ID_VG`, `ID_sala`) VALUES
(1, 2),
(2, 1),
(3, 3);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `visita_guiada_visitante`
--

CREATE TABLE `visita_guiada_visitante` (
  `ID_VG` int(11) NOT NULL,
  `ID_visitante` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `visita_guiada_visitante`
--

INSERT INTO `visita_guiada_visitante` (`ID_VG`, `ID_visitante`) VALUES
(1, 4);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `autores_obra`
--
ALTER TABLE `autores_obra`
  ADD KEY `ID_obra` (`ID_obra`),
  ADD KEY `ID_obraAutor` (`ID_obraAutor`);

--
-- Indices de la tabla `guia`
--
ALTER TABLE `guia`
  ADD PRIMARY KEY (`ID_Guia`);

--
-- Indices de la tabla `guia_idioma`
--
ALTER TABLE `guia_idioma`
  ADD KEY `ID_Idioma (Tabla Idioma)` (`ID_idioma`),
  ADD KEY `ID_Guia` (`ID_guia`);

--
-- Indices de la tabla `idioma`
--
ALTER TABLE `idioma`
  ADD PRIMARY KEY (`ID_idioma`);

--
-- Indices de la tabla `obra`
--
ALTER TABLE `obra`
  ADD PRIMARY KEY (`ID_obra`);

--
-- Indices de la tabla `obra_autor`
--
ALTER TABLE `obra_autor`
  ADD PRIMARY KEY (`ID_obraAutor`);

--
-- Indices de la tabla `sala`
--
ALTER TABLE `sala`
  ADD PRIMARY KEY (`ID_sala`);

--
-- Indices de la tabla `sala_obra`
--
ALTER TABLE `sala_obra`
  ADD KEY `ID_obra` (`ID_obra`),
  ADD KEY `ID_sala` (`ID_sala`);

--
-- Indices de la tabla `visitante`
--
ALTER TABLE `visitante`
  ADD PRIMARY KEY (`ID_VISITANTE`);

--
-- Indices de la tabla `visita_guiada`
--
ALTER TABLE `visita_guiada`
  ADD PRIMARY KEY (`ID_VG`),
  ADD KEY `visita_guiada_ibfk_1` (`ID_guia`);

--
-- Indices de la tabla `visita_guiada_idioma`
--
ALTER TABLE `visita_guiada_idioma`
  ADD KEY `visita_guiada_idioma_ibfk_1` (`ID_idioma`),
  ADD KEY `visita_guiada_idioma_ibfk_2` (`ID_VG`);

--
-- Indices de la tabla `visita_guiada_salas`
--
ALTER TABLE `visita_guiada_salas`
  ADD KEY `visita_guiada_salas_ibfk_1` (`ID_sala`),
  ADD KEY `visita_guiada_salas_ibfk_2` (`ID_VG`);

--
-- Indices de la tabla `visita_guiada_visitante`
--
ALTER TABLE `visita_guiada_visitante`
  ADD KEY `visita_guiada_visitante_ibfk_1` (`ID_VG`),
  ADD KEY `visita_guiada_visitante_ibfk_2` (`ID_visitante`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `guia`
--
ALTER TABLE `guia`
  MODIFY `ID_Guia` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `idioma`
--
ALTER TABLE `idioma`
  MODIFY `ID_idioma` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `obra`
--
ALTER TABLE `obra`
  MODIFY `ID_obra` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `obra_autor`
--
ALTER TABLE `obra_autor`
  MODIFY `ID_obraAutor` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `sala`
--
ALTER TABLE `sala`
  MODIFY `ID_sala` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `visitante`
--
ALTER TABLE `visitante`
  MODIFY `ID_VISITANTE` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `visita_guiada`
--
ALTER TABLE `visita_guiada`
  MODIFY `ID_VG` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `autores_obra`
--
ALTER TABLE `autores_obra`
  ADD CONSTRAINT `autores_obra_ibfk_1` FOREIGN KEY (`ID_obra`) REFERENCES `obra` (`ID_obra`),
  ADD CONSTRAINT `autores_obra_ibfk_2` FOREIGN KEY (`ID_obraAutor`) REFERENCES `obra_autor` (`ID_obraAutor`);

--
-- Filtros para la tabla `guia_idioma`
--
ALTER TABLE `guia_idioma`
  ADD CONSTRAINT `ID_Guia` FOREIGN KEY (`ID_guia`) REFERENCES `guia` (`ID_Guia`) ON DELETE CASCADE,
  ADD CONSTRAINT `ID_Idioma (Tabla Idioma)` FOREIGN KEY (`ID_idioma`) REFERENCES `idioma` (`ID_idioma`);

--
-- Filtros para la tabla `sala_obra`
--
ALTER TABLE `sala_obra`
  ADD CONSTRAINT `sala_obra_ibfk_1` FOREIGN KEY (`ID_obra`) REFERENCES `obra` (`ID_obra`),
  ADD CONSTRAINT `sala_obra_ibfk_2` FOREIGN KEY (`ID_sala`) REFERENCES `sala` (`ID_sala`);

--
-- Filtros para la tabla `visita_guiada`
--
ALTER TABLE `visita_guiada`
  ADD CONSTRAINT `visita_guiada_ibfk_1` FOREIGN KEY (`ID_guia`) REFERENCES `guia` (`ID_Guia`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `visita_guiada_idioma`
--
ALTER TABLE `visita_guiada_idioma`
  ADD CONSTRAINT `visita_guiada_idioma_ibfk_1` FOREIGN KEY (`ID_idioma`) REFERENCES `idioma` (`ID_idioma`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `visita_guiada_idioma_ibfk_2` FOREIGN KEY (`ID_VG`) REFERENCES `visita_guiada` (`ID_VG`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `visita_guiada_salas`
--
ALTER TABLE `visita_guiada_salas`
  ADD CONSTRAINT `visita_guiada_salas_ibfk_1` FOREIGN KEY (`ID_sala`) REFERENCES `sala` (`ID_sala`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `visita_guiada_salas_ibfk_2` FOREIGN KEY (`ID_VG`) REFERENCES `visita_guiada` (`ID_VG`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `visita_guiada_visitante`
--
ALTER TABLE `visita_guiada_visitante`
  ADD CONSTRAINT `visita_guiada_visitante_ibfk_1` FOREIGN KEY (`ID_VG`) REFERENCES `visita_guiada` (`ID_VG`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `visita_guiada_visitante_ibfk_2` FOREIGN KEY (`ID_visitante`) REFERENCES `visitante` (`ID_VISITANTE`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

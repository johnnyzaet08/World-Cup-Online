-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 11-11-2022 a las 06:13:58
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
-- Base de datos: `xfifa_db`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `fasestournament`
--

CREATE TABLE `fasestournament` (
  `_idTournament` int(255) NOT NULL,
  `fase` varchar(30) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `fasestournament`
--



-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `matchs`
--

CREATE TABLE `matchs` (
  `_id` int(100) NOT NULL,
  `data` varchar(30) NOT NULL,
  `time` varchar(30) NOT NULL,
  `fase` varchar(30) NOT NULL,
  `team1` varchar(30) NOT NULL,
  `team2` varchar(30) NOT NULL,
  `place` varchar(30) NOT NULL,
  `_idtournament` int(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `players`
--

CREATE TABLE `players` (
  `_id` int(100) NOT NULL,
  `name` varchar(50) NOT NULL,
  `lastname` varchar(50) NOT NULL,
  `localTeam` varchar(35) NOT NULL,
  `selecTeam` varchar(35) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `players`
--

INSERT INTO `players` (`_id`, `name`, `lastname`, `localTeam`, `selecTeam`) VALUES
(1, 'Esteban ', 'Alvarado', 'Heredia', 'Costa Rica'),
(2, 'Keylor', 'Navas', 'None', 'Costa Rica'),
(3, 'Douglas ', 'Lopez', 'Heredia', 'Costa Rica'),
(4, 'Keysher', 'Fuller', 'Heredia', 'Costa Rica'),
(5, 'Carlos', 'Mora', 'Alajuela', 'Costa Rica'),
(6, 'Kendall', 'Watson', 'Saprisa', 'Costa Rica'),
(7, 'Celso', 'Borges', 'Alajuela', 'Costa Rica'),
(8, 'Johan ', 'Venegas', 'Alajuela', 'Costa Rica'),
(9, 'Alvaro', 'Zamora', 'Saprisa', 'Costa Rica'),
(10, 'Christopher', 'Meneses', 'Heredia', 'Costa Rica'),
(11, 'Aaron ', 'Suarez', 'Alajuela', 'Costa Rica'),
(12, 'Anthony', 'Contreras', 'Heredia', 'Costa Rica'),
(13, 'Bryan ', 'Ruiz', 'Alajuela', 'Costa Rica'),
(14, 'Joel ', 'Campbell', 'None', 'Costa Rica'),
(15, 'Daniel', 'Chacon', 'Cartago', 'Costa Rica'),
(16, 'Orlando', 'Galo', 'Heredia', 'Costa Rica'),
(17, 'Carlos ', 'Marinez', 'None', 'Costa Rica'),
(18, 'Francisco', 'Calvo', 'None', 'Costa Rica'),
(19, 'Brandon', 'Aguilera', 'None', 'Costa Rica'),
(20, 'Roan', 'Wilson', 'None', 'Costa Rica'),
(21, 'Robert ', 'Sanchez', 'None', 'España'),
(22, 'David', 'Raya', 'None', 'España'),
(23, 'Unai', 'Simon', 'None', 'España'),
(24, 'Cesar ', 'Azpilicueta', 'None', 'España'),
(25, 'Eric', 'Garcia', 'None', 'España'),
(26, 'Pau', 'Torres', 'None', 'España'),
(27, 'Sergi ', 'Roberto', 'None', 'España'),
(28, 'Hugo', 'Guillamon', 'None', 'España'),
(29, 'Sergio', 'Busquets', 'None', 'España'),
(30, 'Marcos', 'Llorente', 'None', 'España'),
(31, 'Pablo', 'Gavira', 'None', 'España'),
(32, 'Rodri', 'Hernandez', 'None', 'España'),
(33, 'Carlos', 'Soler', 'None', 'España'),
(34, 'Koke', 'Koke', 'None', 'España'),
(35, 'Nico ', 'Williams', 'None', 'España'),
(36, 'Borja', 'Iglesias', 'None', 'España'),
(37, 'Alvaro', 'Morata', 'None', 'España'),
(38, 'Abel', 'Ruiz', 'None', 'España'),
(39, 'Marco', 'Asensio', 'None', 'España'),
(40, 'Yeremy', 'Pino', 'None', 'España'),
(41, 'Gaku', 'Shibasaki', 'None', 'Japon'),
(42, 'Genki', 'Haraguchi', 'None', 'Japon'),
(43, 'Kyogo', 'Furuhashi', 'None', 'Japon'),
(44, 'Kaoru', 'Mitoma', 'None', 'Japon'),
(45, 'Shoya', 'Nakajima', 'None', 'Japon'),
(46, 'Takumi', 'Minamino', 'None', 'Japon'),
(47, 'Junya ', 'Ito', 'None', 'Japon'),
(48, 'Yuki', 'Soma', 'None', 'Japon'),
(49, 'Shuto', 'Machino', 'None', 'Japon'),
(50, 'Ao', 'Tanaka', 'None', 'Japon'),
(51, 'Leroy', 'Sane', 'None', 'Alemania'),
(52, 'Timo', 'Werner', 'None', 'Alemania'),
(53, 'Lukas', 'Nmecha', 'None', 'Alemania'),
(54, 'Thomas', 'Muller', 'None', 'Alemania'),
(55, 'Julian', 'Brandt', 'None', 'Alemania'),
(56, 'Nico', 'Schulz', 'None', 'Alemania'),
(57, 'Serge', 'Gnabry', 'None', 'Alemania'),
(58, 'Kai', 'Havertz', 'None', 'Alemania'),
(59, 'Florian', 'Neuhaus', 'None', 'Alemania'),
(60, 'Joshua', 'Kimmich', 'None', 'Alemania'),
(61, 'Bnejamin', 'Henrichs', 'None', 'Alemania'),
(62, 'Niklas', 'Sule', 'None', 'Alemania'),
(63, 'Thilo', 'Kehrer', 'None', 'Alemania'),
(64, 'Mattias', 'Ginter', 'None', 'Alemania'),
(65, 'David', 'Raum', 'None', 'Alemania'),
(66, 'Antonio', 'Rudiger', 'None', 'Alemania'),
(67, 'Ter', 'Stegen', 'None', 'Alemania'),
(68, 'Sven ', 'Ullrich', 'None', 'Alemania'),
(69, 'Kevin', 'Trapp', 'None', 'Alemania'),
(70, 'Oliver', 'Baumann', 'None', 'Alemania'),
(71, 'Wissan', 'Ben', 'None', 'Francia'),
(72, 'Randal', 'Muani', 'None', 'Francia'),
(73, 'Ousmane', 'Dembele', 'None', 'Francia'),
(74, 'Kylian', 'Mbappe', 'None', 'Francia'),
(75, 'Olivier', 'Giroud', 'None', 'Francia'),
(76, 'Jordan', 'Veretout', 'None', 'Francia'),
(77, 'Thomas', 'Lemer', 'None', 'Francia'),
(78, 'Antonie', 'Griezmann', 'None', 'Francia'),
(79, 'Paul', 'Pogba', 'None', 'Francia'),
(80, 'Eduardo', 'Camavinga', 'None', 'Francia'),
(81, 'Dayot', 'Upamecano', 'None', 'Francia'),
(82, 'Clement', 'Lenglet', 'None', 'Francia'),
(83, 'Leo', 'Dubois', 'None', 'Francia'),
(84, 'Lucas', 'Digne', 'None', 'Francia'),
(85, 'William', 'Saliba', 'None', 'Francia'),
(86, 'Benjamin', 'Pavard', 'None', 'Francia'),
(87, 'Alphonse', 'Areola', 'None', 'Francia'),
(88, 'Mike', 'Maignan', 'None', 'Francia'),
(89, 'Steve', 'Mandanda', 'None', 'Francia'),
(90, 'Alban', 'Lafont', 'None', 'Francia'),
(91, 'Mitchell', 'Duke', 'None', 'Australia'),
(92, 'Matthew', 'Leckie', 'None', 'Australia'),
(93, 'Jamie', 'Maclaren', 'None', 'Australia'),
(94, 'Jason', 'Cummings', 'None', 'Australia'),
(95, 'Denis', 'Genreau', 'None', 'Australia'),
(96, 'Ajdin ', 'Hrustic', 'None', 'Australia'),
(97, 'Martin', 'Moyle', 'None', 'Australia'),
(98, 'Keanu', 'Kole', 'None', 'Australia'),
(99, 'Ryan', 'Strain', 'None', 'Australia'),
(100, 'Joel', 'King', 'None', 'Australia'),
(101, 'Trent', 'Sainsbury', 'None', 'Australia'),
(102, 'Harrison', 'Delbridge', 'None', 'Australia'),
(103, 'Conner', 'Mecalfe', 'None', 'Australia'),
(104, 'Thomas', 'Deng', 'None', 'Australia'),
(105, 'Bailey', 'Wright', 'None', 'Australia'),
(106, 'Fran', 'Karacic', 'None', 'Australia'),
(107, 'Milos', 'Degenek', 'None', 'Australia'),
(108, 'Mitchell', 'Langerak', 'None', 'Australia'),
(109, 'Mathew', 'Ryan', 'None', 'Australia'),
(110, 'Andrew', 'Redmayne', 'None', 'Australia'),
(111, 'Kasper', 'Schmeichel', 'None', 'Dinamarca'),
(112, 'Oliver', 'Christensen', 'None', 'Dinamarca'),
(113, 'Frederik', 'Ronnow', 'None', 'Dinamarca'),
(114, 'Joachinm', 'Andersen', 'None', 'Dinamarca'),
(115, 'Victor', 'Nelsson', 'None', 'Dinamarca'),
(116, 'Simon', 'Kjaer', 'None', 'Dinamarca'),
(117, 'Jonas', 'Knudsen', 'None', 'Dinamarca'),
(118, 'Jens', 'Larsen', 'None', 'Dinamarca'),
(119, 'Mathias', 'Jensen', 'None', 'Dinamarca'),
(120, 'Christian', 'Eriksen', 'None', 'Dinamarca'),
(121, 'Mikkel', 'Damsgaard', 'None', 'Dinamarca'),
(122, 'Anders', 'Dreyer', 'None', 'Dinamarca'),
(123, 'Phillip', 'Billing', 'None', 'Dinamarca'),
(124, 'Daniel', 'Wass', 'None', 'Dinamarca'),
(125, 'Martin', 'Braitwaite', 'None', 'Dinamarca'),
(126, 'Skov', 'Olsen', 'None', 'Dinamarca'),
(127, 'Kasper', 'Dolberg', 'None', 'Dinamarca'),
(128, 'Jesper', 'Lindstrom', 'None', 'Dinamarca'),
(129, 'Rasmus', 'Hojlund', 'None', 'Dinamarca'),
(130, 'Yussuf', 'Poulsen', 'None', 'Dinamarca'),
(131, 'Mohamend', 'Sedki', 'None', 'Tunez'),
(132, 'Aymen', 'Dahmen', 'None', 'Tunez'),
(133, 'Bechir', 'Ben', 'None', 'Tunezw'),
(134, 'Adam', 'Ben', 'None', 'Tunez'),
(135, 'Bilel', 'Ifa', 'None', 'Tunez'),
(136, 'Montassar', 'Talbi', 'None', 'Tunez'),
(137, 'Ali', 'El', 'None', 'Tunez'),
(138, 'Dylan', 'Bronn', 'None', 'Tunez'),
(139, 'Ali', 'Maaloul', 'None', 'Tunez'),
(140, 'Nader', 'Ghandri', 'None', 'Tunez'),
(141, 'Ferjani', 'Sassi', 'None', 'Tunez'),
(142, 'Hannibal', 'Mejbri', 'None', 'Tunez'),
(143, 'Ellyes', 'Skhiri', 'None', 'Tunez'),
(144, 'Mohamed', 'Drager', 'None', 'Tunez'),
(145, 'Youssef', 'Msakni', 'None', 'Tunez'),
(146, 'Anis', 'Ben', 'None', 'Tunez'),
(147, 'Issam', 'Jebali', 'None', 'Tunez'),
(148, 'Seifeddine', 'Jaziri', 'None', 'Tunez'),
(149, 'Adem', 'Bellamine', 'None', 'Tunez'),
(150, 'Sayfallah', 'Ltaief', 'None', 'Tunez'),
(151, 'Eiji', 'Kawashima', 'None', 'Japon'),
(152, 'Daniel', 'Yabuki', 'None', 'Japon'),
(153, 'Kosei', 'Tani', 'None', 'Japon'),
(154, 'Yuto', 'Nagatomo', 'None', 'Japon'),
(155, 'Miki', 'Yamane', 'None', 'Japon'),
(156, 'Naomichi', 'Ueda', 'None', 'Japon'),
(157, 'Takehiro', 'Tomiyasu', 'None', 'Japon'),
(158, 'Ayumu', 'Seko', 'None', 'Japon'),
(159, 'Shogo', 'Taniguchi', 'None', 'Japon'),
(160, 'Wataru', 'Endo', 'None', 'Japon'),
(161, 'Aaron', 'Cruz', 'Saprisa', 'None'),
(162, 'Pablo', 'Arboine', 'Saprisa', 'None'),
(163, 'Fidel', 'Escobar', 'Saprisa', 'None'),
(164, 'Gerald', 'Taylor', 'Saprisa', 'None'),
(165, 'Ryan', 'Bolaños', 'Saprisa', 'None'),
(166, 'Ricardo', 'Blanco', 'Saprisa', 'None'),
(167, 'Sergio ', 'Cespedes', 'Saprisa', 'None'),
(168, 'Youstin', 'Salas', 'Saprisa', 'None'),
(169, 'Mariano', 'Torres', 'Saprisa', 'None'),
(170, 'Ulises', 'Segura', 'Saprisa', 'None'),
(171, 'Marvin', 'Angulo', 'Saprisa', 'None'),
(172, 'Christian', 'Bolaños', 'Saprisa', 'None'),
(173, 'Luis', 'Paradela', 'Saprisa', 'None'),
(174, 'Andy', 'Reyes', 'Saprisa', 'None'),
(175, 'Orlando', 'Sinclair', 'Saprisa', 'None'),
(176, 'Ariel', 'Rodriguez', 'Saprisa', 'None'),
(177, 'Javon', 'East', 'Saprisa', 'None'),
(178, 'Andy', 'Reyes', 'Saprisa', 'None'),
(179, 'Isaac', 'Paris', 'Cartago', 'None'),
(180, 'Kevin', 'Briceño', 'Cartago', 'None'),
(181, 'Darryl', 'Parker', 'Cartago', 'None'),
(182, 'Marco', 'Cubillo', 'Cartago', 'None'),
(183, 'Kevin', 'Espinoza', 'Cartago', 'None'),
(184, 'José', 'Vargas', 'Cartago', 'None'),
(185, 'William', 'Quieros', 'Cartago', 'None'),
(186, 'Brandon', 'Bonilla', 'Cartago', 'None'),
(187, 'Mikel', 'Gonzalez', 'Cartago', 'None'),
(188, 'Jose', 'Quiros', 'Cartago', 'None'),
(189, 'Diego ', 'Sanchez', 'Cartago', 'None'),
(190, 'Victor', 'Murillo', 'Cartago', 'None'),
(191, 'Mauricio', 'Montero', 'Cartago', 'None'),
(192, 'Michael', 'Barrantes', 'Cartago', 'None'),
(193, 'Allen ', 'Guevara', 'Cartago', 'None'),
(194, 'Marcel ', 'Hernandez', 'Cartago', 'None'),
(195, 'Marcos ', 'Ureña', 'Cartago', 'None'),
(196, 'Dylan ', 'Flores', 'Cartago', 'None'),
(197, 'Kenneth', 'Cerdas', 'Cartago', 'None'),
(198, 'Leonel', 'Moreira', 'Alajuela', 'None'),
(199, 'Byron', 'Mora', 'Alajuela', 'None'),
(200, 'Alexis', 'Gamboa', 'Alajuela', 'None'),
(201, 'Pipo', 'Gonzalez', 'Alajuela', 'None'),
(202, 'Audrey', 'David', 'Alajuela', 'None'),
(203, 'Ian', 'Smith', 'Alajuela', 'None'),
(204, 'Yael', 'Lopez', 'Alajuela', 'None'),
(205, 'Bernal ', 'Afaro', 'Alajuela', 'None'),
(206, 'Alexander', 'Lopez', 'Alajuela', 'None'),
(207, 'Freddy', 'Gondola', 'Alajuela', 'None'),
(208, 'Josimar', 'Alcocer', 'Alajuela', 'None'),
(209, 'Doryan', 'Venegas', 'Alajuela', 'None'),
(210, 'Jose', 'Cubero', 'Alajuela', 'None'),
(211, 'Bryan', 'Feliz', 'Alajuela', 'None'),
(212, 'Erick', 'Cabalceta', 'Alajuela', 'None'),
(213, 'Jose', 'Ortiz', 'Heredia', 'None'),
(214, 'John', 'Ruiz', 'Heredia', 'None'),
(215, 'Luis', 'Franco', 'Heredia', 'None'),
(216, 'Jordy', 'Hernandez', 'Heredia', 'None'),
(217, 'Jeferson', 'Brenes', 'Heredia', 'None'),
(218, 'Yeltsin', 'Tejeda', 'Heredia', 'None'),
(219, 'Rawy', 'Rodriguez', 'Heredia', 'None'),
(220, 'Diego', 'Gonzalez', 'Heredia', 'None'),
(221, 'Keyner', 'Brown', 'Heredia', 'None'),
(222, 'Ariel', 'Soto', 'Heredia', 'None'),
(223, 'Aaron', 'Salazar', 'Heredia', 'None'),
(224, 'Miguel', 'Basulto', 'Heredia', 'None'),
(225, 'Carlos', 'Umaña', 'Heredia', 'None'),
(226, 'Bryan', 'Segura', 'Heredia', 'None');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `teams`
--

CREATE TABLE `teams` (
  `_id` int(100) NOT NULL,
  `name` varchar(50) NOT NULL,
  `type` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `teams`
--

INSERT INTO `teams` (`_id`, `name`, `type`) VALUES
(1, 'Costa Rica', 'Seleccion'),
(2, 'España', 'Seleccion'),
(3, 'Japon', 'Seleccion'),
(4, 'Alemania', 'Seleccion'),
(5, 'Francia', 'Seleccion'),
(6, 'Australia', 'Seleccion'),
(7, 'Dinamarca', 'Seleccion'),
(8, 'Tunez', 'Seleccion'),
(9, 'Alajuela', 'Local'),
(10, 'Heredia', 'Local'),
(11, 'Saprisa', 'Local'),
(12, 'Cartago', 'Local');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `teamstournament`
--

CREATE TABLE `teamstournament` (
  `_idTournament` int(255) NOT NULL,
  `team` varchar(40) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;



-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tournament`
--

CREATE TABLE `tournament` (
  `_id` int(255) NOT NULL,
  `name` varchar(40) NOT NULL,
  `startDate` varchar(30) NOT NULL,
  `endDate` varchar(30) NOT NULL,
  `description` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `username` varchar(30) NOT NULL,
  `email` varchar(30) NOT NULL,
  `password` varchar(30) NOT NULL,
  `firstname` varchar(30) NOT NULL,
  `lastname` varchar(30) NOT NULL,
  `country` varchar(30) NOT NULL,
  `birthday` varchar(30) NOT NULL,
  `isAdmin` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `fasestournament`
--
ALTER TABLE `fasestournament`
  ADD KEY `fasetournament` (`_idTournament`);

--
-- Indices de la tabla `matchs`
--
ALTER TABLE `matchs`
  ADD PRIMARY KEY (`_id`),
  ADD KEY `matchtournament` (`_idtournament`);

--
-- Indices de la tabla `players`
--
ALTER TABLE `players`
  ADD PRIMARY KEY (`_id`);

--
-- Indices de la tabla `teams`
--
ALTER TABLE `teams`
  ADD PRIMARY KEY (`_id`);

--
-- Indices de la tabla `teamstournament`
--
ALTER TABLE `teamstournament`
  ADD KEY `teamstournament` (`_idTournament`);

--
-- Indices de la tabla `tournament`
--
ALTER TABLE `tournament`
  ADD PRIMARY KEY (`_id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`username`);

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `fasestournament`
--
ALTER TABLE `fasestournament`
  ADD CONSTRAINT `fasetournament` FOREIGN KEY (`_idTournament`) REFERENCES `tournament` (`_id`);

--
-- Filtros para la tabla `matchs`
--
ALTER TABLE `matchs`
  ADD CONSTRAINT `matchtournament` FOREIGN KEY (`_idtournament`) REFERENCES `tournament` (`_id`);

--
-- Filtros para la tabla `teamstournament`
--
ALTER TABLE `teamstournament`
  ADD CONSTRAINT `teamstournament` FOREIGN KEY (`_idTournament`) REFERENCES `tournament` (`_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

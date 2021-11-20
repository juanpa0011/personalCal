-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 20-11-2021 a las 23:59:37
-- Versión del servidor: 10.4.20-MariaDB
-- Versión de PHP: 8.0.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `presupuesto-personal`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `operations`
--

CREATE TABLE `operations` (
  `concept` varchar(22) NOT NULL,
  `amount` float NOT NULL DEFAULT 0,
  `type` enum('INCOME','EXPENSES') NOT NULL,
  `category` enum('GROCERIES','TAXES','TRAVEL','MANAGEMENT','OTHER','INCOME') NOT NULL DEFAULT 'OTHER',
  `operation_id` int(22) NOT NULL,
  `time` timestamp(6) NOT NULL DEFAULT current_timestamp(6)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `operations`
--

INSERT INTO `operations` (`concept`, `amount`, `type`, `category`, `operation_id`, `time`) VALUES
('Description Test', 1000, 'EXPENSES', 'MANAGEMENT', 5, '2021-11-14 01:20:16.560160'),
('Your Taxes', 3725.25, 'EXPENSES', 'TAXES', 8, '2021-11-15 15:33:07.136047'),
('Added Desc with Put', 2500, 'EXPENSES', 'GROCERIES', 13, '2021-11-17 15:30:12.649704'),
('Init', 10000, 'INCOME', 'INCOME', 15, '2021-11-17 15:38:20.488793'),
('New Income', 2000, 'INCOME', 'INCOME', 16, '2021-11-17 16:09:56.131182'),
('New Income', 1000, 'INCOME', 'INCOME', 17, '2021-11-17 16:14:05.408342'),
('More Income', 2000, 'INCOME', 'INCOME', 18, '2021-11-20 22:54:36.111268');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `user_id` int(22) NOT NULL,
  `email` varchar(22) NOT NULL,
  `password` varchar(220) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`user_id`, `email`, `password`) VALUES
(4, 'admin@admin.admin', '$2b$10$dwiZbyDySgWhc.VPBvYd6OyVcoZoy6hvsMCM3ptxk6c5lplGYPGwS'),
(5, 'user@user.com', '$2b$10$ivzcJ2.aIf.1D7u6CmM9FupORWcexnK8uajqQoRIJveMmoUSLe4Ru');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `operations`
--
ALTER TABLE `operations`
  ADD PRIMARY KEY (`operation_id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `operations`
--
ALTER TABLE `operations`
  MODIFY `operation_id` int(22) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `user_id` int(22) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

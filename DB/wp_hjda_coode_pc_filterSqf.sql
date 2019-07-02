-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:3306
-- Tiempo de generación: 25-06-2019 a las 23:34:53
-- Versión del servidor: 5.6.41-84.1
-- Versión de PHP: 7.2.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `oxiumusa_wordpress3a4`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `wp_hjda_coode_pc_filterSqf`
--

CREATE TABLE `wp_hjda_coode_pc_filterSqf` (
  `id` bigint(20) NOT NULL,
  `a25` varchar(30) COLLATE utf8mb4_unicode_520_ci NOT NULL,
  `a50` varchar(30) COLLATE utf8mb4_unicode_520_ci NOT NULL,
  `a100` varchar(30) COLLATE utf8mb4_unicode_520_ci NOT NULL,
  `a150` varchar(30) COLLATE utf8mb4_unicode_520_ci NOT NULL,
  `a200` varchar(30) COLLATE utf8mb4_unicode_520_ci NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;

--
-- Volcado de datos para la tabla `wp_hjda_coode_pc_filterSqf`
--

INSERT INTO `wp_hjda_coode_pc_filterSqf` (`id`, `a25`, `a50`, `a100`, `a150`, `a200`) VALUES
(1, '$8.00', '$7.50', '$6.50', '$6.00', '$5.00'),
(2, '$8.00', '$7.50', '$6.50', '$6.00', '$5.00'),
(3, '$8.00', '$7.50', '$6.50', '$6.00', '$5.00'),
(4, '$9.00', '$8.00', '$7.00', '$6.00', '$5.00'),
(5, '$9.00', '$8.00', '$7.00', '$6.00', '$5.00'),
(6, '$12.00', '$11.00', '$10.00', '$9.00', '$8.00'),
(7, '$10.00', '$9.00', '$8.00', '$7.00', '$6.00'),
(8, '$10.00', '$9.00', '$8.00', '$7.00', '$6.00'),
(9, '$10.00', '$9.50', '$8.50', '$7.50', '$6.00'),
(10, '$10.00', '$9.50', '$8.50', '$7.50', '$6.00'),
(11, '$10.00', '$9.50', '$8.50', '$7.50', '$6.00'),
(12, '$10.00', '$9.50', '$8.50', '$7.50', '$6.00'),
(13, '$6.00', '$5.00', '$4.00', '$3.00', '$2.75'),
(14, '$7.00', '$6.50', '$5.00', '$4.00', '$3.50'),
(15, '$11.00', '$10.00', '$9.00', '$8.00', '$7.00'),
(16, '$14.00', '$12.00', '$11.00', '$10.00', '$9.00'),
(17, '$11.00', '$9.50', '$9.00', '$8.00', '$7.00'),
(18, '$14.00', '$12.00', '$11.00', '$10.00', '$9.00'),
(19, '$11.00', '$9.50', '$8.50', '$7.50', '$6.00'),
(20, '$14.00', '$12.00', '$11.00', '$10.00', '$9.00'),
(21, '$11.00', '$9.50', '$8.50', '$7.50', '$6.00'),
(22, '$14.00', '$12.00', '$11.00', '$10.00', '$9.00'),
(23, '$11.00', '$9.50', '$8.50', '$7.50', '$6.00'),
(24, '$14.00', '$12.00', '$11.00', '$10.00', '$9.00'),
(25, '$14.00', '$12.00', '$11.00', '$10.00', '$9.00'),
(26, '$14.00', '$12.00', '$11.00', '$10.00', '$9.00'),
(27, '$15.00', '$14.00', '$13.00', '$12.00', '$11.00');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `wp_hjda_coode_pc_filterSqf`
--
ALTER TABLE `wp_hjda_coode_pc_filterSqf`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `wp_hjda_coode_pc_filterSqf`
--
ALTER TABLE `wp_hjda_coode_pc_filterSqf`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

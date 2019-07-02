-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:3306
-- Tiempo de generación: 25-06-2019 a las 23:35:07
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
-- Estructura de tabla para la tabla `wp_hjda_coode_pc_filterPcs`
--

CREATE TABLE `wp_hjda_coode_pc_filterPcs` (
  `id` bigint(20) NOT NULL,
  `1a3` varchar(30) COLLATE utf8mb4_unicode_520_ci NOT NULL,
  `4a7` varchar(30) COLLATE utf8mb4_unicode_520_ci NOT NULL,
  `8a15` varchar(30) COLLATE utf8mb4_unicode_520_ci NOT NULL,
  `16a30` varchar(30) COLLATE utf8mb4_unicode_520_ci NOT NULL,
  `31a50` varchar(30) COLLATE utf8mb4_unicode_520_ci NOT NULL,
  `51a100` varchar(30) COLLATE utf8mb4_unicode_520_ci NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;

--
-- Volcado de datos para la tabla `wp_hjda_coode_pc_filterPcs`
--

INSERT INTO `wp_hjda_coode_pc_filterPcs` (`id`, `1a3`, `4a7`, `8a15`, `16a30`, `31a50`, `51a100`) VALUES
(1, '$149.00', '$129.00', '$117.00', '$113.00', '$105.00', '$99.00'),
(2, '$185.00', '$179.00', '$169.00', '$165.00', '$159.00', '$149.00'),
(3, '$129.00', '$125.00', '$99.00', '$89.00', '$85.00', '$79.00');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `wp_hjda_coode_pc_filterPcs`
--
ALTER TABLE `wp_hjda_coode_pc_filterPcs`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `wp_hjda_coode_pc_filterPcs`
--
ALTER TABLE `wp_hjda_coode_pc_filterPcs`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

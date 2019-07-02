-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:3306
-- Tiempo de generación: 25-06-2019 a las 23:35:00
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
-- Estructura de tabla para la tabla `wp_hjda_coode_pc_filterQty`
--

CREATE TABLE `wp_hjda_coode_pc_filterQty` (
  `id` bigint(20) NOT NULL,
  `a250` varchar(100) COLLATE utf8mb4_unicode_520_ci NOT NULL,
  `a500` varchar(100) COLLATE utf8mb4_unicode_520_ci NOT NULL,
  `a1000` varchar(100) COLLATE utf8mb4_unicode_520_ci NOT NULL,
  `a2500` varchar(100) COLLATE utf8mb4_unicode_520_ci NOT NULL,
  `a5000` varchar(100) COLLATE utf8mb4_unicode_520_ci NOT NULL,
  `a10000` varchar(100) COLLATE utf8mb4_unicode_520_ci NOT NULL,
  `a20000` varchar(100) COLLATE utf8mb4_unicode_520_ci NOT NULL,
  `a250000` varchar(100) COLLATE utf8mb4_unicode_520_ci NOT NULL,
  `a1500` varchar(100) COLLATE utf8mb4_unicode_520_ci NOT NULL,
  `a2000` varchar(100) COLLATE utf8mb4_unicode_520_ci NOT NULL,
  `a3000` varchar(100) COLLATE utf8mb4_unicode_520_ci NOT NULL,
  `a4000` varchar(100) COLLATE utf8mb4_unicode_520_ci NOT NULL,
  `a6000` varchar(100) COLLATE utf8mb4_unicode_520_ci NOT NULL,
  `a7000` varchar(100) COLLATE utf8mb4_unicode_520_ci NOT NULL,
  `a15000` varchar(100) COLLATE utf8mb4_unicode_520_ci NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;

--
-- Volcado de datos para la tabla `wp_hjda_coode_pc_filterQty`
--

INSERT INTO `wp_hjda_coode_pc_filterQty` (`id`, `a250`, `a500`, `a1000`, `a2500`, `a5000`, `a10000`, `a20000`, `a250000`, `a1500`, `a2000`, `a3000`, `a4000`, `a6000`, `a7000`, `a15000`) VALUES
(1, '$120.00', '$140.00', '$190.00', '$425.00', '$725.00', '$1,392.00', '', '', '$285.00', '$340.00', '$465.00', '$600.00', '$858.00', '$994.00', ''),
(2, '$149.00', '$170.00', '$240.00', '$537.00', '$989.00', '$1,800.00', '', '', '$352.50', '$440.00', '$600.00', '$797.60', '$1,182.00', '$1,372.00', ''),
(3, '$59.00	', '$79.00', '$89.00', '$99.00', '$135.00', '$180.00	', '$380.00', '', '', '', '', '', '', '', '$330.00'),
(4, '$49.00', '$69.00', '$79.00', '$89.00', '$99.00', '$135.00', '$298.00', '', '', '', '', '', '', '', '$199.00'),
(5, '$79.00', '$99.00', '$135.00', '$155.00', '$199.00', '$298.00', '$427.00', '', '', '', '', '', '', '', '389.00'),
(6, '$69.00', '$79.00', '$89.00', '$99.00', '$135.00', '$180.00', '$380.00', '', '', '', '', '', '', '', '$330.00'),
(7, '$189.00', '$214.00', '$289.00', '$429.00', '$645.00', '', '', '', '', '', '', '', '', '', ''),
(8, '$249.00', '$299.00', '$369.00', '$389.00', '$439.00', '', '', '', '', '', '', '', '', '', ''),
(9, '$198.00', '$269.00', '$329.00', '$429.00', '$959.00', '', '', '', '', '', '', '', '', '', ''),
(10, '$189.00', '$249.00', '$299.00', '$565.00', '$789.00', '', '', '', '', '', '', '', '', '', ''),
(11, '$198.00', '$269.00', '$329.00', '$429.00', '$959.00', '', '', '', '', '', '', '', '', '', ''),
(12, '$198.00', '$269.00', '$329.00', '$429.00', '$959.00', '', '', '', '', '', '', '', '', '', '');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `wp_hjda_coode_pc_filterQty`
--
ALTER TABLE `wp_hjda_coode_pc_filterQty`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `wp_hjda_coode_pc_filterQty`
--
ALTER TABLE `wp_hjda_coode_pc_filterQty`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

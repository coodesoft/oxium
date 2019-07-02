-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:3306
-- Tiempo de generación: 25-06-2019 a las 23:34:20
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
-- Estructura de tabla para la tabla `wp_hjda_coode_pc_product`
--

CREATE TABLE `wp_hjda_coode_pc_product` (
  `id` bigint(20) NOT NULL,
  `product_id` int(10) NOT NULL,
  `attribute` varchar(100) COLLATE utf8mb4_unicode_520_ci NOT NULL,
  `value` varchar(100) COLLATE utf8mb4_unicode_520_ci NOT NULL,
  `filter` varchar(100) COLLATE utf8mb4_unicode_520_ci NOT NULL,
  `filter_id` bigint(20) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;

--
-- Volcado de datos para la tabla `wp_hjda_coode_pc_product`
--

INSERT INTO `wp_hjda_coode_pc_product` (`id`, `product_id`, `attribute`, `value`, `filter`, `filter_id`) VALUES
(1, 703, 'Color', 'Black ink', 'Qty', 1),
(2, 703, 'Color', 'Full Color', 'Qty', 2),
(3, 658, 'Finish', 'Matte', 'Sqf', 1),
(4, 659, 'Finish', 'Matte', 'Sqf', 2),
(5, 660, 'Finish', 'Gloss', 'Sqf', 3),
(6, 661, 'Finish', 'Gloss', 'Sqf', 4),
(7, 662, 'Finish', 'Matte', 'Sqf', 5),
(8, 663, 'Finish', 'Matte', 'Sqf', 6),
(9, 664, 'Finish', 'Matte', 'Sqf', 7),
(10, 665, 'Finish', 'Matte', 'Sqf', 8),
(11, 666, 'Finish', 'Matte', 'Sqf', 9),
(12, 667, 'Finish', 'Matte', 'Sqf', 10),
(13, 668, 'Finish', 'Matte', 'Sqf', 11),
(14, 669, 'Finish', 'Matte', 'Sqf', 12),
(15, 463, 'Finish', 'Matte', 'Sqf', 13),
(16, 463, 'Finish', 'Gloss', 'Sqf', 14),
(17, 670, 'Sides', 'Front Only', 'Sqf', 15),
(18, 670, 'Sides', 'Front & Back', 'Sqf', 16),
(19, 675, 'Sides', 'Front Only', 'Sqf', 17),
(20, 676, 'Sides', 'Front Only', 'Sqf', 18),
(21, 671, 'Sides', 'Front Only', 'Sqf', 19),
(22, 671, 'Sides', 'Front & Back', 'Sqf', 20),
(23, 672, 'Sides', 'Front Only', 'Sqf', 21),
(24, 672, 'Sides', 'Front & Back', 'Sqf', 22),
(25, 674, 'Sides', 'Front Only', 'Sqf', 23),
(26, 674, 'Sides', 'Front & Back', 'Sqf', 24),
(27, 677, 'Sides', 'Front Only', 'Sqf', 25),
(28, 678, 'Sides', 'Front Only', 'Sqf', 26),
(29, 680, 'Sides', 'Front Only', 'Sqf', 27),
(30, 681, 'Sides', 'Front Only', 'Pcs', 1),
(31, 681, 'Sides', 'Front & Back', 'Pcs', 2),
(32, 679, 'Sides', 'Front Only', 'Pcs', 3),
(33, 683, 'Size', '3.5x2', 'Qty', 3),
(34, 683, 'Size', '2x2', 'Qty', 4),
(35, 686, 'Size', '3.5\"x2\"', 'Qty', 5),
(36, 686, 'Size', '2\"x2\"', 'Qty', 6),
(37, 684, 'Size', '3.5\"x2\"', 'Qty', 7),
(38, 684, 'Size', '2\"x2\"', 'Qty', 8),
(39, 688, 'Stock', 'PVC 30 Mil', 'Qty', 9),
(40, 688, 'Stock', 'PVC 20 Mil', 'Qty', 10);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `wp_hjda_coode_pc_product`
--
ALTER TABLE `wp_hjda_coode_pc_product`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `wp_hjda_coode_pc_product`
--
ALTER TABLE `wp_hjda_coode_pc_product`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=41;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

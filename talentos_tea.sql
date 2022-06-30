-- phpMyAdmin SQL Dump
-- version 4.9.7
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Jun 30, 2022 at 03:14 PM
-- Server version: 10.3.34-MariaDB-cll-lve
-- PHP Version: 7.4.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `talentos_tea`
--

-- --------------------------------------------------------

--
-- Table structure for table `sendus`
--

CREATE TABLE `sendus` (
  `id` int(10) UNSIGNED NOT NULL,
  `username` varchar(100) NOT NULL,
  `usercontact` varchar(200) NOT NULL,
  `usermessage` mediumtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `sendus`
--

INSERT INTO `sendus` (`id`, `username`, `usercontact`, `usermessage`) VALUES
(59, 'Anthony', 'aztegoshi@gmail.com', 'Quero conversar com vocÃª'),
(60, '', '', ''),
(61, 'asdws', 'asdwasdw', 'asdwasdw'),
(62, 'Caio Uno', 'caiounoso@gmail.com', 'Ficou bonito, mas o botÃ£o do wpp tÃ¡ mt grande e o formulÃ¡rio de contato seria bom estar centralizado. Mas parabÃ©ns.\r\n\r\nAbraÃ§o!'),
(63, 'asd', 'asd', 'asd'),
(64, 'Teste', 'teste', 'teste'),
(65, 'asd', 'asd', 'asd'),
(66, 'teste', 'teste', 'teste'),
(67, 'Anthony', 'aztegoshi@gmail.com', 'asdasdasdasdasd'),
(68, 't5t5t5', '5tt55t5', 't555555555555555'),
(69, 'Anthony Celular', 'Kskwj', 'Ksksjjs'),
(70, 'asd', 'asd', 'asd'),
(71, 'Anthony', '977417856', 'Bom dia'),
(72, 'jjlk', 'hjk', 'gvjvkk');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `sendus`
--
ALTER TABLE `sendus`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `sendus`
--
ALTER TABLE `sendus`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=73;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

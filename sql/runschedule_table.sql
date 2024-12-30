-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `CSC7084DB`
--

-- --------------------------------------------------------

--
-- Table structure for table `runschedule`
--

CREATE TABLE IF NOT EXISTS `runschedule` (
  `id` int(11) NOT NULL,
  `items` varchar(200) NOT NULL,
  `mydate` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `runschedule`
--

INSERT INTO `runschedule` (`id`, `items`, `mydate`) VALUES
(88, 'Monday 5K Run', '2024-11-04'),
(89, 'Intervals 4 x 1K', '2024-11-06'),
(90, 'Parkrun - 5K', '2024-11-23'),
(91, 'Recovery Run - 3K', '2024-11-25'),
(92, 'Midweek Run - 5K', '2024-11-27'),
(94, 'Parkrun - 5K', '2024-12-01');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `runschedule`
--
ALTER TABLE `runschedule`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `runschedule`
--
ALTER TABLE `runschedule`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=95;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

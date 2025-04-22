-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 20, 2025 at 11:32 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `date_interpreter`
--

-- --------------------------------------------------------

--
-- Table structure for table `queries`
--

CREATE TABLE `queries` (
  `id` int(11) NOT NULL,
  `request` text NOT NULL,
  `response` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL CHECK (json_valid(`response`)),
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `type` enum('date','product') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `queries`
--

INSERT INTO `queries` (`id`, `request`, `response`, `created_at`, `type`) VALUES
(1, 'next monday', '{\"date\":\"2024-03-04\",\"request\":\"next monday\"}', '2025-04-20 08:15:46', 'date'),
(2, '\"Create a gaming laptop with RTX 4080, 32GB RAM, and 1TB SSD\"', '{}', '2025-04-20 09:20:46', 'date'),
(3, '\"Create a gaming laptop with RTX 4080, 32GB RAM, and 1TB SSD\"', '{}', '2025-04-20 09:21:00', 'date'),
(4, '\"Create a gaming laptop with RTX 4080, 32GB RAM, and 1TB SSD\"', '{}', '2025-04-20 09:21:59', 'date'),
(5, 'next monday', '{\"date\":\"2024-03-11\",\"request\":\"next monday\"}', '2025-04-20 09:22:08', 'date'),
(6, '\"Create a gaming laptop with RTX 4080, 32GB RAM, and 1TB SSD\"', '{\"product_name\":\"Apex Predator Gaming Laptop\",\"key_features\":[\"Powerful NVIDIA GeForce RTX 4080 Graphics\",\"Blazing-Fast 32GB DDR5 RAM\",\"Ample 1TB NVMe PCIe Gen4 SSD Storage\",\"High-Refresh-Rate Display (Specific details to be added based on chosen panel)\",\"High-Performance Processor (Specific details to be added based on chosen CPU)\",\"Advanced Cooling System for optimal performance under load\",\"RGB Keyboard with customizable per-key lighting\"],\"technical_specs\":{\"GPU\":\"NVIDIA GeForce RTX 4080\",\"RAM\":\"32GB DDR5\",\"Storage\":\"1TB NVMe PCIe Gen4 SSD\",\"CPU\":\"To be specified\",\"Display\":\"To be specified\",\"Operating System\":\"To be specified\",\"Battery\":\"To be specified\",\"Weight\":\"To be specified\",\"Dimensions\":\"To be specified\",\"Ports\":\"To be specified\"},\"original_request\":\"Create a gaming laptop with RTX 4080, 32GB RAM, and 1TB SSD\"}', '2025-04-20 09:25:05', 'date'),
(7, '\"Create a gaming laptop with RTX 4080, 32GB RAM, and 1TB SSD\"', '{\"product_name\":\"Dominion Pro: Apex Gaming Laptop\",\"key_features\":[\"Unleash Unrivaled Performance: Experience breathtaking visuals and smooth, lag-free gameplay with the power of NVIDIA GeForce RTX 4080.\",\"Blazing-Fast Speed: Conquer any game with 32GB of DDR5 RAM for seamless multitasking and lightning-fast load times.\",\"Lightning-Quick Storage:  Enjoy instant game loading and ample space for your library with a 1TB NVMe PCIe Gen4 SSD.\",\"Immersive Display: [Insert Display Resolution and Refresh Rate Here, e.g.,  Experience vibrant visuals on a stunning 17.3\\\" QHD (2560x1440) 240Hz display.]\",\"Precision-Engineered Design:  Crafted with premium materials for optimal cooling and a sleek, portable design.\"],\"technical_specs\":{\"GPU\":\"NVIDIA GeForce RTX 4080\",\"RAM\":\"32GB DDR5\",\"Storage\":\"1TB NVMe PCIe Gen4 SSD\",\"Processor\":\"[Insert Processor Here, e.g., Intel Core i9-13900HX]\",\"Display\":\"[Insert Display Specs Here, e.g., 17.3\\\" QHD (2560x1440) 240Hz IPS]\",\"Operating System\":\"[Insert OS Here, e.g., Windows 11 Home]\",\"Battery\":\"[Insert Battery Life Here, e.g., Up to 8 hours]\",\"Weight\":\"[Insert Weight Here, e.g., 5.5 lbs]\",\"Dimensions\":\"[Insert Dimensions Here, e.g., 15.7 x 10.2 x 0.9 inches]\"},\"original_request\":\"Create a gaming laptop with RTX 4080, 32GB RAM, and 1TB SSD\"}', '2025-04-20 09:25:23', 'date'),
(8, '\"Create a gaming laptop with RTX 4080, 32GB RAM, and 1TB SSD\"', '{\"product_name\":\"Apex Predator Gaming Laptop\",\"key_features\":[\"NVIDIA GeForce RTX 4080 Graphics\",\"Blazing-Fast 32GB DDR5 RAM\",\"1TB NVMe PCIe Gen4 SSD Storage\",\"High-Refresh-Rate Display (Specific details to be added based on chosen panel)\",\"Powerful Intel/AMD Processor (Specific details to be added based on chosen CPU)\"],\"technical_specs\":{\"graphics_card\":\"NVIDIA GeForce RTX 4080\",\"ram\":\"32GB DDR5\",\"storage\":\"1TB NVMe PCIe Gen4 SSD\",\"processor\":\"To be specified (Intel Core i7/i9 or AMD Ryzen 7/9)\",\"display\":\"To be specified (Size, Resolution, Refresh Rate, Panel Type)\",\"operating_system\":\"To be specified (Windows 11)\",\"battery\":\"To be specified (Capacity, Battery Life)\",\"ports\":\"To be specified (USB-A, USB-C, HDMI, etc.)\",\"weight\":\"To be specified\",\"dimensions\":\"To be specified\"},\"original_request\":\"Create a gaming laptop with RTX 4080, 32GB RAM, and 1TB SSD\"}', '2025-04-20 09:25:30', 'date'),
(9, 'asus 1tb hard', '{\"product_name\":\"ASUS 1TB Hard Drive\",\"key_features\":[\"1TB storage capacity\",\"High data transfer rates\",\"Durable and reliable design\",\"Compatible with various devices (specific compatibility depends on the exact model)\",\"Easy installation\"],\"technical_specs\":{\"capacity\":\"1TB\",\"interface\":\"Unspecified (SATA or other, requires model specification)\",\"rpm\":\"Unspecified (requires model specification)\",\"cache\":\"Unspecified (requires model specification)\",\"form_factor\":\"Unspecified (2.5-inch or 3.5-inch, requires model specification)\",\"dimensions\":\"Unspecified (requires model specification)\",\"weight\":\"Unspecified (requires model specification)\"},\"original_request\":\"asus 1tb hard\"}', '2025-04-20 09:26:11', 'date'),
(10, 'next year', '{\"date\":\"2024-01-01\",\"request\":\"next year\"}', '2025-04-20 09:26:26', 'date');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `queries`
--
ALTER TABLE `queries`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `queries`
--
ALTER TABLE `queries`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 26, 2020 at 02:59 PM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.3.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `kuma_bookstore`
--

-- --------------------------------------------------------

--
-- Table structure for table `books`
--

CREATE TABLE `books` (
  `id` int(11) NOT NULL,
  `name` varchar(120) NOT NULL,
  `description` text NOT NULL,
  `cover` varchar(50) NOT NULL,
  `genre_id` int(20) NOT NULL,
  `author_id` int(20) NOT NULL,
  `status_id` int(5) NOT NULL,
  `published` varchar(10) NOT NULL,
  `language` varchar(25) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `update_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `books`
--

INSERT INTO `books` (`id`, `name`, `description`, `cover`, `genre_id`, `author_id`, `status_id`, `published`, `language`, `created_at`, `update_at`) VALUES
(1, 'Harry potter and the sorcerer\'s stone ', 'Rescued from an aunt & uncle who overly neglected him, a boy with a large destiny line proved his ability when he began to enter the Hogwarts School of Witchcraft and Wizardry.', 'book/cover/book-1589577715357.jpg', 1, 1, 1, '26/06/1997', 'English', '2020-05-15 21:21:55', NULL),
(6, 'Harry Potter and the Prisoner of Azkaban', 'Harry returned to Hogwarts in his third year, and not only had a new teacher to defend against black magic, he also confronted Sirius Black, who managed to escape from Azkaban.', 'book/cover/book-1589578081374.jpg', 1, 1, 1, '01/10/1999', 'English', '2020-05-15 21:28:01', NULL),
(7, 'Harry Potter and the Order of the Phoenix', 'With their warnings about the return of Lord Voldemort\'s mocking, Harry and Dumbledore were targeted by Wizard authorities as authoritarian bureaucrats slowly seized power at Hogwarts.', 'book/cover/book-1589578348324.jpg', 1, 1, 1, '11/01/2004', 'English', '2020-05-15 21:32:28', NULL),
(8, 'Harry Potter and the Half-Blood Prince', 'Harry finds a mysterious book that belongs to Half-Blood Prince. Meanwhile, Horace Slughorn returns as a potion teacher. And now, Harry and Dumbledore must explore Voldemort\'s dark past.', 'book/cover/book-1589578507722.jpg', 1, 1, 1, '16/07/2005', 'English', '2020-05-15 21:35:07', NULL),
(10, 'Overlord 1: The Undead King', 'Overlord (オーバーロード) is a Japanese light novel series written by Maruyama Kugane (丸山くがね) and illustrated by so-bin. The series is ongoing with 9 volumes. An anime adaptation has been announced, and it has already aired.', 'book/cover/book-1589579349321.jpg', 1, 2, 1, '30/07/2012', 'Japan', '2020-05-15 21:49:09', NULL),
(11, 'Overlord 2: The Dark Warrior', 'Overlord (オーバーロード) is a Japanese light novel series written by Maruyama Kugane (丸山くがね) and illustrated by so-bin. The series is ongoing with 9 volumes. An anime adaptation has been announced, and it has already aired.', 'book/cover/book-1589579397628.jpg', 1, 2, 1, '30/11/2012', 'Japan', '2020-05-15 21:49:57', NULL),
(12, 'Overlord 3: The Bloody Valkyrie', 'Overlord (オーバーロード) is a Japanese light novel series written by Maruyama Kugane (丸山くがね) and illustrated by so-bin. The series is ongoing with 9 volumes. An anime adaptation has been announced, and it has already aired.', 'book/cover/book-1589579429629.jpg', 1, 2, 1, '30/03/2013', 'Japan', '2020-05-15 21:50:29', NULL),
(13, 'Overlord 4: The Lizard Man Heroes', 'Overlord (オーバーロード) is a Japanese light novel series written by Maruyama Kugane (丸山くがね) and illustrated by so-bin. The series is ongoing with 9 volumes. An anime adaptation has been announced, and it has already aired.', 'book/cover/book-1589579466781.jpg', 1, 2, 1, '31/05/2013', 'Japan', '2020-05-15 21:51:06', NULL),
(14, 'Overlord 5: The Men in the Kingdom (Part 1)', 'Overlord (オーバーロード) is a Japanese light novel series written by Maruyama Kugane (丸山くがね) and illustrated by so-bin. The series is ongoing with 9 volumes. An anime adaptation has been announced, and it has already aired.', 'book/cover/book-1589579528867.jpg', 1, 2, 1, '28/12/2013', 'Japan', '2020-05-15 21:52:08', NULL),
(16, 'Hyōka', 'At the request of his brother, Houtarou Oreki joined the Classics Literature Club (古典 部 Koten-bu) at Kamiyama High School to prevent the club from closing down, along with other members Eru Chitanda, Satoshi Fukube and Mayaka Ibara. This story takes place in Kamiyama City, a fictional city in Gifu Prefecture based on the author\'s hometown, Takayama, which is also located in Gifu Prefecture.', 'book/cover/book-1589579904588.jpg', 6, 3, 1, '31/10/2001', 'Japan', '2020-05-15 21:58:24', NULL),
(17, 'Gusha no End Roll', 'At the request of his brother, Houtarou Oreki joined the Classics Literature Club (古典 部 Koten-bu) at Kamiyama High School to prevent the club from closing down, along with other members Eru Chitanda, Satoshi Fukube and Mayaka Ibara. This story takes place in Kamiyama City, a fictional city in Gifu Prefecture based on the author\'s hometown, Takayama, which is also located in Gifu Prefecture.', 'book/cover/book-1589579939354.jpg', 6, 3, 1, '31/07/2002', 'Japan', '2020-05-15 21:58:59', NULL),
(18, 'Kudryavka no Junban', 'At the request of his brother, Houtarou Oreki joined the Classics Literature Club (古典 部 Koten-bu) at Kamiyama High School to prevent the club from closing down, along with other members Eru Chitanda, Satoshi Fukube and Mayaka Ibara. This story takes place in Kamiyama City, a fictional city in Gifu Prefecture based on the author\'s hometown, Takayama, which is also located in Gifu Prefecture.', 'book/cover/book-1589579974758.jpg', 6, 3, 1, '30/06/2005', 'Japan', '2020-05-15 21:59:34', NULL),
(19, 'Tōmawari Suru Hina', 'At the request of his brother, Houtarou Oreki joined the Classics Literature Club (古典 部 Koten-bu) at Kamiyama High School to prevent the club from closing down, along with other members Eru Chitanda, Satoshi Fukube and Mayaka Ibara. This story takes place in Kamiyama City, a fictional city in Gifu Prefecture based on the author\'s hometown, Takayama, which is also located in Gifu Prefecture.', 'book/cover/book-1589580005378.jpg', 6, 3, 1, '03/10/2007', 'Japan', '2020-05-15 22:00:05', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `book_authors`
--

CREATE TABLE `book_authors` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `update_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `book_authors`
--

INSERT INTO `book_authors` (`id`, `name`, `created_at`, `update_at`) VALUES
(1, 'J.K Rowling', '2020-05-15 21:24:33', '2020-06-26 20:14:08'),
(2, 'Kugane Maruyama', '2020-05-15 21:52:43', NULL),
(3, 'Honobu Yonezawa', '2020-05-15 21:57:38', '2020-06-17 20:23:52'),
(16, 'Lovecraft', '2020-06-29 04:08:21', '2020-07-11 01:30:45');

-- --------------------------------------------------------

--
-- Table structure for table `book_favorites`
--

CREATE TABLE `book_favorites` (
  `id` int(11) NOT NULL,
  `book_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `update_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `book_favorites`
--

INSERT INTO `book_favorites` (`id`, `book_id`, `user_id`, `created_at`, `update_at`) VALUES
(19, 8, 3, '2020-06-15 04:01:12', NULL),
(21, 8, 2, '2020-06-13 18:15:55', NULL),
(23, 8, 2, '2020-06-13 18:15:55', NULL),
(25, 8, 3, '2020-06-15 04:01:12', NULL),
(27, 8, 2, '2020-06-13 18:15:55', NULL),
(29, 8, 2, '2020-06-13 18:15:55', NULL),
(31, 8, 3, '2020-06-15 04:01:12', NULL),
(33, 8, 2, '2020-06-13 18:15:55', NULL),
(35, 8, 2, '2020-06-13 18:15:55', NULL),
(37, 8, 3, '2020-06-15 04:01:12', NULL),
(39, 8, 2, '2020-06-13 18:15:55', NULL),
(41, 8, 2, '2020-06-13 18:15:55', NULL),
(43, 8, 3, '2020-06-15 04:01:12', NULL),
(45, 8, 2, '2020-06-13 18:15:55', NULL),
(47, 8, 2, '2020-06-13 18:15:55', NULL),
(49, 8, 3, '2020-06-15 04:01:12', NULL),
(51, 8, 2, '2020-06-13 18:15:55', NULL),
(53, 8, 2, '2020-06-13 18:15:55', NULL),
(55, 8, 3, '2020-06-15 04:01:12', NULL),
(57, 8, 2, '2020-06-13 18:15:55', NULL),
(59, 8, 2, '2020-06-13 18:15:55', NULL),
(61, 8, 3, '2020-06-15 04:01:12', NULL),
(63, 8, 2, '2020-06-13 18:15:55', NULL),
(93, 17, 1, '2020-06-27 21:27:35', NULL),
(95, 17, 1, '2020-06-27 21:50:20', NULL),
(97, 7, 28, '2020-06-28 18:56:50', NULL),
(98, 17, 29, '2020-06-29 04:03:14', NULL),
(122, 8, 45, '2020-07-06 02:28:55', NULL),
(123, 17, 46, '2020-07-06 02:45:25', NULL),
(182, 8, 30, '2020-07-09 00:02:28', NULL),
(183, 8, 30, '2020-07-09 00:02:29', NULL),
(184, 7, 30, '2020-07-09 00:02:33', NULL),
(185, 7, 30, '2020-07-09 00:02:34', NULL),
(186, 6, 30, '2020-07-09 00:02:37', NULL),
(190, 17, 30, '2020-07-09 20:35:13', NULL),
(191, 10, 30, '2020-07-09 20:39:17', NULL),
(193, 10, 30, '2020-07-09 20:40:31', NULL),
(194, 10, 30, '2020-07-09 20:41:48', NULL),
(195, 17, 30, '2020-07-09 20:43:00', NULL),
(200, 14, 49, '2020-07-13 03:44:38', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `book_genres`
--

CREATE TABLE `book_genres` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `update_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `book_genres`
--

INSERT INTO `book_genres` (`id`, `name`, `created_at`, `update_at`) VALUES
(1, 'Fantasy', '2020-05-15 21:25:23', NULL),
(2, 'Horor', '2020-05-15 21:25:33', NULL),
(3, 'SC-FI', '2020-05-15 21:25:48', NULL),
(5, 'Adventure', '2020-05-15 21:26:05', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `book_reviews`
--

CREATE TABLE `book_reviews` (
  `id` int(11) NOT NULL,
  `book_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `review` longtext NOT NULL,
  `rating` tinyint(4) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `update_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `book_reviews`
--

INSERT INTO `book_reviews` (`id`, `book_id`, `user_id`, `review`, `rating`, `created_at`, `update_at`) VALUES
(1, 1, 30, 'Adaptations have long been a thorn in the side of anime viewers, but not because they are inherently bad. No, the main problem has been that many studios have regarded the original work almost as an afterthought, and there are a number of shows that could have been wonderful if the writers had simply stuck to the original story.', 10, '2020-07-05 21:47:28', NULL),
(2, 8, 30, 'First of all, I have seen the original FMA and although it was very popular and original, the pacing and conclusion did not sit too well with me. Brotherhood is meant to be a remake of the original, this time sticking to the manga all the way through, but there were people who thought it would spoil the franchise. That myth should be dispelled, as there\'s only one word to describe this series - EPIC.', 10, '2020-07-05 21:48:55', NULL),
(3, 1, 1, 'I\'ll start this by saying that despite being an adamant fan of Fullmetal Alchemist for a couple of years now, I\'ve never managed to finish the first anime series. I\'ve remained caught up with the manga as much as possible, however, and I\'m very excited at where this series is going to go.', 10, '2020-06-12 03:28:00', NULL),
(4, 1, 1, 'The pacing is phenomenal; filler is minimal to nonexistent and every episode serves as another step forward. I know a few people who thought that the first few episodes were not explanatory enough, but one of the great things about it is its lack of unnecessarily long narratives; it gives you just enough background information without petulantly walking you through it.\r\n', 10, '2020-06-12 03:28:00', NULL),
(5, 1, 1, 'Adaptations have long been a thorn in the side of anime viewers, but not because they are inherently bad. No, the main problem has been that many studios have regarded the original work almost as an afterthought, and there are a number of shows that could have been wonderful if the writers had simply stuck to the original story.', 10, '2020-06-12 03:28:00', NULL),
(6, 1, 1, 'First of all, I have seen the original FMA and although it was very popular and original, the pacing and conclusion did not sit too well with me. Brotherhood is meant to be a remake of the original, this time sticking to the manga all the way through, but there were people who thought it would spoil the franchise. That myth should be dispelled, as there\'s only one word to describe this series - EPIC.', 10, '2020-06-12 03:28:00', NULL),
(7, 1, 1, 'I\'ll start this by saying that despite being an adamant fan of Fullmetal Alchemist for a couple of years now, I\'ve never managed to finish the first anime series. I\'ve remained caught up with the manga as much as possible, however, and I\'m very excited at where this series is going to go.', 10, '2020-06-12 03:28:00', NULL),
(13, 8, 2, 'jalan ceritanya sangat bagus sekali pokoknya rekomended deh', 10, '2020-06-13 18:15:46', NULL),
(15, 19, 3, 'recomend buat kamu semua', 10, '2020-06-15 03:51:48', NULL),
(28, 6, 1, 'mantap', 3, '2020-06-27 21:26:17', NULL),
(29, 7, 28, 'Don\'t be an ******', 10, '2020-06-28 18:57:45', NULL),
(31, 17, 30, 'Bukunya mantep bener', 10, '2020-07-06 20:45:39', NULL),
(32, 17, 30, 'Worth it ini', 10, '2020-07-06 20:47:07', NULL),
(33, 17, 30, 'Oke sip bisa ya', 10, '2020-07-06 20:52:36', NULL),
(34, 8, 30, 'Epic banget bukunya', 10, '2020-07-06 23:22:26', NULL),
(35, 8, 30, 'Membuat diriku terharu', 10, '2020-07-06 23:24:33', NULL),
(36, 10, 30, 'Terharu aku dibuatnya', 10, '2020-07-06 23:26:05', NULL),
(37, 7, 30, 'membuatku terharu', 10, '2020-07-07 02:38:52', NULL),
(38, 8, 30, 'Test', 10, '2020-07-07 17:55:05', NULL),
(39, 8, 30, 'Test', 10, '2020-07-07 21:20:42', NULL),
(40, 8, 30, 'mantap', 10, '2020-07-08 02:18:20', NULL),
(41, 17, 30, 'Dibacok sejuta kerinduan', 10, '2020-07-09 02:50:40', NULL),
(42, 17, 30, 'Review redux', 10, '2020-07-09 20:53:19', NULL),
(43, 17, 30, '', 10, '2020-07-09 20:55:13', NULL),
(44, 17, 30, 'Review redux 2', 10, '2020-07-09 20:55:13', NULL),
(45, 17, 30, '', 10, '2020-07-09 20:55:13', NULL),
(46, 17, 30, 'Nah bener', 10, '2020-07-09 20:58:27', NULL),
(47, 66, 48, 'Anjay mabar', 10, '2020-07-13 01:43:16', NULL),
(48, 66, 48, 'Hayuuu.... ', 10, '2020-07-13 01:43:39', NULL),
(49, 14, 49, 'Don\'t be an ******', 10, '2020-07-13 03:44:10', NULL),
(50, 7, 49, ' ', 10, '2020-07-13 03:53:56', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `book_status`
--

CREATE TABLE `book_status` (
  `id` int(11) NOT NULL,
  `name` varchar(20) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `update_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `book_status`
--

INSERT INTO `book_status` (`id`, `name`, `created_at`, `update_at`) VALUES
(1, 'Available', '2020-05-14 19:05:29', NULL),
(2, 'Pending', '2020-05-14 19:05:29', NULL),
(3, 'Not Available', '2020-05-14 19:05:29', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `roles`
--

CREATE TABLE `roles` (
  `id` int(11) NOT NULL,
  `name` varchar(20) NOT NULL,
  `role_key` varchar(50) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `update_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `roles`
--

INSERT INTO `roles` (`id`, `name`, `role_key`, `created_at`, `update_at`) VALUES
(1, 'member', 'aa08769cdcb26674c6706093503ff0a3', '2020-05-14 19:06:16', NULL),
(2, 'admin', '21232f297a57a5a743894a0e4a801fc3', '2020-05-14 19:06:16', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `role_id` int(11) NOT NULL DEFAULT 1,
  `activate` tinyint(1) NOT NULL DEFAULT 0,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `update_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `email`, `password`, `role_id`, `activate`, `created_at`, `update_at`) VALUES
(30, 'bilkisismail07@Gmail.com', '$2a$10$MHi2C3GtjsEAfy.7fnP63u/.1hR9eJ4MwYpoHy1JZzK7MaFT6Bfyy', 1, 1, '2020-07-04 22:29:02', NULL),
(49, 'sovianbasecamp@gmail.com', '$2a$10$ecQhD1EyqB9Qia6jbk/RaOBgIuK8/KAwSuiJm1fUOsMXXsWnNlB.6', 1, 1, '2020-07-13 03:40:49', NULL);

--
-- Triggers `users`
--
DELIMITER $$
CREATE TRIGGER `deleteProfile` AFTER DELETE ON `users` FOR EACH ROW DELETE FROM `user_details` WHERE `user_details`.`id` = old.id
$$
DELIMITER ;
DELIMITER $$
CREATE TRIGGER `deleteSosmed` AFTER DELETE ON `users` FOR EACH ROW DELETE FROM `user_sosmed` WHERE `user_sosmed`.`id` = old.id
$$
DELIMITER ;
DELIMITER $$
CREATE TRIGGER `newProfile` AFTER INSERT ON `users` FOR EACH ROW INSERT INTO `user_details` (
    `id`, 
    `fullname`, 
    `bio`, 
    `birthdate`, 
    `gender`, 
    `social_media_id`, 
    `user_id`, 
    `created_at`, 
    `update_at`
) 
VALUES (
    NULL, 
    '-', 
    '-', 
    '-', 
    'Other', 
    NEW.id, 
    NEW.id, 
    current_timestamp(), 
    NULL
)
$$
DELIMITER ;
DELIMITER $$
CREATE TRIGGER `newSosmed` AFTER INSERT ON `users` FOR EACH ROW INSERT INTO `user_sosmed` (
    `id`, 
    `facebook`, 
    `instagram`, 
    `twitter`, 
    `created_at`, 
    `update_at`
) VALUES (
     NEW.id, 
    '-', 
    '-', 
    '-', 
    current_timestamp(), 
    NULL
)
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `user_activates`
--

CREATE TABLE `user_activates` (
  `id` int(11) NOT NULL,
  `user_email` varchar(100) NOT NULL,
  `code` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user_activates`
--

INSERT INTO `user_activates` (`id`, `user_email`, `code`) VALUES
(49, 'ahsiap@gmail.com', '1839');

-- --------------------------------------------------------

--
-- Table structure for table `user_details`
--

CREATE TABLE `user_details` (
  `id` int(11) NOT NULL,
  `fullname` varchar(50) NOT NULL,
  `bio` text NOT NULL,
  `birthdate` varchar(10) NOT NULL,
  `gender` enum('Male','Female','Other','') NOT NULL,
  `social_media_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `update_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user_details`
--

INSERT INTO `user_details` (`id`, `fullname`, `bio`, `birthdate`, `gender`, `social_media_id`, `user_id`, `created_at`, `update_at`) VALUES
(30, 'Bilkis Ismail', 'Mahluk Nokturnal', '07-04-2002', 'Male', 30, 30, '2020-07-04 22:29:02', NULL),
(49, 'Anantashia', '-', '-', 'Other', 49, 49, '2020-07-13 03:40:49', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `user_sosmed`
--

CREATE TABLE `user_sosmed` (
  `id` int(11) NOT NULL,
  `facebook` varchar(100) DEFAULT NULL,
  `instagram` varchar(100) DEFAULT NULL,
  `twitter` varchar(100) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `update_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user_sosmed`
--

INSERT INTO `user_sosmed` (`id`, `facebook`, `instagram`, `twitter`, `created_at`, `update_at`) VALUES
(30, 'anantashia v6', 'anantashia v2', 'anantashia v2', '2020-07-04 22:29:02', NULL),
(49, 'isma', 'ismashimp', 'ismashimp', '2020-07-13 03:40:49', NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `books`
--
ALTER TABLE `books`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `book_authors`
--
ALTER TABLE `book_authors`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `book_favorites`
--
ALTER TABLE `book_favorites`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `book_genres`
--
ALTER TABLE `book_genres`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `book_reviews`
--
ALTER TABLE `book_reviews`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `book_status`
--
ALTER TABLE `book_status`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user_activates`
--
ALTER TABLE `user_activates`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user_details`
--
ALTER TABLE `user_details`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user_sosmed`
--
ALTER TABLE `user_sosmed`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `books`
--
ALTER TABLE `books`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=76;

--
-- AUTO_INCREMENT for table `book_authors`
--
ALTER TABLE `book_authors`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT for table `book_favorites`
--
ALTER TABLE `book_favorites`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=201;

--
-- AUTO_INCREMENT for table `book_genres`
--
ALTER TABLE `book_genres`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT for table `book_reviews`
--
ALTER TABLE `book_reviews`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=51;

--
-- AUTO_INCREMENT for table `book_status`
--
ALTER TABLE `book_status`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `roles`
--
ALTER TABLE `roles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=50;

--
-- AUTO_INCREMENT for table `user_activates`
--
ALTER TABLE `user_activates`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=52;

--
-- AUTO_INCREMENT for table `user_details`
--
ALTER TABLE `user_details`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=50;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

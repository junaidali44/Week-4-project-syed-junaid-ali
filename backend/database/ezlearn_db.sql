-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 19, 2026 at 05:56 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ezlearn_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `courses`
--

CREATE TABLE `courses` (
  `course_id` int(11) NOT NULL,
  `name` varchar(150) NOT NULL,
  `description` text NOT NULL,
  `icon` varchar(100) DEFAULT NULL,
  `color` varchar(20) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `courses`
--

INSERT INTO `courses` (`course_id`, `name`, `description`, `icon`, `color`, `created_at`) VALUES
(1, 'React', 'Build modern user interfaces with React.', 'fa-react', '#61DAFB', '2026-07-16 18:24:26'),
(2, 'Laravel', 'Modern PHP framework for web development.', 'fa-laravel', '#FF2D20', '2026-07-16 18:24:26'),
(3, 'Node.js', 'Server-side JavaScript runtime.', 'fa-node-js', '#68A063', '2026-07-16 18:24:26'),
(4, 'Vue.js', 'Progressive JavaScript Framework', 'fa-vuejs', '#42B883', '2026-07-18 14:19:50'),
(5, 'Angular.js', 'Frontend Typescript based Framework by google for building spa\'s', 'fa-Angular', '#42B883', '2026-07-18 14:19:51'),
(6, 'CSS', 'CSS is a stylesheet use to style web pages ', 'fa-css', '#42B883', '2026-07-18 15:06:46'),
(7, 'Python', 'Python is a popular programming language use in multiple domains like DataScience, AI/ML and Web Development', 'fa-python', '#42B883', '2026-07-18 15:08:47');

-- --------------------------------------------------------

--
-- Table structure for table `feedback`
--

CREATE TABLE `feedback` (
  `feedback_id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `message` text NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `feedback`
--

INSERT INTO `feedback` (`feedback_id`, `name`, `email`, `message`, `created_at`) VALUES
(1, 'Zubair', 'Zubair@gmail.com', 'EZLearn is a helpfull for learning programming and web development using simple and easy code examples help full for me ', '2026-07-19 12:02:23'),
(2, 'Abid', 'abid26@gmail.com', 'EZLearn is a helpfull for learning programming and web development using simple and easy code examples help full for me ', '2026-07-19 12:03:41'),
(3, 'Rahol', 'rahol@gmail.com', 'EZLearn is a helpfull for learning programming and web development using simple and easy code examples help full for me ', '2026-07-19 12:04:05'),
(4, 'Samiya', 'samiya@gmail.com', 'EZLearn is a helpfull for learning programming and web development using simple and easy code examples help full for me ', '2026-07-19 12:04:18'),
(5, 'danish', 'danish@gmail.com', 'EZLearn is a helpfull for learning programming and web development using simple and easy code examples help full for me ', '2026-07-19 12:04:30'),
(6, 'Sumeer', 'sumeer@gmail.com', 'Great for students learning web devlopment', '2026-07-19 15:21:37'),
(7, 'Sumeer', 'sumeer@gmail.com', 'Great for students learning web devlopment', '2026-07-19 15:22:14'),
(8, 'Sumeer', 'sumeer@gmail.com', 'Great for students learning web devlopment', '2026-07-19 15:23:57'),
(9, 'Amara', 'Amara@gmail.com', 'Hi ezlearn team the website need improvements and add some more topics to discovers altough its great and very helpfull', '2026-07-19 15:25:02');

-- --------------------------------------------------------

--
-- Table structure for table `topics`
--

CREATE TABLE `topics` (
  `topic_id` int(11) NOT NULL,
  `course_id` int(11) NOT NULL,
  `title` varchar(150) NOT NULL,
  `content` text NOT NULL,
  `code_example` text DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `topics`
--

INSERT INTO `topics` (`topic_id`, `course_id`, `title`, `content`, `code_example`, `created_at`) VALUES
(1, 1, 'Components', 'Components are reusable building blocks in React.', 'function App() {}', '2026-07-16 18:24:48'),
(2, 1, 'Hooks', 'Hooks let you use state and lifecycle features.', 'const [count, setCount] = useState(0);', '2026-07-16 18:24:48'),
(3, 2, 'Routing', 'Laravel routes define application endpoints.', 'Route::get(\"/\", function() {});', '2026-07-16 18:24:48'),
(4, 3, 'Express Basics', 'Express is a Node.js framework.', 'const express = require(\"express\");', '2026-07-16 18:24:48'),
(5, 1, 'React Components ', 'Components are reusable building blocks in React.', 'function App() {\n  return <h1>Hello World</h1>;\n}', '2026-07-18 20:24:14');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `courses`
--
ALTER TABLE `courses`
  ADD PRIMARY KEY (`course_id`);

--
-- Indexes for table `feedback`
--
ALTER TABLE `feedback`
  ADD PRIMARY KEY (`feedback_id`);

--
-- Indexes for table `topics`
--
ALTER TABLE `topics`
  ADD PRIMARY KEY (`topic_id`),
  ADD KEY `course_id` (`course_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `courses`
--
ALTER TABLE `courses`
  MODIFY `course_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `feedback`
--
ALTER TABLE `feedback`
  MODIFY `feedback_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `topics`
--
ALTER TABLE `topics`
  MODIFY `topic_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `topics`
--
ALTER TABLE `topics`
  ADD CONSTRAINT `topics_ibfk_1` FOREIGN KEY (`course_id`) REFERENCES `courses` (`course_id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

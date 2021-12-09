-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Erstellungszeit: 29. Nov 2021 um 15:25
-- Server-Version: 10.2.40-MariaDB
-- PHP-Version: 7.4.22

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Datenbank: `ModBusEnviroment`
--

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `ModBusEntity`
--

CREATE TABLE `mod_bus_entity` (
  `entity_id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `serial_nr_device` varchar(50) NOT NULL,
  `device_type` varchar(255) DEFAULT NULL COMMENT 'This is for Devices that send multiple values. For example a O2 Sensor that measures O2 and Temp. Add a character to identify them',
  `unit` varchar(255) NOT NULL,
  `tank` varchar(50) NOT NULL,
  `tank_system` varchar(50) NOT NULL,
  `starting_pos` int(8) NOT NULL,
  `length` int(4) NOT NULL,
  `data_type` varchar(15) NOT NULL,
  `mod_bus_port` int(5) NOT NULL,
  `last_changed` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `serial_port` varchar(50) NOT NULL DEFAULT '/dev/ttyUSB0',
  `alarm_upper_limit` float NOT NULL,
  `alarm_lower_limit` float NOT NULL,
  `alarm_active` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Daten für Tabelle `ModBusEntity`
--

INSERT INTO `mod_bus_entity` (`entity_id`, `name`, `serial_nr_device`, `device_type`, `unit`, `tank`, `tank_system`, `starting_pos`, `length`, `data_type`, `mod_bus_port`, `last_changed`, `serial_port`, `alarm_upper_limit`, `alarm_lower_limit`, `alarm_active`) VALUES
(55, 'A_O2 % Sat', '12770000001', 'O', '%', 'A', 'Aqualab', 0, 2, 'float', 10, '2020-12-23 14:02:02', '/dev/ttyUSB0', 0, 0, 0),
(56, 'A_O2 Temp', '12770000001', 'T', 'Celcius', 'A', 'Aqualab', 2, 2, 'float', 10, '2020-12-23 14:02:05', '/dev/ttyUSB0', 0, 0, 0),
(57, 'A_PH', '000000718988', NULL, 'pH', 'A', 'Aqualab', 4, 2, 'float', 10, '2020-12-23 13:20:14', '/dev/ttyUSB0', 0, 0, 0),
(58, 'B_O2 % Sat', '13450000014', 'O', '%', 'B', 'Aqualab', 6, 2, 'float', 10, '2020-12-23 14:02:11', '/dev/ttyUSB0', 0, 0, 0),
(59, 'B_O2 Temp', '13450000014', 'T', 'Celcius', 'B', 'Aqualab', 8, 2, 'float', 10, '2020-12-23 14:02:13', '/dev/ttyUSB0', 0, 0, 0),
(60, 'B_PH', '000442700009', NULL, 'pH', 'B', 'Aqualab', 10, 2, 'float', 10, '2020-12-23 13:20:14', '/dev/ttyUSB0', 0, 0, 0),
(61, 'C_O2 % Sat', '151610000020', 'O', '%', 'C', 'Aqualab', 12, 2, 'float', 10, '2020-12-23 14:02:15', '/dev/ttyUSB0', 0, 0, 0),
(62, 'C_O2 Temp', '151610000020', 'T', 'Celcius', 'C', 'Aqualab', 14, 2, 'float', 10, '2020-12-23 14:02:17', '/dev/ttyUSB0', 0, 0, 0),
(63, 'C_PH', '000442700007', NULL, 'pH', 'C', 'Aqualab', 16, 2, 'float', 10, '2020-12-23 13:20:14', '/dev/ttyUSB0', 0, 0, 0),
(64, 'D_O2 % Sat', '163339999992', 'O', '%', 'D', 'Aqualab', 18, 2, 'float', 10, '2020-12-23 14:02:20', '/dev/ttyUSB0', 0, 0, 0),
(65, 'D_O2 Temp', '163339999992', 'T', 'Celcius', 'D', 'Aqualab', 20, 2, 'float', 10, '2020-12-23 14:02:22', '/dev/ttyUSB0', 0, 0, 0),
(66, 'D_PH', '000000718977', NULL, 'pH', 'D', 'Aqualab', 22, 2, 'float', 10, '2020-12-23 13:20:14', '/dev/ttyUSB0', 0, 0, 0),
(67, 'O2 Aquarien', '183250000073', 'O', 'mg / l', 'System', 'Aquarien', 0, 2, 'float', 11, '2021-03-23 10:25:54', '/dev/ttyUSB0', 0, 0, 0),
(68, 'O2 Temp Aquarien', '183250000073', 'T', 'Celcius', 'System', 'Aquarien', 2, 2, 'float', 11, '2021-01-29 11:52:55', '/dev/ttyUSB0', 0, 0, 0),
(69, 'PH PP', '000000019173', NULL, 'pH', 'System', 'Aquarien', 4, 2, 'float', 11, '2021-02-18 14:08:32', '/dev/ttyUSB0', 0, 0, 0),
(70, 'EC PP', '000000072356', NULL, 'mS/cm', 'System', 'Aquarien', 6, 2, 'float', 11, '2021-02-18 14:08:29', '/dev/ttyUSB0', 0, 0, 0),
(71, 'FB1_Sat', '130670000034', 'O', '%', 'System', 'Showsystem', 0, 2, 'float', 12, '2021-02-02 15:09:46', '/dev/ttyUSB0', 0, 0, 0),
(72, 'FB1_Temp', '130670000034', 'T', 'Celcius', 'System', 'Showsystem', 2, 2, 'float', 12, '2021-02-02 15:09:51', '/dev/ttyUSB0', 0, 0, 0),
(73, 'System PH', '000000071879', NULL, 'pH', 'System', 'Showsystem', 4, 2, 'float', 12, '2021-02-02 15:09:49', '/dev/ttyUSB0', 0, 0, 0);

--
-- Indizes der exportierten Tabellen
--

--
-- Indizes für die Tabelle `ModBusEntity`
--
ALTER TABLE `mod_bus_entity`
  ADD PRIMARY KEY (`entity_id`);

--
-- AUTO_INCREMENT für exportierte Tabellen
--

--
-- AUTO_INCREMENT für Tabelle `ModBusEntity`
--
ALTER TABLE `mod_bus_entity`
  MODIFY `entity_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=74;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

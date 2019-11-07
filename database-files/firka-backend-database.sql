SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
-- Host: localhost    Database: firka
-- Server version	8.0.17
-- Table structure for table `players`

DROP TABLE IF EXISTS `players`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `players` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(45) NOT NULL,
  `password` varchar(45) NOT NULL,
  `display_name` varchar(45) NOT NULL,
  `victories` int(11) GENERATED ALWAYS AS (0) VIRTUAL,
  `avatar` longtext,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  UNIQUE KEY `username_UNIQUE` (`username`),
  UNIQUE KEY `display_name_UNIQUE` (`display_name`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `players`
--

LOCK TABLES `players` WRITE;
/*!40000 ALTER TABLE `players` DISABLE KEYS */;
INSERT INTO `players` (`id`, `username`, `password`, `display_name`, `avatar`) VALUES (1,'DrDani','password','Daniel','www.example.com'),(3,'Mark','qwerty','Mark',NULL),(4,'Pascal','jelszo','Mr Pasquale','www.placeholder.com'),(5,'agironay','123456','BeerFighter','www.placeholder2.hu');
/*!40000 ALTER TABLE `players` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `words`
--

DROP TABLE IF EXISTS `words`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `words` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `content` varchar(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  UNIQUE KEY `content_UNIQUE` (`content`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `words`
--

LOCK TABLES `words` WRITE;
/*!40000 ALTER TABLE `words` DISABLE KEYS */;
INSERT INTO `words` VALUES (1,'alma'),(4,'dinnye'),(6,'kiwi'),(5,'korte'),(11,'malna'),(2,'narancs'),(10,'oszibarack'),(9,'ribizli'),(7,'szilva'),(8,'szolo');
/*!40000 ALTER TABLE `words` ENABLE KEYS */;
UNLOCK TABLES;


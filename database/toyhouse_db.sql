CREATE DATABASE  IF NOT EXISTS `toyhouse_db` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `toyhouse_db`;
-- MariaDB dump 10.19  Distrib 10.4.22-MariaDB, for Win64 (AMD64)
--
-- Host: 127.0.0.1    Database: toyhouse_db
-- ------------------------------------------------------
-- Server version	10.4.22-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `categorias`
--

DROP TABLE IF EXISTS `categorias`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `categorias` (
  `id_categoria` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  PRIMARY KEY (`id_categoria`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categorias`
--

LOCK TABLES `categorias` WRITE;
/*!40000 ALTER TABLE `categorias` DISABLE KEYS */;
INSERT INTO `categorias` VALUES (1,'Disfraces'),(2,'Juegos de mesa'),(3,'Vehículos'),(4,'Peluches y muñecos'),(5,'Bebés'),(6,'Instrumentos musicales'),(7,'Juegos de agua y playa'),(8,'Puzzles'),(9,'Juegos de primera infancia'),(10,'Armas de juguete');
/*!40000 ALTER TABLE `categorias` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `edades`
--

DROP TABLE IF EXISTS `edades`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `edades` (
  `id_edad` int(11) NOT NULL AUTO_INCREMENT,
  `range` varchar(45) NOT NULL,
  PRIMARY KEY (`id_edad`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `edades`
--

LOCK TABLES `edades` WRITE;
/*!40000 ALTER TABLE `edades` DISABLE KEYS */;
INSERT INTO `edades` VALUES (1,'Menores de 3 años'),(2,'Mayores 3 años'),(3,'Mayores 5 años'),(4,'Mayores 8 años'),(5,'Mayores de 13 años');
/*!40000 ALTER TABLE `edades` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `productos`
--

DROP TABLE IF EXISTS `productos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `productos` (
  `id_producto` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(300) NOT NULL,
  `description` text NOT NULL,
  `detailedDescription` text NOT NULL,
  `price` decimal(10,0) NOT NULL,
  `image` varchar(255) NOT NULL,
  `id_categoria` int(11) NOT NULL,
  `id_talle` int(11) DEFAULT NULL,
  `id_edad` int(11) NOT NULL,
  PRIMARY KEY (`id_producto`),
  KEY `id_categoria_idx` (`id_categoria`),
  KEY `id_talle_idx` (`id_talle`),
  KEY `id_edad_idx` (`id_edad`),
  CONSTRAINT `id_categoria` FOREIGN KEY (`id_categoria`) REFERENCES `categorias` (`id_categoria`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `id_edad` FOREIGN KEY (`id_edad`) REFERENCES `edades` (`id_edad`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `id_talle` FOREIGN KEY (`id_talle`) REFERENCES `talles` (`id_talle`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productos`
--

LOCK TABLES `productos` WRITE;
/*!40000 ALTER TABLE `productos` DISABLE KEYS */;
INSERT INTO `productos` VALUES (1,'Buzz Lightyear Muñeco Articulado','Vendido por Disney Pixar','Muñeco articulado de Buzz LightYear, famoso personaje de las peliculas Toy Story, 30cm de altura y gran rango de movimientos de brazos y piernas. ¡Para hacer todas las poses que se te puedan ocurrir!',5000,'BuzzLightYear.jpg',4,NULL,2),(2,'T-Rex muñeco articulado','Vendido por Jurassic world','Un muñeco del famoso dinosaurio T-Rex, perfecto para observar a uno de los animales mas impresionantes de la historia',1200,'t-rex.jpg',4,NULL,3),(3,'Godzilla Muñeco articulado','Vendido por King of the monsters','El temible Godzilla llega a la venta para causar terror y destruccion en cualquier pelea a la que se presente',4500,'godzilla.jpg',4,NULL,3),(4,'Arma de juguete de Fortnite','Vendido por Nerf','Con esta replica del arma de uno de los mejores juegos de los ultimos tiempos podras recrear las mismas peleas epicas de Fortnite ¡Consiguela y hazte con la victoria!',2500,'nerf fort.jpg ',10,NULL,5),(5,'Spiderman muñeco de plastico','Vendido por PlayTienda','El asombroso Spider-Man se balancea entre los edificios con sus telas de araña hacia la batalla ¡Consiguelo para vivir sus batallas junto a el!',1100,'spiderman.jpg',4,NULL,3),(6,'Muñeco armable de Minion','Vendido por Lego','¡Tus famosos amigos redondos y amarillos ya estan aqui! Disfruta de armarlos desde cero pieza por pieza.',3750,'rompecabezas minion.jpg',8,NULL,4),(7,'Slinky','Vendido por Toyrose','El clásico resorte colorido ha llegado! Realiza todo tipo de trucos con este divertidisimo juguete',450,'resorte.jpg',8,NULL,2),(8,'Muñeco señor cara de papa','Vendido por PlaysCool','El enojón pero gracioso Señor Cara de Papa ha llegado. ',1800,'señor cara de papa.jpg',4,NULL,2),(9,'Monopatin','Vendido por Scooter','Desplazate por todos lados con este asombroso monopatin',7000,'product-1639247846653.jpg',3,NULL,3),(10,'Monopoly','Vendido por Hasbro','El clasico juego de mesa para jugar con amigos o familia. A demostrar quien es el mejor en el juego de la vida',6000,'product-1639247944819.jpg',2,NULL,4),(11,'Chevrolet Camaro 2017 Hotwheels','Vendido por Hotwheels','Modelo a escala del famoso Chevrolet Camaro en color rojo. ¡Perfecto para correr carreras con tus amigos!',1500,'product-1639363023203.jpg',3,NULL,2);
/*!40000 ALTER TABLE `productos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `talles`
--

DROP TABLE IF EXISTS `talles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `talles` (
  `id_talle` int(11) NOT NULL AUTO_INCREMENT,
  `talle` varchar(5) NOT NULL,
  PRIMARY KEY (`id_talle`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `talles`
--

LOCK TABLES `talles` WRITE;
/*!40000 ALTER TABLE `talles` DISABLE KEYS */;
INSERT INTO `talles` VALUES (1,'XS'),(2,'S'),(3,'M'),(4,'L');
/*!40000 ALTER TABLE `talles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `usuarios` (
  `id_usuario` int(11) NOT NULL AUTO_INCREMENT,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(500) NOT NULL,
  `image` varchar(100) NOT NULL,
  `is_admin` int(10) unsigned NOT NULL,
  PRIMARY KEY (`id_usuario`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (1,'Ciro','Rodriguez','cirorodriguezroig@gmail.com','$2a$10$xZLyVSIdm4KN2fpMIXCQ8OXBcU2NVi1S3ulfqOXVD.KGXZDr9vWey','user-1641344873943.jpg',1),(2,'Santino','Brigante','santinobrigante1@gmail.com','$2a$10$uLtCa9RZNWqkCGQy.GU6EOGp1rUBLYqrKHznim1Bo5zYBDOmxro7W','user-1644539163338.jpg',1),(3,'Paulina','Roig','paulinaroig@hotmail.com','$2a$10$7SBRhD5d67XCAZxKe6GmzeQ.uJ1UPh0voi1y8LR.V1py21Uk2SkVa','user-1644603801470.png',0),(4,'Ricardo','Fort','elriki@gmail.com','$2a$10$liy/36sMSv9bV2EuixM8POCm9D95Q5nSSZCqWBwjodwK9m3GHUJZi','user-1644713958560.jpg',0),(5,'Test','Admin','test@gmail.com','$2a$10$IOt2HPExkVLN0YxZO.CUXOhug6zQYiVkvJZ1vMzF1JNvMb6fCAFJu','user-1644968130039.png',1);
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-02-15 20:37:28

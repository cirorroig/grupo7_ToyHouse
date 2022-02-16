-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema ToyHouse_db
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema ToyHouse_db
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `ToyHouse_db` DEFAULT CHARACTER SET utf8 ;
-- -----------------------------------------------------
-- Schema toyhouse_db
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema toyhouse_db
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `toyhouse_db` DEFAULT CHARACTER SET utf8 ;
USE `ToyHouse_db` ;

-- -----------------------------------------------------
-- Table `ToyHouse_db`.`categorias`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ToyHouse_db`.`categorias` (
  `id_categoria` INT NOT NULL,
  `name` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`id_categoria`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `ToyHouse_db`.`talles`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ToyHouse_db`.`talles` (
  `id_talle` INT NOT NULL AUTO_INCREMENT,
  `talle` VARCHAR(5) NOT NULL,
  PRIMARY KEY (`id_talle`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `ToyHouse_db`.`edades`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ToyHouse_db`.`edades` (
  `id_edad` INT NOT NULL AUTO_INCREMENT,
  `range` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id_edad`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `ToyHouse_db`.`productos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ToyHouse_db`.`productos` (
  `id_producto` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `description` TEXT NOT NULL,
  `detailedDescription` TEXT NOT NULL,
  `price` DECIMAL NOT NULL,
  `image` VARCHAR(100) NOT NULL,
  `id_categoria` INT NOT NULL,
  `id_talle` INT NULL,
  `id_edad` INT NOT NULL,
  PRIMARY KEY (`id_producto`),
  INDEX `id_categoria_idx` (`id_categoria` ASC),
  INDEX `id_talle_idx` (`id_talle` ASC),
  INDEX `id_edad_idx` (`id_edad` ASC),
  CONSTRAINT `id_categoria`
    FOREIGN KEY (`id_categoria`)
    REFERENCES `ToyHouse_db`.`categorias` (`id_categoria`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `id_talle`
    FOREIGN KEY (`id_talle`)
    REFERENCES `ToyHouse_db`.`talles` (`id_talle`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `id_edad`
    FOREIGN KEY (`id_edad`)
    REFERENCES `ToyHouse_db`.`edades` (`id_edad`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `ToyHouse_db`.`usuarios`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ToyHouse_db`.`usuarios` (
  `id_usuario` INT NOT NULL AUTO_INCREMENT,
  `first_name` VARCHAR(45) NOT NULL,
  `last_name` VARCHAR(45) NOT NULL,
  `email` VARCHAR(100) NOT NULL,
  `password` VARCHAR(500) NOT NULL,
  `image` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`id_usuario`))
ENGINE = InnoDB;

USE `toyhouse_db` ;

-- -----------------------------------------------------
-- Table `toyhouse_db`.`categorias`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `toyhouse_db`.`categorias` (
  `id_categoria` INT(11) NOT NULL,
  `name` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`id_categoria`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `toyhouse_db`.`edades`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `toyhouse_db`.`edades` (
  `id_edad` INT(11) NOT NULL AUTO_INCREMENT,
  `range` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id_edad`))
ENGINE = InnoDB
AUTO_INCREMENT = 6
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `toyhouse_db`.`talles`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `toyhouse_db`.`talles` (
  `id_talle` INT(11) NOT NULL AUTO_INCREMENT,
  `talle` VARCHAR(5) NOT NULL,
  PRIMARY KEY (`id_talle`))
ENGINE = InnoDB
AUTO_INCREMENT = 5
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `toyhouse_db`.`productos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `toyhouse_db`.`productos` (
  `id_producto` INT(11) NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(300) NOT NULL,
  `description` TEXT NOT NULL,
  `detailedDescription` TEXT NOT NULL,
  `price` DECIMAL(10,0) NOT NULL,
  `image` VARCHAR(255) NOT NULL,
  `id_categoria` INT(11) NOT NULL,
  `id_talle` INT(11) NULL DEFAULT NULL,
  `id_edad` INT(11) NOT NULL,
  PRIMARY KEY (`id_producto`),
  INDEX `id_categoria_idx` (`id_categoria` ASC),
  INDEX `id_talle_idx` (`id_talle` ASC),
  INDEX `id_edad_idx` (`id_edad` ASC),
  CONSTRAINT `id_categoria`
    FOREIGN KEY (`id_categoria`)
    REFERENCES `toyhouse_db`.`categorias` (`id_categoria`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `id_edad`
    FOREIGN KEY (`id_edad`)
    REFERENCES `toyhouse_db`.`edades` (`id_edad`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `id_talle`
    FOREIGN KEY (`id_talle`)
    REFERENCES `toyhouse_db`.`talles` (`id_talle`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
AUTO_INCREMENT = 17
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `toyhouse_db`.`usuarios`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `toyhouse_db`.`usuarios` (
  `id_usuario` INT(11) NOT NULL AUTO_INCREMENT,
  `first_name` VARCHAR(255) NOT NULL,
  `last_name` VARCHAR(255) NOT NULL,
  `email` VARCHAR(100) NOT NULL,
  `password` VARCHAR(500) NOT NULL,
  `image` VARCHAR(100) NOT NULL,
  `is_admin` INT(10) UNSIGNED NOT NULL,
  PRIMARY KEY (`id_usuario`))
ENGINE = InnoDB
AUTO_INCREMENT = 6
DEFAULT CHARACTER SET = utf8;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;


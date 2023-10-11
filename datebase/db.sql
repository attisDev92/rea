--crear base de datos

CREATE DATABASE db_rea;

--usar base de datos

USE db_rea;

--tabla de usuario para login

CREATE TABLE
    `users` (
        `idusers` INT NOT NULL AUTO_INCREMENT UNIQUE,
        `mail` VARCHAR(100) NOT NULL UNIQUE,
        `password` VARCHAR(100) NOT NULL,
        `created_at` TIMESTAMP NOT NULL DEFAULT current_timestamp
    );

--registro de datos del user como empresa

CREATE TABLE
    `users_juridicos` (
        `idusers_jur` INT NOT NULL AUTO_INCREMENT UNIQUE,
        `idusers` INT,
        `ruc` INT(13) UNIQUE,
        `nombre_comercial` VARCHAR(100),
        `nombre_representante` VARCHAR(100),
        `apellido_representante` VARCHAR(100),
        `direccion` VARCHAR(100),
        `provincia` VARCHAR(60),
        `ciudad` VARCHAR(60),
        `celular` INT(10),
        `telefono` INT(10),
        `url_ruc` VARCHAR(255) UNIQUE,
        `url_ubicacion` VARCHAR(255) UNIQUE,
        `created_at` TIMESTAMP DEFAULT current_timestamp,
        PRIMARY KEY (`idusers_jur`),
        FOREIGN KEY (`idusers`) REFERENCES `users`(`idusers`)
    );

--registro de datos del user como persona

CREATE TABLE
    `users_naturales` (
        `idusers_nat` INT NOT NULL AUTO_INCREMENT UNIQUE,
        `idusers` INT,
        `cedula` INT(10) UNIQUE,
        `nombre` VARCHAR(100),
        `apellido` VARCHAR(100),
        `direccion` VARCHAR(100),
        `provincia` VARCHAR(60),
        `ciudad` VARCHAR(60),
        `celular` INT(10),
        `telefono` INT(10),
        `perfil_profesional` TEXT,
        `url_ubicacion` VARCHAR(255) UNIQUE,
        `created_at` TIMESTAMP DEFAULT current_timestamp,
        PRIMARY KEY (`idusers_nat`),
        FOREIGN KEY (`idusers`) REFERENCES `users`(`idusers`)
    );

--registro de usuario de peliculas

CREATE TABLE
    `usuari_bc` (
        `idusuario_bc` INT NOT NULL AUTO_INCREMENT UNIQUE,
        `idusers` INT,
        `proyecto` TEXT,
        `url_nombramiento_autorizacion` VARCHAR(255) UNIQUE,
        `url_fotogestor_logo` VARCHAR(255) UNIQUE,
        `created_at` TIMESTAMP DEFAULT current_timestamp,
        PRIMARY KEY (`idusuario_bc`),
        FOREIGN KEY (`idusers`) REFERENCES `users`(`idusers`)
    );

--registro de espacio de exibicion

CREATE TABLE
    `espacio_rea` (
        `idespacio_rea` INT NOT NULL AUTO_INCREMENT UNIQUE,
        `idusers` INT,
        `nombre_espacio` VARCHAR(100),
        `responsable` VARCHAR(100),
        `cargo` VARCHAR(100),
        `celular_responsable` INT(10),
        `mail_responsable` VARCHAR(100),
        `tipo_espacio` TINYINT(1),
        `direccion_espacio` VARCHAR(100),
        `provincia` VARCHAR(60),
        `ciudad` VARCHAR(60),
        `descripcion` TEXT,
        `aforo` INT,
        `equipo_proyeccion` TEXT,
        `tipo de reproductor` TEXT JSON [],
        `equipo_audio` TINYINT(1),
        `mas_servicios` TEXT,
        `publico_privado` TINYINT(1),
        `url_fotos_espacios` TEXT JSON [],
        `url_nombramiento_autorizacion` VARCHAR(255) UNIQUE,
        `url_log` VARCHAR(255) UNIQUE,
        `created_at` TIMESTAMP DEFAULT current_timestamp,
        PRIMARY KEY (`idespacio_rea`),
        FOREIGN KEY (`idusers`) REFERENCES `users`(`idusers`)
    );

-- Validacion de formularios por ADMIN

CREATE TABLE
    `users_juridicos_valid` (
        `idjurdico_valid` INT NOT NULL AUTO_INCREMENT UNIQUE,
        `idusers` INT,
        `comment` TEXT,
        `ruc` BOOLEAN NOT NULL,
        `nombre_comercial` BOOLEAN NOT NULL,
        `nombre_representante` BOOLEAN NOT NULL,
        `apellido_representante` BOOLEAN NOT NULL,
        `direccion` BOOLEAN NOT NULL,
        `provincia` BOOLEAN NOT NULL,
        `ciudad` BOOLEAN NOT NULL,
        `celular` BOOLEAN NOT NULL,
        `telefono` BOOLEAN NOT NULL,
        `url_ruc` BOOLEAN NOT NULL,
        `url_ubicacion` BOOLEAN NOT NULL,
        PRIMARY KEY (`idjurdico_valid`),
        FOREIGN KEY (`idusers`) REFERENCES `users`(`idusers`)
    );

--registro de datos del user como persona

CREATE TABLE
    `users_naturales` (
        `idnatural_valid` INT NOT NULL AUTO_INCREMENT UNIQUE,
        `idusers` INT,
        `comment` TEXT,
        `cedula` BOOLEAN NOT NULL,
        `nombre` BOOLEAN NOT NULL,
        `apellido` BOOLEAN NOT NULL,
        `direccion` BOOLEAN NOT NULL,
        `provincia` BOOLEAN NOT NULL,
        `ciudad` BOOLEAN NOT NULL,
        `celular` BOOLEAN NOT NULL,
        `telefono` BOOLEAN NOT NULL,
        `perfil_profesional` BOOLEAN NOT NULL,
        `url_ubicacion` BOOLEAN NOT NULL,
        PRIMARY KEY (`idnatural_valid`),
        FOREIGN KEY (`idusers`) REFERENCES `users`(`idusers`)
    );

--registro de usuario de peliculas

CREATE TABLE
    `usuari_bc` (
        `idbc_valid` INT NOT NULL AUTO_INCREMENT UNIQUE,
        `idusers` INT,
        `comment` TEXT,
        `proyecto` BOOLEAN NOT NULL,
        `url_nombramiento_autorizacion` BOOLEAN NOT NULL,
        `url_fotogestor_logo` BOOLEAN NOT NULL,
        PRIMARY KEY (`idbc_valid`),
        FOREIGN KEY (`idusers`) REFERENCES `users`(`idusers`)
    );

--registro de espacio de exibicion

CREATE TABLE
    `espacio_rea` (
        `idespacio_valid` INT NOT NULL AUTO_INCREMENT UNIQUE,
        `idusers` INT,
        `comment` TEXT,
        `nombre_espacio` BOOLEAN NOT NULL,
        `responsable` BOOLEAN NOT NULL,
        `cargo` BOOLEAN NOT NULL,
        `celular_responsable` BOOLEAN NOT NULL,
        `mail_responsable` BOOLEAN NOT NULL,
        `tipo_espacio` BOOLEAN NOT NULL,
        `direccion_espacio` BOOLEAN NOT NULL,
        `provincia` BOOLEAN NOT NULL,
        `ciudad` BOOLEAN NOT NULL,
        `descripcion` BOOLEAN NOT NULL,
        `aforo` BOOLEAN NOT NULL,
        `equipo_proyeccion` BOOLEAN NOT NULL,
        `tipo de reproductor` BOOLEAN NOT NULL,
        `equipo_audio` BOOLEAN NOT NULL,
        `mas_servicios` BOOLEAN NOT NULL,
        `publico_privado` BOOLEAN NOT NULL,
        `url_fotos_espacios` BOOLEAN NOT NULL,
        `url_nombramiento_autorizacion` BOOLEAN NOT NULL,
        `url_log` BOOLEAN NOT NULL,
        PRIMARY KEY (`idespacio_valid`),
        FOREIGN KEY (`idusers`) REFERENCES `users`(`idusers`)
    );

-- login administrador

CREATE TABLE
    `admins` (
        `idadmins` INT NOT NULL AUTO_INCREMENT UNIQUE,
        `mail` VARCHAR(100) NOT NULL UNIQUE,
        `password` VARCHAR(100) NOT NULL,
    );
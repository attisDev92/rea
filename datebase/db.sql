--crear base de datos
CREATE DATABASE db_rea;

--usar base de datos
USE db_rea;

--tabla de usuario para login
CREATE TABLE `users` (
    `idusers` INT NOT NULL AUTO_INCREMENT UNIQUE,
    `mail` VARCHAR(100) NOT NULL UNIQUE,
    `password` VARCHAR(100) NOT NULL,
    `juridico_o_natural` TINYINT (1) NOT NULL,
    `created_at` TIMESTAMP NOT NULL DEFAULT current_timestamp
);

--registro de datos del user como empresa
CREATE TABLE `users_juridicos` (
    `idusers_jur` INT NOT NULL AUTO_INCREMENT UNIQUE,
    `idusers` INT,
    `ruc` INT(13) NOT NULL UNIQUE,
    `nombre_comercial` VARCHAR(100) NOT NULL,
    `nombre_representante` VARCHAR(100) NOT NULL,
    `apellido_representante` VARCHAR(100) NOT NULL,
    `direccion` VARCHAR(100) NOT NULL,
    `celular` INT(10) NOT NULL,
    `telefono` INT(10) NOT NULL,
    `url_ruc` VARCHAR(255) NOT NULL UNIQUE,
    `created_at` TIMESTAMP NOT NULL DEFAULT current_timestamp,
    PRIMARY KEY (`idusers_jur`),
    CONSTRAINT `fk_user_id` FOREIGN KEY (`idusers`) REFERENCES `users`(`idusers`)
);

--registro de datos del user como persona
CREATE TABLE `users_naturales` (
    `idusers_nat` INT NOT NULL AUTO_INCREMENT UNIQUE,
    `idusers` INT,
    `cedula` INT(10) NOT NULL UNIQUE,
    `nombre` VARCHAR(100) NOT NULL,
    `apellido` VARCHAR(100) NOT NULL,
    `direccion` VARCHAR(100) NOT NULL,
    `celular` INT(10) NOT NULL,
    `telefono` INT(10) NOT NULL,
    `perfil_profesional` TEXT NOT NULL,
    `url_ubicacion` VARCHAR(255) NOT NULL UNIQUE,
    `created_at` TIMESTAMP NOT NULL DEFAULT current_timestamp,
    PRIMARY KEY (`idusers_nat`),
    FOREIGN KEY (`idusers`) REFERENCES `users`(`idusers`)
);

--registro de usuario de peliculas
CREATE TABLE `usuari_bc` (
    `idusuario_bc` INT NOT NULL AUTO_INCREMENT UNIQUE,
    `idusers` INT,
    `proyecto` TEXT NOT NULL,
    `url_nombramiento_autorizacion` VARCHAR(255) UNIQUE,
    `url_fotogestor_logo` VARCHAR(255) UNIQUE,
    `created_at` TIMESTAMP NOT NULL DEFAULT current_timestamp,
    PRIMARY KEY (`idusuario_bc`),
    FOREIGN KEY (`idusers`) REFERENCES `users`(`idusers`)
);

--registro de espacio de exibicion
CREATE TABLE `espacio_rea` (
    `idespacio_rea` INT NOT NULL AUTO_INCREMENT UNIQUE,
    `idusers` INT,
    `nombre_espacio` VARCHAR(100) NOT NULL,
    `responsable` VARCHAR(100) NOT NULL,
    `cargo` VARCHAR(100) NOT NULL,
    `mail_espacio`  VARCHAR(100) NOT NULL,
    `tipo_espacio` TINYINT(1) NOT NULL,
    `direccion_espacio` VARCHAR(100) NOT NULL,
    `provincia` TINYINT(2) NOT NULL,
    `ciudad` VARCHAR(60) NOT NULL,
    `descripcion` TEXT NOT NULL,
    `aforo` INT NOT NULL,
    `equipo_proyeccion` TEXT NOT NULL,
    `tipo de reproductor` TEXT NOT NULL,
    `equipo_audio` TINYINT(1) NOT NULL,
    `mas_servicios` TEXT NOT NULL,
    `publico_privado` TINYINT(1) NOT NULL,
    `url_fotos_espacios` TEXT NOT NULL,
    `url_ubicacion` VARCHAR(255) NOT NULL UNIQUE,
    `url_nombramiento_autorizacion` VARCHAR(255) NOT NULL UNIQUE,
    `url_log` VARCHAR(255) NOT NULL UNIQUE,
    `created_at` TIMESTAMP NOT NULL DEFAULT current_timestamp,
    PRIMARY KEY (`idespacio_rea`),
    FOREIGN KEY (`idusers`) REFERENCES `users`(`idusers`)
);


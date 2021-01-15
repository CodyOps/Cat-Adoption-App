DROP DATABASE IF EXISTS `catDB`;
CREATE DATABASE `catDB`;
USE `catDB`;


/* Create a table for all your dogs and cats*/
CREATE TABLE `cats` (
	`id` Int( 11 ) AUTO_INCREMENT NOT NULL,
	`name` VARCHAR( 255 ) NOT NULL,
	`temperament` VARCHAR( 255 ) NOT NULL,
	`life_span` INT(11) NOT NULL,
    `size` VARCHAR( 255 ) NOT NULL,
    `wikipedia_link` VARCHAR( 255 ) NOT NULL,
	/* Set ID as primary key */
	PRIMARY KEY ( `id` )
);

INSERT INTO cats (name, temperament, life_span, size, wikipedia_link) VALUES ('Bengal Cat', 'smart energetic playful', 15, 'average', 'https://en.wikipedia.org/wiki/Bengal_(cat)');
INSERT INTO cats (name, temperament, life_span, size, wikipedia_link) VALUES ('British Shorthair', 20, 'easy-going sweet-natured devoted', 'large', 'https://en.wikipedia.org/wiki/British_Shorthair');
INSERT INTO cats (name, temperament, life_span, size, wikipedia_link) VALUES ('Ragdoll', 15, 'docile intelligent affectionate', 'large', 'https://en.wikipedia.org/wiki/Ragdoll');

-- CREATE DATABASE IF NOT EXISTS plantesdb;

USE app_db,

CREATE TABLE plantex (
    id INT(11) NOT NULL AUTO_INCREMENT,
    name VARCHAR(100) DEFAULT NULL,
    botanical_name VARCHAR(150) DEFAULT NULL,
    PRIMARY KEY (id)
);

DESCRIBE plante;

INSERT INTO plante VALUES
    (1, 'nom1ss', 'snom_commun2', 'nsom_scien1', 'famhille1', 'éhté', 'rhoses', 'typo');
  

SELECT * FROM plante;

SELECT * FROM plante WHERE id = 1;

-- delete

SELECT * FROM plante;

DELETE FROM plante WHERE id = 2;

-- #####################"""

CREATE DATABASE IF NOT EXISTS plantesdb CHARACTER SET utf8mb4;
USE plantesdb;

CREATE TABLE plante (
  id_plante INT(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
  nom_commun VARCHAR(10) NOT NULL,
  nom_scientifique VARCHAR(30) NOT NULL,
  famille VARCHAR(50) NOT NULL,
  floraison VARCHAR(50) DEFAULT NULL,
  fleurs VARCHAR(10) NOT NULL,
  type_plante VARCHAR(20) NOT NULL,
  description_plante VARCHAR(50) NOT NULL,
  FOREIGN KEY (code_cueillette)
  )
  
CREATE TABLE cueillette (
  code_cueillette INT(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
  trouver_plante VARCHAR(50) NOT NULL,
  cueillette VARCHAR(50) NOT NULL,
  reconnaitre VARCHAR(50) DEFAULT NULL,
  gout VARCHAR(50) NOT NULL,
  odeur VARCHAR(10) NOT NULL,
  confusion VARCHAR(100) NOT NULL,
  FOREIGN KEY (code_plante)
);

-- Donnees

INSERT INTO plante VALUES (1,'nom1', 'nom_commun2','nom_scien1','famille1','été','roses','typo','describe');

INSERT INTO cueillette VALUES (1','champ','nosé','azul','déxt','ex','fieux');






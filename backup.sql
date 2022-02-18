-- Adminer 4.7.6 MySQL dump

SET NAMES utf8;
SET time_zone = '+00:00';
SET foreign_key_checks = 0;
SET sql_mode = 'NO_AUTO_VALUE_ON_ZERO';

SET NAMES utf8mb4;
INSERT INTO `skill` (`id`, `name`, `icon`) VALUES
(1,	'Git',	'fab fa-git-alt'),
(2,	'Méthode Agile',	'fas fa-spinner'),
(3,	'API / API REST',	'fas fa-bolt'),
(4,	'Architecture MVC',	'fas fa-sitemap'),
(5,	'Photoshop',	'fas fa-paint-brush'),
(6,	'Illustrator',	'fas fa-palette');

INSERT INTO `technology` (`id`, `name`, `icon`) VALUES
(1,	'Symfony',	'fab fa-symfony'),
(2,	'Lumen',	'fab fa-laravel'),
(3,	'Bootstrap',	'fab fa-bootstrap'),
(4,	'Sass',	'fab fa-sass');

INSERT INTO `collaboration` (`id`, `name`, `icon`) VALUES
(1,	'Trello',	'fab fa-trello'),
(2,	'Github',	'fab fa-github'),
(3,	'Slack',	'fab fa-slack'),
(4,	'Discord',	'fab fa-discord'),
(5,	'LiveShare',	'fas fa-share-square'),
(6,	'Google Drive',	'fab fa-google-drive');

INSERT INTO `langage` (`id`, `name`, `icon`) VALUES
(1,	'HTML5',	'fab fa-html5'),
(2,	'CSS3',	'fab fa-css3-alt'),
(3,	'Javascript',	'fab fa-js-square'),
(4,	'PHP',	'fab fa-php'),
(5,	'MySQL',	'fas fa-database');

INSERT INTO `project` (`id`, `name`, `picture`, `complement`, `url`, `github`, `githubopt`) VALUES
(1,	'Place2Go',	'place2go.png',	NULL,	'http://place2go.herokuapp.com/',	'https://github.com/Oriane-Toque/place2go',	NULL),
(2,	'O\'Ciné',	'ocine.png',	NULL,	'http://ocine.herokuapp.com/',	'https://github.com/Oriane-Toque/ocine',	NULL),
(3,	'TodoApp',	'todolist.png',	NULL,	'http://todolive-app.herokuapp.com/',	'https://github.com/Oriane-Toque/todolist-frontend',	'https://github.com/Oriane-Toque/todolist-backend'),
(4,	'Game of Thrones',	'got.png',	NULL,	'http://gthrones.herokuapp.com/',	'https://github.com/Oriane-Toque/got',	NULL),
(5,	'Pokedex',	'pokedex.png',	NULL,	'http://lumenpokedex.herokuapp.com/',	'https://github.com/Oriane-Toque/pokedexApi',	NULL),
(6,	'O\'Shop',	'oshop.png',	NULL,	'http://bootshop.herokuapp.com/',	'https://github.com/Oriane-Toque/oshop-frontoffice',	'https://github.com/Oriane-Toque/oshop-backoffice'),
(7,	'BattleShip',	'battle.png',	NULL,	'http://battlecase.herokuapp.com/',	'https://github.com/Oriane-Toque/bataille-navale-js',	NULL),
(8,	'Poudlock',	'poudlock.png',	NULL,	'http://poudlock.herokuapp.com/',	'https://github.com/Oriane-Toque/poudlock-picker-js',	NULL),
(9,	'Videogame',	'videogame.png',	NULL,	'http://videogamepdo.herokuapp.com/',	'https://github.com/Oriane-Toque/videogame',	NULL),
(10,	'Dev\'Blog',	'devblog.png',	NULL,	'http://devblogpoo.herokuapp.com/',	'https://github.com/Oriane-Toque/devblog',	NULL),
(11,	'Pink\'Resa',	'pinkresa.png',	NULL,	'http://pinkresa.herokuapp.com/',	'https://github.com/Oriane-Toque/Pink-Resa',	NULL),
(12,	'Dérive Blog',	'bootsblog.png',	NULL,	'http://bootsblog.herokuapp.com/',	'https://github.com/Oriane-Toque/oblog-bootstrap',	NULL),
(13,	'O\'News',	'onews.png',	NULL,	'http://onewsblog.herokuapp.com/',	'https://github.com/Oriane-Toque/onews-integration',	NULL),
(14,	'Herocorp',	'herocorp.png',	NULL,	'http://herocorps.herokuapp.com/',	'https://github.com/Oriane-Toque/herocorp',	NULL);

INSERT INTO `project_langage` (`project_id`, `langage_id`) VALUES
(1,	3),
(1,	4),
(1,	5),
(2,	4),
(2,	5),
(3,	3),
(3,	4),
(3,	5),
(4,	4),
(5,	1),
(5,	2),
(5,	4),
(6,	4),
(6,	5),
(7,	3),
(8,	3),
(9,	4),
(9,	5),
(10,	1),
(10,	4),
(11,	1),
(11,	2),
(12,	1),
(12,	2),
(13,	1),
(13,	2),
(14,	1),
(14,	2);

INSERT INTO `project_technology` (`project_id`, `technology_id`) VALUES
(1,	1),
(1,	3),
(2,	1),
(2,	3),
(3,	2),
(4,	2),
(5,	2),
(6,	3),
(10,	3),
(12,	3);

-- 2022-02-18 14:45:39
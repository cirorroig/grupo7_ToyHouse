/*
-- Query: SELECT * FROM toyhouse_db.productos
LIMIT 0, 1000

-- Date: 2022-01-29 18:40
*/
INSERT INTO toyhouse_db.productos (`id_producto`,`name`,`description`,`detailedDescription`,`price`,`image`,`id_categoria`,`id_talle`,`id_edad`) VALUES (1,'Buzz Lightyear Muñeco Articulado','Vendido por Disney Pixar','Muñeco articulado de Buzz LightYear, famoso personaje de las peliculas Toy Story, 30cm de altura y gran rango de movimientos de brazos y piernas. ¡Para hacer todas las poses que se te puedan ocurrir!',5000,'BuzzLightYear.jpg',4,NULL,2);
INSERT INTO toyhouse_db.productos (`id_producto`,`name`,`description`,`detailedDescription`,`price`,`image`,`id_categoria`,`id_talle`,`id_edad`) VALUES (2,'T-Rex muñeco articulado','Vendido por Jurassic world','Un muñeco del famoso dinosaurio T-Rex, perfecto para observar a uno de los animales mas impresionantes de la historia',1200,'t-rex.jpg',4,NULL,3);
INSERT INTO toyhouse_db.productos (`id_producto`,`name`,`description`,`detailedDescription`,`price`,`image`,`id_categoria`,`id_talle`,`id_edad`) VALUES (3,'Godzilla Muñeco articulado','Vendido por King of the monsters','El temible Godzilla llega a la venta para causar terror y destruccion en cualquier pelea a la que se presente',4500,'godzilla.jpg',4,NULL,3);
INSERT INTO toyhouse_db.productos (`id_producto`,`name`,`description`,`detailedDescription`,`price`,`image`,`id_categoria`,`id_talle`,`id_edad`) VALUES (4,'Arma de juguete de Fortnite','Vendido por Nerf','Con esta replica del arma de uno de los mejores juegos de los ultimos tiempos podras recrear las mismas peleas epicas de Fortnite ¡Consiguela y hazte con la victoria!',2500,'nerf fort.jpg ',10,NULL,5);
INSERT INTO toyhouse_db.productos (`id_producto`,`name`,`description`,`detailedDescription`,`price`,`image`,`id_categoria`,`id_talle`,`id_edad`) VALUES (5,'Spiderman muñeco de plastico','Vendido por PlayTienda','El asombroso Spider-Man se balancea entre los edificios con sus telas de araña hacia la batalla ¡Consiguelo para vivir sus batallas junto a el!',1100,'spiderman.jpg',4,NULL,3);
INSERT INTO toyhouse_db.productos (`id_producto`,`name`,`description`,`detailedDescription`,`price`,`image`,`id_categoria`,`id_talle`,`id_edad`) VALUES (6,'Muñeco armable de Minion','Vendido por Lego','¡Tus famosos amigos redondos y amarillos ya estan aqui! Disfruta de armarlos desde cero pieza por pieza.',3750,'rompecabezas minion.jpg',8,NULL,4);
INSERT INTO toyhouse_db.productos (`id_producto`,`name`,`description`,`detailedDescription`,`price`,`image`,`id_categoria`,`id_talle`,`id_edad`) VALUES (7,'Slinky','Vendido por Toyrose','El clásico resorte colorido ha llegado! Realiza todo tipo de trucos con este divertidisimo juguete',450,'resorte.jpg',8,NULL,2);
INSERT INTO toyhouse_db.productos (`id_producto`,`name`,`description`,`detailedDescription`,`price`,`image`,`id_categoria`,`id_talle`,`id_edad`) VALUES (8,'Muñeco señor cara de papa','Vendido por PlaysCool','El enojón pero gracioso Señor Cara de Papa ha llegado. ',1800,'señor cara de papa.jpg',4,NULL,2);
INSERT INTO toyhouse_db.productos (`id_producto`,`name`,`description`,`detailedDescription`,`price`,`image`,`id_categoria`,`id_talle`,`id_edad`) VALUES (9,'Monopatin','Vendido por Scooter','Desplazate por todos lados con este asombroso monopatin',7000,'product-1639247846653.jpg',3,NULL,3);
INSERT INTO toyhouse_db.productos (`id_producto`,`name`,`description`,`detailedDescription`,`price`,`image`,`id_categoria`,`id_talle`,`id_edad`) VALUES (10,'Monopoly','Vendido por Hasbro','El clasico juego de mesa para jugar con amigos o familia. A demostrar quien es el mejor en el juego de la vida',6000,'product-1639247944819.jpg',2,NULL,4);
INSERT INTO toyhouse_db.productos (`id_producto`,`name`,`description`,`detailedDescription`,`price`,`image`,`id_categoria`,`id_talle`,`id_edad`) VALUES (11,'Chevrolet Camaro 2017 Hotwheels','Vendido por Hotwheels','Modelo a escala del famoso Chevrolet Camaro en color rojo. ¡Perfecto para correr carreras con tus amigos!',1500,'product-',3,NULL,2);

/*
-- Query: SELECT * FROM toyhouse_db.categorias
LIMIT 0, 1000

-- Date: 2022-01-29 19:16
*/
INSERT INTO toyhouse_db.categorias (`id_categoria`,`name`) VALUES (1,'Disfraces');
INSERT INTO toyhouse_db.categorias (`id_categoria`,`name`) VALUES (2,'Juegos de mesa');
INSERT INTO toyhouse_db.categorias (`id_categoria`,`name`) VALUES (3,'Vehículos');
INSERT INTO toyhouse_db.categorias (`id_categoria`,`name`) VALUES (4,'Peluches y muñecos');
INSERT INTO toyhouse_db.categorias (`id_categoria`,`name`) VALUES (5,'Bebés');
INSERT INTO toyhouse_db.categorias (`id_categoria`,`name`) VALUES (6,'Instrumentos musicales');
INSERT INTO toyhouse_db.categorias (`id_categoria`,`name`) VALUES (7,'Juegos de agua y playa');
INSERT INTO toyhouse_db.categorias (`id_categoria`,`name`) VALUES (8,'Puzzles');
INSERT INTO toyhouse_db.categorias (`id_categoria`,`name`) VALUES (9,'Juegos de primera infancia');
INSERT INTO toyhouse_db.categorias (`id_categoria`,`name`) VALUES (10,'Armas de juguete');

/*
-- Query: SELECT * FROM toyhouse_db.edades
LIMIT 0, 1000

-- Date: 2022-01-29 19:17
*/
INSERT INTO toyhouse_db.edades (`id_edad`,`range`) VALUES (1,'Menores de 3 años');
INSERT INTO toyhouse_db.edades (`id_edad`,`range`) VALUES (2,'Mayores 3 años');
INSERT INTO toyhouse_db.edades (`id_edad`,`range`) VALUES (3,'Mayores 5 años');
INSERT INTO toyhouse_db.edades (`id_edad`,`range`) VALUES (4,'Mayores 8 años');
INSERT INTO toyhouse_db.edades (`id_edad`,`range`) VALUES (5,'Mayores de 13 años');

/*
-- Query: SELECT * FROM toyhouse_db.talles
LIMIT 0, 1000

-- Date: 2022-01-29 19:18
*/
INSERT INTO toyhouse_db.talles (`id_talle`,`talle`) VALUES (1,'XS');
INSERT INTO toyhouse_db.talles (`id_talle`,`talle`) VALUES (2,'S');
INSERT INTO toyhouse_db.talles (`id_talle`,`talle`) VALUES (3,'M');
INSERT INTO toyhouse_db.talles (`id_talle`,`talle`) VALUES (4,'L');

/*
-- Query: SELECT * FROM toyhouse_db.usuarios
LIMIT 0, 1000

-- Date: 2022-02-15 23:00
*/
INSERT INTO toyhouse_db.usuarios (`id_usuario`,`first_name`,`last_name`,`email`,`password`,`image`,`is_admin`) VALUES (1,'Ciro','Rodriguez','cirorodriguezroig@gmail.com','$2a$10$xZLyVSIdm4KN2fpMIXCQ8OXBcU2NVi1S3ulfqOXVD.KGXZDr9vWey','user-1641344873943.jpg',1);
INSERT INTO toyhouse_db.usuarios (`id_usuario`,`first_name`,`last_name`,`email`,`password`,`image`,`is_admin`) VALUES (2,'Santino','Brigante','santinobrigante1@gmail.com','$2a$10$uLtCa9RZNWqkCGQy.GU6EOGp1rUBLYqrKHznim1Bo5zYBDOmxro7W','user-1644539163338.jpg',1);
INSERT INTO toyhouse_db.usuarios (`id_usuario`,`first_name`,`last_name`,`email`,`password`,`image`,`is_admin`) VALUES (4,'Ricardo','Fort','elriki@gmail.com','$2a$10$liy/36sMSv9bV2EuixM8POCm9D95Q5nSSZCqWBwjodwK9m3GHUJZi','user-1644713958560.jpg',0);
INSERT INTO toyhouse_db.usuarios (`id_usuario`,`first_name`,`last_name`,`email`,`password`,`image`,`is_admin`) VALUES (5,'Test','Admin','test@gmail.com','$2a$10$IOt2HPExkVLN0YxZO.CUXOhug6zQYiVkvJZ1vMzF1JNvMb6fCAFJu','user-1644968130039.png',1);


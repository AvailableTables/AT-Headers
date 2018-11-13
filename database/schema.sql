
DROP DATABASE IF EXISTS headers;
CREATE DATABASE headers;

\c headers;

-- ---------------------------------
-- Restaurant Table---------------------

DROP TABLE IF EXISTS restaurants;
CREATE TABLE restaurants (
    id INT,
    name VARCHAR(200)
);

-- ---------------------------------
-- Images Table---------------------

DROP TABLE IF EXISTS images;
CREATE TABLE images (
    id INT,
    image VARCHAR(200),
    restaurant_id INT
);



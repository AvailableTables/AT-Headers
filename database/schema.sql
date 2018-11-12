
DROP DATABASE IF EXISTS headers;
CREATE DATABASE headers;

\c headers;

-- ---------------------------------
-- Restaurant Table---------------------

CREATE TABLE restaurant (
    id INT,
    name VARCHAR(30)
);

-- ---------------------------------
-- Images Table---------------------

CREATE TABLE images (
    id INT,
    image VARCHAR(200),
    restaurant_id INT
);



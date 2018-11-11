DROP DATABASE IF EXISTS test;
CREATE DATABASE test;

USE test;

CREATE TABLE images(
  id INT(11) NOT NULL auto_increment,
  image VARCHAR(255) NOT NULL,
  restaurant_id INT(11),
  PRIMARY KEY (id)
);

CREATE TABLE restaurants (
    id INT(11) NOT NULL auto_increment,
    name VARCHAR(30) NULL,
    PRIMARY KEY (id)
);


-- load restaurants
-- load data local infile "./data.txt" into table restaurants
-- fields terminated by '\n'
-- (name)
-- set id = null;

-- load images
-- load data local infile "./data.txt" into table images
-- fields terminated by '|'
-- (image, restaurant_id)
-- set id = NULL;
DROP DATABASE IF EXISTS bamazonDB;

CREATE DATABASE bamazonDB;


CREATE TABLE products (
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(55),
  department_name VARCHAR(60),
  price DECIMAL(10,2) NOT NULL,
  stock_quantity INTEGER(10) NOT NULL,
     
  PRIMARY KEY (item_id)
);

USE bamazonDB;

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (10, "candy", "grocery", 0.5, 20),
(20, "bread", "grocery", 1, 30),
(30, "pillowcase", "bedding", 25, 15),
(40, "plate", "dishes", 9, 50),
(50, "spoon", "dishes", 1, 40),
(60, "chicken", "meat", 10, 30),
(70, "cake", "baking", 25, 5),
(80, "shampoo", "cosmetics", 10, 14),
(90, "pasta", "grocery", 3, 12),
(100, "yoga mat", "sports", 25, 8);

SELECT * FROM products

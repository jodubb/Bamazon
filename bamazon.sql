DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (

item_id INTEGER NOT NULL AUTO_INCREMENT,

product_name VARCHAR(100) NOT NULL,

department_name VARCHAR(100) NOT NULL,

price DECIMAL(7,2) NULL,

stock_quantity INTEGER NULL,

PRIMARY KEY (item_id)
);

SELECT * FROM products;

INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("mac book", "electronics", "899.99", 700);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("stroller", "baby", "299.99", 1000);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("plant food", "garden and outdoor", "11.98", 300);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("dog collar", "pet supplies", "4.99", 80);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("luggage set", "luggage and travel gear", "139.99", 25);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("sneakers", "women's shoes", "69.99", 1200);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("watches", "men's watches", "50.25", 1900);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("lamps", "home", "49.99", 25);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("bed sheets", "home", "100.00", 800);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("frames", "decor", "29.99", 1800);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("sunglasses", "accessories", "9.99", 400);

SELECT * FROM products;


-- Create DataBase

CREATE DATABASE WareHouse;

-- Selecting created WareHouse Database for more operation

USE WareHouse;

-- Create Table Cities
CREATE TABLE CITIES (
  Cities_Id BIGINT PRIMARY KEY AUTO_INCREMENT,
  City VARCHAR(20) NOT NULL,
  State VARCHAR(20) NOT NULL
);

-- Create WAREHOUSE
CREATE TABLE WAREHOUSE (
  WareHouse_Id BIGINT PRIMARY KEY AUTO_INCREMENT,
  WNAME VARCHAR(30) NOT NULL,
  Cities_Id BIGINT NOT NULL,
  EXTRA_CONTEXT JSON DEFAULT NULL,
  FOREIGN KEY (Cities_Id) REFERENCES CITIES(Cities_Id)
);

-- Create STORES
CREATE TABLE STORES (
  Store_Id BIGINT PRIMARY KEY AUTO_INCREMENT,
  STORE_NAME CHAR(20),
  WareHouse_Id BIGINT NOT NULL,
  Cities_Id BIGINT NOT NULL,
  FOREIGN KEY (WareHouse_Id) REFERENCES WAREHOUSE(WareHouse_Id),
  FOREIGN KEY (Cities_Id) REFERENCES CITIES(Cities_Id)
);

-- Create table CUSTOMER
CREATE TABLE CUSTOMER (
  Customer_Id BIGINT PRIMARY KEY AUTO_INCREMENT,
  CNAME CHAR(50) NOT NULL,
  ADDR varchar(50) DEFAULT NULL,
  Cities_Id BIGINT NOT NULL,
  FOREIGN KEY (Cities_Id) REFERENCES CITIES(Cities_Id)
);

-- Create table ORDERS
CREATE TABLE ORDERS (
  Orders_Id BIGINT PRIMARY KEY AUTO_INCREMENT,
  ODATE TIMESTAMP,
  Customer_Id BIGINT NOT NULL,
  FOREIGN KEY (Customer_Id) REFERENCES CUSTOMER(Customer_Id)
);

-- Create table ITEMS
CREATE TABLE ITEMS (
  Items_Id BIGINT PRIMARY KEY AUTO_INCREMENT,
  Item_DESCRIPTION TEXT DEFAULT NULL,
  WEIGHT DECIMAL(5,2) NOT NULL,
  COST DECIMAL(5,2) NOT NULL
);

-- Create table CART
CREATE TABLE CART (
  Cart_Id BIGINT PRIMARY KEY AUTO_INCREMENT,
  Orders_Id BIGINT NOT NULL,
  Items_Id BIGINT NOT NULL,
  Ordered_quantity DECIMAL(4,2) NOT NULL,
  FOREIGN KEY (Orders_Id) REFERENCES ORDERS(Orders_Id),
  FOREIGN KEY (Items_Id) REFERENCES ITEMS(Items_Id)
);

-- Create table STOCK
CREATE TABLE STOCK (
  Stock_Id BIGINT PRIMARY KEY AUTO_INCREMENT,
  Store_Id BIGINT NOT NULL,
  Items_Id BIGINT NOT NULL,
  Quantity DECIMAL(5,2) NOT NULL,
  FOREIGN KEY (Store_Id) REFERENCES STORES(Store_Id),
  FOREIGN KEY (Items_Id) REFERENCES ITEMS(Items_Id)
);

-- Adding Values to CITIES Table
INSERT INTO CITIES( City, State) VALUES ( "Pune", "Maharashtra");
INSERT INTO CITIES( City, State) VALUES ( "Mumbai", "Maharashtra");
INSERT INTO CITIES( City, State) VALUES ( "Kottayam", "Kerala");

-- Adding values to WareHouse

INSERT INTO WAREHOUSE(WNAME, Cities_Id) VALUES ("Warehouse_Pune",1);
INSERT INTO WAREHOUSE(WNAME, Cities_Id) VALUES ("Warehouse_Mumbai",2);
INSERT INTO WAREHOUSE(WNAME, Cities_Id) VALUES ("Warehouse_Kottayam",3);

-- Adding Values to Stores
INSERT INTO STORES(STORE_NAME, WareHouse_Id, Cities_Id) VALUES ("Pune Super Market", 1, 1);
INSERT INTO STORES(STORE_NAME, WareHouse_Id, Cities_Id) VALUES ("Pune mini Market", 1, 1);
INSERT INTO STORES(STORE_NAME, WareHouse_Id, Cities_Id) VALUES ("Mumbai Super Market", 2, 2);
INSERT INTO STORES(STORE_NAME, WareHouse_Id, Cities_Id) VALUES ("Kottayam Market", 3, 3);
INSERT INTO STORES(STORE_NAME, WareHouse_Id, Cities_Id) VALUES ("Sulabha Market", 3, 3);
INSERT INTO STORES(STORE_NAME, WareHouse_Id, Cities_Id) VALUES ("Jio Smart Point", 3, 3);
INSERT INTO STORES(STORE_NAME, WareHouse_Id, Cities_Id) VALUES ("Relaince Market", 3, 3);

-- Adding Values to CUSTOMER

INSERT INTO CUSTOMER(CNAME, ADDR, Cities_Id) VALUES ("Mr. Patil", "Pune", 1);
INSERT INTO CUSTOMER(CNAME, ADDR, Cities_Id) VALUES ("Tony Stark", "Stark Industries", 3);
INSERT INTO CUSTOMER(CNAME, ADDR, Cities_Id) VALUES ("Bruce Wayne", "Wayne Enterpries", 2);
INSERT INTO CUSTOMER(CNAME, ADDR, Cities_Id) VALUES ("Peter parker", "Mumbai Street", 2);

-- Adding Values to Itmes
INSERT INTO ITEMS(Item_DESCRIPTION, WEIGHT, COST ) VALUES("Wheat Flour", 1.00 , 40.00);
INSERT INTO ITEMS(Item_DESCRIPTION, WEIGHT, COST ) VALUES("Onions", 1.00 , 25.00);
INSERT INTO ITEMS(Item_DESCRIPTION, WEIGHT, COST ) VALUES("Watermelon", 1.00 , 16.00);
INSERT INTO ITEMS(Item_DESCRIPTION, WEIGHT, COST ) VALUES("Bananas ", 1.00 , 50.00);
INSERT INTO ITEMS(Item_DESCRIPTION, WEIGHT, COST ) VALUES("Gooseberry", 1.00 , 65.00);
INSERT INTO ITEMS(Item_DESCRIPTION, WEIGHT, COST ) VALUES("Sugar", 1.00 , 60.00);
INSERT INTO ITEMS(Item_DESCRIPTION, WEIGHT, COST ) VALUES("Chicken Masala", 0.25 , 30.00);
INSERT INTO ITEMS(Item_DESCRIPTION, WEIGHT, COST ) VALUES("Garam Masala", 0.10 , 25.00);

-- Adding values to Stock

INSERT INTO STOCK(Store_Id, Items_Id, Quantity ) VALUES( 1, 1 , 50.00);
INSERT INTO STOCK(Store_Id, Items_Id, Quantity ) VALUES( 1, 2 , 30.00);
INSERT INTO STOCK(Store_Id, Items_Id, Quantity ) VALUES( 1, 3 , 20.00);
INSERT INTO STOCK(Store_Id, Items_Id, Quantity ) VALUES( 1, 4 , 10.00);
INSERT INTO STOCK(Store_Id, Items_Id, Quantity ) VALUES( 1, 5 , 10.00);
INSERT INTO STOCK(Store_Id, Items_Id, Quantity ) VALUES( 1, 6 , 50.00);

INSERT INTO STOCK(Store_Id, Items_Id, Quantity ) VALUES( 2, 1 , 50.00);
INSERT INTO STOCK(Store_Id, Items_Id, Quantity ) VALUES( 2, 2 , 30.00);
INSERT INTO STOCK(Store_Id, Items_Id, Quantity ) VALUES( 2, 3 , 20.00);
INSERT INTO STOCK(Store_Id, Items_Id, Quantity ) VALUES( 2, 4 , 10.00);
INSERT INTO STOCK(Store_Id, Items_Id, Quantity ) VALUES( 2, 5 , 10.00);
INSERT INTO STOCK(Store_Id, Items_Id, Quantity ) VALUES( 2, 6 , 50.00);

INSERT INTO STOCK(Store_Id, Items_Id, Quantity ) VALUES( 3, 1 , 50.00);
INSERT INTO STOCK(Store_Id, Items_Id, Quantity ) VALUES( 3, 2 , 30.00);
INSERT INTO STOCK(Store_Id, Items_Id, Quantity ) VALUES( 3, 3 , 20.00);
INSERT INTO STOCK(Store_Id, Items_Id, Quantity ) VALUES( 3, 4 , 10.00);
INSERT INTO STOCK(Store_Id, Items_Id, Quantity ) VALUES( 3, 5 , 10.00);
INSERT INTO STOCK(Store_Id, Items_Id, Quantity ) VALUES( 3, 6 , 50.00);

INSERT INTO STOCK(Store_Id, Items_Id, Quantity ) VALUES( 4, 1 , 50.00);
INSERT INTO STOCK(Store_Id, Items_Id, Quantity ) VALUES( 4, 2 , 30.00);
INSERT INTO STOCK(Store_Id, Items_Id, Quantity ) VALUES( 4, 3 , 20.00);
INSERT INTO STOCK(Store_Id, Items_Id, Quantity ) VALUES( 4, 4 , 10.00);
INSERT INTO STOCK(Store_Id, Items_Id, Quantity ) VALUES( 4, 5 , 10.00);
INSERT INTO STOCK(Store_Id, Items_Id, Quantity ) VALUES( 4, 6 , 50.00);

INSERT INTO STOCK(Store_Id, Items_Id, Quantity ) VALUES( 5, 1 , 45.00);
INSERT INTO STOCK(Store_Id, Items_Id, Quantity ) VALUES( 5, 2 , 34.00);
INSERT INTO STOCK(Store_Id, Items_Id, Quantity ) VALUES( 5, 3 , 32.00);
INSERT INTO STOCK(Store_Id, Items_Id, Quantity ) VALUES( 5, 4 , 14.00);
INSERT INTO STOCK(Store_Id, Items_Id, Quantity ) VALUES( 5, 5 , 26.00);
INSERT INTO STOCK(Store_Id, Items_Id, Quantity ) VALUES( 5, 6 , 43.00);

INSERT INTO STOCK(Store_Id, Items_Id, Quantity ) VALUES( 6, 1 , 50.00);
INSERT INTO STOCK(Store_Id, Items_Id, Quantity ) VALUES( 6, 2 , 30.00);
INSERT INTO STOCK(Store_Id, Items_Id, Quantity ) VALUES( 6, 3 , 20.00);
INSERT INTO STOCK(Store_Id, Items_Id, Quantity ) VALUES( 6, 4 , 10.00);
INSERT INTO STOCK(Store_Id, Items_Id, Quantity ) VALUES( 6, 5 , 10.00);
INSERT INTO STOCK(Store_Id, Items_Id, Quantity ) VALUES( 6, 6 , 50.00);

INSERT INTO STOCK(Store_Id, Items_Id, Quantity ) VALUES( 7, 1 , 45.00);
INSERT INTO STOCK(Store_Id, Items_Id, Quantity ) VALUES( 7, 2 , 35.00);
INSERT INTO STOCK(Store_Id, Items_Id, Quantity ) VALUES( 7, 3 , 15.00);
INSERT INTO STOCK(Store_Id, Items_Id, Quantity ) VALUES( 7, 4 , 5.00);
INSERT INTO STOCK(Store_Id, Items_Id, Quantity ) VALUES( 7, 5 , 12.00);
INSERT INTO STOCK(Store_Id, Items_Id, Quantity ) VALUES( 7, 6 , 60.00);

-- Adding Values to Orders

INSERT INTO ORDERS(ODATE, Customer_Id) VALUES('2022-12-03 13:11:23', 1);
INSERT INTO ORDERS(ODATE, Customer_Id) VALUES('2022-12-02 18:12:25', 2);
INSERT INTO ORDERS(ODATE, Customer_Id) VALUES('2022-12-04 13:13:23', 3);
INSERT INTO ORDERS(ODATE, Customer_Id) VALUES('2022-12-01 15:14:23', 4);

-- Adding Value to Cart
  
INSERT INTO CART(Orders_Id, Items_Id, Ordered_quantity ) VALUES( 1, 1 , 1.50);
INSERT INTO CART(Orders_Id, Items_Id, Ordered_quantity ) VALUES( 1, 3 , 1.00);
INSERT INTO CART(Orders_Id, Items_Id, Ordered_quantity ) VALUES( 1, 6 , 0.50);

INSERT INTO CART(Orders_Id, Items_Id, Ordered_quantity ) VALUES( 2, 1 , 1.50);
INSERT INTO CART(Orders_Id, Items_Id, Ordered_quantity ) VALUES( 2, 4 , 1.50);

INSERT INTO CART(Orders_Id, Items_Id, Ordered_quantity ) VALUES( 3, 2 , 0.50);
INSERT INTO CART(Orders_Id, Items_Id, Ordered_quantity ) VALUES( 3, 6 , 0.25);
INSERT INTO CART(Orders_Id, Items_Id, Ordered_quantity ) VALUES( 3, 3 , 1.00);
INSERT INTO CART(Orders_Id, Items_Id, Ordered_quantity ) VALUES( 3, 1 , 2.00);

INSERT INTO CART(Orders_Id, Items_Id, Ordered_quantity ) VALUES( 4, 1 , 1.50);
INSERT INTO CART(Orders_Id, Items_Id, Ordered_quantity ) VALUES( 4, 4 , 2.00);
INSERT INTO CART(Orders_Id, Items_Id, Ordered_quantity ) VALUES( 4, 5 , 1.00);
INSERT INTO CART(Orders_Id, Items_Id, Ordered_quantity ) VALUES( 4, 3 , 0.50);

-- DROP TABLE STOCK;
-- DROP TABLE CART;
-- DROP TABLE ITEMS;
-- DROP TABLE ORDERS;
-- DROP TABLE CUSTOMER;
-- DROP TABLE STORES;
-- DROP TABLE WAREHOUSE;
-- DROP TABLE CITIES;

-- DROP database warehouse; 



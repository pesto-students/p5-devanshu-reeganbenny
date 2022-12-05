-- 1. Find the item that has minimum weight

SELECT MIN(WEIGHT) AS Minumum_Item_Weight FROM warehouse.items;

-- 2. Find the different warehouses in “Pune”.

SELECT * FROM warehouse.warehouse 
where Cities_Id = (SELECT Cities_Id FROM warehouse.cities WHERE City = "Pune"); 

-- 3. Find the details of items ordered by a customer “Mr. Patil”.

SELECT * FROM warehouse.items WHERE Items_Id IN (
	SELECT Items_Id FROM warehouse.cart WHERE Orders_Id IN (
    SELECT Orders_Id FROM warehouse.orders WHERE Customer_Id = (
    SELECT Customer_Id FROM warehouse.customer WHERE CNAME = "Mr. Patil")));
    
-- 4. Find a Warehouse which has maximum stores.

SELECT WNAME FROM warehouse.warehouse WHERE WareHouse_Id IN (
	SELECT WareHouse_Id FROM (
		SELECT WareHouse_Id, COUNT(WareHouse_Id) AS Id_Occurrence FROM warehouse.stores GROUP BY WareHouse_Id) as M 
		WHERE Id_Occurrence = (SELECT MAX(Id_Occurrence) AS Maximum FROM (
			SELECT WareHouse_Id, COUNT(WareHouse_Id) AS Id_Occurrence 
            FROM warehouse.stores GROUP BY WareHouse_Id) as O )); 

-- 5. Find an item which is ordered for a minimum number of times.

SELECT * FROM warehouse.items WHERE Items_Id IN (
	SELECT am.Items_Id FROM (
-- Checking if any item is not ordered it not the amount will be 0.
SELECT it.Items_Id, CASE WHEN ct.occ IS NULL THEN 0 ELSE ct.occ END AS Amount FROM warehouse.items AS it LEFT JOIN (
	SELECT Items_Id, COUNT(1) AS occ FROM warehouse.cart GROUP BY Items_Id) AS ct ON it.Items_Id = ct.Items_Id
		ORDER BY it.Items_Id) AS am WHERE am.Amount = (
        SELECT MIN(amt.Amount) FROM (
			SELECT it.Items_Id, CASE WHEN ct.occ IS NULL THEN 0 ELSE ct.occ END AS Amount FROM warehouse.items AS it LEFT JOIN (
				SELECT Items_Id, COUNT(1) AS occ FROM warehouse.cart GROUP BY Items_Id) AS ct ON it.Items_Id = ct.Items_Id
				ORDER BY it.Items_Id) AS amt));

-- 6. Find the detailed orders given by each customer.

SELECT cu.CNAME, cu.ADDR, od_ct_it.ODATE, od_ct_it.Item_DESCRIPTION, 
		od_ct_it.COST, od_ct_it.Ordered_quantity, od_ct_it.Total_Amount FROM warehouse.customer AS cu LEFT JOIN (
			SELECT od.ODATE, od.Customer_Id, ct_it.Ordered_quantity, ct_it.Item_DESCRIPTION, ct_it.COST, ct_it.Total_Amount
			FROM warehouse.orders as od LEFT JOIN (
				SELECT ct.Items_Id, ct.Ordered_quantity, ct.Orders_Id, ct.Ordered_quantity*it.COST AS Total_Amount, it.Item_DESCRIPTION, it.COST
				FROM warehouse.cart AS ct LEFT JOIN warehouse.items AS it ON ct.Items_Id = it.Items_Id
			) AS ct_it ON od.Orders_Id = ct_it.Orders_Id
        ) AS od_ct_it ON cu.Customer_Id = od_ct_it.Customer_Id ORDER BY cu.CNAME;





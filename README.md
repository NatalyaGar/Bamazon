# Bamazon

Amazon-like storefront using MySQL and Node.js.The app will take in orders from customers and deplete stock from the store's inventory. To run this app you need to install mysql and inquirer npm packages.

BamazonCustomer:

* displays a table with the inventory
* takes a customer's order
* computes the cost
* depletes the stock from the store's inventory

# Screenshot 1

Created "bamazondb" database in MYSQL

![MYSQL database](../images/screenshot1.png)
Format: ![MySQL](url)

![MYSQL](../images/path/to/screenshot1.png?raw=true)

<div align="center">
    <img src="../images/screenshot1.png" width="400px"</img> 
</div>

![Screenshot](screenshot1.png)

#Screenshot 2 - Command Line Interface:

* Display all of the items available for sale.
* The app prompt users with two messages:
  What is the ID of the product would you like to buy?
  How many units of the product would you like to buy? 
* Once the customer has placed the order application check if your store has enough of the product to meet   the customer's request.
* If store does have enough of the product,it will updating the SQL database to reflect the remaining        quantity.
* Once the update goes through, show the customer the total cost of their purchase.


#Screenshot 2 - Demonstate failure to fill an order due to insufficient quantity in inventory:

* Show current inventory after purchases,
* Customer prompted to order an item,
* Response to customer's request for quantity of items not in stock,
* Customer prompted to modify order.




  



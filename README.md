# Bamazon

Amazon-like storefront using MySQL and Node.js.The app will take in orders from customers and deplete stock from the store's inventory. To run this app you need to install mysql and inquirer npm packages.

BamazonCustomer:

* displays a table with the inventory
* takes a customer's order
* computes the cost
* depletes the stock from the store's inventory

## Screenshot 1

Created "bamazondb" database in MYSQL

<img width="982" alt="screenshot1" src="https://user-images.githubusercontent.com/25251287/39383697-7b6fd1b0-4a27-11e8-9304-cc6f9c7e559a.png">


## Screenshot 2 - Command Line Interface:

* Display all of the items available for sale.
* The app prompt users with two messages:
  What is the ID of the product would you like to buy?
  How many units of the product would you like to buy? 
* Once the customer has placed the order application check if your store has enough of the product to meet   the customer's request.
* If store does have enough of the product,it will updating the SQL database to reflect the remaining        quantity.
* Once the update goes through, show the customer the total cost of their purchase.

<img width="851" alt="screenshot2" src="https://user-images.githubusercontent.com/25251287/39383805-e3652e3c-4a27-11e8-9d55-5f52433c5ddf.png">


## Screenshot 3 - Demonstate failure to fill an order due to insufficient quantity in inventory:

* Show current inventory after purchases,
* Customer prompted to order an item,
* Response to customer's request for quantity of items not in stock,
* Customer prompted to modify order.

<img width="940" alt="screenshot3" src="https://user-images.githubusercontent.com/25251287/39383833-f9317144-4a27-11e8-997d-2e4116ddbe8c.png">





  



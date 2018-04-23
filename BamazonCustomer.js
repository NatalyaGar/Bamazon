
var inquirer = require('inquirer');
var mysql = require('mysql');

// create the connection information for the sql database
var connection = mysql.createConnection({
	host: 'localhost',
	port: 3306,

	// Your username
	user: 'root',

	// Your password
	password: 'root',
	database: 'bamazonDB'
});

// connect to the mysql server and sql database
connection.connect(function(err) {
	if (err) throw err;
	console.log("connection successfull");
	
  });

// make sure that only positive integers used for the inputs

	function validation (value) {
	var integer = Number.isInteger(parseFloat(value));
	var sign = Math.sign(value);

	if (integer && (sign === 1)) {
		return true;
	} else {
		return 'Please enter a whole non-zero number.';
	}
}

// Ask the user for the item/quantity they would like to purchase
	function  UserQuestions()  {
	inquirer.prompt([
		{
			type: 'input',
			name: 'item_id',
			message: 'What is the ID of the product you would like to buy?',
			validate: validation,
			filter: Number
		},
		{
			type: 'input',
			name: 'quantity',
			message: 'How many units of the product would you like to buy?"',
			validate: validation,
			filter: Number
		}
	]).then(function(input) {
		console.log('You selected: \n    item_id = '  + input.item_id + '\n    quantity = ' + input.quantity);
		var item = input.item_id;
		var quantity = input.quantity;

		// Make sure that the given item ID exists in the desired quantity
		var queryStr = 'SELECT * FROM products WHERE ?';

		connection.query(queryStr, {item_id: item}, function(err, data) {
			if (err) throw err;
			// console.log(data);

			if (data.length === 0) {
				console.log('Invalid Item ID. Please select a valid Item ID.');
				Products();

			} else {
				var productData = data[0];

				console.log('productData = ' + JSON.stringify(productData));
				console.log('productData.stock_quantity = ' + productData.stock_quantity);

				// If the quantity requested by the user is in stock
				if (quantity <= productData.stock_quantity) {
					console.log("Your order was created successfully!");

					// updating query 
					var updateQueryStr = 'UPDATE products SET stock_quantity = ' + (productData.stock_quantity - quantity) + ' WHERE item_id = ' + item;
					// console.log('updateQueryStr = ' + updateQueryStr);

					// Update the products
					connection.query(updateQueryStr, function(err, data) {
						if (err) throw err;

						console.log('Total cost of your purchase: is $' + productData.price * quantity);
						console.log("\n---------------------------------------------------------------------\n");

						// End the database connection
						connection.end();
					})
				} else {
					console.log('Insufficient quantity!');
					console.log('Please modify your order.');
					console.log("\n---------------------------------------------------------------------\n");
					Products();
				}
			}
		})
	})
}

// runBamazon will execute the main application logic
function runBamazon() {
	// Display products
	Products();
}

// Run the application 
runBamazon();


// Current Products from the database will output it to the console
function Products() {
	
	// Construct the db query string
	queryStr = 'SELECT * FROM products';

	// Make the db query
	connection.query(queryStr, function(err, data) {
		if (err) throw err;

		console.log('Products: ');
		console.log('....................\n');

		var strOut = '';
		for (var i = 0; i < data.length; i++) {
			strOut = '';
			strOut += 'Item ID: ' + data[i].item_id + '  //  ';
			strOut += 'Product Name: ' + data[i].product_name + '  //  ';
			strOut += 'Stock Quantity: ' + data[i].stock_quantity + '  //  ';
			strOut += 'Price: $' + data[i].price + '\n';

			console.log(strOut);
		}

	  	console.log("---------------------------------------------------------------------\n");

	  	//Ask the user for item/quantity they would like to purchase
		
		  UserQuestions()
	})
}


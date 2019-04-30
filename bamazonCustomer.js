var inquirer = require('inquirer');
var mysql = require('mysql');
var columnify = require('columnify');

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "root",
  database: "bamazon"
});


connection.connect(function (err) {
  if (err) throw err;
  runTable();
});



// TABLE

function runTable() {

  var query = "SELECT * FROM products";

  // make a call to the database
  connection.query(query, function (err, results) {
    if (err) throw err;
    console.log(columnify(results, { columnSplitter: " | " }));
    idSearch();
  }
  )




}


// this function prompts the user a question about the id of the product
function idSearch() {
  inquirer
    .prompt({
      name: "itemId",
      type: "input",
      message: "What is the ID of the product you would like to purchase?",
    })

    // the answer will contain the results of the user selection from the table
    .then(function (answer) {
      // console.log(answer);

      // when ID is selected my application will retrieve the data for that ID
      var query = "SELECT * FROM products WHERE item_id = ?";
      connection.query(query, [answer.itemId], function (err, results) {
        // the query will throw an error if the request isn't valid
        if (err) throw err;

        // the results will be presented in a table for the user
        console.log(columnify(results, {
          columnSplitter: " | "
        }));

        //  calling the quantity search function aka invoke aka run
        quantitySearch(results)
      });

    })


}
// function here for second question for the user
function quantitySearch(results) {
  inquirer
    .prompt({
      name: "quantity",
      type: "input",
      message: "How many units of product would you like to buy?"
    })

    .then(function (answer) {
      // return quantityamount
      // console.log(answer);

// check the database for the amount of units
    // if the unit amount is less than or equal to the stock quantity then update data base with remainder of amounts of units
// pass in item id
// console.log(results);

if (results[0].stock_quantity >= answer.quantity) {
  
  var total = answer.quantity * results[0].price;
  
  console.log("Your total is: ", total) //dont delete!


// here i update my database with the new unit amount
var updatedAmount = results[0].stock_quantity - answer.quantity;
var query = "UPDATE products SET ? WHERE ?"; //placeholder question marks for my objects below
connection.query(query, [
  {
    stock_quantity: updatedAmount //this is for the first question mark
  },
  {
    item_id: results[0].item_id //this is for the second question mark
  }
], function (err, results) {
  if(err) throw err;
  connection.end();
 })

} else {
  console.log("Oops! Not enough in stock!") //don't delete!
  connection.end();
}


    });


    




}




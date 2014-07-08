/*
 * Module Example - Functions and Variables
 * Using the built-in "module" object, you can
 * pass local variables and functions out of your
 * module
 *
 */

//Declare a named function or variable
var myFunction = function() {
  return "This is my function!";
};

var myVariable = "This is my variable!";


//Add the named functions or varialbes to the "module.exports" object
module.exports.myFunction = myFunction;
module.exports.myVariable = myVariable;

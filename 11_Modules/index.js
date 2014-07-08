/*
 * Create your own Modules
 * Your nodeJS code can be packaged in modules, which expose
 * certain functions and objects for use otherwhere in our
 * application.
 *
 */
 //Modules are included using the nodeJS require method.
 //This allows you to "store" the module in a global variable

 //Load a specific variable or function from a local file
 var myVariable = require('./my_module/function_and_variable.js').myVariable;

 console.log("myVariable: " + myVariable);

 var myFunction = require('./my_module/function_and_variable.js').myFunction;

 console.log("myFunction: " + myFunction());


//Load a local module using "./FOLDER"
var mymodule = require('./folder_module');

//Call a function from the module
mymodule.fromFolderModule();

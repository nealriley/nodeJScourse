/*
 * Module Example - Folders as Modules
 * Using a package.json file, you can simply require
 * a folder, rather than a specific file
 *
 */

//Contents of the package.json file
/*
{
  "name" : "folder_module",
  "main" : "module.js"
}
*/

var fromFolderModule = function() {
  console.log("I came from the folderModule");
}

module.exports.fromFolderModule = fromFolderModule;

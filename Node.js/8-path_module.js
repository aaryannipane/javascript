// Get more info of this path module :- https://nodejs.org/dist/latest-v14.x/docs/api/path.html#path_path

// The path module provides utilities for working with file and directory paths. It can be accessed using:
const { extname } = require("path");
const path = require("path");

// get current directory name by path.dirname(this file full path)
const dirName = path.dirname("D:/ARYAN/COURSES/JavaScript/Node.js/8-path_module.js");
console.log(dirName);

// Get extansion name of any file or same file buy giving path by path.extname(Path)
const extName = path.extname("D:/ARYAN/COURSES/JavaScript/Node.js/8-path_module.js");
console.log(extName);

// Get file name of any file or same file buy giving path by path.basename(Path)
const baseName = path.basename("D:/ARYAN/COURSES/JavaScript/Node.js/8-path_module.js")
console.log(baseName);

// Get an Object containing root, dir, base, ext, name of path module by path.parse(Path)
const parseObject = path.parse("D:/ARYAN/COURSES/JavaScript/Node.js/8-path_module.js");
console.log(parseObject);

// get any value by object property access
console.log(parseObject.root);
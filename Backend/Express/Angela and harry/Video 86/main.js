  // import {a, b, d} from "./mymodule.js"
// console.log(a, b, d)


// import harry from "./mymodule.js"
// console.log(harry)

// (function(exports, require, module, __filename, __dirname) {

//     // Module code actually lives here
  
//   });

const a = require("./mymodule2.js")

console.log(a, __dirname, __filename)


// In Node.js, __dirname and __filename are special variables that are available by default in every module. They are not something you need to initialize manually. Here’s a brief explanation:

// __dirname: This variable contains the directory path of the current module. It helps you understand where your script is located.
// __filename: This variable contains the full path to the current module file. It includes the file name itself.
// These variables are provided by Node.js as part of its module wrapper function. When you write a module in Node.js, it is actually wrapped in a function before execution. This wrapper function looks something like this:

(function (exports, require, module, __filename, __dirname) {
    // Your module code actually lives here
});
// This is why __dirname and __filename are available to you without any explicit initialization. They are injected into your module by Node.js.

const path = require('path');

console.log('Directory name:', __dirname);
console.log('File name:', __filename);
console.log('Base file name:', path.basename(__filename));

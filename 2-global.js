//  GLOBALS - NO WINDOW

//  __dirname - path to current window
console.log(__dirname); // output -> /home/robby/Documents/myproject/be/node/node_express_freecodecamp

//  __filename - file name
console.log(__filename); // output -> /home/robby/Documents/myproject/be/node/node_express_freecodecamp/1-intro.js

//  require - funtion to use modules
const express = require("express"); // -> call function (express module)

//  module - info about current module
console.log(module);
/* output 
Module {
  id: '.',
  exports: {},
  parent: null,
  filename:
   '/home/robby/Documents/myproject/be/node/node_express_freecodecamp/1-intro.js',
  loaded: false,
  children:
   [ Module (info module yang dipanggil) {
       id: 
        '/home/robby/Documents/myproject/be/node/node_express_freecodecamp/node_modules/express/index.js',
       exports: [Function],
       parent: [Circular],
       filename:
        '/home/robby/Documents/myproject/be/node/node_express_freecodecamp/node_modules/express/index.js',
       loaded: true,
       children: [Array],
       paths: [Array] } ],
  paths:
   [ '/home/robby/Documents/myproject/be/node/node_express_freecodecamp/node_modules',
     '/home/robby/Documents/myproject/be/node/node_modules',
     '/home/robby/Documents/myproject/be/node_modules',
     '/home/robby/Documents/myproject/node_modules',
     '/home/robby/Documents/node_modules',
     '/home/robby/node_modules',
     '/home/node_modules',
     '/node_modules' ] }
*/

// process = info about env where the program is being executed
console.log(process);

/* output
process {
    ...
}
*/

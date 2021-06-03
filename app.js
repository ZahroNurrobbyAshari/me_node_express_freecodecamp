//  CommonJS, every file is module (by default)
//  Modules -> encapsulated code (only share minimum)

const names = require("./4-names");
const sayHi = require("./5-utils");
const data = require("./6-alternative-flavor");

console.log(data);
sayHi("robby");
sayHi(names.names[0]);
sayHi(names.names[1]);

const util = require("util");

// format()
let name = "Daksha";
let age = 22;

console.log(util.format("My name is %s and my age is %d", name, age));

// types
console.log(util.types.isDate(new Date()));
console.log(util.types.isArray([]));
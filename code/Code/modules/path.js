const path = require("path");

let filePath = "G:\\MERN\\project\\index.js";

console.log("Directory:", path.dirname(filePath));
console.log("File Name:", path.basename(filePath));
console.log("Extension:", path.extname(filePath));
console.log("File Name Without Extension:", path.basename(filePath, ".js"));
const fs = require("node:fs");

const fileName = "sample-note.txt";
fs.writeFileSync(fileName, "Node.js can read and write files.\n", "utf8");
const content = fs.readFileSync(fileName, "utf8");

console.log(content);

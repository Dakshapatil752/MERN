const fs = require("fs");
const zlib = require("zlib");

// Read input file
const readable = fs.createReadStream("input.txt");

// Create output file
const writable = fs.createWriteStream("output.txt.gz");

// Stream chaining
readable
    .pipe(zlib.createGzip())
    .pipe(writable);

writable.on("finish", () => {
    console.log("File compressed successfully!");
});
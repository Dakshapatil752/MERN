const fs = require("fs");
const zlib = require("zlib");

const readable = fs.createReadStream("input.txt");

const writable = fs.createWriteStream("input.txt.gz");

readable
    .pipe(zlib.createGzip())
    .pipe(writable);

writable.on("finish", () => {
    console.log("File compressed successfully");
});
const fs = require("fs");

const writable = fs.createWriteStream("output.txt");

writable.write("Hello Daksha\n");
writable.write("This is a Writable Stream.\n");
writable.end("Writing is completed.");

writable.on("finish", () => {
    console.log("Data written successfully");
});
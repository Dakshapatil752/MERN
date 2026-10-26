const fs = require("fs");

const readable = fs.createReadStream("input.txt", "utf8");

readable.on("data", (chunk) => {
    console.log("Received:", chunk);
});

readable.on("end", () => {
    console.log("Finished reading");
});
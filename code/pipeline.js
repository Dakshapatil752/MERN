const fs = require("fs");
const { pipeline } = require("stream");

const readable = fs.createReadStream("input.txt");
const writable = fs.createWriteStream("output.txt");

pipeline(
    readable,
    writable,
    (err) => {
        if (err) {
            console.log("Pipeline failed:", err);
        } else {
            console.log("Pipeline completed successfully");
        }
    }
);
const { Duplex } = require("stream");

const duplex = new Duplex({
    read(size) {
        this.push("Hello from Readable side\n");
        this.push(null);
    },

    write(chunk, encoding, callback) {
        console.log("Written data:", chunk.toString());
        callback();
    }
});

// Writing
duplex.write("Hello from Writable side");

// Reading
duplex.on("data", (chunk) => {
    console.log("Read data:", chunk.toString());
});

duplex.end();
const { Transform } = require("stream");

const upperCase = new Transform({
    transform(chunk, encoding, callback) {
        const result = chunk.toString().toUpperCase();
        callback(null, result);
    }
});

upperCase.on("data", (data) => {
    console.log(data.toString());
});

upperCase.write("hello ");
upperCase.write("daksha");
upperCase.end();
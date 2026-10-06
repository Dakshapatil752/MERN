const fs = require('fs');

const readStream = fs.createReadStream('example.txt');
const writeStream = fs.createWriteStream('copy.txt');

readStream.pipe(writeStream);

writeStream.on('finish', () => {
    console.log('File copied successfully.');
});
const fs = require('fs');

const writeStream = fs.createWriteStream('output.txt');

writeStream.write('Hello Node.js!\n');
writeStream.write('This is a Write Stream.\n');
writeStream.write('Data is written into the file.');

writeStream.end();

writeStream.on('finish', () => {
    console.log('Data written successfully.');
});

writeStream.on('error', (err) => {
    console.log('Error:', err.message);
});
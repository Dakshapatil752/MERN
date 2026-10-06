const fs = require('fs');

const readStream = fs.createReadStream('example.txt', 'utf8');

readStream.on('data', (chunk) => {
    console.log('Received chunk:');
    console.log(chunk);
});

readStream.on('end', () => {
    console.log('File reading completed.');
});

readStream.on('error', (err) => {
    console.log('Error:', err.message);
});
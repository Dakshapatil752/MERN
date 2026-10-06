const fs = require('fs');

fs.open('example.txt', 'r', (err, fd) => {
    if (err) {
        console.log(err);
    } else {
        console.log('File opened successfully.');
        console.log('File Descriptor:', fd);
    }
});
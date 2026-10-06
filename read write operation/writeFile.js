const fs = require('fs');

fs.writeFile('example.txt', 'Hello, this is Node.js!', (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('File written successfully.');
    }
});
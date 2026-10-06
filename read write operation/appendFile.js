const fs = require('fs');

fs.appendFile('example.txt', '\nWelcome to Node.js File System.', (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('Data appended successfully.');
    }
});
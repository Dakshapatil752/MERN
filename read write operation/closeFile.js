const fs = require('fs');

fs.open('example.txt', 'r', (err, fd) => {
    if (err) {
        console.log(err);
        return;
    }

    console.log('File opened.');

    fs.close(fd, (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log('File closed.');
        }
    });
});
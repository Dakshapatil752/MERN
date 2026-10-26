
const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));

app.post('/user', (req, res) => {
    res.send('Data received successfully!');
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});

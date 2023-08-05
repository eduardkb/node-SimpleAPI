const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello, world!');
});

const items = ['apple', 'banana', 'orange', 'peach'];
app.get('/items', (req, res) => {
    res.json(items);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
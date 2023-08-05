const express = require('express');
const app = express();

const sName = process.env.NAME || 'default';
console.log('>>> DEBUG_NAME_VAR:', sName);

app.get('/', (req, res) => {
    if (sName === 'default') {
        res.send('Hello, world!');
    }
    else {
        res.send(`Hi, ${sName}`)
    }
});

const items = ['apple', 'banana', 'orange', 'peach'];
app.get('/items', (req, res) => {
    res.json(items);
});

const port = process.env.PORT || 3000;
console.log('>>> DEBUG_PORT_VAR:', port);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
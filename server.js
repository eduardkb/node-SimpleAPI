const express = require('express');
const app = express();

const sName = process.env.NAME || 'default';
console.log('>>> DEBUG_NAME_VAR:', sName);

app.get('/', (req, res) => {
    if (sName === 'default') {
        res.send('Hello. Page is working!');
    }
    else {
        res.send(`Hello.\nVar content:, ${sName}`)
    }
});



app.get('/page', (req, res) => {
    var sHtml = `
<html>

<head>
  <title>Debug page</title>
</head>

<body style="background-color: #0099ff;">
  <h3>Debug information</h3>
  <ul>
    <li><strong>Request Url</strong><span>: Test URL</span></li>
    @* <li><strong>Outbound public IP</strong><span>: Test PUBIP</span></li> *@
    <li><strong>Inbound client IP</strong><span>: Test serv var</span></li>
  </ul>
  <strong>Headers</strong>
  <ul>
      <li><strong>Item 1</strong><span>: Test 1</span></li>
      <li><strong>Item 2</strong><span>: Test 2</span></li>
      <li><strong>Item 3</strong><span>: Test 3</span></li>    
  </ul>
</body>

</html>
`
    res.send(sHtml);
});

const items = ['Copo', 'Mouse', 'Relogio', 'Fone'];
app.get('/items', (req, res) => {
    res.json(items);
});

const port = process.env.PORT || 3000;
console.log('>>> DEBUG_PORT_VAR:', port);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
const express = require('express');
const app = express();

const sName = process.env.NAME || 'NO_NAME_VALUE';
const sConnStr = process.env.CONN || 'NO_CONN_VALUE';
app.get('/', (req, res) => {
  var sHtml = `
<html>

<head>
  <title>My Webpage</title>
</head>

<body style="background-color: #ccccb3;">  
  <header>
    <h3>EKB Welcome</h3>
  </header>
  <main>
      <hr>
      <strong>Variables:</strong>
      <ul>
        <li><strong>NAME Var Content</strong><span>: ${sName}</span></li>
        <li><strong>CONN Var Content</strong><span>: ${sConnStr}</span></li>
      </ul>
      <strong>API's</strong>
      <ul>
          <li><strong>API 1</strong><span>: /items</span></li>
          <li><strong>API 2</strong><span>: <under development></span></li>      
      </ul>  
  </main>
  <footer>
      <p><small>By: EduardKB</small></p>
  </footer>
</body>
</html>
`
  res.send(sHtml);
});

const items = ['Lamp', 'Heater', 'Humidifyer', 'Courtain'];
app.get('/items', (req, res) => {
  const aRet = {
    status: "Success",
    code: "200",
    result: items
  }
  res.json(aRet);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});


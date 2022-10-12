const express = require('express');
var os = require("os");


const app = express();

app.get('/', (req, res) => {
    res.json({ code: 0, message: `This message was sent from: ` + os.hostname, success: true });
})

app.post('/github', (req, res) => {
    console.log('POST request received');
    res.send('OK')
})

app.listen(80, () => {
  console.log('Listening on port 80');
})
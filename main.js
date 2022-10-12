const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.json({ code: 0, message: 'Everything is working fine!!', success: true });
})

app.post('/github', (req, res) => {
    console.log('POST request received');
    res.send('OK')
})

app.listen(80, () => {
  console.log('Listening on port 80');
})
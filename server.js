const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

// sendFile ira aqui

app.listen(port);
console.log('Server started at http://localhost:' + port);
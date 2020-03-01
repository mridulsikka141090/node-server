const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 8000;

//cors policy
app.use(cors());

// parse body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Listen on port
app.listen(PORT, () => {
  console.log(`The server is listening on Port: ${PORT}`);
});

const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser');
const isOddOrEven = require("./src/isOddOrEven");

const PORT = process.env.PORT || 3002;
const HOST = '0.0.0.0';

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.post('/bfhl', isOddOrEven);

app.listen(PORT , HOST , ()=>{
    console.log(`listening to port ${PORT} , ${HOST}`)
});

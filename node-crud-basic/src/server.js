const express = require('express');

const app = express();

const routes = require('./router')

app.use(express.json());

app.use(routes);

app.listen(8080, () => {
    console.log("Start on port 8080!")
})
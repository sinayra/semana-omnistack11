const express = require("express");
const app = express();

app.get('/', (request, response) => {
    return response.json({
        evento: 'Semana Omnistack'
    });
});

app.listen(3333);
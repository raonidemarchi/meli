const express = require('express');
const path    = require('path');
const port    = process.env.PORT || 8080;
const app     = express();

app.use(express.static('.'));

app.get('*', function (request, response) {
	response.sendFile(path.resolve('index.html'));
});

app.listen(port);
console.log("server started on port " + port);
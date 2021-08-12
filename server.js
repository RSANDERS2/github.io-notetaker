const express = require('express');

const app = express();

const PORT = 3001;

app.use(express.json());
app.use(express.urlencoded({ extend: true }));
app.use(express.static('./public'));

require('./routes/api')(app);
require('./routes/html')(app);

app.listen(PORT, function() {
    console.log(`Express server listening on port ${PORT}`)
})
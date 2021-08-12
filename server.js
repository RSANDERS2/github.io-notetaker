const express = require('express');

const app = express();

const PORT = process.env.PORT || 3001;


app.use(express.urlencoded({ extend: true }));
app.use(express.json());
app.use(express.static('./public'));

require('./routes/api.js')(app);
require('./routes/html.js')(app);

app.listen(PORT, function() {
    console.log(`Express server listening on http://localhost:${PORT}`)
})
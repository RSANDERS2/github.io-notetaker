const fs = require('fs');

module.exports = function(app) {

//API GET
    app.get('/api/notes', function(req, res) {
        fs.readFile('./db/db.json', (err, data) => {
            if (err) throw err;
            Data = JSON.parse(data);
            res.send(Data);
        });
    });  
    
//API POST
    app.post('/api/notes', function(req, res) {
        const noteText = req.body;

        fs.readFile('./db/db.json', (err, data) => {
            if (err) throw err;
            Data = JSON.parse(data);
            Data.push(noteText);

            let num = 1;
            Data.forEach(num =>  {
                Data.id = num;
                num++;
                return Data;
            });

            stringData = JSON.stringify(Data);

            fs.writeFile('./db/db.json', stringData, (err, data) => {
                if(err) throw err;
            });
        });
        res.send('note submitted')
    });    

//API DELETE  
    app.delete('/api/notes/:id', function(req, res) {
        const deleteNote = req.params.id;
    

        fs.readFile('./db/db.json', (err, data) => {
            if (err) throw err; 
            Data = JSON.parse(data);

            for(let r = 0; r < Data.length; r++) {
                if (Data[r].id === num(deleteNote)) {
                Data.splice([r], 1);
                }
            }
            stringData = JSON.stringify(Data);

            fs.writeFile('./db/db.json', stringData, (err, data) => {
                if(err) throw err;
            });
        });
        res.send('note deleted');
    });
};
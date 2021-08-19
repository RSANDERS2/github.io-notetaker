const fs = require('fs');

const { v4: uuidv4 } = require('uuid');
uuidv4();

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
        noteText.id = uuidv4();
        const addID = {
            ...req.body, id: uuidv4()
        }

        fs.readFile('./db/db.json', (err, data) => {
            if (err) throw err;
            Data = JSON.parse(data);
            Data.push(addID);

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
        res.send(Data)
    });    

//API DELETE  

    app.delete('api/notes/:id', function (req, res) {
        const deleteNote = req.params.id;
        console.log(deleteNote);

        const newNote = db.JSON.filter(note => note.id !== deleteNote);

        db.JSON = newNote;

        fs.readFile('./db/db.json', (err, data) => {
            if (err) throw err;
            Data = JSON.parse(data);

            for (let r = 0; r < Data.length; r++) {
                if(Data[r].id === number(deleteNote)) {
                    Data.splice(r, 1);
                }
            }
            stringData = JSON.stringify(Data);

            fs.writeFile('./db/db.json', stringData, (err, data) => {
                if(err) throw err;
            });
        });   
        res.send(Data);
    });     
};


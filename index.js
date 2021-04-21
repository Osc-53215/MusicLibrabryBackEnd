const express = require('express');
const repoContext = require('./repository/repository-wrapper');


const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(3000, function () {
    console.log("Server started. Listening on port 3000.");
});

//GET request for whole music library

app.get('/api/songs', (req, res) => {
    const songs = repoContext.songs.findAllSongs();
    return res.send(songs);
   });



// GET request through id

app.get('/api/songs/:id', (req, res) => {
    const id = req.params.id;
    const songs = repoContext.songs.findSongById(id);
    return res.send(songs);
   });
   
//POST request

app.post('/api/songs', (req, res) => {
    const newSong = req.body;
    const addedSong = repoContext.songs.createSong(newSong);
    return res.send(addedSong);
   });
   
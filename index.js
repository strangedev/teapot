const express = require('express');
const fs = require('fs');
const path = require('path');
const shell = require('shelljs');

const app = express();

app.get('/airplay/restart', (req, res) => {
	shell.exec('sudo systemctl restart shairport-sync.service');
	res.status(200).send('I have westawted the sewvew UwU');
});

app.get('/', (req, res) => {
    fs.readFile(path.join(__dirname, 'static', 'index.html'), 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).send();
        }
	    res.status(418).send(data);
    });
});

app.listen(80, () => {
	console.log('Oy cunt, server\'s started');
});


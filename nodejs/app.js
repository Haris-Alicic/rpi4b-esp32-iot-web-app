const express = require('express');
const mqtt = require('mqtt');
const bodyParser = require('body-parser');

const app = express();
const client = mqtt.connect('mqtt://mosquitto:1883', {
    username: 'haris',
    password: '0000'
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.post('/send-text', (req, res) => {
    const text = req.body.text;
    client.publish('esp32/input', text);
    res.redirect('/');
});

const server = app.listen(8080, () => {
    console.log(`Server running on port ${server.address().port}`);
});
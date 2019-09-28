const express = require('express');
const parser = require('body-parser');
const cors = require('cors');

const PORT = 3000;

const app = express();
app.use(parser.json());
app.use(cors());

app.get('/', function(req, res){
    res.send('Hello from server');
});

app.post('/register',function(req, res){
console.log(req.body);
res.status(200).send({'message': 'Data Received'});
});

app.listen(PORT, function(){
console.log('Server is listening on Port: ' + PORT);
});
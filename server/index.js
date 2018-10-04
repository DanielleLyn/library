const massive = require('massive');
const express = require('express');
const bodyParser = require('body-parser');
const controller = require('./controller')

const dotenv = require('dotenv');
dotenv.config();
const app = express();
app.use(bodyParser.json());

app.use(express.static(__dirname + '/../public/build')); //Serves up static express files for frontend

// app.delete( '/api/music/:id', controller.delete );
app.get( '/api/books', controller.read );
// app.get('/api/music/:id', controller.getSong);

app.post( '/api/books', controller.post)

massive(process.env.CONNECTION_STRING).then(dbInstance => {
    console.log('connected')
    app.set('db', dbInstance);
}).catch(error=>{
    console.log('----error', error);
});


app.listen(4000, ()=>{
    console.log('server is listening on port 4000'  );
    
});


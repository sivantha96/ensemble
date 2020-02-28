const mysql = require('mysql')
const express = require('express')
const bodyParser = require('body-parser')
const db = require('./config/db')

const app = express()

app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));

const mysqlConnection = mysql.createConnection(db)

mysqlConnection.connect((err) => {
    if(!err){
        console.log('DB connection succeeded');
        require('./app/routes')(app, mysqlConnection)
        
    } else {
        console.log('DB connection failed\nError :'+JSON.stringify(err, undefined , 2));
        
    }
});


app.listen(3000,() => {
    console.log('Server running on port: 3000');   
})



const mysql = require('mysql')
const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));

app.get('/songs', (req, res)=>{
    mysqlConnection.query('SELECT * From music', (err, rows, fields) => {
        if(!err){
            console.log(rows);
            return res.status(200).send(rows)
            
        } else {
            console.log(err);
            
        }
    })
})

const mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'ensemble'
})

mysqlConnection.connect((err) => {
    if(!err){
        console.log('DB connection suceeded');
        
    } else {
        console.log('DB connection faild\nError :'+JSON.stringify(err, undefined , 2));
        
    }
});

app.listen(3000,() => {
    console.log('Server running on port: 3000');   
})


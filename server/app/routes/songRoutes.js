module.exports = function(app, db) {
    app.post('/songs', (req, res) => {
        let sql = 'INSERT INTO '
        res.send('hello')
    })


    app.get('/songs', (req, res)=>{
        let sql = 'SELECT * From music'
        db.query(sql, (err, rows, fields) => {
            if(!err){
                console.log(rows);
                return res.status(200).send(rows)
            } else {
                console.log(err);
            }
        })
    })

    app.get('/song/:id', (req, res)=>{
        db.query('SELECT * From music', (err, rows, fields) => {
            if(!err){
                console.log(rows);
                return res.status(200).send(rows)
                
            } else {
                console.log(err);
                
            }
        })
    })
}
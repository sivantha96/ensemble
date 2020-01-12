module.exports = function(app, db) {
    app.post('/songs/add', (req, res) => {
        let sql = 'INSERT INTO song set ?'

        db.query(sql, req.body ,(err, rows, fields) => {
            if(!err){
                console.log(rows);
                return res.status(200).send("Create successful")
            } else {
                console.log(err);
            }
        })
        res.status(200)
    })

    app.post('/songs/update', (req, res) => {
        let sql = `UPDATE song set ? WHERE id = ${req.body.id}` 

        db.query(sql, req.body ,(err, rows, fields) => {
            if(!err){
                console.log(rows);
                return res.status(200).send("Update successful")
            } else {
                console.log(err);
            }
        })
        res.status(200)
    })

    app.get('/songs/delete/:id', (req, res) => {
        let sql = `DELETE From song WHERE id = ${req.params.id}`

        db.query(sql, req.body ,(err, rows, fields) => {
            if(!err){
                console.log(rows);
                return res.status(200).send("Delete successful")
            } else {
                console.log(err);
            }
        })
        res.status(200)
    })

    app.get('/songs/getsong/:id', (req, res)=>{
        let sql = `SELECT From song WHERE id = ${req.params.id}`
        db.query(sql, (err, rows, fields) => {
            if(!err){
                console.log('new',rows);
                return res.status(200).send(rows)
                
            } else {
                console.log(err);
                
            }
        })
    })

    app.get('/songs', (req, res)=>{
        let sql = 'SELECT * From song'
        db.query(sql, (err, rows, fields) => {
            if(!err){
                console.log(rows);
                return res.status(200).send(rows)
            } else {
                console.log(err);
            }
        })
    })
}
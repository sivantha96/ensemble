const songRoutes = require('./songRoutes');

module.exports = function(app, db){
    songRoutes(app,db)
}
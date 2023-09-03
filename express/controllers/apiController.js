module.exports = function(app) {
    app.get('/api/person/:id', function(req, res) {
        res.json({
            firstName: 'John',
            lastName: 'Doe'
        })
    });
    
    app.delete('/api/person/:id', function(req, res) {
        // delete from db
    })
    
    app.post('/api/person', function(req, res) {
        // save db
    });
}
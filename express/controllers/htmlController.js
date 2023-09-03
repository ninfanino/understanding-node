var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });

module.exports = function(app) {
    app.get('/', function(req, res, next) {
        console.log('Request url: ' + req.url)
        next();
    });
    
    app.get('/', function(req, res, next) {
        res.render('index')
    });
    
    app.get('/person/:id', function(req, res) {
        // res.send('<html><head></head><body>Person: ' + req.params.id + '</body></html>')
        res.render('person', { ID: req.params.id, Qstr: req.query.qstr })
    })
    
    app.post('/person', urlencodedParser, function(req, res) {
        res.send('Thank you');
        console.log(req.body.firstName);
        console.log(req.body.lastName);
    });
}
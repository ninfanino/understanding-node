var configValues = require('./config.json');

module.exports = {
    getDbConnectionString: function() {
        return 'mongodb+srv://' + configValues.uname + ':' + configValues.pwd + '@cluster0.9xaqkit.mongodb.net/'
    }
}
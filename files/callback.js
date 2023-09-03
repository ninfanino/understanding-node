function greet(callback) {
    console.log('Hello')
    var data = {
        name: 'john'
    }
    callback(data);
}

greet(function(data) {
    console.log('callback was invoked');
    console.log(data.name)
});

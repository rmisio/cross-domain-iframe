var sys = require('sys'),
    express = require('express'),
    app = express()
    server = require('http').createServer(app),
    port = process.argv[2] || 8080;

app.configure(function() {
    app.use(express.static(__dirname + '/public'));
    app.use(express.bodyParser());    
    app.use(express.favicon());
});

// routes
// app.get('/is-authenticated', function(req, res) {
//     sys.puts(req.user ? sys.inspect(req.user) : 'BUM BADDA BUMER!');
//     res.send(req.user || 401);
// });

sys.puts('Running server on port ' + port + '.');
server.listen(port);

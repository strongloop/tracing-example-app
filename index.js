var app = require('express')(),
    http = require('http');

// ------- Our Leaky Class... ------- //

var widgets = [];
function Widget() {}

// ------- Our Routes ------- //

app.get('/', function(req, res) {
    res.json({ msg: 'Tracing Demo App running', widgetCount: widgets.length });
});

app.post('/widget', function(req, res) {
    var count = (req.query.count || 10);
    
    for (var i = 0; i < count; i++) {
        widgets.push(new Widget());
    }
    
    res.json({ widgetCount: widgets.length });
});

app.get('/google', function(req, res) {
    var options = {
        path: 'https://google.com',
        method: 'GET',
        headers: { 'Content-Length': 0 }
    };
    
    var googleReq = http.request(options, function(googleRes) {
        var err = null,
            body = '';
        
        googleRes.on('end', function () {
            res.json({ msg: 'I hit google!' });
        });
    });
    googleReq.on('error', function(err) {
        res.json({ msg: err.message });
    });
    googleReq.end();
});

app.get('/clear', function(req, res) {
    widgets = widgets.slice(Math.round(widgets.length / 2));
    res.json({ msg: 'Cleared all widgets', widgetCount: widgets.length });
});


// ------- Start it up ------- //

var port = process.env.PORT || 3001;

app.listen(port, function() {
    console.log('Tracing demo app listening on', port);
});

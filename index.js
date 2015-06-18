var express = require('express');
var request = require('request');

var app = express();

app.get('/', function(req, res) {
  setTimeout(startLeaking, 10000);

  function startLeaking() {
    function LeakyClass() {}

    setInterval(function() {
      var leaks = [];
      for (var i = 0; i < 1000; i++)
        leaks.push(new LeakyClass());
      leaks = [];
      console.log(leaks.length);
      // spikeCpu();
    }, 1000);
  }

  res.end('done');
});

var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log('Listening on ', port);
});

request('http://localhost:' + port, function(err, res, body) {
  console.log(body);
});

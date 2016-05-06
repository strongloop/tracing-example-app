// Copyright IBM Corp. 2015. All Rights Reserved.
// Node module: tracing-example-app
// US Government Users Restricted Rights - Use, duplication or disclosure
// restricted by GSA ADP Schedule Contract with IBM Corp.

var express = require('express');

var app = express();

app.get('/', function(req, res) {
  res.send('Tracing Demo App is running');
});

app.get('/spike', function(req, res) {
  function LeakyClass() {}

  var leaks = [];
  for (var i = 0; i < 1000; i++)
    leaks.push(new LeakyClass());
  leaks = [];
  console.log(leaks.length);
  res.end('.');
});

var port = process.env.PORT || 3001;
app.listen(port, function() {
  console.log('Listening on', port);
});

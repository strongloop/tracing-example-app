var express = require('express');
var request = require('request');

var app = express();

var STR = "ssadfsd;flk alsdfkj saldfkjsd flaskdjf \
asldkjf saldkjfasldkfj asdlkfjas ;dlfkjsa df;lkasdjfklj \
f;lkasdjf asldkfjas slkjf sasdfsdfsadf asdfsdf \
asdfasdfasdfsadfasdfwesad fsdfskadfj aslkdjhjkf ksaldjhf  \
slkadfj salkdjf ;alskdfj asl;dkfj asl;dkfja s;lkdjf sl \
saldfkjs;dlf j;aslkdfj sdfas";

app.get('/', function(req, res) {
  var leaks = [];
  for (var i = 0; i < 10000000; i++)
    leaks.push(STR.slice());
  console.log(leaks.length);
  res.end('.');
});

var port = process.env.PORT || 3001;
app.listen(port, function() {
  console.log('Listening on', port);
});

module.exports = function(Document) {
  var docs = []
  function Documents() {
  }
  Document.content = function(msg, cb) {
    setTimeout(function() {
      for (var i = 0; i < 100; i++) {
        console.log("pushing")
        docs.push(new Documents);
      }
    }, 1000)
      cb(null, 'Adding document content' + msg);
    }

    var docs = []
    Document.remoteMethod(
        'content',
        {
          accepts: {arg: 'content', type: 'string'},
          returns: {arg: 'content', type: 'string'}
        }
    );
};

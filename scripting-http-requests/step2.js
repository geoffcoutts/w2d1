//Function to get chunks of data from a website
//and keep it in a buffer until all data is ready to be displayed.

var https = require("https");

function getAndPrintHTML () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

  https.get(requestOptions, function (response) {

    // set encoding of received data to UTF-8
    response.setEncoding('utf8');

    var output = "";

    // the callback is invoked when a `data` chunk is received
    response.on('data', function (data) {
      console.log('Chunk Received, Length:', data.length);

      output += data;
    });

    // the callback is invoked when all of the data has been received
    // (the `end` of the stream)
    response.on('end', function() {
      console.log(output);
    });
  });
}

getAndPrintHTML();
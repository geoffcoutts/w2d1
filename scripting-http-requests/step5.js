//Function to get chunks of data from a given website
//and keep it in a buffer until all data is ready to be displayed.
//exported as a module.


function getHTML (requestOptions, callBack) {
// var Casing = require('');
var https = require("https");

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
    response.on('end', function () {
      console.log(callBack(output));
    });
  });
}

var inputURL = process.argv.slice(2, 4);

var requestOptions = {
  host: inputURL[0].toString(),
  path: inputURL[1].toString()
};

function printHTML (html) {
  return html;
}

module.exports = {
  getHTML: getHTML,
  inputURL: inputURL,
  requestOptions: requestOptions,
  printHTML: printHTML
};

// getHTML(requestOptions, printHTML);


var getHTML = require('./step5');

// var requestOptions = {
//   host: 'sytantris.github.io',
//   path: '/http-examples/step5.html'
// };

var inputURL = process.argv.slice(2, 4);

var requestOptions = {
  host: inputURL[0].toString(),
  path: inputURL[1].toString()
};

function printHTML (html) {
  console.log(html);
}

getHTML(requestOptions, printHTML);
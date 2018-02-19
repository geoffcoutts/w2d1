var HTMLFunctions = require('../step5');

function printReverse (html) {
  return html.split("").reverse().join("");
}


HTMLFunctions.getHTML(HTMLFunctions.requestOptions, printReverse);
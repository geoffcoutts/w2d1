var HTMLFunctions = require('../step5');

function printLowerCase (html) {
  return html.toLowerCase();
}


HTMLFunctions.getHTML(HTMLFunctions.requestOptions, printLowerCase);
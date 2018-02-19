var HTMLFunctions = require('../step5');

function printUpperCase (html) {
  return html.toUpperCase();
}


HTMLFunctions.getHTML(HTMLFunctions.requestOptions, printUpperCase);
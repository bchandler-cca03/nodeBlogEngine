var fs = require('fs'),
    BillCObj = require('./models/billcmodel.js');

/* convert object to JSON and write out to a file */
var writeObjToFile = function writeObjToFile() {
    var BillCJSON = JSON.stringify(BillCObj);
    fs.writeFile(filename, BillCJSON, function (err) {
      if (err){
        console.log("Error Writing File" + err.message);
        throw err;
      } else {
        console.log("File has been written!!!");
      }
    });
  }

  module.exports = writeObjToFile;


var fs = require('fs');
/* readfile and spit out data */

var filename = "data/poststorage.json";
var readFile = fs.readFile(filename, "utf8", function(err, data){
  if (err) {
    console.log("Error Reading File" + filename + err.message);
    throw err;
  } else {
    var BillCObj = JSON.parse(data);
    console.log(BillCObj.id + "<br/>" + BillCObj.name + "<br/>" + BillCObj.post);
  }
});

module.exports = readFile;


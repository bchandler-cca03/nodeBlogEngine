// require filename
var fs = require('fs'),
filename = "data/poststorage.json";

// requiring an object from the models directory.    
var BillCObj = require('./models/billcmodel.js');



// define an array of objects ...
var postsArray = [BillCObj];

//    Not sure why the line below would not work ... pushing into
//     an empty array
//    postsArray = postsArray.push(BillCObj);

    // console.log(postsArray[0][id] + '\n' + postsArray[0][name] + '\n' 
    //    + postsArray[0][title] + '\n' + postsArray[0][content]);

// var BillCObj = {
//     id:      456,
//     name:    "Bill C",
//     title:   "Motivated Student",
//     post:    "This is a post that is stored to the filesystem for the motivated student" 
// }

// make directory data to hold the file 
// fs.mkdir("data", function(err) {
//    if (!err || err.code == "EEXIST") {
//      writeObjToFile();
//    } else {
//      throw err;
//    }
// });


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

/* readfile and spit out data */
// fs.readFile("data/poststorage.json", "utf8", function(err, data){
fs.readFile(filename, "utf8", function(err, data){
  if (err) {
    console.log("Error Reading File" + filename + err.message);
    throw err;
  } else {
    var BillCObj = JSON.parse(data);
    console.log(BillCObj.id + "<br/>" + BillCObj.name + "<br/>" + BillCObj.post);
  }

});

writeObjToFile();
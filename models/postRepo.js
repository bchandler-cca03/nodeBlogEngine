console.log("Connected to postRepo.js");
var fs       = require('fs'),
    path     = require('path'),
    filepath = path.join(__dirname, "data"),
    filename = path.join(filepath, "poststore2.json");

let lorem = "dolar dollar donuts ipsum sugar salt eggs milk";

// TODO:  Modify the postList to include a permalink instead of an id.  (See minute 41 of video)
// TODO:  delete datafile and restart.
let postList = [
    {"permalink":    "first-post", "title": "First Post", "content": "<h1>Hi, Wow!</h1><p>" + lorem + "</p>"},
    {"permalink":    "second-post", "title": "Second Post", "content": '<h1>Look, a Tiger</h1><img src="../images/animal2923186.jpg">'},
    {"permalink":    "third-post", "title": "Third Post", "content": '<h1>Ronnie Turcotte</h1><img src="../images/Turcotte1973.jpg">'}
];

// -------------------- Begin Readfile ----------------------
// ZZZ start at minute 29  YYY -- Restart at 31m
let readPostsFromFile = () => {
    fs.readFile(filename, "utf8", (err, data) =>{
        if (err) {
          // TODO -- why doesn't this branch properly???
          //   return to Minute 47:35.
          if(err.code == "ENOENT"){
            savePosts();
            console.log("Error Reading File " + filename + " " + err.message);
            console.log("Creating file.");
            return;            
          }
          console.log("Error Reading File " + filename + " " + err.message);
          throw err;
        } 
          postList = JSON.parse(data);
        
    });
}  
// ------------------- End Readfile -------------------------
// ------------------- Begin savePosts function -------------
// TODO #2:   get the save posts, check for dir, etc. to work
// 
let savePosts = () => {
  fs.mkdir(filepath, (err) => {
    if (!err || err.code == 'EEXIST'){
      writePostsToFile();
    } else {
      console.log("Error creating directory: " + err.message);
      throw err;
    }
  });
};

// ==================== Begin writeFile function ============
//  convert postList object to JSON and write out to a file 
var writePostsToFile = function writePostsToFile() {
    var postListJSON = JSON.stringify(postList);
    fs.writeFile(filename, postListJSON, function (err) {
      if (err){
        console.log("Error Writing File" + err.message);
        throw err;
      } else {
        console.log("updated file written to disk.");
      }
    });
}
// ==================== End writeFile function ==============

readPostsFromFile();

// TODO #1:  get the read to happen before the rest bombs out
// readPostsFromFile();  // seems to not read here.

let repo = {

    // ZZZ could follow the CRUD path:  create, update, destroy, read
    //  could do this with 2 more methods.
    getPosts: () => {
        return postList;  //Sha-BAP!!!
    },
    getPost:  (permalink) => {
        return postList.find((post)=>{
          return post.permalink === permalink;
        });
    },
    addPost: (newPost) => {
        postList.push(newPost);
        savePosts();
    },
    updatePost: (updatePost) => {
      // find the post with a for-loop
      for (let i = 0; i < postList.length; i++){
        if(updatePost.permalink === postList[i].permalink){
          // now that the correct post is identified, overwrite
          postList[i] = updatePost;
          console.log(postList[i]);
          savePosts();
          break;
        }
      }
    },
    deletePost: (permalink) => {
      // find the post to delete
      for (let i = 0; i < postList.length; i++){
        if(permalink === postList[i].permalink){
          // now that the correct post is identified, delete
            postList.splice(i,1);
            savePosts();
            break;
        }
      }    
    }
};

module.exports = repo; 

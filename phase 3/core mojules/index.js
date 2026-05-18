//core module examples on nodejs
////fs module
const fs = require("fs");

// //to write a file
// fs.writeFile("example.txt",'Hello world!',(err)=>{
//     if (err) console.log(err);
//     console.log("File has been saved!");
// });

// //to Read a file
// fs.readFile("example.txt", "utf8", (err,data) => {
//   if (err) console.log(err);
//   console.log(data);
// });

// //os module
const os = require("os");
// // console.log(os)
// console.log("platform:",os.platform());
// console.log("CPU Architecture:", os.arch());
// console.log("Total Memory:", os.totalmem());
// console.log("Free Memory:", os.freemem());
//path Module
const path = require("path");

// console.log(__filename);
// console.log(__dirname);

const filepath = path.join(__dirname, "example.txt");
// console.log("File path",filepath);

////base name to find the last file name
const baseName = path.basename(filepath);
console.log("Base name", baseName);

//to find directory path
const dirName = path.dirname(filepath);
console.log("Directory name", dirName);

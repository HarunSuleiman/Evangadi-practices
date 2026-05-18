// IIFE immediet invoke function expression to avoid NAME SPACE COLLISION
(function () {
  console.log("Developer A");
})();
(function () {
  console.log("Developer B");
})();
//1st npm init and enter ...to install json packege
//CORE MODULES installing
// second npm install mysql --save
// install express by npm i express --save
//TO USE express
const express = require("express");
console.log(express);
//EXPORTING OUR CUSTOM/local module
// to module exporting in our module 
// const add = (x, y) => x + y;
// module.exports = add; //it add the add function to the expport to use for others as a module

//to use the module require it...
const subtract = (x, y) => x - y;
const devide = (x, y) => x / y;
module.exports = { subtract, devide };
console.log(module);

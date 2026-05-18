console.log(90 - 20);
function abebe() {
  console.log("abebe beso bela");
  console.log("Hello Abebe");
  var num1 = 10;
  var num2 = 90;
  console.log(num1 + num2);
}
abebe();
function greet(name) {
  console.log(`Hi ${name}`);
}
greet("Kebede");
greet("Abebe");
greet("kedir");
function creatprofile(name, age, occupation) {
  console.log(`${name} is ${age} years old and works as a ${occupation}`);
}
creatprofile("abebe", 25, "developer");
function sum(x, y) {
  var sum;
  sum = x + y;
  return sum;
}
var sum = sum(8, 9);
console.log(sum);
let add = (a, b) => {
  return a + b;
};
const suum = add(3, 9);
console.log(suum);
score = 48;
pass = 50;
if (score >= pass) {
  console.log("Hey you pass");
}

if (score < pass) {
  console.log("Sorry you faild");
}
function checkifpass(score, pass) {
  if (score >= pass) {
    console.log("Hey you pass");
  }
}

if (score < pass) {
  console.log("Sorry you faild");
}

checkifpass(55, 50);

function checkifpass(score, pass) {
  if (score >= pass) {
    console.log("Hey you passsss");
  } else {
    console.log("Sorry you faildddd");
  }
}
checkifpass(49, 50);
checkifpass(59, 50);
function canvote(age) {
  if (age >= 18) {
    console.log("You can vote");
  } else {
    console.log("No");
  }
}
canvote(90);
canvote(14);

var age = 17;
const vot = age >= 18 ? console.log("yes") : console.log("No No");
let weather = "rainy";
switch (weather) {
  case "rainy":
    console.log("Wear a raincoat");
    break;
  case "sunny":
    console.log("Wear sunglass");
    break;
  default:
    console.log("Wear T-shirt");
    break;
}

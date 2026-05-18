// // let formid = document.querySelector("#FormID");
// // formid.addEventListener("click", function (e) {
// //   e.preventDefault();
// //   document.body.style.backgroundColor = "aqua";
// // });
// // let fname = document.querySelector("#fname");
// // fname.addEventListener("click", function () {
// //   document.querySelector("#fname").style.backgroundColor = "";
// //   document.querySelector("#fname").style.color = "block";
// // });
// let formid = document.getElementById("FormID");
// console.log(formid);
// function checkValidity(e) {
//   e.preventDfault();
//   let myinput = document.querySelectorAll("#FormID input");
//   console.log(myinput);
//   myinput[0].Style.backgroundColor = "";
//   myinput[1].Style.backgroundColor = "";
//   myinput[2].Style.backgroundColor = "";
//   if (myinput[0].Value.length == 0) {
//     myinput.Style.backgroundColor = "pink";
//   }
// }
// formid.addEventListener("click", checkValidity);
// //Using Jquery
// let el = $("#FormID");
// console.log(el);
// //EVENTS IN FORMS
// $("form").css({
//   "background-color": "pink",
//   width: "350px",
//   border: "5px solid green",
// });
// $("input").css({
//   border: "3px solid blue",
// });
// $("#fname").on("click", changeBackground);
// function changeBackground() {
//   $("#fname").css("background", "aqua");
// }
// $("#FormID").on("submit", function (e) {
//   e.preventDefault();
//   let finput = $("#fname").val();
//   let linput = $("#lname").val();
//   let password = $("#password").val();
//   if (firstName === "" || lastName === "" || email === "" || age === "") {
//     alert("Please fill in all fields before submitting the form.");
//     return;
//   }
// });
//differnt Problems Using javascript
function names(name) {
  let result = name + "Edabit";
  return result;
}
console.log(names("javascript"));

function basket(a, b) {
  let result = 2 * a + 3 * b;
  return result;
}
console.log(basket(7, 5));
function addition(a, b) {
  let result = a + b;
  return result;
}
console.log(addition(-4.5, -6));
function increament(b) {
  let result = b + 1;
  return result;
}
console.log(increament(6));
function add(a, b) {
  let result = a + b;
  if (a + b > 100) {
    return false;
  } else {
    return true;
  }
  return result;
}
console.log(add(-60, -50));
function addup(num) {
  let sum = 0;
  for (i = 1; i <= num; i++) {
    sum = sum + i;
  }
  return sum;
}
console.log(addup(600));
//Left shift by power of two
function poweroftwo(a, b) {
  let result = a * 2 ** b;
  return result;
}
console.log(poweroftwo(-32, 2));

function findLargestSmallest(arr) {
  let largest = Math.max(...arr);
  let smallest = Math.min(...arr);

  return [smallest, largest];
}
console.log(findLargestSmallest([10, 4, 2, 98, 900, 59, -9]));

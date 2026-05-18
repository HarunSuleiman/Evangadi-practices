console.log("Hellow World!");
let Abebe = document.getElementById("Two");
console.log(Abebe);
console.log(Abebe.className);
Abebe.className = "bicha";
console.log(document.querySelector(".keyi"));
let lists = document.getElementsByTagName("li");
console.log(lists[5]);

//altering
lists[5].textContent = "ice cream";
list = lists[5].parentNode;
console.log(list);
lists[5].style.backgroundColor = "red";
lists[5].style.padding = "8px solid";
lists[5].style.fontSize = "50px";
lists[5].style.color = "pink";
let hhh = document.createElement("p");
console.log(hhh);
hhh.textContent = "Abebe beso bela albela ene min agebagn";
var parent = document.getElementById("listofFruits");
parent.prepend(hhh);
parent.appendChild(hhh);
// Connecting Evennts using HTML event handler
let Alex = document.querySelector(".red");
function changeColor() {
  Alex.style.backgroundColor = "red";
}
//connecting events Using TRADITIONAL DOM Event handlers
let change_bgc = document.querySelector("#seven");
change_bgc.onclick = changeBackground;
function changeBackground() {
  document.body.style.backgroundColor = "pink";
}
//DOM level 2 Event listner
let kiwi = document.querySelector("#four");
kiwi.addEventListener("click", function () {
  document.body.style.backgroundColor = "white";
  kiwi.style.color = "green";
  kiwi.style.fontSize = "50px";
});
//to stope default actions
// let linksample = document.querySelector("#linksample");
// linksample.addEventListener("click", function (e) {
//   e.preventDefault();
//   linksample.textContent = "Hellow World";
// });
// using jquery
let li = $("li");
console.log(li);
$("li").even().css("background-color", "green");
console.log(li);
$("li").odd().css("background-color", "lime");
// let Li = $(".red");
// console.log(Li);
// Li.text("Ice-Cream");   or
$(".red").text("Ice-Cream");
// Li.remove();
// let fruit = $("#listofFruits");
// console.log(fruit.html());
// fruit.html("<p>Alemu</p>");
let ll = $("#listofFruits");
ll.prepend("<li class='append'>Added Using Prepend Method</li>");
$("append").css("background-color", "pink");
$("#listofFruits").append("<li class='append'>Added Using append Method</li>");
ll.addClass("abebe");
$(".append").css({
  "background-color": "black",
  color: "white",
  width: "1000px",
});
$("#fmenu").click(function () {
  $("#listofFruits").toggle();
});
// REGULAR Expretions
let str = "Abebe beso bela!";
let G = str.search(/beso/);
console.log(G);
let st = "Abebe beso bela!";
let q = str.replace("bela", "teta");
console.log(q);
let h = str.replace(/b/g, "B");
console.log(h);
let p = str.match(/be/g);
console.log(p);
// REGULAR Expretions using test
let w = /bela/;
let result = w.test(str);
console.log(result);
let b = w.exec(str); //To Excute
console.log(b);



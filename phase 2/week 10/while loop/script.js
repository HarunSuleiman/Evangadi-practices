console.log("Testing while");
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}

function printnumbers() {
  let i = 0;
  while (i < 5) {
    console.log("the value of i is ", i);
    i++;
  }
}
printnumbers();
function listname(students) {
  let i = 0;
  while (i < students.length) {
    console.log(students[i] + " is Evangadi student ");
    i++;
  }
}
listname(["abebe", "alemu", "kemal", "Aster", "sekina"]);
function aaa(students) {
  let x = true;
  i = 0;
  while (x) {
    if (students[i] == "aster") {
      x = false;
    } else {
      console.log(students[i]);
    }

    i++;
  }
}
aaa(["abebe", "alemu", "kemal", "aster", "sekina"]);

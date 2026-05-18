console.log("Testing word");
for (i = 1; i <= 5; i++) {
  console.log(i + " Hellow");
}

let studentspoint = [48, 74, 83, 33, 88, 90, 32, 12];
for (i = 0; i < studentspoint.length; i++) {
  console.log("element " + studentspoint[i]);
}
function print(start, end) {
  for (i = start; i <= end; i++) {
    console.log("Print page number" + i);
  }
}
print(1, 4);
function passorfail(grade) {
  for (i = 0; i < grade.length; i++) {
    if (grade[i] >= 50) {
      console.log("The studen " + i + "   pass");
    } else {
      console.log(" The student " + i + "  fail");
    }
  }
}
passorfail([58, 33, 88, 90, 32, 12, 40, 20, 10]);

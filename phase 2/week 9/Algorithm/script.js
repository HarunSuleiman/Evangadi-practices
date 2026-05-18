function add(a, b) {
  if (typeof a != "number" || typeof b != "number") {
    return "Ican only add numbers.Pleas provide numbers.";
  }

  var c = a + b;
  return c;
}
var sum = add(45, "Google");
console.log(sum);
function add(a, b) {
  if (isNaN(a) || isNaN(b)) {
    return "Ican only add numbers.Pleas provide numbers.";
  }

  var c = parseFloat(a) + parseFloat(b);
  return c;
}
var sum = add(45, 5.4);
console.log(sum);
function triArea(base, height) {
  if (isNaN(base) || isNaN(height)) {
    return "You allowed to provide  numbers only";
  } else if (base <= 0 || height <= 0) {
    return "please provide only posetive numbers";
  } else {
    return (base * height) / 2;
  }
}

console.log(triArea(80, 40));
function footballpoints(a, b, c) {
  if (isNaN(a) || isNaN(b) || isNaN(c)) {
    return "You allowed to provide  numbers only";
  } else if (a <= 0 || b <= 0 || c <= 0) {
    return "please provide only posetive numbers";
  } else {
    return a * 3 + b * 1;
  }
}

console.log(footballpoints(11, 4, 6));
function convertminutetosecond(minute) {
  if (isNaN(minute)) {
    return "please provide numbers";
  } else if (minute <= 0) {
    return "please provide posetive numbers only";
  } else {
    return minute * 60;
  }
}
console.log(convertminutetosecond(5));

function addup(a) {
  if (isNaN(a)) {
    return "please provide numbers only";
  } else if (a < 0) {
    return "please provide posetive numbers only";
  } else {
    let result = 0;
    for (i = 1; i <= a; i++) {
      result = result + i;
    }
    return result;
  }
}
console.log(addup(4));
console.log(addup(13));
console.log(addup(600));
function addup(a) {
  if (isNaN(a)) {
    return "please provide numbers only";
  } else if (a < 0) {
    return "please provide posetive numbers only";
  } else {
    sum = 0;
    let i = 0;
    while (i <= a) {
      sum = sum + i;
      i++;
    }
    return sum;
  }
}
console.log(addup(-4));
console.log(addup(13));
console.log(addup(600));

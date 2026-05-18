function detectword(a) {
  var hiddenword = "";
  for (i = 0; i <= a.length; i++) {
    var singleletter = a.charAt(i);
    if (singleletter == singleletter.toLowerCase()) {
      hiddenword = hiddenword + singleletter;
    }
  }
  return hiddenword;
}

console.log(detectword("ABCDwGGHRoHJTw"));

//Better Way

function detectword(a) {
  let word = "";
  for (i = 0; i <= a.length; i++) {
    let singleletter = a.charAt(i);
    if (singleletter !== singleletter.toUpperCase()) {
      word = word + singleletter;
    }
  }
  return word;
}
console.log(detectword("ABerewGG#$%$#%123324HRoHJTw"));
function detectword(a) {
  let word = a.split("");

  let smallLetter = word.filter(
    (singleletter) => singleletter !== singleletter.toUpperCase()
  );

  smallLetter = smallLetter.join("");
  return smallLetter;
}

console.log(detectword("aGGRbRRTc"));
//nesting 2 arrays
function cannest(arr1, arr2) {
  if (!(Array.isArray(arr1) && Array.isArray(arr2))) {
    return "Both value need to be array";
  }
  let arr1min = Math.min(...arr1);
  console.log(arr1min);
  let arr2min = Math.min(...arr2);
  let arr1max = Math.max(...arr1);
  let arr2max = Math.max(...arr2);
  console.log(arr2max);
  if (arr2min < arr1min && arr2max > arr1max) {
    return true;
  } else {
    return false;
  }
}
console.log(cannest([2, 7, 4, 12, 90], [0, 34, 98, 2, 9, 6]));
// isMagicarray
function isMagicarray(a) {
  var sum = 0;
  for (i = 0; i < a.length; i++) {
    var num = a[i];
    if (num == 2) {
      sum = sum + num;
    }
    let isprime = true;
    if (num > 2) {
      for (j = 2; j < num; j++) {
        if (num % j == 0) {
          isprime = false;
        }
      }
      if (isprime) {
        sum = sum + num;
      }
    }
  }
  if (a[0] == sum) {
    return 1;
  } else {
    return 0;
  }
}
console.log(isMagicarray([21, 3, 7, 9, 11, 4, 6]));
console.log(isMagicarray([11, 3, 5, 80]));
console.log(isMagicarray([8, 3, 5, 80]));

//the sort function
b = [34, 90, 63, 1, 2, 87];
console.log(b.sort());
//sort with our code
function sortfun(s) {
  let number = s;
  let checker = true;
  while (checker) {
    checker = false;
    for (let i = 0; i < number.length - 1; i++) {
      if (number[i] > number[i + 1]) {
        checker = true;
        let temp = number[i];
        number[i] = number[i + 1];
        number[i + 1] = temp;
      }
    }
  }

  return number;
}
console.log(sortfun([50, 10, 40, 80, 9, 5, 4, 6]));
//////////////////// frome Edabit practice
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

function countTrues(arr) {
  let result = arr.filter((value) => value === true).length;
  return result;
}
console.log(countTrues([true, false, true, true, false, false, true]));
function redundant(e) {
  let f1 = e;
  return f1;
}
console.log(redundant("apple"));
function perimeter(letter, num) {
  if (letter === "s") {
    return 4 * num;
  } else if (letter === "c") {
    return 2 * Math.PI * num;
  } else {
    return "Invalid shape it is niether square nor circl!";
  }
}
console.log(perimeter("s", 5));
console.log(perimeter("c", 7));
//Counting Digits
function countDigits(str) {
  let number = str.length;
  return number;
}

console.log(countDigits("22ew35"));
Interview
// let a = 10;
// function multiply(x) {
//   return x * 10;
// }
// let b = multiply(a);
// console.log(b);


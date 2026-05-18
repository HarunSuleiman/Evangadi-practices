var student = {
  firstname: "Abebe",
  lastname: "kebede",
  Group: 3,
  batch: "april-2024 batch",
};
console.log(student);
console.log(student.firstname);
let myfiatcar = {
  name: "fiat",
  model: 500,
  weight: "850kg",
  color: "white",
  start: function () {
    return "start my " + this.name;
  },
  drive: function () {
    return "go foreward";
  },
  break: function () {
    return "press break on my" + this.name;
  },
  stop: function () {
    return "stop my" + this.name;
  },
};
console.log(myfiatcar.name);
console.log(myfiatcar);
console.log(myfiatcar.drive());
console.log(myfiatcar.weight);
console.log(myfiatcar.color);
console.log(myfiatcar.start());
myfiatcar.name = "Tesla";
console.log(myfiatcar.name);
console.log(myfiatcar);
myfiatcar.price = "1,000,000$";
console.log(myfiatcar);
console.log(myfiatcar.price);

function Car(carName, carModel, carWeight, carColor) {
  this.name = carName;
  this.model = carModel;
  this.weight = carWeight;
  this.color = carColor;
  this.start = function () {
    return "start my" + this.name;
  };

  this.drive = function () {
    return "Go forward";
  };

  this.brake = function () {
    return "Press on brake my" + this.name;
  };
}
let myfiat1 = new Car("Toyota", "camry", "100kg", "gray");
let myfiat2 = new Car("Toy", "cam", "900kg", "white");
console.log(myfiat1);
console.log(myfiat2);
myfiat1.age = "Used";
myfiat2.age = "New";
console.log(myfiat2.age);
console.log(myfiat2.brake());

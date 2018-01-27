function calculate(a, b){
    console.log(add(a, b));
    console.log(sub(a, b));
    console.log(mult(a, b));
    console.log(divide(a, b));
}

function add(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

function mult(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}
console.log(calculate(10,3));

// switch(calculate) {
//     case "add":{
//         return add(a, b);
//     }
//     case "sub":{
//         return sub(a, b);
//     }
//     case "mult":{
//         return mult(a, b);
//     }
//     case "divide":{
//         return divide(a, b);
//     }
//     default: {
//         return 0;
//     }
// }


// ======================================


function getInput(){
    var num = prompt("Guess a number");
    var number = parseInt(num);
    return number;
}

var declared = Math.ceil(Math.random()*10)

var num = getInput();

while(num != declared) {
    if(num > declared){
        alert("guess number is too high");
        num = getInput();
    }
    else{
        alert("guess number too low")
        num = getInput();
    }
}
alert("you are a genius!!!!!");






// ======================

var cal = {
    add: function(num1, num2){
        return num1 + num2;
    },
    sub: function(num1, num2){
        return num1 - num2;
    },
    mul: function(num1, num2){
        return num1 * num2;
    }
}

console.log(cal.add(4,9));
console.log(cal.sub(7, 9));
console.log(cal.mul(9,8));

// ======================
// var car = {
//     num_tyer: 4,
//     color: "blue",
//     move: function() {
//         console.log("moving.....");
//     },
//     sound: "voommmmmmm",
//     doors: 4
// }
// var toyota = car;

// console.log(toyota.move);

function vehicle () {
    this.number_tyer = 4;
    this.color = "brown";
    this.move = "its moving very fast";
    this.sound = "vooommmmmmmmm";
    this.doors = 4,
    this.sideMirror = 2;
    this.steering = 1;

}

var car = new vehicle();
var truck = new vehicle();

car.color = "white";
car.doors = 2;

truck.color = "black";
truck.doors = 5;
truck.sideMirror = 3

console.log(car.color);


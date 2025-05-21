"use strict";
// TYPESCRIPT 
// Annotations
// Strings 
let myName = "Kartikey";
console.log(myName);
// Number
let myNum = 64;
myNum += 5;
console.log(myNum);
//Boolean
let tsHard = true;
console.log(tsHard);
//Type Inference (Compiler automatically understands the data type)
let tech = "KT";
let myNumb = 64;
let tsSlow = true;
console.log(tech, myNumb, tsSlow);
console.log(typeof tech, typeof myNumb, typeof tsSlow);
//Any Type (valid for any values but not preferrable always)
let color = "Purple";
color = 20;
console.log(color);
//Function parameters annotation
// regular func
function addOne(num) {
    return num + 1;
}
const result = addOne(3);
console.log(result);
// Arrow func
const double = (x, y) => x * y;
const res = double(5, 2);
console.log(res);
//Default params value
function greet(person = "Anonymous") {
    return `Hello ${person}`;
}
const resl = greet("Kartikey");
console.log(resl);
// Return annotations
//regular func
function double1(p) {
    return p * p;
}
const op = double1(6);
console.log(op);
// arrow func 
const double2 = (x) => x * x;
console.log(double2(7));
// void 
function printMessage(message) {
    console.log(`This is my ${message}`);
}
printMessage("message");
//Never (will never return anything)
function throwError(msg) {
    throw new Error(msg);
}
// Array types 
const nums = [2, 4, 5, 6];
console.log(nums);
nums.push(64);
console.log(nums);
// Multi- dimensional array
const items = [[1, 2, 3, 4], [5, 6, 7, 8]];
console.log(items);
// objects in TS 
const person = {
    firstName: "Kartikey",
    lastname: "Tripathi",
    age: 23
};
console.log(`Name : ${person.firstName} ${person.lastname}`);
console.log(`Age : ${person.age}`);
//factory func
function printUser() {
    return {
        name: "KT",
        location: "Prayagraj"
    };
}
const opt = printUser();
console.log(opt);
const printUserInfo = (user) => {
    return `Name : ${user.name} Age: ${user.age}`;
};
const ret = printUserInfo({ name: "Shruti", age: 25 });
console.log(ret);
const Alice = { name: "Alice", age: 30 };
const Peter = { name: "Peter", age: 13, email: "petertparker@gmail" };
console.log(`Name : ${Alice.name} , Age : ${Alice.age}`);
console.log(`Name : ${Peter.name} , Age : ${Peter.age} , Email : ${Peter.email}`);
const ST = {
    name: "ST",
    age: 44,
    eName: "Sudhanshu",
    id: 640,
};
console.log(`Name : ${ST.name}, age : ${ST.age} , EName : ${ST.eName} , id: ${ST.id}`);
//Union type (| symbol)
let password = ["something", 15];
console.log(password);
// Literal types 
let colorP;
colorP = "red";
// colorP = "blue"   (invalid)
// Tuples in TS
let myVar = ["Kartikey", 24];
console.log(myVar[0]);
console.log(myVar[1]);
const games = ["Football", 24, "A gentleman's game"];
console.log(games);
// enums in TS
var Cricketers;
(function (Cricketers) {
    Cricketers["Batsman"] = "VK";
    Cricketers["Baller"] = "Dale Steyn";
    Cricketers["Wicketkeeper"] = "ABD";
})(Cricketers || (Cricketers = {}));
;
const favCricketer = Cricketers.Batsman;
console.log(favCricketer);
;
const compSpecs = {
    name: "i7",
    ram: 8,
    hdd: 100
};
console.log(compSpecs.name);
console.log(compSpecs.ram);
console.log(compSpecs.hdd);
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
console.log(add(5, 6));
console.log(subtract(10, 5));
const D1 = {
    name: "Jerry",
    breed: "German",
    age: 10,
    printFeature(name, breed, age) {
        return `Name : ${name}, Breed : ${breed}, Life : ${age}`;
    }
};
const yopt = D1.printFeature("Tuffy", "Rott", 10);
console.log(yopt);
;
class Cars {
    start() {
        console.log("Car started!");
    }
    stop() {
        console.log("Car stopped!!");
    }
}
const myCar = new Cars();
myCar.start();
myCar.stop();
const MyCar = {
    brand: "Maruti",
    model: "Swift",
    start() {
        console.log("Car start");
    },
    stop() {
        console.log("Car stop");
    },
};
MyCar.start();
//Generics 
//Generic function
function genFunction(item, defaultValue) {
    return [item, defaultValue];
}
const output = genFunction(10, 20);
const output2 = genFunction("KT", "KP");
console.log(output);
console.log(output2);
// reverse func using generics 
function reversePair(value1, value2) {
    return [value2, value1];
}
const reversed = reversePair("Hello", "Kartikey");
console.log(reversed);
function example(value) {
    if (typeof value === "string") {
        console.log(value.toUpperCase());
    }
    else {
        console.log(value.toFixed(2));
    }
}
example("Hello");
example(10);

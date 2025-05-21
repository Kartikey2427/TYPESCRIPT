// TYPESCRIPT 
// Annotations
// Strings 
let myName: string = "Kartikey";
console.log(myName);

// Number
let myNum: number = 64;
myNum += 5;
console.log(myNum);

//Boolean
let tsHard: boolean = true;
console.log(tsHard);



//Type Inference (Compiler automatically understands the data type)
let tech = "KT";
let myNumb = 64;
let tsSlow = true;

console.log(tech, myNumb, tsSlow);
console.log(typeof tech, typeof myNumb, typeof tsSlow);



//Any Type (valid for any values but not preferrable always)
let color: any = "Purple";
color = 20
console.log(color);

//Function parameters annotation
// regular func

function addOne(num: number) {
    return num + 1;
}

const result = addOne(3);
console.log(result);

// Arrow func
const double = (x: number, y: number) => x * y;
const res = double(5, 2);
console.log(res);



//Default params value
function greet(person: string = "Anonymous") {
    return `Hello ${person}`;
}

const resl = greet("Kartikey");
console.log(resl);



// Return annotations
//regular func
function double1(p: number) {
    return p * p;
}

const op = double1(6);
console.log(op);

// arrow func 
const double2 = (x: number) => x * x;
console.log(double2(7));

// void 
function printMessage(message: string): void {
    console.log(`This is my ${message}`);
}

printMessage("message");



//Never (will never return anything)
function throwError(msg: string): never {
    throw new Error(msg);
}



// Array types 
const nums: number[] = [2, 4, 5, 6];
console.log(nums);
nums.push(64);
console.log(nums);

// Multi- dimensional array
const items: number[][] = [[1, 2, 3, 4], [5, 6, 7, 8]];
console.log(items);



// objects in TS 
const person: { firstName: string; lastname: string; age: number } = {
    firstName: "Kartikey",
    lastname: "Tripathi",
    age: 23
};

console.log(`Name : ${person.firstName} ${person.lastname}`);
console.log(`Age : ${person.age}`);



//factory func
function printUser(): { name: string, location: string } {
    return {
        name: "KT",
        location: "Prayagraj"
    }
}

const opt = printUser();
console.log(opt);



//Type Alias
type User = {
    name: string,
    age: number
};

const printUserInfo = (user: User) => {
    return `Name : ${user.name} Age: ${user.age}`;
};

const ret = printUserInfo({ name: "Shruti", age: 25 });
console.log(ret);



// Optional properties (declared with a question mark)
type UserInfo = {
    name: string,
    age: number,
    email?: string
};

const Alice: UserInfo = { name: "Alice", age: 30 };
const Peter: UserInfo = { name: "Peter", age: 13, email: "petertparker@gmail" };

console.log(`Name : ${Alice.name} , Age : ${Alice.age}`);
console.log(`Name : ${Peter.name} , Age : ${Peter.age} , Email : ${Peter.email}`);



// Intersection types (using & symbol) 
type Person = {
    name: string,
    age: number
};

type Employee = {
    eName: string,
    id: number
};

type PersonAndEmployee = Person & Employee;

const ST: PersonAndEmployee = {
    name: "ST",
    age: 44,
    eName: "Sudhanshu",
    id: 640,
};

console.log(`Name : ${ST.name}, age : ${ST.age} , EName : ${ST.eName} , id: ${ST.id}`);


//Union type (| symbol)
let password: (string | number)[] = ["something", 15];
console.log(password);



// Literal types 
let colorP: "red" | "green" | "yellow";
colorP = "red";
// colorP = "blue"   (invalid)


// Tuples in TS
let myVar: [string, number] = ["Kartikey", 24];
console.log(myVar[0]);
console.log(myVar[1]);

const games: [string, number, string] = ["Football", 24, "A gentleman's game"];
console.log(games);



// enums in TS
enum Cricketers {
    Batsman = "VK",
    Baller = "Dale Steyn",
    Wicketkeeper = "ABD"
};

const favCricketer = Cricketers.Batsman;
console.log(favCricketer);



// Interface in TS 
interface Computer {
    name: string,
    ram: number,
    hdd: number
};

const compSpecs: Computer = {
    name: "i7",
    ram: 8,
    hdd: 100
};

console.log(compSpecs.name);
console.log(compSpecs.ram);
console.log(compSpecs.hdd);



// for functions
// ( x : type , y : type ) : return_type
interface calcOperation {
    (x: number, y: number): number;
}

const add: calcOperation = (a, b) => a + b;
const subtract: calcOperation = (a, b) => a - b;

console.log(add(5, 6));
console.log(subtract(10, 5));



// extending the interfaces
interface Animal {
    name: string,
    age: number,
    printFeature(name: string, blood: string, age: number): string | number;
}

interface Dog extends Animal {
    breed: string;
}

const D1: Dog = {
    name: "Jerry",
    breed: "German",
    age: 10,
    printFeature(name: string, breed: string, age: number): string | number {
        return `Name : ${name}, Breed : ${breed}, Life : ${age}`;
    }
};

const yopt = D1.printFeature("Tuffy", "Rott", 10);
console.log(yopt);



// Interfaces using class
interface Vehicle {
    start(): void,
    stop(): void
};

class Cars implements Vehicle {
    start(): void {
        console.log("Car started!");
    }
    stop(): void {
        console.log("Car stopped!!");
    }
}

const myCar = new Cars();
myCar.start();
myCar.stop();



// Declaration merging 
interface Car {
    brand: string,
    start(): void
}

interface Car {
    model: string,
    stop(): void
}

const MyCar: Car = {
    brand: "Maruti",
    model: "Swift",
    start() {
        console.log("Car start");
    },
    stop() {
        console.log("Car stop");
    },
}

MyCar.start();



//Generics 
//Generic function
function genFunction<Type>(item: Type, defaultValue: Type): [Type, Type] {
    return [item, defaultValue];
}

const output = genFunction<number>(10, 20);
const output2 = genFunction<string>("KT", "KP");
console.log(output);
console.log(output2);

// reverse func using generics 
function reversePair<T, U>(value1: T, value2: U): [U, T] {
    return [value2, value1];
}

const reversed = reversePair("Hello", "Kartikey");
console.log(reversed);



// Type Narrowing(Possible in 3 ways : type of , instance of , intersection types)
type MyType = string | number;

function example(value: MyType): void {
    if (typeof value === "string") {
        console.log(value.toUpperCase());
    }
    else {
        console.log(value.toFixed(2));
    }
}

example("Hello");
example(10);



// Declaration files ( extension -> .d.ts )
// console.log(document);



// Axios ( is a library which comes with the declaration files)
import axios, { AxiosResponse } from "axios";

interface Todo {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}

const fetchData = async () => {
    try {

        const response: AxiosResponse<Todo> = await axios.get("https://jsonplaceholder.typicode.com/todos/1");

        console.log("Todo :", response.data);


    } catch (error: any) {

        if (axios.isAxiosError(error)) {
            console.error("Axios Error ", error.message);

            if (error.response) {
                console.log("Status : ", error.response.status);
                console.log("Data : ", error.response.data);
            }

        } else {
            console.error("Error", error.message);
        }

    }
}

fetchData();



// express with ts

import express, { Request, Response } from "express";

const app = express();

const port = 3000;

app.get("/", (req: Request, res: Response) => {
    res.send("Hello, Typescript with Express!")
});

app.listen(port,
    () => console.log(`server running on port ${port}`)
);
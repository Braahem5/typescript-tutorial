"use strict";
let sales = 123456789;
let course = "TypeScript";
let is_pulished = true;
let level;
function render(document) {
    console.log(document);
}
let numbers = [];
let user = [1, "Ibrahim"];
let mySize = 2;
console.log(`my size ${mySize}`);
function caluculatTax(income, taxYear = 2022) {
    if (income > 50000 && taxYear < 2022) {
        let taxRate = 0.2;
        return income * taxRate;
    }
    return income;
}
caluculatTax(55000, 2019);
let employeeUsingObject = {
    id: 1,
    name: "Ibrahim",
    retire: (date) => {
        console.log(date);
    },
};
let employeeUsingAlias = {
    id: 1,
    name: "ibrahim",
    retire: (date) => {
        console.log("retired on " + date);
    },
};
const centerPoint = { x: 0, y: 0 };
const myCircle = { center: centerPoint, radius: 4 };
function KgToLbs(weight) {
    if (typeof weight === "number") {
        let variable = weight * 2.2;
        return variable;
    }
    else {
        let variable = parseInt(weight) * 2.2;
        return variable;
    }
}
KgToLbs(10);
KgToLbs("10kg");
let textBox = {
    drag: () => { },
    resize: () => { },
};
let quantity = 100;
function greet(name) {
    if (name)
        console.log(name.toLocaleUpperCase());
    else
        console.log("Hola!");
}
greet(null);
const john = {
    name: "john",
    age: 25,
    address: "123 Main St, New York",
};
const JonhNameAndAge = {
    name: "John",
    age: 36,
};
const JohnWithoutAge = {
    name: "John",
    address: "123 Main St New York",
};
function getCustomer(id) {
    return id === 0 ? null : { birthday: new Date() };
}
let customer = getCustomer(1);
console.log(customer === null || customer === void 0 ? void 0 : customer.birthday);
const arr = [1, 2];
console.log(arr === null || arr === void 0 ? void 0 : arr[1]);
let log = (year) => {
    let date = new Date();
    date.setFullYear(year);
    return date;
};
console.log(log === null || log === void 0 ? void 0 : log(2002));
class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    makeSound() {
        console.log("I am an animal");
    }
}
const myAnimal = new Animal("Parrot", 3);
console.log(`Name: ${myAnimal.name}, Age: ${myAnimal.age}`);
myAnimal.makeSound();
function greetPerson(person) {
    if (typeof person === "object") {
        const p = person;
        console.log(`Hello ${p.firstName}!`);
    }
    else {
        throw Error("Invalid input");
    }
}
const Ibrahim = { firstName: "Ibrahim", lastName: "Bajepade", age: 21 };
greetPerson(Ibrahim);
class Culture {
    constructor(firstName, lastName, age, national) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.national = national;
    }
    greet() {
        return (`Hello my name is ${this.firstName + " " + this.lastName} and i am from ${this.national.country}. my main language is ${this.national.language}` +
            (this.national.otherLanguage
                ? `and i also speak ${this.national.otherLanguage}`
                : ""));
    }
}
function addressPeople(welcomeWord) {
    if (!welcomeWord.firstName && !welcomeWord.lastName) {
        throw new Error("First name and Last Name are required");
    }
    if (welcomeWord instanceof Culture) {
        switch (welcomeWord.national.nationality) {
            case "Russian":
                console.log(welcomeWord.greet());
                console.log(`Приветствую вас ${welcomeWord.firstName} ${welcomeWord.lastName}.`);
                break;
            case "Chinese":
                console.log(welcomeWord.greet());
                console.log(`你好，${welcomeWord.firstName} ${welcomeWord.lastName}.`);
                break;
            default:
                console.log(welcomeWord.greet());
                console.log(`Hello, ${welcomeWord.firstName} ${welcomeWord.lastName}.`);
        }
    }
}
const samplePerson = {
    nationality: "Chinese",
    language: "Mandarin",
    country: "china",
    otherLanguage: "English",
};
const Audience = new Culture("Max", "Kushut", 25, samplePerson);
addressPeople(Audience);
function getArea(shape) {
    if (isCircle(shape)) {
        return Math.round(Math.PI * Math.pow(shape.radius, 2));
    }
    else if (isRectangle(shape)) {
        return shape.width * shape.length;
    }
    else {
        const exhaustiveCheck = shape;
        return exhaustiveCheck;
    }
}
function isCircle(shape) {
    return shape.kind === "circle";
}
function isRectangle(shape) {
    return shape.kind === "rectangle";
}
const cir = { kind: "circle", radius: 5 };
const rec = { kind: "rectangle", width: 4, length: 6 };
console.log(`The shape is ${rec.kind} and area is ${getArea(rec)}`);
//# sourceMappingURL=index.js.map
//variable syntaxs
let sales: number = 123_456_789;
let course: string = "TypeScript";
let is_pulished: boolean = true;
let level;

// Any
function render(document: any) {
  console.log(document);
}

// Array
let numbers: number[] = [];

// Tuprle
let user: [number, string] = [1, "Ibrahim"];

// Enum
const enum Size {
  Small = 1,
  Medium,
  Large,
}
let mySize: Size = Size.Medium;
console.log(`my size ${mySize}`);

//Function
function caluculatTax(income: number, taxYear = 2022): number {
  if (income > 50_000 && taxYear < 2022) {
    let taxRate: number = 0.2;
    return income * taxRate;
  }
  return income;
}

caluculatTax(55_000, 2019);

// Object
let employeeUsingObject: {
  //to make the id an readOnly properties
  readonly id: number;
  name: string;
  age?: number; //this properties can be optional when intiallizing the object because of the ? symbol
  retire: (date: Date) => void;
} = {
  id: 1,
  name: "Ibrahim",
  retire: (date: Date) => {
    console.log(date);
  },
};

// Type Alias
type Employee = {
  readonly id: number;
  name: string;
  age?: number;
  retire: (date: Date) => void;
};

let employeeUsingAlias: Employee = {
  id: 1,
  name: "ibrahim",
  retire: (date) => {
    console.log("retired on " + date);
  },
};

//*************** complex use of Alias */
type Point = { x: number; y: number };
type Circle = { center: Point; radius: number };

const centerPoint: Point = { x: 0, y: 0 };
const myCircle: Circle = { center: centerPoint, radius: 4 };

// Union Type
function KgToLbs(weight: number | string): number {
  if (typeof weight === "number") {
    let variable: number = weight * 2.2;
    return variable;
  } else {
    let variable: number = parseInt(weight) * 2.2;
    return variable;
  }
}
KgToLbs(10);
KgToLbs("10kg");

// Intersection Type
interface Draggable {
  drag: () => void;
}
interface Resizable {
  resize: () => void;
}

interface UIWidget extends Draggable, Resizable {}

let textBox: UIWidget = {
  drag: () => {},
  resize: () => {},
};

// Literal Type;
type Quantity = 50 | 100;
let quantity: Quantity = 100;

type Metric = "cm" | "inch";

//*********/ Nullable Type.
function greet(name: string | null | undefined) {
  if (name) console.log(name.toLocaleUpperCase());
  else console.log("Hola!");
}
greet(null);

//**********/ Mapped type(is used for adding a specific change to an existing object properties[all the properties])
type Person = {
  name: string;
  age: number;
  address: string;
};
type ReadonlyPerson = {
  readonly [k in keyof Person]: Person[k]; //maping existing type to be read only
  //[K in keyof Person]?: Person[k]; (maping existing type to be optional)
  //[K in keyof Person]: Person[k] | null; (mapping exiting type to be able to hold null value)
  //[K in keyof Person]: string; (mapping existing type. now all property are strings).
};
const john: ReadonlyPerson = {
  name: "john",
  age: 25,
  address: "123 Main St, New York",
};

type PersonNameAndAge = Pick<Person, "name" | "age">;

const JonhNameAndAge: PersonNameAndAge = {
  name: "John",
  age: 36,
};

type PersonNameAddress = Omit<Person, "age">;

const JohnWithoutAge: PersonNameAddress = {
  name: "John",
  address: "123 Main St New York",
};

//Optional Chaining
type Customer = {
  birthday: Date;
};

function getCustomer(id: number): Customer | null | undefined {
  return id === 0 ? null : { birthday: new Date() };
}

let customer = getCustomer(1);
//Optional property access operator
console.log(customer?.birthday);

//Optional element access operator
const arr = [1, 2];
console.log(arr?.[1]); // Optional access

//Optional call
let log: any = (year: number): Date => {
  let date = new Date();
  date.setFullYear(year);
  return date;
};
console.log(log?.(2002)); //Optional call

//************* Classes */
class Animal {
  //properties
  name: string;
  age: number;

  //constructor
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  makeSound() {
    console.log("I am an animal");
  }
}

// Create an instance of the class
const myAnimal = new Animal("Parrot", 3);

//Access properties
console.log(`Name: ${myAnimal.name}, Age: ${myAnimal.age}`);

//Call methods
myAnimal.makeSound();

///****************** Type guarding  ******************/
//Example 1 (using the typeof operator)
interface Human {
  firstName: string;
  lastName: string;
  age?: number;
}
function greetPerson(person: Human) {
  if (typeof person === "object") {
    const p = person as Human;
    console.log(`Hello ${p.firstName}!`);
  } else {
    throw Error("Invalid input");
  }
}
const Ibrahim: Human = { firstName: "Ibrahim", lastName: "Bajepade", age: 21 };
greetPerson(Ibrahim);

//Example 2 (Instanceof Type Guards)
interface nationalInfo {
  nationality: string;
  language: string;
  country: string;
  otherLanguage?: string;
}
class Culture implements Human {
  firstName: string;
  lastName: string;
  age?: number;
  national: nationalInfo;
  constructor(
    firstName: string,
    lastName: string,
    age: number,
    national: nationalInfo
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.national = national;
  }
  greet() {
    return (
      `Hello my name is ${this.firstName + " " + this.lastName} and i am from ${
        this.national.country
      }. my main language is ${this.national.language}` +
      (this.national.otherLanguage
        ? `and i also speak ${this.national.otherLanguage}`
        : "")
    );
  }
}

function addressPeople(welcomeWord: any): void {
  if (!welcomeWord.firstName && !welcomeWord.lastName) {
    throw new Error("First name and Last Name are required");
  }
  if (welcomeWord instanceof Culture) {
    switch (welcomeWord.national.nationality) {
      case "Russian":
        console.log(welcomeWord.greet());
        console.log(
          `Приветствую вас ${welcomeWord.firstName} ${welcomeWord.lastName}.`
        );
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

const samplePerson: nationalInfo = {
  nationality: "Chinese",
  language: "Mandarin",
  country: "china",
  otherLanguage: "English",
};
const Audience = new Culture("Max", "Kushut", 25, samplePerson);
addressPeople(Audience);

//Example 3 (User-Defined Type Guards).
interface Circle1 {
  kind: "circle";
  radius: number;
}
interface Rectangle {
  kind: "rectangle";
  width: number;
  length: number;
}

// Define the Shape type as a union of Circle and Rectangle
type Shape = Circle1 | Rectangle;

//function to calculate the area of the circle and rectangle.
function getArea(shape: Shape): number {
  if (isCircle(shape)) {
    // Use the formula for the area of a circle
    return Math.round(Math.PI * Math.pow(shape.radius, 2));
  } else if (isRectangle(shape)) {
    // Use the formula for the area of a rectangle
    return shape.width * shape.length;
  } else {
    // TypeScript knows that this case is exhaustive
    const exhaustiveCheck: never = shape;
    return exhaustiveCheck;
  }
}

// Implement type guards for Circle and Rectangle
function isCircle(shape: Shape): shape is Circle1 {
  return shape.kind === "circle";
}
function isRectangle(shape: Shape): shape is Rectangle {
  return shape.kind === "rectangle";
}

// Test the calculateArea function with different shapes
const cir: Shape = { kind: "circle", radius: 5 };
const rec: Shape = { kind: "rectangle", width: 4, length: 6 };
console.log(`The shape is ${rec.kind} and area is ${getArea(rec)}`);

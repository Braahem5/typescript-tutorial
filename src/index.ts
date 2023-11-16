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
}

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

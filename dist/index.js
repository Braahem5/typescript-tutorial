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
//# sourceMappingURL=index.js.map
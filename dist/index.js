// Objects
function printCar(car) {
    let str = `${car.make} ${car.model} ${car.year}`;
    console.log(str);
}
// Indexing Signature
const phones = {};
phones.fax = { country: "India", area: "Bhopal", number: "8765458976" };
phones.work = { area: "Bengaluru", country: "India", number: "8765358999" };
// Tuples: Almost same as arrays, but positioning / order of the elements matters matters
let myCar = [2002, "Toyota", "Corolla"];
// let myCar2: [number, string, string] = ["Toyota", 2002, "Corolla"] — This will give error
const numPair = [4, 5];
// Union Type in action — the OR | operator
function flipCoin() {
    if (Math.random() > 0.5)
        return "heads";
    else
        return "tails";
}
function getUserInfo() {
    if (flipCoin() === "heads") {
        return ["success", { name: "Mike", email: "mike@gmail.com" }];
    }
    else {
        return ["error", new Error("The coin landed with a tail")];
    }
}
const outcome = getUserInfo();
const [first, second] = outcome;
if (second instanceof Error) {
    // do something
}
else {
    // access the email
}
// Discriminated Unions
if (outcome[0] === "error") {
    outcome;
}
else {
    outcome;
}
export function mayBeGetUserInfo() {
    if (Math.random() > 0.5) {
        return ["success", { name: "Mike North", email: "mike@gmail.com" }];
    }
    else {
        return ["error", Error("The coin landed on tails")];
    }
}
const newYearsEve = Object.assign(Object.assign({}, new Date()), { getReason: () => "Last day of the year" });
function printUserInfo(user) {
    console.log(user.name);
}
// Inheritance
class Animal {
    eat(food) {
        console.log(food);
    }
}
class Dog extends Animal {
    bark() {
        return "Wolf";
    }
}
class Wolf {
    bark() {
        return "Wolf";
    }
    eat(food) {
        console.log("food");
    }
}

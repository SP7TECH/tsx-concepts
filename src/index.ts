// Objects

function printCar(car: {
  make: string;
  model: string;
  year: number;
  chargeVoltage: number | undefined;
}) {
  let str = `${car.make} ${car.model} ${car.year}`;
  console.log(str);
}

// Indexing Signature

const phones: {
  [k: string]: {
    country: string;
    area: string;
    number: string;
  };
} = {};

phones.fax = { country: "India", area: "Bhopal", number: "8765458976" };
phones.work = { area: "Bengaluru", country: "India", number: "8765358999" };

// Tuples: Almost same as arrays, but positioning / order of the elements matters matters

let myCar: [number, string, string] = [2002, "Toyota", "Corolla"];
// let myCar2: [number, string, string] = ["Toyota", 2002, "Corolla"] — This will give error

const numPair: [number, number] = [4, 5];

// Union Type in action — the OR | operator

function flipCoin(): "heads" | "tails" {
  if (Math.random() > 0.5) return "heads";
  else return "tails";
}

function getUserInfo():
  | ["success", { name: string; email: string }]
  | ["error", Error] {
  if (flipCoin() === "heads") {
    return ["success", { name: "Mike", email: "mike@gmail.com" }];
  } else {
    return ["error", new Error("The coin landed with a tail")];
  }
}

const outcome = getUserInfo();
const [first, second] = outcome;

if (second instanceof Error) {
  // do something
} else {
  // access the email
}

// Discriminated Unions

if (outcome[0] === "error") {
  outcome;
} else {
  outcome;
}

// Type Alias

type UserInfoOutcomeSuccess = ["success", { name: string; email: string }];
type UserInfoOutcomeError = ["error", Error];

type UserInfoOutcome = UserInfoOutcomeSuccess | UserInfoOutcomeError;

export function mayBeGetUserInfo(): UserInfoOutcome {
  if (Math.random() > 0.5) {
    return ["success", { name: "Mike North", email: "mike@gmail.com" }];
  } else {
    return ["error", Error("The coin landed on tails")];
  }
}

// Inheritance with Type Aliases

type SpecialDate = Date & { getReason(): string };

const newYearsEve: SpecialDate = {
  ...new Date(),
  getReason: () => "Last day of the year",
};

// Interfaces

interface UserInfo {
  name: string;
  email: string;
}

function printUserInfo(user: UserInfo) {
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

interface AnimalLike {
  eat(food): void;
}

class Wolf implements AnimalLike {
  bark() {
    return "Wolf";
  }

  eat(food) {
    console.log("food");
  }
}

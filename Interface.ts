interface AnimalLike {
  isAlive(): boolean;
}

interface AnimalLike {
  eat(food): void;
}

function feed(animal: AnimalLike) {
  animal.eat;

  animal.isAlive;
}

// Difference between Type Aliases & Interfaces — Interfaces can be extended and declared again

// Below code produces an error

/*
type Animal = {
  name: string
}

type Animal = {
  breed: string
}
*/

// Another Example

// There are two main tools to declare the shape of an
// object: interfaces and type aliases.
//
// They are very similar, and for the most common cases
// act the same.

type BirdType = {
  wings: 2;
};

interface BirdInterface {
  wings: 2;
}

const bird1: BirdType = { wings: 2 };
const bird2: BirdInterface = { wings: 2 };

// Because TypeScript is a structural type system,
// it's possible to intermix their use too.

const bird3: BirdInterface = bird1;

// They both support extending other interfaces and types.
// Type aliases do this via intersection types, while
// interfaces have a keyword.

type Owl = { nocturnal: true } & BirdType;
type Robin = { nocturnal: false } & BirdInterface;

interface Peacock extends BirdType {
  colourful: true;
  flies: false;
}
interface Chicken extends BirdInterface {
  colourful: false;
  flies: false;
}

let owl: Owl = { wings: 2, nocturnal: true };
let chicken: Chicken = { wings: 2, colourful: false, flies: false };

// Below code will produce error

// owl = chicken;
// chicken = owl;

interface Kitten {
  purrs: boolean;
}

interface Kitten {
  colour: string;
}

// Below code will produce error

// type Puppy = {
//   color: string;
// };

// type Puppy = {
//   toys: number;
// };

// Recursive Types

type NestedNumbers = number | NestedNumbers[];
const numbers: NestedNumbers = [1, [2, 3, [4, 5, [6], 7], 8], 9];

if (typeof numbers !== "number") {
  numbers.push(21);

  // numbers.push("this will not work")
}

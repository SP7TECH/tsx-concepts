function feed(animal) {
    animal.eat;
    animal.isAlive;
}
const bird1 = { wings: 2 };
const bird2 = { wings: 2 };
// Because TypeScript is a structural type system,
// it's possible to intermix their use too.
const bird3 = bird1;
let owl = { wings: 2, nocturnal: true };
let chicken = { wings: 2, colourful: false, flies: false };
const numbers = [1, [2, 3, [4, 5, [6], 7], 8], 9];
if (typeof numbers !== "number") {
    numbers.push(21);
    // numbers.push("this will not work")
}

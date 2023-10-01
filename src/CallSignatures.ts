interface TwoNumberCalculation {
  (x: number, y: number): number;
}

type TwoNumberCalc = (x: number, y: number) => number;

const add = (x, y) => x + y;
console.log(add(5, 4));

const subtract = (x: number, y: number) => x - y;
console.log(subtract(12, 4));

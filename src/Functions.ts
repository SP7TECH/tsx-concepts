// the void type

function invokeInTwoSeconds(callback: () => undefined) {
  setTimeout(() => callback, 2000);
}

function invokeInThreeSeconds(callback: () => void) {
  setTimeout(() => callback, 3000);
}

const values: number[] = [];

// invokeInTwoSeconds(() => values.push(5))
invokeInThreeSeconds(() => values.push(10));

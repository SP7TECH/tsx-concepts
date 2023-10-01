// the void type
function invokeInTwoSeconds(callback) {
    setTimeout(() => callback, 2000);
}
function invokeInThreeSeconds(callback) {
    setTimeout(() => callback, 3000);
}
const values = [];
// invokeInTwoSeconds(() => values.push(5))
invokeInThreeSeconds(() => values.push(10));

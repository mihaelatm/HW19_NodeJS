// ///Task_1

// const sumEvenNumbers = (numbers: number[]): number => {
//   return numbers
//     .filter((num) => num % 2 === 0)
//     .reduce((sum, num) => sum + num, 0);
// };

// const numbers = [3, 8, 7, 2, 6, 10];
// console.log(sumEvenNumbers(numbers));

// ///Task_2

// interface StringToBooleanFunction {
//   (str: string): boolean;
// }

// const isStringEmpty: StringToBooleanFunction = (str: string): boolean => {
//   return str.trim().length === 0;
// };

// console.log(isStringEmpty(""));
// console.log(isStringEmpty("Hello"));
// console.log(isStringEmpty(" "));

// ///Task_3

// type Compare<T> = (a: T, b: T) => boolean;

// const areStringEqual: Compare<string> = (a, b) => a === b;
// const areNumbersEqual: Compare<number> = (a, b) => a === b;

// console.log(areStringEqual("Hello", "Hello"));
// console.log(areNumbersEqual(3, 3));

//Task_4

function getLastElement<T>(array: T[]): T | undefined {
  if (array.length === 0) {
    return undefined;
  }
  return array[array.length - 1];
}

const numbers = [5, 8, 3, 15, 6, 7];
const strings = ["laptop", "mouse", "keyboard", "monitor"];
const emptyArray: number[] = [];

console.log(getLastElement(numbers));
console.log(getLastElement(strings));
console.log(getLastElement(emptyArray));

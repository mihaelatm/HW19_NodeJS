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

///Task_3

type Compare<T> = (a: T, b: T) => boolean;

const areStringEqual: Compare<string> = (a, b) => a === b;
const areNumbersEqual: Compare<number> = (a, b) => a === b;

console.log(areStringEqual("Hello", "Hello"));
console.log(areNumbersEqual(3, 3));

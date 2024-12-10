///Task_1

const sumEvenNumbers = (numbers: number[]): number => {
  return numbers
    .filter((num) => num % 2 === 0)
    .reduce((sum, num) => sum + num, 0);
};

const numbers = [3, 8, 7, 2, 6, 10];
console.log(sumEvenNumbers(numbers));

///Task_2

interface StringToBooleanFunction {
  (str: string): boolean;
}

const isStringEmpty: StringToBooleanFunction = (str: string): boolean => {
  return str.trim().length === 0;
};

console.log(isStringEmpty(""));
console.log(isStringEmpty("Hello"));
console.log(isStringEmpty(" "));

///Task_3

type CompareStrings = (a: string, b: string) => boolean;

const areStringsEqual: CompareStrings = (a, b) => {
  return a === b;
};

const result = areStringsEqual("hello", "hello");
console.log(result);

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

//Task_ 5

function makeTriple<T>(a: T, b: T, c: T): T[] {
  return [a, b, c];
}

const numbers = makeTriple(1, 2, 3);
const strings = makeTriple("laptop", "mouse", "keyboard");
const booleans = makeTriple(true, false, true);

console.log(numbers);
console.log(strings);
console.log(booleans);

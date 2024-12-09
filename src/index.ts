///Task_

const sumEvenNumbers = (numbers: number[]): number => {
  return numbers
    .filter((num) => num % 2 === 0)
    .reduce((sum, num) => sum + num, 0);
};

const numbers = [3, 8, 7, 2, 6, 10];
console.log(sumEvenNumbers(numbers));

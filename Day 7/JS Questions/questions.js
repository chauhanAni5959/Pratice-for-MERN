const arr = [1, 2, 2, 3, 3, 6, 7];

const square = arr
  .map((num) => num * num)
  .filter((num) => num % 2 == 0);

console.log(square);

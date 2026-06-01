function Practice(arr) {
  let sorted = arr.sort((a, b) => a - b);

  return sorted;
}

console.log(Practice([4, 3, 3, 5, 2, 2, 8, 9, 9]));

function Pratice2(arr) {
  const answer = arr.map((num) => (num = num.legth > 1));
  return answer;
}
console.log(Pratice2([4, 3, 3, 5, 2, 2, 8, 9, 9]));

function FilterWord() {
  const arr = [1, 2, 2, 3, 4, 4, 5];
  const answer = arr.filter((num)=> {
    return num<= 3;
  })
  return answer;
}
console.log(FilterWord());




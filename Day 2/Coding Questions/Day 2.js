function RemoveDuplicate(...arr) {
  return [...new Set(arr)];
}

function findFrequency(arr) {
  const frequency = {};

  for (let i = 0; i < arr.length; i++) {
    let item = arr[i];
    if (frequency[item] === undefined) {
      frequency[item] = 1;
    } else {
      frequency[item] += 1;
    }
  }

  return frequency;
}

// Test Cases
console.log(findFrequency([1, 2, 2, 3, 4, 4, 4, 5, 1]));
// Output: { '1': 2, '2': 2, '3': 1, '4': 3, '5': 1 }

console.log(
  findFrequency(["apple", "banana", "apple", "orange", "banana", "apple"]),
);
// Output: { apple: 3, banana: 2, orange: 1 }

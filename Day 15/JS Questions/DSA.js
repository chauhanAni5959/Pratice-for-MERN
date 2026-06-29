// Today i am going to learn about Hashing in JS
// I have only three questions in my mind first one is what is hashing, second one is how to implement hashing in JS and third one is what are the use cases of hashing in real world applications.

function ProblemNo1(str) {
  // input - loveleetcode
  // output - 2
  // first we need to create a map to store the frequency
  const frequencyMap = new Map();
  // check the frequency
  for (let char of str) {
    frequencyMap.set(char, (frequencyMap.get(char) || 0) + 1);
  }

  // now we need to find the first non-repeating character
  for (let i = 0; i < str.length; i++) {
    if (frequencyMap.get(str[i]) === 1) {
      console.log(i);
      return i;
    }
  }
}

ProblemNo1("loveleetcode");

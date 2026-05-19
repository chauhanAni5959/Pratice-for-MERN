function ReverseString(str) {
  let ReversedStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    ReversedStr = ReversedStr + str[i];
  }
  return ReversedStr;
}

function ReverseWord(str) {
  let str1 = str.split(" ");
  let answer = str1.reverse().join(" ");
  console.log(answer);
}

function Palindrome(str) {
  let removeSpaceStr = ""
  for(let i = 0; i <= str.length - 1; i++){
   if(str[i] != ' '){
      removeSpaceStr = removeSpaceStr + str[i];
      
    }

  }
  let ReversedStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    if(str[i] != ' '){
      ReversedStr = ReversedStr + str[i];
      
    }
  }
  // console.log(ReversedStr);

  return removeSpaceStr === ReversedStr;
}

function RemoveDuplicate(arr){
  arr.sort();
  console.log(arr);
  for(let i = 0 ; i < arr.length - 1; i++){
    

  }

}
console.log(RemoveDuplicate([1, 2, 2, 3, 4, 4, 5, 1, 6]));

let myPromise = new Promise((resolve, reject) => {
  let success = true;
  if (success) {
    resolve("The data has loaded successfully!");
  } else {
    reject("There was an error loading the data.");
  }
});

let mypromise2 = new Promise((resolve, reject) => {
  let str = "My name is Ankit";
  let str1 = "My name is Ankit";

  if (str === str1) {
    resolve("Both are same");
  } else {
    reject("Both are different!");
  }
});
let promise3 = new Promise((resolve, reject) => {
  let success = true;
  if (success) {
    resolve("Resolved !");
  } else {
    reject("Rejected!");
  }
});

myPromise.then((result) => {
  console.log(result);
});

mypromise2.then((result) => {
  console.log(result);
});

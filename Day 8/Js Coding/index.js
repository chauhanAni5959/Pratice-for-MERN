const fs = require("fs");

console.log("I am 1");

fs.writeFile("mynewfile3.txt", "Hello content!", (err) => {
  if (err) throw err;
  console.log("Saved!");
});
console.log("File Data -> " + data);

console.log("I will print after the file data");

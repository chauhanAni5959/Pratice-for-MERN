const obj = {
  name: "Ankit Singh",
  age: "23",
  address: {
    House_No: "4/22 ",
    Area: "Usmapur colony juhi gaushala",
  },
};

const obj1 = { ...obj };

obj.name = "Anjali";
obj.age = 22;
obj.address.House_No = "127/128";
console.log(obj1);
console.log(obj);
// console.log(obj);

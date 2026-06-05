const original = {
  name: "Ankit",
  skills: ["JavaScript", "React"],
  address: { city: "Lucknow" }
};

// Create a deep copy
const deepCopy = structuredClone(original);

// Modify the nested data
deepCopy.address.city = "Delhi";
deepCopy.skills.push("Node.js");

console.log(original.address.city); // "Lucknow" (Unchanged! Safe.)
console.log(deepCopy.address.city);  // "Delhi"
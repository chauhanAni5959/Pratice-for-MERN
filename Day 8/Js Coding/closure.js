function createGreeting(greetingWord) {
  // This is the outer function scope
  
  return function(name) {
    // This is the inner function (the closure)
    console.log(`${greetingWord}, ${name}!`);
  };
}

const sayHello = createGreeting("Hello");
const sayHi = createGreeting("Hi");

sayHello("Ankit"); // Output: Hello, Ankit!
sayHi("Lydia");    // Output: Hi, Lydia!
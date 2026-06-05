setTimeout(() => {
  console.log("I am called after 2 sec!");
}, 2000);

setInterval(() => {
  let time = 1;
  console.log(time);
  time = time + 1;
}, 1000);

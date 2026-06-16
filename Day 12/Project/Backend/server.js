const app = require("./src/app");
const connectDB = require("./src/db/db");

// DB connection
connectDB();


app.listen(3000, () => {
  console.log("I am running on PORT 3000");
});

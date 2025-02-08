const express = require("express");
const userRouter = require("./routes/user");
require("dotenv").config();
const app = new express();

app.use("/users", userRouter);

app.listen(process.env.PORT, () => {
  console.log("Server running on port " + process.env.PORT);
});

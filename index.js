const express = require("express");
const { testRoute } = require("./Routes/testRoute.js");
const app = express();

app.use(express.json());

app.use("/api", testRoute);

app.listen(7001, () => {
  console.log("Listeningh on port 7001");
});

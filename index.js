import "dotenv/config";
import express from "express";
import router from "./router/index.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// route
app.get("/", (req, res) => {
  res.send("Hello World");
});
app.use(router);

app.listen(process.env.PORT, () => {
  console.log(`Server is listening on port ${process.env.PORT}`);
});

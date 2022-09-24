import "dotenv/config";
import express from "express";
import TodoController from "./controllers/todoController.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// route
app.get("/", (req, res) => {
  res.send("Hello World");
});
app.get("/todo", TodoController.getTodo);

app.listen(process.env.PORT, () => {
  console.log(`Server is listening on port ${process.env.PORT}`);
});

import express from "express";
const router = express.Router();

import TodoController from "../controllers/todoController.js";

router.get("/todo", TodoController.getTodo);
router.post("/todo/add", TodoController.createTodo);
router.get("/todo/:id", TodoController.getById);
router.put("/todo/:id", TodoController.updateTodo);
router.delete("/todo/:id", TodoController.deleteTodo);

export default router;

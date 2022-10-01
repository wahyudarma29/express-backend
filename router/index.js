import express from "express";
const router = express.Router();

import TodoController from "../controllers/todoController.js";

router.get("/todo", TodoController.getTodo);
router.post("/todo/add", TodoController.createTodo);

export default router;

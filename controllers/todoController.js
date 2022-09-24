import TodoModel from "../models/TodoModel.js";

export default class TodoController {
  static async getTodo(_, res) {
    const todos = await TodoModel.findAll();
    res.json({ status: 200, data: todos });
  }
}

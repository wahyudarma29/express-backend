import TodoModel from "../models/TodoModel.js";

export default class TodoController {
  static async getTodo(_, res) {
    const todos = await TodoModel.findAll();
    res.json({ status: 200, data: todos });
  }
  static async createTodo(req, res) {
    try {
      if (req.body.title) {
        await TodoModel.create(
          req.body.tag,
          req.body.title,
          req.body.description
        );
      } else {
        res.json({ message: "Data cannot empty", status: 400 });
      }
    } catch (err) {
      res.send(err);
    }
    res.json({ status: 201, message: "Data added successfully" });
  }
}

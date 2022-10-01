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
          req.body.tag_id,
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

  static async updateTodo(req, res) {
    try {
      if (req.body.title !== "") {
        await TodoModel.update(
          req.params.id,
          req.body.tag_id,
          req.body.title,
          req.body.description
        );
      } else {
        res.json({ status: 400, message: "Title cannot empty" });
      }
    } catch (error) {
      res.json({ status: 404, message: "Data not found" });
    }
    res.json({ status: 200, message: "Data updated successfully" });
  }
  static async getById(req, res) {
    try {
      const todos = await TodoModel.findById(req.params.id);
    } catch (error) {
      res.json({ status: 404, message: "Data not found" });
    }
    res.json({ status: 200, data: todos });
  }
  static async deleteTodo(req, res) {
    try {
      const todos = await TodoModel.delete(req.params.id);
    } catch (error) {
      res.json({ status: 400, message: "Something went wrong" });
    }
    res.json({ status: 200, message: "Data deleted sucessfully" });
  }
}

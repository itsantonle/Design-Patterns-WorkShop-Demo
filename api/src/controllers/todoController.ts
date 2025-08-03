import { Request, Response } from "express";
import { TodoModel } from "../models/todos";
import { connectDB } from "../utils/connectDB";

export const getTodos = async (req: Request, res: Response) => {
  await connectDB();
  const todos = await TodoModel.find();
  res.json(todos);
};

export const createTodo = async (req: Request, res: Response) => {
  try {
    await connectDB();
    const { title, description } = req.body;
    if (!title) {
      return res.status(400).json({ message: "Title is required" });
    }
    const newTodo = new TodoModel({ title, description });
    await newTodo.save();
    res.status(201).json(newTodo);
  } catch (error) {
    console.error("Error creating todo:", error);
    res.status(500).json({
      message: error instanceof Error ? error.message : "Internal Server Error",
    });
  }
};

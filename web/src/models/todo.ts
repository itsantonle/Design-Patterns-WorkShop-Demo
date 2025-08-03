import { Document, Model, model, models, Schema } from "mongoose";

export interface ITodo extends Document {
  _id: string;
  title: string;
  description?: string;
  createdAt: Date;
  updatedAt: Date;
  completed: boolean;
}

export const TodoSchema = new Schema<ITodo>(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: false,
    },
    completed: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  },
);

export const TodoModel: Model<ITodo> =
  models["Todo"] || model<ITodo>("Todo", TodoSchema);

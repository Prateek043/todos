import mongoose from "mongoose"

const { Schema, model } = mongoose

const todoItemSchema = new Schema({
  _id: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  isDone: {
    type: Boolean,
    default: false,
  }

})

const TodoItemModel = model("TodoItem", todoItemSchema)

export default TodoItemModel

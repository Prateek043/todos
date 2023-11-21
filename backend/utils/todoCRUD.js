import TodoItemModel from "../models/TodoItem.js";
import { connectDB } from "../config/db.js"

export default class TodoItemCRUD {
  constructor() {
    connectDB()
  }

  async getAll() {
    return await TodoItemModel.find({})
  }

  async deleteAll() {
    try {
      const h = await TodoItemModel.deleteMany({})
      console.log(h)
    } catch (err) {
      console.error(err)
    }
  }

  async insertMany() {
    return await TodoItemModel.insertMany([{
      _id: "id1k1",
      title: "Goto the market",
      desc: "buy fruits",
      isDone: false
    },
    {
      _id: "id1k2",
      title: "Goto the hu",
      desc: "buy dish",
      isDone: false
    },
    {
      _id: "id1sfdk3",
      title: "Goto lab",
      desc: "buy samples",
      isDone: true
    },
    {
      _id: "id1kjs4",
      title: "Goto school",
      desc: "study more",
      isDone: false
    },
    {
      _id: "id1kassd5",
      title: "Goto the market",
      desc: "buy vegetables",
      isDone: true
    }
    ])
  }

}



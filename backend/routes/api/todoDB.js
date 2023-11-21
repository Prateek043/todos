import { Router } from "express";
import TodoItemCRUD from "../../utils/todoCRUD.js";

const router = Router()
const todoDB = new TodoItemCRUD()


router.get("/", async (req, res) => {
  const data = await todoDB.getAll()
  console.log("sending data: ", data)
  res.set('Content-Type', 'application/json')
  res.json({ hey: "google" })
})

router.get("/deleteall", async (req, res) => {
  const h = await todoDB.deleteAll()
  res.send(h)
})

router.get("/insert", async (req, res) => {
  const h = await todoDB.insertMany()
  res.send(h)
})

export default router;

import express from 'express'
import apiRouter from "./routes/api/todoDB.js"

const app = express()
const port = 3000

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
})

app.get('/', (req, res) => {
  res.json({ hey: 'Hello World!' })
})

app.use("/api", apiRouter)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

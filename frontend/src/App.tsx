import Header from "./components/Header"
import AddTodo from "./components/AddTodo"
import TodoList from "./components/TodoList"
import { useState, useEffect } from "react"

import axios from 'axios';

function App() {

  const [data, setData] = useState([
    {
      _id: "id1",
      title: "Title 1",
      isDone: true,
      desc: "Desction ",
    },
    {
      _id: "id2",
      title: "Hello",
      isDone: false,
      desc: "world",
    },
    {
      _id: "id3",
      title: "hellow0",
      isDone: true,
      desc: "world",
    },
    {
      _id: "id4",
      title: "Goto market",
      isDone: false,
      desc: "buy food",
    },
    {
      _id: "id6",
      title: "Goto library",
      isDone: true,
      desc: "clean the bookshelf",
    },
  ]);

  useEffect(() => {
    async function fetchData() {
      const j = await axios.get("http://localhost:3000/")

      // uncomment this to connect to backend
      // setData(p => [...p, j.data])
    }
    fetchData()
    console.log(data)

  }, []);


  // const [data, setData] = useState(fetchedData) [
  //   {
  //     _id: "id1",
  //     title: "hellow0",
  //     isDone: true,
  //     desc: "world",
  //   },
  //   {
  //     _id: "id0",
  //     title: "hellow1",
  //     desc: "world",
  //     isDone: false,
  //   },
  //   {
  //     _id: "id2",
  //     title: "hellow3",
  //     desc: "world",
  //     isDone: false,
  //   },
  //   {
  //     _id: "id4",
  //     title: "hellow2",
  //     desc: "worldlo Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
  //     isDone: true,
  //   },
  // ]
  //
  // )

  return (
    <>
      <Header />
      <div className="max-mx-[1200px] mx-2">
        <AddTodo setData={setData} />
        <TodoList data={data} setData={setData} />
      </div>
    </>
  )
}

export default App

import { useState } from "react"
import { FaPlus } from "react-icons/fa"


export default function AddTodo({ setData }: any) {


  const [newData, setNewData] = useState({
    _id: Date.now().toString(),
    title: "",
    desc: "",
    isDone: false,
  })

  function SubmitHandle() {
    setData(p => [...p, newData])
    setNewData({
      _id: Date.now().toString(),
      title: "",
      desc: "",
      isDone: false,
    })
  }

  return (
    <section className="relative my-8 min-mx-auto mx-auto p-4 max-w-sm shadow-[0px_2px_5px_rgba(0,0,0,0.2)] rounded">
      <div className="flex flex-col gap-4">
        <input
          className="placeholder-opacity-70 placeholder-black h-8 focus:outline-0"
          placeholder="Title"
          value={newData.title}
          onChange={e => {
            setNewData({ ...newData, title: e.target.value })
          }}
        />
        <textarea
          rows={5}
          className="placeholder-opacity-50 placeholder-black text-sm focus:outline-0"
          placeholder="Add a ToDo"
          value={newData.desc}
          onChange={e => {
            setNewData({ ...newData, desc: e.target.value })
          }}
        />
        <FaPlus
          className="absolute bg-blue-500 right-6 -bottom-6 p-4 rounded-full cursor-pointer"
          size="4rem"
          color="white"
          onClick={SubmitHandle}
        />
      </div>
    </section>
  )
}

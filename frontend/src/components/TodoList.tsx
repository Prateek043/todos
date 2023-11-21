import { useState } from "react"
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'



export default function TodoList({ data, setData }) {

  const onDragEnd = (result: any) => {
    const source = result.source.index
    const destination = result.destination?.index
    if (destination == undefined) return

    data = reorder(data, source, destination)
    setData(data)
  }


  return (
    <DragDropContext onDragEnd={onDragEnd} >
      <Droppable droppableId="droppable1">
        {(provided: any, _: any) => (
          <section ref={provided.innerRef} {...provided.droppableProps}>

            {data.map((todoitem: TodoItemProps, idx: Number) => (
              <Draggable draggableId={todoitem._id} index={idx} key={todoitem._id}>

                {(provided: any, _: any) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >

                    <TodoItem _id={todoitem._id} title={todoitem.title} desc={todoitem.desc} isDone={todoitem.isDone} />
                  </div>
                )}

              </Draggable>
            )
            )}
            {provided.placeholder}
          </section>
        )}
      </Droppable>
    </DragDropContext>
  )
}


interface TodoItemProps {
  _id: string,
  title: string,
  desc: string,
  isDone: boolean,
}

function TodoItem(props: TodoItemProps) {
  const [isDone, setIsDone] = useState(props.isDone)

  // Style for line through if isDone is true
  let style = "m-4 p-2 shadow " // default style
  style = isDone ? (style + " line-through") : style

  return (

    <div className={style}> <input className="cursor-pointer" type="checkbox" checked={isDone} onChange={_ => (setIsDone(!isDone))} />
      <span className="ml-3 text-lg font-bold">{props.title} : </span><span><a href={props.desc}target="_blank">{props.desc}</a></span>
    </div >

  )
}

const reorder = (list: TodoItemProps[], startIndex: number, endIndex: number) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

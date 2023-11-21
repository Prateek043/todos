import TodoItemModel from "TodoItem.js";

TodoItemModel.create({
  title: 'Buy groceries',
  desc: 'Milk, bread, eggs',
  isDone: false
})
  .then((todo) => {
    console.log(todo);
  })
  .catch((err) => {
    console.error(err);
  });

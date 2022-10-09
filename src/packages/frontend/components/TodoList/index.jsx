import React, { useEffect, useState } from "react";
import TodoListStyle from "./TodoList.style";
import TodoCard from "./Card";
import {PlusIcon} from "@heroicons/react/24/outline"


function FormTodo ({addTask}){
  const [value, setValue] = useState("");

  const handleChange = e => {
    setValue(e.target.value)
  }

  const submitTask = e => {
    e.preventDefault();
    if (!value) return;
    addTask(value)
    setValue('')
  };

  return(
    <form class="bg-white mb-4 px-1 py-1 flex items-center rounded border border-solid border-gray-300 shadow-md w-full" onSubmit={submitTask}>
      <input class="flex-1 focus:outline-none border-none w-full rounded form-control" type="text" value={value} onChange={handleChange}></input>
      <button class="border-2 rounded-full border-yellow-400" type="submit"> <PlusIcon className="w-4 h-4"/> </button>
    </form>
  );

}

function TodoList() {
  const [tasks, setTasks] = useState([
  ])

  const addTask = text => {
    const newTask = [...tasks, { text } ];
    setTasks(newTask);
  }

  function removeTask(index) {
    const newTask = [...tasks]
    newTask.splice(index, 1);
    setTasks(newTask);
  };

  return (
    <TodoListStyle className="TodoList h-auto flex-1 max-h-full items-center overflow-y-hidden pb-1">
      <div className="h-full flex flex-col">
        <FormTodo addTask={addTask} />
        <div class="pt-1 h-full overflow-y-auto flex flex-col w-full  ">
          {tasks.map((task, index)=>(
            <TodoCard key={index} index={index} task={task} removeTask={removeTask} />
          ))}
        </div>
      </div>
    </TodoListStyle>
  );

}




export default TodoList;

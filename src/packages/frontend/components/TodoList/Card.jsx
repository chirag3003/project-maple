import {CheckSquare} from "react-feather"

function TodoCard({index, task, removeTask}){
    return ( 
        <div class="w-full flex items-start p-2 pl-3 bg-white rounded shadow my-1">
            <button className="mr-2 p-2" onClick={() => removeTask(index)}> <CheckSquare className="w-5 h-5" /> </button> 
            <h3 class="text-lg font-medium">{task.text}</h3>
        </div>
    );
};



export default TodoCard;
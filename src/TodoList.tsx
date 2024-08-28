import React from "react";

type TaskType = {
    id: number,
    isDone: boolean,
    title: string,

}

type TodoListPropsType = {
    title: string,
    tasks: Array<TaskType>,

}







const TodoList = (props: TodoListPropsType) => {

    const listItems = []

    for ( let i = 0; i < props.tasks.length; i++){
        const newListItem = <li>
            <input type={"checkbox"} checked={props.tasks[i].isDone}/>
            <span>{props.tasks[i].title}</span>
            <button>x</button>
        </li>
        listItems.push(newListItem)
    }


    return (
        <div className="todolist">
            <h3>{props.title}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            <ul>
                {listItems}

            </ul>
            <div>
                <button>All</button>
                <button>Active</button>
                <button>Completed</button>
            </div>
        </div>
    )
}

export default TodoList;
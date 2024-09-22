import React, {useState, KeyboardEvent, ChangeEvent} from "react";
import {FilterValuesType} from "./App";
import {keyboardKey} from "@testing-library/user-event";

export type TaskType = {
    id: string,
    isDone: boolean,
    title: string,

}

type TodoListPropsType = {
    title: string,
    tasks: Array<TaskType>,
    removeTask: (taskId: string) => void,
    ChangeFilter: (nextFilterValue: FilterValuesType) => void
    addTask: (newTaskTitle: string) => void,


}


const TodoList = (props: TodoListPropsType) => {


    let {title, tasks, removeTask, ChangeFilter, addTask} = props;


    // let taskList: Array<JSX.Element> | JSX.Element;
    //
    // if (tasks.length === 0) {
    //     taskList = <span>Your TaskList is empty</span>
    // } else {
    //     const listItems = []
    //
    //     for (let i = 0; i < props.tasks.length; i++) {
    //         const newListItem = <li>
    //             <input type={"checkbox"} checked={tasks[i].isDone}/>
    //             <span>{tasks[i].title}</span>
    //             <button>x</button>
    //         </li>
    //         listItems.push(newListItem)
    //     }
    //     taskList = <ul>
    //         {listItems}
    //     </ul>
    // }

    // const RemoveButtonHandler=(id: number ) => {
    //     return props.removeTask(id)
    // }


    const listItems: Array<JSX.Element> =
        tasks.map(t => {
            return (
                <li key={t.id}>
                    <input type={"checkbox"} checked={t.isDone}/>
                    <span>{t.title}</span>
                    <button onClick={() => removeTask(t.id)}>x</button>
                </li>
            )
        })


    let [newTaskTitle, setNewTaskTitle] = useState("")


    const onClickAddTask = () => {
        addTask(newTaskTitle)
        setNewTaskTitle('')
    }

    const isAddBtnDisabled = !newTaskTitle || newTaskTitle.length >= 15

    const userMessage = newTaskTitle.length >= 15
        ? <span style={{color: "darkred"}}>Your task title is too long</span>
        : <span>Enter new task title</span>

    const onKeyDownAddTask = (event: KeyboardEvent<HTMLInputElement>) => event.key === 'Enter' && onClickAddTask()

    const onChangeSetNewTaskTitle = (e: ChangeEvent<HTMLInputElement>) => setNewTaskTitle(e.target.value)

    // props.setTasks([{id: crypto.randomUUID(), title:newTaskTitle, isDone: false}, ...tasks])


    const taskList: Array<JSX.Element> | JSX.Element = !tasks.length ? <span>Your TaskList is empty</span> :
        <ul>{listItems}</ul>


    return (
        <div className="todolist">
            <h3>{props.title}</h3>
            <div>
                <input
                    value={newTaskTitle}
                    onChange={onChangeSetNewTaskTitle}
                    onKeyDown={onKeyDownAddTask}

                />
                <button
                    onClick={onClickAddTask}

                    disabled={isAddBtnDisabled}
                >+
                </button>
                <div>
                    {userMessage}
                </div>
            </div>
            {taskList}
            <div>
                <button onClick={() => ChangeFilter('All')}>All</button>
                <button onClick={() => ChangeFilter('Active')}>Active</button>
                <button onClick={() => ChangeFilter('Completed')}>Completed</button>
            </div>
        </div>
    )
}

export default TodoList;
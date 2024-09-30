import React, {useState} from 'react';
import './App.css';
import TodoList, {TaskType} from "./TodoList";

export type FilterValuesType = 'All' | 'Active' | 'Completed'


function App() {
    const todoListTitle_1 = 'Todo List';

    // const tasks:any = [
    //     { id: 1, isDone: true, title: 'HTML&CSS' },
    //     { id: 2, isDone: false, title: 'JS' },
    //     { id: 3, isDone: true, title: 'React' },
    //
    // ]

    const [tasks, setTasks] = useState(
        [

            {id: crypto.randomUUID(), isDone: true, title: 'HTML&CSS'},
            {id: crypto.randomUUID(), isDone: false, title: 'JS'},
            {id: crypto.randomUUID(), isDone: true, title: 'React'},

        ])


    const removeTask = (taskId: string) => {

        // const nextState: Array<TaskType> = []
        // for (let i = 0; i < tasks.length; i++) {
        //     if (tasks[i].id !== taskId) {
        //         nextState.push(tasks[i])
        //     }
        // }
        setTasks(tasks.filter( t => t.id !== taskId))

    }

    const ChangeTaskStatus = (taskId:string, newIsDoneValue: boolean)=>{
        const updatedTasks: Array<TaskType> = tasks.map(t => t.id === taskId ? {...t, isDone: newIsDoneValue} : t)
        setTasks(updatedTasks)


    }

    const ChangeTaskTitle = ()=>{

    }


    const addTask = (newTaskTitle:string) => {
        // const newTaskId = crypto.randomUUID()
        // const newTask: TaskType  = {
        //     id: newTaskId,
        //     title: title,
        //     isDone: false,
        //
        // }
        // const nextState: Array<TaskType> = [newTask, ...tasks]
        setTasks([{id: crypto.randomUUID(), title:newTaskTitle, isDone: false}, ...tasks])
    }





    const [filter, setFilter] = useState<FilterValuesType>('All')

    const getFiltredTasksForRender = (allTasks: Array<TaskType>, filterValue: FilterValuesType): Array<TaskType> => {

        if (filterValue === 'Active') {
            return allTasks.filter(t => !t.isDone)
        } else if (filterValue === 'Completed') {
            return allTasks.filter(t => t.isDone)
        } else {
            return allTasks
        }
    }
    const ChangeFilter = (nextFilterValue: FilterValuesType) => {
        setFilter(nextFilterValue)
    }

    const filtredTasksForRender: Array<TaskType> = getFiltredTasksForRender(tasks, filter)




    // const callBack=(newTaskTitle:string, )=>{
    //     setTasks([{id: crypto.randomUUID(), title:newTaskTitle, isDone: false}, ...tasks])
    //
    // }
    //

    return (
        <div className="App">
            <div className="App-header">
            <TodoList
                title={todoListTitle_1}
                tasks={filtredTasksForRender}
                removeTask={removeTask}
                ChangeFilter={ChangeFilter}
                addTask={addTask}  ChangeTaskStatus={ChangeTaskStatus}
                filter={filter }
            />
            </div>
        </div>
    );
}

export default App;


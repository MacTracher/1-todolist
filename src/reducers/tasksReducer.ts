import {TaskType} from "../TodoList";

export const tasksReducer=(state:TaskType[], action: TsarType):TaskType[]=>{
    switch(action.type){
        case "REMOVE-TASK":{
            return state.filter(el => el.id !== action.payload.id)
        }
        case "ADD-TASK":{

            let newTask = {id:crypto.randomUUID(), title: action.payload.title, isDone:false};
            return [newTask ,...state]
        }
        default: return state;
    }
}



type TsarType = RemoveTaskACType | AddTaskACType
type RemoveTaskACType= ReturnType<typeof removeTaskAC>



export const removeTaskAC = (taskId: string) => {
    return {
         type: 'REMOVE-TASK',
        payload: {
            id: taskId
        }
    }as const
}

type AddTaskACType= ReturnType<typeof addTaskAC>

export const addTaskAC = (newTaskTitle: string) => {
    return {
         type: 'ADD-TASK',
        payload: {
            title: newTaskTitle
        }
    }as const
}
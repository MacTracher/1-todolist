import {FilterValuesType} from "../App";

export const filterReducer = (state:FilterValuesType, action:ChangeFilterACType):FilterValuesType => {
     switch(action.type){
      case "CHANGE_FILTER":{
       return action.payload.value
      }
      default: return state
     }
 }

 type ChangeFilterACType = ReturnType<typeof ChangeFilterAC>;

 export const ChangeFilterAC = (nextFilterValue: FilterValuesType) => {
  return{
   type: 'CHANGE_FILTER',
   payload:{
    value: nextFilterValue
   }
  }as const
 }
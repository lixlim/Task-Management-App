import { UPDATE_TASK } from "./taskTypes";


export const updateTask = (data) => {
    return {
        type: UPDATE_TASK,
        payload: data
    }
}
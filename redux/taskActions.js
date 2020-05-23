import { SET_TASK } from "./taskTypes";
import { UPDATE_TASK } from "./taskTypes";

export const setTask = (data) => {
    return {
        type: SET_TASK
    }
}

export const updateTask = () => {
    return {
        type: UPDATE_TASK
    }
}
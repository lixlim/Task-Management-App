import { UPDATE_TASK } from "./taskTypes";
import { SET_TASK } from "./taskTypes";

const initialState = {
    pendingTask : [
        {
          "id": 5,
          "title": "Move to Location 1",
          "description": "Place the item at location 1 by 5pm",
          "status" : "Pending"
        },
        {
            "id": 6,
            "title": "Move to Location 2",
            "description": "Place the item at location 2 by 5pm",
            "status" : "Pending"
        },
        {
            "id": 7,
            "title": "Move to Location 1",
            "description": "Place the item at location 1 by 4pm",
            "status" : "Pending"
        },
        {
            "id": 8,
            "title": "Move to Location 3",
            "description": "Place the item at location 3 by 3pm",
            "status" : "Pending"
        },
    
    ],
    completedTask : [
        {
          "id": 1,
          "title": "Move to Location 1",
          "description": "Place the item at location 1 by 5pm",
          "status" : "Completed"
        },
        {
            "id": 2,
            "title": "Move to Location 2",
            "description": "Place the item at location 2 by 5pm",
            "status" : "Completed"
        },
        {
            "id": 3,
            "title": "Move to Location 1",
            "description": "Place the item at location 1 by 3pm",
            "status" : "Completed"
        },
        {
            "id": 4,
            "title": "Move to Location 3",
            "description": "Place the item at location 3 by 3pm",
            "status" : "Completed"
        },
    ],
}

const taskReducer = (state = initialState, action) => {
    switch(action.type) {
        case UPDATE_TASK:  {
            console.log("update")
            console.log(state.pendingTask);
            for (let i = 0; i < state.pendingTask.length; i++ ){
                if (action.payload.id == state.pendingTask[i].id){
                    let newCompletedTask = {
                        ...state.pendingTask[i],
                        "status": "Completed"
                    }
                    state.completedTask.push(newCompletedTask);
                    state.pendingTask = state.pendingTask.splice(i--,1);
                    console.log("test2");
                    console.log(state.pendingTask);
                    console.log(state.completedTask);
                }
            }
            state.currentTask = {};
            return state;
        }
 
        default: return state

    }
}

export default taskReducer


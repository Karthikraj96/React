import {createStore,combineReducers} from "redux"

// Action to make
export let incrementcounter =()=>{
    return {   "type" : "increment"}
}
export let decrementCounter =()=>{
    return {   "type" : "decrement"}
}
export let resetCounter = () =>{
    return {"type" : "reset"}
}
export let defaultCounter = () =>{
    return {"type": "default" }
}
//Reducers to selext action

const counter =(state = 10,action) =>{
    switch(action.type){
        case "increment":
            return state+1
        case "decrement":
            return state-1
        case "reset":
            return state-state
        case "default":
            return state=0; 
        default:
             return state
    }
}

//Store the actions
let combine = combineReducers({"counter":counter})
export let store = createStore(combine,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())



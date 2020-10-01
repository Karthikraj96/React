import {createStore,combineReducers,applyMiddleware,compose} from "redux"
import thunk from "redux-thunk";
import {getTodo} from "./Api.js"

// Action to make
export let incrementCounter =()=>{
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

export let updateTodos =(data)=>{
    return {"type":"updateTodos","data":data}
}

export let setTodos = (data) => {
    return { "type" : "setTodos" , "data" : data}
}
export let loadTodos = () =>{
    return ( dispatch )=>{
        getTodo()
        .then((response)=> dispatch(setTodos( response.data )))
    }
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

let todos =(state =[],action) =>{
    switch(action.type){
        
    
                
           
        case "setTodos":
            return action.data   
        case "loadTodos":
            return (dispatch)=>loadTodos(dispatch)
        default :
            return state
    }
}

//Store the actions
let combine = combineReducers({"counter":counter,"todos":todos})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; 
export let store = createStore(combine, composeEnhancers(applyMiddleware(thunk)))



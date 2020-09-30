import React from "react"
import {useDispatch} from "react-redux"
import {setTodoComplete,setTodo} from "../store.js"

function TodoItem (props){
    let {todo} = props
    let dispatch = useDispatch()
    return (
        <div className="card">
            <div className="card-body">
                <h4 className="card-text">{todo.title}</h4>
                <button onClick={ (event)=>{  }  } className="btn btn-success">Done</button>
                <button onClick={ (event)=>{  }  }className="btn btn-danger">Delete</button>
            </div>
        </div>
    )
}

export default TodoItem
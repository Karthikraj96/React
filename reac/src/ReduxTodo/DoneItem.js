import React from "react"
import {useDispatch,useSelector} from "react-redux"
import {setTodoComplete,set2Todo} from "../store.js"

function CompletedItem (props){

    let {todo} = props
    let todos = useSelector((store)=>store.todos) 
    let dispatch = useDispatch()
    function deleteTodo(id){
        let updatedTodos =todos.filter((todo)=>{
            return todo.id !==id;
        })

        console.log(updatedTodos)
        dispatch(set2Todo(updatedTodos))
        
    }
    return (
        <div className="card">
            <div className="card-body">
                <h4 className="card-text">{todo.title}</h4>
                <button onClick={ (event)=>{}  } className="btn btn-success">Undo</button>
                <button  onClick={ (event)=>{ deleteTodo(todo.id)}  }className="btn btn-danger">Delete</button>
            </div>
        </div>
    )
}

export default CompletedItem
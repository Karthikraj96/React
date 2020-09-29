import React from "react"


function TodoItem (props){
    let to = props.setTodocompleted
    let todo = props.todo 
    return (
        <div className="card">
            <div className="card-body">
                <h4 className="card-text">{todo.title}</h4>
                <button onClick={ (event)=>{ to(todo.id) }  } className="btn btn-success">Done</button>
                <button onClick={ (event)=>{ props.deleteTodo(todo.id) }  }className="btn btn-danger">Delete</button>
            </div>
        </div>
    )
}

export default TodoItem
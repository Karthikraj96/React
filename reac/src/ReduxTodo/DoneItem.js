import React from "react"


function CompletedItem (props){

    let {todo} = props
    
    
    return (
        <div className="card">
            <div className="card-body">
                <h4 className="card-text">{todo.title}</h4>
                <button onClick={ (event)=>{ props.setTodocompleted(todo.id) }  } className="btn btn-success">Undo</button>
                <button  onClick={ (event)=>{ props.deleteTodo(todo.id)}  }className="btn btn-danger">Delete</button>
            </div>
        </div>
    )
}

export default CompletedItem
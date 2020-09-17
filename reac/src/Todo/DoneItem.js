import React from "react"


function DoneItem (props){

    let todo = props.todo 
    return (
        <div className="card">
            <div className="card-body">
                <h4 className="card-text">{todo.desc}</h4>
                <button onClick={ (event)=>{ props.setTodoReset(todo.id) }  } className="btn btn-success">Undo</button>
                <button  className="btn btn-danger">Delete</button>
            </div>
        </div>
    )
}

export default DoneItem
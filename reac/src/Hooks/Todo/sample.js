import React , { useState} from "react"

function TodoCreate (props){
    let [title,setTitle] = useState("");

    function titleChange (event) {
        console.log(event.target.value)
       setTitle( event.target.value);
    }
    function handleOnSubmit  (event) {
        
        event.preventDefault()
        props.createTodo(title)
    }

    return(
        <div className="row">
            <div className="col-md-12" style ={{ background:"#f3f3f3"}}>
                <h5>Add New Todo</h5>
                <form onSubmit={handleOnSubmit} className="form">
                    <label >Title</label>
                    <input onChange={titleChange} className="form-control"/>
                    <input  className="btn btn-primary" type="submit"/>
                </form>
            </div>

        </div>
    )
}
export default TodoCreate
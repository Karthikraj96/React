import React , { useState} from "react"

function TodoCreate (props){
    let [title,setTitle] = useState({});
    let rf=props.createTodo
    

    function titleChange (event) {
        
       setTitle( event.target.value);
        console.log(typeof(title))
      
    }
    let handleOnSubmit  = (event) =>{
        
        let data = {"title" : title};
      
        rf(data)
        event.preventDefault()

        
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
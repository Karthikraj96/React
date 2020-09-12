import React  from "react"
import TodoItem from "./TodoItem"


let data = [
    {
        id : 1,
        desc : "Buy Milk",
        done : false
    },
    {
        id : 2,
        desc : "Be awsome",
        done : false
    },
    {
        id : 3,
        desc : "Learn react",
        done : false
    },
    {
        id : 4,
        desc : "Sleep Yesterday",
        done : true
    },
]

class Todo extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            "todos" : data
        }
    }

    setTodoDone = (id) =>{


        console.log("ID", id)

        let updatedTodos = this.state.todos.map((todo)=>{
          if(todo.id === id ){
              todo.done = true
          }
          
          return todo
        })
        this.setState({"todos" : updatedTodos})
    }
    
    setTodoReset = (id) =>{
        let utodos = this.state.todos.map((todo)=>{
            if(todo.id === id ){
                todo.desc = "Deleted"
                todo.done = true
            }
            return todo
        })
        this.setState({"todos" : utodos})
    }

    render(){
        return (
            <div className="container">
                <div>
                {
                    this.state.todos.map(
                        (todo)=>{
                            return (
                                <>
                                { !todo.done && <TodoItem todo={todo} setTodoDone={this.setTodoDone} />}
                                </>
                            )
                        }
                    )
                    
                }
                </div>
                <div>
                    <h3>Done Items</h3>
                    {
                        this.state.todos.map(
                            (todo)=>{
                                return (
                                    <>
                                    { todo.done && <TodoItem todo={todo} setTodoReset={this.setTodoReset} />}
                                    </>
                                )
                            }
                        )
                     }

                </div>
            </div>
        )
    }
}

export default Todo


/*
var a = [1,2,4,7,9]

var updatedArray = a.map(  
    function(ele){
        return (<p> { ele } </p>)
    }
)
*/


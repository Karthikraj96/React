import React  from "react"
import TodoItem from "./TodoItem"
import DoneItem from "./DoneItem"


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

    setTodo = (id) =>{


        console.log("ID", id)

        let updatedTodos = this.state.todos.map((todo)=>{
          if(todo.id === id ){
              todo.done = !todo.done;
          }
          
          return todo
        })
        this.setState({"todos" : updatedTodos})
    }
    
  

    render(){
        return (
            <div className="container">
                <div className="row">
                <div className="col-md-6 col-lg-6 col-xl-6"> 
                    <h3> TODO Items</h3>
                    {
                        ! this.state.todos.find ( (todo) =>{
                            return !todo.done
                        }) && <p>No Todos</p>
                    }

                {
                    this.state.todos.map(
                        (todo)=>{
                            return (
                                <>
                                { !todo.done && <TodoItem todo={todo} setTodoDone={this.setTodo} />}
                                </>
                            )
                        }
                    )
                    
                }
                </div>
                <div className="col-md-6 col-lg-6 col-xl-6">
                    <h3>Done Items</h3>
                    {
                        ! this.state.todos.find ( (todo) =>{
                            return todo.done
                        }) && <p>No Done Items</p>
                    }
                    {
                        this.state.todos.map(
                            (todo)=>{
                                return (
                                    <>
                                    { todo.done && <DoneItem todo={todo} setTodoReset={this.setTodo} />}
                                    </>
                                )
                            }
                        )
                     }

                </div>
                </div>
            </div>
        )
    }
}

export default Todo



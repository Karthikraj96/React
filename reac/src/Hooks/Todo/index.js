import React , { useState, useEffect} from "react"
import TodoItem from "./TodoItem"
import CompletedItem from "./DoneItem"
import { getTodo, saveTodo } from "../../Api.js"
import TodoCreate from './TodoCreate.js'

    const Todo = () => {
    const [todos,setTodos] = useState([]);
    const [loading,setLoading] = useState(true);

    useEffect(()=>{
        getTodo()
        .then((response)=>{
           console.log(response.data);
           setTodos(response.data);
           setLoading(false)
        })
        .catch((error)=>{
            console.log(error)
        })
    },[])

     function createTodo (data) {
        saveTodo(data)
        .then((response)=>{
            console.log(response.data)
            setTodos(response.data,...todos);
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    function setTodo  (id) {


        console.log("ID", id)

        let updatedTodos = todos.map((todo=>{
          if(todo.id === id ){
              todo.completed = !todo.completed;
          }
          
          return todo
        }))
        setTodos(updatedTodos);
    }


    return (
        <div className="container">
            <TodoCreate createTodo={createTodo}/>
            {
                loading ? <h3>Loading</h3> 
                    : <div className="row">
                        <div className="col-md-6 col-lg-6 col-xl-6">
                            <h3> TODO Items</h3>
                            {
                                !todos.find((todo=>  {
                                    return !todo.completed
                                })) && <p>No Todos</p>
                            }

                            {
                                todos.map(
                                    (todo=>  {
                                        return (
                                            <>
                                                {!todo.completed && <TodoItem todo={todo} setTodocompleted={setTodo} />}
                                            </>
                                        )
                                    })
                                )

                            }
                        </div>
                        <div className="col-md-6 col-lg-6 col-xl-6">
                            <h3>completed Items</h3>
                            {
                                !todos.find((todo =>  {
                                    return todo.completed
                                })) && <p>No completed Items</p>
                            }
                            {
                                todos.map(
                                    (todo=> {
                                        return (
                                            <>
                                                {todo.completed && <CompletedItem todo={todo} setTodoReset={setTodo} />}
                                            </>
                                        )
                                    }
                                ))
                            }

                        </div>
                    </div>
            }
            
        </div>
    )
} 


export default Todo;
/*
class Todo extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            "todos" : [],
            "loading" : true
        }
    }
    componentDidMount(){
        getTodo()
        .then((response)=>{
           this.setState({"todos":response.data,"loading":false})
        })
        .catch((error)=>{
            console.log(error)
        })
}
    createTodo =(data) =>{
        saveTodo(data)
        .then((response)=>{
            console.log(response.data)
            this.setState({"todos":[ response.data ,...this.state.todos]})
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    setTodo = (id) =>{


        console.log("ID", id)

        let updatedTodos = this.state.todos.map((todo)=>{
          if(todo.id === id ){
              todo.completed = !todo.completed;
          }
          
          return todo
        })
        this.setState({"todos" : updatedTodos})
    }
    
  

    render(){
        return (
            <div className="container">
                <TodoCreate createTodo={this.createTodo}/>
                {
                    this.state.loading ? <h3>Loading</h3> 
                        : <div className="row">
                            <div className="col-md-6 col-lg-6 col-xl-6">
                                <h3> TODO Items</h3>
                                {
                                    !this.state.todos.find((todo) => {
                                        return !todo.completed
                                    }) && <p>No Todos</p>
                                }

                                {
                                    this.state.todos.map(
                                        (todo) => {
                                            return (
                                                <>
                                                    {!todo.completed && <TodoItem todo={todo} setTodocompleted={this.setTodo} />}
                                                </>
                                            )
                                        }
                                    )

                                }
                            </div>
                            <div className="col-md-6 col-lg-6 col-xl-6">
                                <h3>completed Items</h3>
                                {
                                    !this.state.todos.find((todo) => {
                                        return todo.completed
                                    }) && <p>No completed Items</p>
                                }
                                {
                                    this.state.todos.map(
                                        (todo) => {
                                            return (
                                                <>
                                                    {todo.completed && <CompletedItem todo={todo} setTodoReset={this.setTodo} />}
                                                </>
                                            )
                                        }
                                    )
                                }

                            </div>
                        </div>
                }
                
            </div>
        )
    }
}

export default Todo


*/
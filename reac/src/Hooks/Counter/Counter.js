/* redux*/
import React from 'react'
import CounterDisplay from "./CounterDisplay"
import {useDispatch,useSelector} from "react-redux"
import {incrementcounter,decrementCounter,resetCounter,defaultCounter} from "../../store"

export default function Counter(){
    let dispatch = useDispatch()
    let counter = useSelector((state)=>{return state.counter})
    return (
        <div className="container">
            <CounterDisplay  title="Counter" />
            <br/>
            <button onClick={ ()=>{counter === 0 ?dispatch(defaultCounter()):dispatch(decrementCounter())}}className="btn btn-danger">-</button>
            <button onClick={ ()=>{dispatch(incrementcounter())}} className="btn btn-success">+</button>
            <button onClick={ ()=>{dispatch(resetCounter())}}className="btn btn-default" >Reset</button>
        </div>
    )
}
/* Hooks
import React,{ useState }  from 'react'
import CounterDisplay from "./CounterDisplay"

export default function Counter(){
    let [counter,setCounter] = useState(10);

    return (
        <div className="container">
            <CounterDisplay counterValue={counter} title="Counter" />
            <br/>
            <button onClick={ ()=>{counter === 0 ? setCounter(0) : setCounter(counter-1)}}className="btn btn-danger">-</button>
            <button onClick={ ()=>{setCounter(counter+1)}} className="btn btn-success">+</button>
            <button onClick={ ()=>{setCounter(counter-counter)}}className="btn btn-default" >Reset</button>
        </div>
    )
}
*/
/* Class
class Counter2 extends Component{

    constructor(props){
        super(props) 
        this.state = {
            "counter" :10
        }
    }

    handlePlusClick = ()  => {
       
        this.setState({ "counter"  : this.state.counter+1})
    }
    handleMinusClick = ()  => {
        
        this.setState({ "counter"  : this.state.counter-1})
    }
    handleResetClick = ()  => {
     
        this.setState({ "counter"  : this.state.counter-this.state.counter})
    }

    render(){
        return (
            <div className="container">
                <CounterDisplay counterValue={this.state.counter} title="Counter" />
                <br/>
                <button onClick={this.handleMinusClick}className="btn btn-danger">-</button>
                <button onClick={this.handlePlusClick} className="btn btn-success">+</button>
                <button onClick={this.handleResetClick}className="btn btn-default" >Reset</button>
            </div>
        )
    }
}



export default Counter2

*/

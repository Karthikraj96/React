import React from 'react'
import CounterDisplay from "./CounterDisplay"


class Counter extends React.Component{

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



export default Counter


// Functional component cannot have state
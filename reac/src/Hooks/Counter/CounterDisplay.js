/*Redux */

import React from "react"
import {useSelector} from "react-redux"
var titleStyle = {"color" : "blue","fontWeight" : 100}
function CounterDisplay(props){
    let counter = useSelector((state)=>{return state.counter})
    return (
        <>
            <h4 style={titleStyle} >{props.title}</h4>
            <label> { counter} </label>

        </>
    )
}

export default CounterDisplay
/* this is same for the class and hooks example
import React from "react"

var titleStyle = {"color" : "blue","fontWeight" : 100}
function CounterDisplay(props){
    console.log(props)
    return (
        <>
            <h4 style={titleStyle} >{props.title}</h4>
            <label> { props.counterValue} </label>

        </>
    )
}

export default CounterDisplay
*/
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
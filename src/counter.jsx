import { useState } from "react";

function Counter(){
    const [count,setCount] = useState(0)
    const increment = () =>{
        setCount(count +1)
    }
    const decrement = () =>{
        setCount(count - 1)
    }
    const reset =()=> {
        setCount(0)
    }
    const styles = {
        borderRadius : "7px",
        backgroundColor : "orangered",
        color : "white",
        width :"75px",
        height : "27px",
        margin : "10px",
        textAlign : "center"
    }
    const textStyles = {
        marginLeft : "150px",
        fontSize : "50px",
        color: "white"
    }
    const headerStyle = {
        textAlign : "ceneter",
        margin : "auto",
        textTransform : "uppercase",
        color : "white",
    }
    return(
        <>
        <div>
            <h2 style = {headerStyle}>counter</h2>
            <p style={textStyles}>{count}</p>
            <button onClick={increment} style={styles}>+</button>
            <button onClick={decrement} style={styles}>-</button>
            <button onClick={reset} style={styles}>Reset</button>
        </div>
        </>
    )
}
export default Counter

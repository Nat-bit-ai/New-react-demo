function Button(){
    const handleClick = (e) => console.log("Ouch!");
    return(
        <>
        <button onClick = {(e)=> handleClick(e)}>Don't touch me</button>
        </>
    )
}export default Button
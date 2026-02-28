import React , {useState} from "react"

function MyForm(){
    const [name,setName] = useState("")
    const [age, setAge] = useState("")
    const [isEmployed, setIsEmployed] = useState(false)

    const handleClick = (e) => {
        e.preventDefault();
        const confirmName = prompt("please confirm your name");
        if (confirmName !== name) {
             console.log("name doesn't match")
        return;
        }
        console.log("Submitted data")
        console.log(`Name: ${name} `)
        console.log(`Age: ${age}`)
        console.log(`Employment-status: ${isEmployed}`)


    }
    return(
        <form onSubmit={handleClick}>
            <input type="text" value={name} placeholder="Enter name" onChange={(e)=> setName(e.target.value)}/>
            <input type="number" value={age} placeholder="Enter age" onChange= {(e)=> setAge(e.target.value)} />
            <label>Employed:
                <input type="checkbox" checked={isEmployed} onChange={(e)=> setIsEmployed(e.target.checked)} />
            </label>
            <button type="submit">Send</button>
        </form>
    )
}
export default MyForm
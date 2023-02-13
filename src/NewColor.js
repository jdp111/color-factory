import { useState } from "react"
import { useNavigate } from "react-router-dom"

function NewColor({colors, setColors}) {

    const [color, setColor] = useState({name:"", color: "#000000"})
    const navigate = useNavigate();

    const addColor = evt => {
        console.log(evt.target)
        evt.preventDefault()
        setColors(colors => ([...colors, color]
        ))
        navigate('/colors')
    }

    const handleChange = evt => {
        const {name, value} = evt.target
        console.log(value)
        setColor(fdata => ({
            ...fdata,
            [name] : value
        }))
    }

    return (
        <div>
            <form  onSubmit= {addColor}>
                <label htmlFor="name">color name: </label>
                <input onChange= {handleChange} type="text" name="name" placeholder="color name" value={color.name} ></input>
                <br></br>
                <label htmlFor="color">color: </label>
                <input onChange= {handleChange} type="color" name="color" value={color.color} ></input>
                <br></br>
                <button type="submit">submit</button>
            </form>
        </div>
    )
}

export default NewColor
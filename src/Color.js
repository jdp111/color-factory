import { NavLink, useParams } from "react-router-dom"


function Color({colors}) {
    const {name} = useParams()
    console.log(name)
    console.log(colors)

    const color = colors.filter((el) => el.name == name)[0]
    console.log(color)
    
    return (
        <div className="colorDiv" style={{backgroundColor:color.color}}>
            <p>This is {color.name}</p>
            <br></br>
            <NavLink exact to="/colors">Back</NavLink>
        </div>
    )
}

export default Color
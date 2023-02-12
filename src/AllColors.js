import { NavLink } from "react-router-dom"



function AllColors({colors}) {

    return (
        <div>
            {colors.map((color)=>(
                <p>
                <NavLink exact to={`/colors/${color.name}`}>{color.name}</NavLink> 
                </p>
            ))}
        </div>
    )
}

export default AllColors
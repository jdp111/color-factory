import { NavLink } from "react-router-dom"



function AllColors({colors}) {

    return (
        <div>
            {colors.map((color)=>(
                <div>
                <NavLink exact to={`/colors/${color.name}`}>{color.name}</NavLink> 
                </div>
            ))}
        </div>
    )
}

export default AllColors
import { NavLink } from "react-router-dom"
import AllColors from "./AllColors"

function HomePage({colors}) {

    return (
        <div>
            <div>
                <h4>Welcome to the color factory!</h4>
                <NavLink exact to= "/colors/new">Add a color</NavLink>
            </div>
            <AllColors colors = {colors}/>
        </div>
    )
}

export default HomePage
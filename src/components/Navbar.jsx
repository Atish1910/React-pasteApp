import { NavLink } from "react-router-dom";

function Navbar(){
    return(
        <>
            <div className="container border py-3 bg-accent  rounded-03">
                <div className="row text-center">
                    <div className="d-flex justify-content-around align-items-center">
                        <h4 className="text-white">Paste App</h4>
                        <NavLink className="text-white" to="/">Home</NavLink>
                        <NavLink className="text-white" to={"/pastes"}>Pastes</NavLink>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar;
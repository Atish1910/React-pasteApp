import { NavLink } from "react-router-dom";

function Navbar(){
    return(
        <>
            <div className="container border py-3">
                <div className="row text-center">
                    <h1>hii i am navbar</h1>
                    <div className="d-flex justify-content-around align-items-center">
                        <NavLink to="/">Home</NavLink>
                        <NavLink to={"/pastes"}>Pastes</NavLink>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar;
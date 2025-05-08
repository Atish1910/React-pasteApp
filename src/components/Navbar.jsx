import { NavLink } from "react-router-dom";

function Navbar(){
    return(
        <>
            <section className=" border py-3 bg-1  rounded-03 navbar-01">
                <div className="container">
                    <div className="row text-center">
                        <div className="d-flex justify-content-around align-items-center">
                            <NavLink className="text-white h4" to="/">Paste App</NavLink>
                            <NavLink className={({ isActive }) =>isActive ? "nav-item nav-link-active" : "nav-item nav-link"} to="/">Home</NavLink>
                            <NavLink className={({ isActive }) =>isActive ? "nav-item nav-link-active" : "nav-item nav-link"} to={"/pastes"}>Pastes</NavLink>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Navbar;
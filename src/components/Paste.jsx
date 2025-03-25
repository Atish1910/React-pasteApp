import React from "react";
import { useSelector } from "react-redux";
import Home from "./Home";

function Paste(){
    const pastes = useSelector((state) => state.pastes.Paste);
    console.log(pastes)

    return(
        <>
            <div className="container border py-5">
                <div className="row border">
                    <h1>List Of Pastes</h1>
                </div>
            </div>
        </>
    )
}
export default Paste;
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Paste = () =>{
    const pastes = useSelector((state) => state.paste.pastes);
    console.log(pastes);
    

   
    return(
        <>
            <div className="container border py-5">
                <div className="row">
                    <h1> hii I am Paste Container</h1>
                    <div className="">
                        
                    </div>
                    <div className="">
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default Paste;
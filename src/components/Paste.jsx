import React, { use, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromPastes } from "../redux/pasteSlice";
import toast from "react-hot-toast";

const Paste = () =>{
    const pastes = useSelector((state) => state.paste.pastes);
    console.log(pastes);
    
    const [searchParams, setSearchParams] = useState("");
    const dispatch = useDispatch();
    const filteredData = pastes.filter(
        (paste) => paste.title.toLowerCase().includes(searchParams.toLowerCase())
    );
    function handleDelete(pasteId){
        dispatch(removeFromPastes(pasteId));
    }
   
    return(
        <>
            <div className="container border py-5">
                <div className="row">
                    <h1> hii I am Paste Container</h1>
                    <div className="">
                        
                    </div>
                    <div className="">
                        <input 
                            className="form-control"
                            type="text"
                            placeholder="Search Your Term"
                            value={searchParams}
                            onChange={(e) => setSearchParams(e.target.value)}
                         />
                        {
                            filteredData.length > 0 &&
                            filteredData.map((paste) =>{
                                return(
                                    <div className="text-center border mb-3 mt-2 py-2" key={paste._id}>
                                        <h4>{paste.title}</h4>
                                        <p>{paste.content}</p>
                                        <p>{paste.createdAt}</p>
                                        <div className="d-flex justify-content-around align-items-center">
                                            <button className="btn btn-warning">
                                                <a href={`/?pasteId=${paste?._id}`}>Edit</a>
                                            </button>
                                            <button className="btn ">
                                                <a href={`/pastes/${paste?._id}`}>View Paste</a>
                                            </button>
                                            <button className="btn btn-danger" onClick={() => handleDelete(paste?._id)}>Delete</button>
                                            <button className="btn btn-info" onClick={() => {
                                                navigator.clipboard.writeText(paste?.content);
                                                toast("Content Copy Successfully");
                                            }}>Copy</button>
                                            <button className="btn btn-primary">Share</button>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Paste;
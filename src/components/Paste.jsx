import React, { use, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromPastes } from "../redux/pasteSlice";
import toast from "react-hot-toast";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

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
        <section className="bg-5 py-5 ">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <input 
                            className="form-control"
                            type="text"
                            placeholder="Search Your Term"
                            value={searchParams}
                            onChange={(e) => setSearchParams(e.target.value)}
                         />
                        <h2 className="border display-5 fw-bold text-center rounded-3 mt-2 ">All Pastes</h2>
                        {
                            filteredData.length > 0 &&
                            filteredData.map((paste) =>{
                                return(
                                    <div className="row  justify-content-center mb-3" key={paste?._id}>
                                        <div className="col-lg-11   border rounded-3 py-2 bg-white">
                                            <div className="row justify-content-between align-items-center">
                                                <div className="col-lg-10">
                                                    <h4 className="h2 fw-bold">{paste?.title}</h4>
                                                </div>
                                                <div className="col-lg-2">
                                                    
                                                    <div className="d-flex justify-content-between align-items-center">
                                                        <a href={`/?pasteId=${paste?._id}`}><i class="bi bi-pencil-square"></i></a>
                                                        <a href={`/pastes/${paste?._id}`}><i class="bi bi-eye"></i></a>
                                                        <i class="bi bi-trash" onClick={() => handleDelete(paste?._id)}></i>
                                                        <i class="bi bi-copy"  onClick={() => {
                                                            navigator.clipboard.writeText(paste?.content);
                                                            toast("Content Copy Successfully");}}></i>
                                                    </div>
                                                </div>
                                                <div className="col-lg-12 pt-4">
                                                    <p>{paste.content}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default Paste;
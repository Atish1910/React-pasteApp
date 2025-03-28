import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useSearchParams } from "react-router-dom";
import { addToPastes, updateToPastes } from "../redux/pasteSlice";

function ViewPaste(){
    const {id} = useParams();
    const allPastes = useSelector((state) => state.paste.pastes);
    const paste = allPastes.filter((p) => p._id === id)[0]
    return(
        <>
        <div className="container text-center border py-5">
            <div className="row">
                <h1>hi i am View Paste</h1>
                <div className="d-flex align-items-center mb-4">
                    <input 
                        className="form-control"
                        type="text"
                        placeholder="Enter Title Here"
                        disabled
                        value={paste.title}
                        onChange={(e) =>setTitle(e.target.value)} 
                    />
                </div>
                <div className="">
                    <textarea 
                        className="form-control"
                        placeholder="Enter Content Here"
                        value={paste.content}
                        rows={20}
                        onChange={(e) => setValue(e.target.value)}
                        disabled
                        >

                    </textarea>
                </div>
            </div>
        </div>
    </>
    )
}
export default ViewPaste;
import { use, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Paste = () =>{
    const pastes = useSelector((state) => state.paste.pastes);
    console.log(pastes);
    
    const [searchParams, setSearchParams] = useState("");
    const dispatch = useDispatch();
    const filteredData = pastes.filter(
        (paste) => paste.title.toLowerCase().includes(searchParams.toLowerCase())
    );

   
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
                    </div>
                    <div className="">
                        {
                            filteredData.length > 0 &&
                            filteredData.map((paste) =>{
                                return(
                                    <div className="text-center border mb-3 mt-2 py-2">
                                        <h4>{paste.title}</h4>
                                        <p>{paste.content}</p>
                                        <p>{paste.createdAt}</p>
                                        <div className="d-flex justify-content-around align-items-center">
                                            <button className="btn btn-primary">Edit</button>
                                            <button className="btn btn-primary">View</button>
                                            <button className="btn btn-primary">Copy</button>
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
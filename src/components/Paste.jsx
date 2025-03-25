import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Paste = () =>{
    const pastes = useSelector((state) => state.paste.Pastes);
    console.log(pastes);
    
    const [searchTerm, setSearchTerm] = useState("");

    const dispatch = useDispatch();
    const filteredData = pastes.filter(
        (paste) => paste.title.toLowerCase().include(searchTerm.toLowerCase())
    );
    return(
        <>
            <div className="container border py-5">
                <div className="row">
                    <h1> hii I am Paste Container</h1>
                    <div className="">
                        <input 
                            type="search"
                            className="form-control"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            placeholder="Search Data With Title"
                        />
                    </div>
                    <div className="">
                        {
                            filteredData.length > 0 &&
                            filteredData.map((paste) =>{
                                return(
                                    <div className="">
                                        {
                                            paste.title
                                        }
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
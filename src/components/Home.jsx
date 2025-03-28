import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { addToPastes, updateToPastes } from "../redux/pasteSlice";


function Home(){
    const [title, setTitle] = useState(""); //
    const [value, setValue] = useState("");  // textarea value
    const [searchParams, setSearchParams] = useSearchParams(); // track id
    const pasteId = searchParams.get("pasteId");  // 
    const dispatch = useDispatch();
    const allPastes = useSelector((state) => state.paste.pastes);

    function createPaste(){
        const paste = {
            title : title,
            content : value,
            _id : pasteId || Date.now().toString(36), 
            createdAt: new Date().toISOString() 
        }
        if(pasteId){
            // update
            dispatch(updateToPastes(paste));
        }
        else{
            // Create
            dispatch(addToPastes(paste))
        }

        

        // After Creation or updation blank data
        setTitle("");
        setValue("");
        setSearchParams({});
        
    }
    useEffect(() =>{
        if(pasteId){
            const paste = allPastes.find((p) => p._id == pasteId);
            setTitle(paste.title);
            setValue(paste.content);
        }
    }, [pasteId])
    return(
        <>
            <div className="container text-center border py-5">
                <div className="row">
                    <h1>hi i am Home</h1>
                    <div className="d-flex align-items-center mb-4">
                        <input 
                            className="form-control"
                            type="text"
                            placeholder="Enter Title Here"
                            value={title}
                            onChange={(e) =>setTitle(e.target.value)} 
                        />
                        <button 
                            onClick={createPaste}
                            className={pasteId ? "btn btn-success" : "btn btn-danger"}>
                            {
                                pasteId ? "Update My Paste" : "Create My Paste"
                            }
                        </button>
                    </div>
                    <div className="">
                        <textarea 
                            className="form-control"
                            placeholder="Enter Content Here"
                            value={value}
                            rows={20}
                            onChange={(e) => setValue(e.target.value)}
                            >

                        </textarea>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Home;
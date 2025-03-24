import { useState } from "react";
import { useSearchParams } from "react-router-dom";


function Home(){
    const [title, setTitle] = useState("");
    const [value, setValue] = useState("");
    const [searchParams] = useSearchParams();
    const pasteId = searchParams.get("pasteId"); 


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
                        <button className={pasteId ? "btn btn-success" : "btn btn-danger"}>
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
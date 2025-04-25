import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { addToPastes, updateToPastes } from "../redux/pasteSlice";
import { useForm } from "react-hook-form";


function Home(){
    const [title, setTitle] = useState(""); //
    const [value, setValue] = useState("");  // textarea value
    const [searchParams, setSearchParams] = useSearchParams(); // track id
    const pasteId = searchParams.get("pasteId");  // 
    const dispatch = useDispatch();
    const allPastes = useSelector((state) => state.paste.pastes);

    const {
        register,
        handleSubmit,
        watch,
        formState: {errors, isSubmitting},
    } = useForm();

    function createPaste(data){
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

        console.log("You just submitted form", data);
        

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
                <div className="row justify-content-center">
                    <div className="col-6 align-items-center mb-4">
                        <form onSubmit={handleSubmit(createPaste)}>
                            <input 
                                className={`form-control mb-2 ${errors.title ? "input-errors" : ""}`}
                                type="text"
                                placeholder="Enter Title Here"
                                value={title}
                                onChange={(e) =>setTitle(e.target.value)} 
                                {
                                    ...register("title", {
                                        required : "Please Enter Title",
                                        // minLength : {value : 4, message : "Enter Minium 4 Letters of Title"}
                                    })
                                }
                            />
                            {
                                errors.title && <p className="text-danger">{errors.title.message}</p>
                            }
                            <textarea 
                                className={`form-control ${errors.content? "input-errors " : ""}`}
                                placeholder="Enter Content Here"
                                value={value}
                                rows={20}
                                onChange={(e) => setValue(e.target.value)}
                                {
                                    ...register("content",{
                                        required : "Please Enter Content",
                                        // minLength : {value : 40, message : "Enter Min 40 Words"}
                                    })
                                }
                                >
                                {
                                    errors.content && <p className="text-danger">{errors.content.message}</p>
                                }
                            </textarea>
                            <div className="pt-4">
                            <button 
                                    className={pasteId ? "btn btn-warning" : "btn btn-create"}>
                                    {pasteId ? "Update My Paste" : "Create My Paste"}
                            </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Home;
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
        reset,
        watch,
        formState: {errors, isSubmitting},
    } = useForm();

    function createPaste(data){
        const paste = {
            title : data.title,
            content : data.content,
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
        

        reset();
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
            <section className=" bg-3 text-center border py-5">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-9 align-items-center mb-4">
                            <form onSubmit={handleSubmit(createPaste)}>
                                <input 
                                    className={`form-control mb-2 ${errors.title ? "input-errors" : ""}`}
                                    type="text"
                                    placeholder="Enter Title Here"
                                    {...register("title", {
                                        required: "Please Enter Title",
                                        minLength: {
                                            value: 4,
                                            message: "Enter Minimum 4 Letters of Title"
                                        }
                                    })}
                                />
                                {
                                    errors.title && <p className="text-danger">{errors.title.message}</p>
                                }
                                {/* <div className="d-flex justify-content-between px-3 align-items-center bg-white border rounded-3  ">
                                    <div className="">
                                        <span className="">A</span>
                                        <span className=""></span>
                                        <span className=""></span>
                                    </div>
                                    <div className="">
                                        <i className="bi bi-copy"></i>
                                    </div>
                                </div> */}
                                <textarea 
                                    className={`form-control ${errors.content ? "input-errors" : ""}`}
                                    placeholder="Write Your Content Here"
                                    rows={20}
                                    {...register("content", {
                                        required: "Please Enter Content",
                                        minLength: {
                                            value: 20,
                                            message: "Enter Minimum 40 Words"
                                        }
                                    })}
                                />
                                {
                                    errors.content && <p className="text-danger">{errors.content.message}</p>
                                }
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
            </section>
        </>
    )
}
export default Home;
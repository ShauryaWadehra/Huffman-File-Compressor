import React, { useContext } from "react";
import { CompressContext } from "./Context/CompressContext";
import { StepContext } from "./Context/StepContext";
import { FormContext } from "./Context/FormContext";

const Navbar = () => {
    const [CompressState, setCompressState] = useContext(CompressContext);
    const [StepState, setStepState]=useContext(StepContext);
    const [form,setForm]=useContext(FormContext);

    return (<div className="flex justify-between h-14 bg-white drop-shadow-lg items-center sticky top-0">
        <div className="flex items-center -mt-2">
            <img src="/logo.jpg" className="ml-4 hover:cursor-pointer h-10" onClick={()=>window.location.reload()}/>
            <div className="ml-4 text-3xl text-red-500 cursor-pointer" onClick={()=>window.location.reload()}>wecompress</div>
        </div>
        <div className="flex items-center">
            <div onClick={() => {
                setCompressState(true);
                setStepState('1');
                setForm('');
                }}
                className={`mr-4 hover:cursor-pointer hover:text-red-500 hover:duration-200 font-medium ${CompressState ? 'text-red-500' : ''}`}>
                COMPRESS FILE</div>
            <div onClick={() => {
                setCompressState(false);
                setStepState('1');
                setForm('');
                }}
                className={`mr-8 hover:cursor-pointer hover:text-red-500 hover:duration-200 font-medium ${!CompressState ? 'text-red-500' : ''}`}>
                COMPRESS IMAGE</div>
        </div>
    </div>)
}
export default Navbar;
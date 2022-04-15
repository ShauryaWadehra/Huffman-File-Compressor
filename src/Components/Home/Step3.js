import React, {useContext} from "react";
import { CompStateContext } from "../Context/CompStateContext";

export default function Step3()
{
    const [CompStatus, CompStatusState]=useContext(CompStateContext);

    return (<div className="pb-4" id="step3">
    {CompStatus[0]==='1'&&(<div>
        <div className="flex justify-around text-5xl font-semibold text-[#383E45] pt-20">{CompStatus[1]==='encode'?"Compressing":"De-Compressing"} your file ...</div>
        <div className="flex justify-around text-3xl mt-4 font-thin">{CompStatus[1]==='encode'?"Compressed":"De-Compressed"} file will be downloaded automatically!</div>
    </div>)}
    {CompStatus[0]==='2'&&(<div>
        <div className="flex justify-around">
            <img src="./done.jpg" className="h-40 w-40 mt-20"/>
        </div>
        <div className="flex justify-around">
            <div className="flex justify-around text-2xl mt-4 font-light">{CompStatus[2]}</div>
        </div>
        <div className="flex justify-around">
            <div className="my-12 mb-14 cursor-pointer bg-red-500 rounded-md text-white text-2xl p-2.5 px-4font-semibold hover:bg-[#161616] hover:duration-200 w-fit" onClick={()=>window.location.reload()}>Click here to compress/decompress another file</div>
        </div>
    </div>)}  
    </div>);
}
import React from "react";

export default function Step2()
{
    return (<div className="pb-10">
        <div className="flex justify-around text-5xl font-semibold text-[#383E45] pt-20">Select Action</div>
        {/* <div className="flex justify-around text-3xl mt-3 font-thin">Reduce {CompressState?"file":"image"} size using Huffman Compression</div> */}
        {/* <div className="flex justify-around mt-10">
            <input type="file" id="upload" hidden onChange={(e)=>updateFormChange(e)}/>
            <label for="upload" className="hover:duration-200 hover:cursor-pointer bg-red-500 rounded-md p-3 px-5 mt-5 text-white text-2xl font-semibold hover:bg-[#161616]">{form.length===0?(CompressState?"Select TEXT file":"Select Image"):(form.name.substring(0,17)+"..."+extension)}</label>
        </div>
        <div className="flex justify-around mt-2">or drop {CompressState?"file":"image"} here</div>
        <div className="flex justify-around ml-60 mt-12 text-red-500 font-medium cursor-pointer underline" onClick={()=>{form.length!=0?setStepState('2'):alert(`No ${CompressState?"file":"image"} uploaded.\nPlease upload ${CompressState?"a file":"an image"} and try again`)}}>Next →</div> */}
    </div>)
}
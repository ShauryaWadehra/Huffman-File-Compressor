import React, {useContext, useState} from "react";
import { CompressContext } from "../Context/CompressContext";
import { FormContext } from "../Context/FormContext";
import { StepContext } from "../Context/StepContext";

export default function Step1()
{
    const [CompressState, setCompressState] = useContext(CompressContext);
    const [StepState, setStepState]=useContext(StepContext);
    const [form,setForm]=useContext(FormContext);
    const [extension,setExtension]=useState("");

    function updateFormChange(e)
    {
        var uploadedFile = e.target.files[0];
        let nameSplit = uploadedFile.name.split('.');
		var exten = nameSplit[nameSplit.length - 1].toLowerCase();

        if (CompressState&&(exten != "txt")) {
			alert("Invalid file type (." + exten + ") \nPlease upload a valid .txt file and try again");
			return;
		}       
        // else if(!CompressState&&((exten != "png")&&(exten != "jpg")&&(exten != "jpeg"))){
		// 	alert("Invalid file type (." + exten + ") \nPlease upload a valid image of type .png, .jpeg, .jpg and try again");
		// 	return;
		// }
        setForm(uploadedFile);
        setExtension(exten);
    }

    return (<div className="pb-10" id="step1">
        <div className="flex justify-around text-5xl font-semibold text-[#383E45] pt-20">Compress {CompressState?"TEXT files":"Images"}</div>
        <div className="flex justify-around text-3xl mt-3 font-thin">Reduce {CompressState?"file":"image"} size using Huffman Compression</div>
        <div className="flex justify-around mt-10">
            <input type="file" id="uploadfile" hidden onChange={(e)=>updateFormChange(e)}/>
            <label for="uploadfile" className="hover:duration-200 hover:cursor-pointer bg-red-500 rounded-md p-3 px-5 mt-5 text-white text-2xl font-semibold hover:bg-[#161616]">{(CompressState?"Select TEXT file":"Select Image")}</label>
        </div>
        <div className="flex justify-around mt-2">{form.length===0?`or drop ${CompressState?"file":"image"} here`:(form.name.substring(0,17)+"..."+extension)}</div>
        <div className="flex justify-around ml-60 mt-12 text-red-500 font-medium cursor-pointer underline" onClick={()=>{form.length!=0?setStepState('2'):alert(`No ${CompressState?"file":"image"} uploaded.\nPlease upload ${CompressState?"a file":"an image"} and try again`)}}>Next →</div>
    </div>);
}
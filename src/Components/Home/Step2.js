import React, {useContext} from "react";
import { StepContext } from "../Context/StepContext";
import { FormContext } from "../Context/FormContext";
import { CompStateContext } from "../Context/CompStateContext";
import { onclickChanges2, myDownloadFile, ondownloadChanges } from "../../Codec.js";
import Codec from "../../Codec.js";

export default function Step2()
{
    const [StepState, setStepState]=useContext(StepContext);
    const [form,setform]=useContext(FormContext);
    const [CompStatus, CompStatusState]=useContext(CompStateContext);

    function EncodeFile()
    {
        var codecObj = new Codec();    
        var uploadedFile = form;

        if(uploadedFile.size === 0){
            alert("You have uploaded an empty file!\nThe compressed file might be larger in size than the uncompressed file (compression ratio might be smaller than one).\nBetter compression ratios are achieved for larger file sizes!");
        }	
        else if(uploadedFile.size <= 350){
            alert("The uploaded file is very small in size (" + uploadedFile.size +" bytes) !\nThe compressed file might be larger in size than the uncompressed file (compression ratio might be smaller than one).\nBetter compression ratios are achieved for larger file sizes!");
        }
        else if(uploadedFile.size < 1000){
            alert("The uploaded file is small in size (" + uploadedFile.size +" bytes) !\nThe compressed file's size might be larger than expected (compression ratio might be small).\nBetter compression ratios are achieved for larger file sizes!");
        }

        CompStatusState(['1','encode']);
        setStepState('3');
  
        var fileReader = new FileReader();
        fileReader.onload = function (fileLoadedEvent) {
            let text = fileLoadedEvent.target.result;
            console.log(text);
            let [encodedString, outputMsg] = codecObj.encode(text);
            myDownloadFile(uploadedFile.name.split('.')[0] + "_compressed.txt", encodedString);
            CompStatusState(['2','encode',outputMsg]);
        }
        fileReader.readAsText(uploadedFile, "UTF-8");
    }

    function DecodeFile()
    {
        var uploadedFile = form;
        var codecObj = new Codec();

        if (uploadedFile === undefined) {
			alert("No file uploaded.\nPlease upload a file and try again!");
			return;
		}

        CompStatusState(['1','decode']);
		
        var fileReader = new FileReader();
		fileReader.onload = function (fileLoadedEvent) {
			let text = fileLoadedEvent.target.result;
			let [decodedString, outputMsg] = codecObj.decode(text);
            setStepState('3');
			myDownloadFile(uploadedFile.name.split('.')[0] + "_decompressed.txt", decodedString);
            CompStatusState(['2','decode',outputMsg]);
		}
		fileReader.readAsText(uploadedFile, "UTF-8");
	}

    function ActionPlay(val)
    {
        if(val==="encode")
        EncodeFile();
        else DecodeFile();   
    }

    return (<div className="pb-32" id="step2">
        <div className="flex justify-around text-5xl font-semibold text-[#383E45] pt-20">Select Action</div>
        <div className="flex justify-around mt-12">
            <svg class="svg-inline--fa fa-file-archive fa-w-12 fa-5x" aria-hidden="true" data-prefix="far" data-icon="file-archive" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" data-fa-i2svg=""><path fill="currentColor" d="M369.941 97.941l-83.882-83.882A48 48 0 0 0 252.118 0H48C21.49 0 0 21.49 0 48v416c0 26.51 21.49 48 48 48h288c26.51 0 48-21.49 48-48V131.882a48 48 0 0 0-14.059-33.941zM256 51.882L332.118 128H256V51.882zM336 464H48V48h79.714v16h32V48H208v104c0 13.255 10.745 24 24 24h104v288zM192.27 96h-32V64h32v32zm-32 0v32h-32V96h32zm0 64v32h-32v-32h32zm32 0h-32v-32h32v32zm1.909 105.678A12 12 0 0 0 182.406 256H160.27v-32h-32v32l-19.69 97.106C101.989 385.611 126.834 416 160 416c33.052 0 57.871-30.192 51.476-62.62l-17.297-87.702zM160.27 390.073c-17.918 0-32.444-12.105-32.444-27.036 0-14.932 14.525-27.036 32.444-27.036s32.444 12.105 32.444 27.036c0 14.931-14.526 27.036-32.444 27.036zm32-166.073h-32v-32h32v32z"></path></svg>
        </div>
        <div className="flex justify-around">
        <div className="flex">
            <button onClick={()=>ActionPlay("encode")} 
                className="hover:duration-200 hover:cursor-pointer bg-red-500 rounded-md p-2 px-4 mt-5 text-white text-lg font-semibold hover:bg-[#161616]"
                id="encode">Compress</button>
            <button onClick={()=> ActionPlay("decode")}
                className="ml-4 hover:duration-200 hover:cursor-pointer bg-red-500 rounded-md p-2 px-4 mt-5 text-white text-lg font-semibold hover:bg-[#161616]"
                id="decode">
                Decompress</button>
        </div>
        </div>
    </div>);
}
import React, { useContext } from "react";
import { CompressContext } from "../Context/CompressContext";
import { StepContext } from "../Context/StepContext";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";

const UploadFile = () => {
    const [CompressState, setCompressState] = useContext(CompressContext);
    const [StepState, setStepState] = useContext(StepContext);

    return (<div className="bg-[#f6f6f8]">
        {StepState === '1' && <Step1 />}
        {StepState === '2' && <Step2 />}
        {StepState === '3' && <Step3 />}
    </div>)
}
export default UploadFile;
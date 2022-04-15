import React from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";
import UploadFile from "./uploadFile";

export default function HomeFlow()
{
    return (<div>
        <Navbar/>
        <UploadFile/>
        <Footer/>
    </div>);
}
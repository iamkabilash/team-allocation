import React from "react";

const Footer = () =>{
    var today = new Date();
    return (
        <div className="flex flex-col items-center font-bold mt-[40px] mb-[20px]">
            <h1>Team allocation app - {today.getFullYear()}</h1>
        </div>
    );
}

export default Footer;
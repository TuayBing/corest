import React from "react";

const Background = () => {
    return (
        <div>
            <div className="h-screen fixed w-full -z-50">
                <img src={"/img/bg-login.png"} className="w-full h-full"/>
            </div>
        </div>
    );
};

export default Background;
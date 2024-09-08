import React from "react";

//Components Login
import BoxRight from "./BoxReght";
import BoxLift from "./BoxLeft";

const LoginBox = () => {
    return (
        <div>
            <div className="flex justify-center items-center h-screen">
                <div className="w-[46-rem] h-[35rem] bg-[#E2E2E2] flex shadow-lg shadow-gray-900 rounded-lg">
                    <BoxLift />
                    <BoxRight />
                </div>
            </div>
        </div>
    );
};

export default LoginBox;
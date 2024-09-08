import React from "react";

const Copyright = () => {
    const year = new Date().getFullYear(); 

    return (
        <div className="fixed bottom-0 left-0 right-0">
            <footer className="w-full flex items-center justify-center text-[#fff] md:text-[1rem] text-[0.5rem] mb-4">
                © {year} Cores Point of Sale | Designed by Phuket Innovative Development Co., Ltd.
            </footer>
        </div>
    );
};

export default Copyright;

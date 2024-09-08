import React, { useState } from "react";
import axios from 'axios';


const ForgetPassword = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [email, setEmail] = useState(""); 
    const [error, setError] = useState(""); 
    const [success, setSuccess] = useState(""); 

    const handleClick = (event) => {
        event.preventDefault();
        setIsOpen(true);
    };

    const closePopup = () => {
        setIsOpen(false);
        setEmail(""); 
        setError(""); 
        setSuccess(""); 
    };

    const forgotpassword = async () => {
        try {
            const response = await axios.post('http://localhost:4500/api/auth/forgot-password', {
                email
            });
            setSuccess(response.data.message);
            closePopup();
        } catch (error) {
            setError(error.response?.data?.message || 'เกิดข้อผิดพลาด');
        }
    };
    
    return (
        <div className="mt-2 flex flex-col items-center gap-1">
            <div className="flex justify-center gap-1">
                <span className="text-black text-sm">Forget Password </span>
                <button
                    onClick={handleClick}
                    className="text-blue-500 underline focus:outline-none text-sm"
                >
                    Click Here
                </button>
            </div>

            {/* Forgotten Password */}
            {isOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-600 bg-opacity-50">
                    <div className="bg-white w-[30rem] p-4 rounded-lg shadow-lg">
                        <div className="flex justify-between items-center">
                            <h2 className="text-xl font-bold text-[#E55B13]">Forgotten Password?</h2>
                            <button
                                onClick={closePopup}
                                className="text-[#E55B13] text-2xl font-bold focus:outline-none"
                            >
                                &times;
                            </button>
                        </div>
                    
                        <hr className="my-2 border-[#E55B13] border-1"/>
                        
                        <p className="text-[#E55B13]">Enter your email to reset your password*</p>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="border p-3 rounded-md w-full border-[#E55B13] focus:border-[#E55B13] focus:outline-none mt-1.5"
                            placeholder="Enter your email"
                        />
                        {error && <p className="text-red-500">{error}</p>}
                        {success && <p className="text-green-500">{success}</p>}
                        <div className="flex justify-center gap-2 mt-4">
                            {/* ปุ่ม Cancel */}
                            <button
                                onClick={closePopup}
                                className="bg-gray-300 text-black  w-[6rem] p-2 rounded-md hover:bg-gray-400 transition duration-200"
                            >
                                Cancel
                            </button>
                            {/* ปุ่ม Submit */}
                            <button
                                onClick={forgotpassword}
                                className="bg-[#E55B13] text-white w-[6rem] p-2 rounded-md hover:bg-[#d54d0e] transition duration-200"
                            >
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ForgetPassword;

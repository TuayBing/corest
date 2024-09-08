import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ForgetPassword from "./ForgetPassword";
import axios from 'axios'

const BoxRight = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [rememberMe, setRememberMe] = useState(false);
    const navigate = useNavigate();

    //ที่แก้มาใหม่ api
    const handleSubmit = async (e) => {
        e.preventDefault(); 
    
        try {
            const response = await axios.post('/api/auth/login', {
                email: username,
                password
            });
            localStorage.setItem('token', response.data.token);
            navigate("/home");
        } catch (error) {
            setError(error.response?.data?.message || 'เกิดข้อผิดพลาด');
        }
    };
    
    

    return (
        <div className="md:w-[23rem] h-[35rem] w-screen flex flex-col justify-center items-center">
            <div className="w-full flex justify-center mt-[-2rem] mb-6">
                <div className="w-[15rem] h-[10rem]">
                    <img src={"/img/logologin.png"} className="w-full h-full" alt="Logo" />
                </div>
            </div>

            <form onSubmit={handleSubmit} className="w-[17rem] flex flex-col space-y-5">
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="border p-3 rounded-md w-full border-[#E55B13] focus:border-[#E55B13] focus:outline-none"
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="border p-3 rounded-md w-full border-[#E55B13] focus:border-[#E55B13] focus:outline-none"
                />
                <div className="flex items-center">
                    <input
                        type="checkbox"
                        checked={rememberMe}
                        onChange={() => setRememberMe(!rememberMe)}
                        className="mr-2 h-4 w-4 border border-[#E55B13] accent-[#E55B13] rounded"
                    />
                    <label>Remember Me</label>
                </div>

                <button
                    type="submit"
                    className="bg-[#E55B13] text-white p-3 rounded-md hover:bg-[#d54d0e] transition duration-200"
                >
                    Login
                </button>
                <ForgetPassword />
            </form>
        </div>
    );
};

export default BoxRight;

import React, { useState } from 'react';

const ResetPassword = () => {
  // สร้าง state สำหรับรหัสผ่านใหม่และการยืนยันรหัสผ่าน
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // ฟังก์ชันสำหรับจัดการเมื่อกด submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // เช็คว่ารหัสผ่านทั้งสองช่องตรงกันหรือไม่
    if (newPassword !== confirmPassword) {
      setErrorMessage('Passwords do not match');
    } else {
      // ถ้าตรงกัน, ทำสิ่งที่ต้องการ เช่น ส่งรหัสผ่านไปที่ backend
      console.log('New Password:', newPassword);
      // ล้างข้อความแจ้งเตือน
      setErrorMessage('');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg flex flex-col items-center p-8 w-full max-w-md">
        <div className="w-40 h-24 mb-8">
          <img src={"/img/logologin.png"} className="w-full h-full" alt="Logo" />
        </div>

        <form onSubmit={handleSubmit} className="w-full flex flex-col space-y-5">
          <input
            type="password"
            placeholder="New Password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="border p-3 rounded-md w-full border-gray-300 focus:border-[#E55B13] focus:outline-none"
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="border p-3 rounded-md w-full border-gray-300 focus:border-[#E55B13] focus:outline-none"
          />
          {errorMessage && (
            <div className="text-red-500 text-sm text-center">{errorMessage}</div>
          )}
          <button type="submit" className="p-3 bg-[#E55B13] text-white rounded-md w-full">
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;

import React, { useState } from 'react';

const Profile = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  // Dummy user data for illustration purposes
  const user = {
    firstName: 'John',
    lastName: 'Doe',
    position: 'Manager',
    permission: 'Admin',
  };

  return (
    <div className="relative mx-1.5">
      {/* Profile Picture */}
      <div
        className="w-10 h-10 rounded-full bg-gray-700 cursor-pointer flex items-center justify-center"
        onClick={() => setIsProfileOpen(!isProfileOpen)}
      >
        {/* Add your profile picture here */}
        <img
          src="/img/profile.png"
          alt="Profile"
          className="w-full h-full rounded-full object-cover"
        />
      </div>

      {/* Profile Dropdown */}
      {isProfileOpen && (
        <div className="absolute right-0 mt-2 w-64 bg-white border border-gray-300 shadow-lg rounded-lg">
          <div className="p-4">
            <div className="flex items-center mb-4">
              <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                <img
                  src="/img/profile.png"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="ml-4">
                <div className="text-lg font-semibold text-[#EE8025]">
                  {user.firstName} {user.lastName}
                </div>
                <div className="text-sm text-gray-600">{user.position}</div>
                <div className="text-sm text-gray-600">{user.permission}</div>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <button className="p-2 text-[#EE8025] hover:bg-gray-100 rounded">Personal Information</button>
              <button className="p-2 text-[#EE8025] hover:bg-gray-100 rounded">Change Password</button>
            </div>

            <div className="mt-4 text-xs text-center text-gray-500">
              <span>Copyright {(new Date()).getFullYear()} © Corest Point of Sale</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;

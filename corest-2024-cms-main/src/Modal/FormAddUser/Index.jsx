import React from 'react';

const Index = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4">
      <div className="bg-white rounded-lg p-6 w-full max-w-3xl max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4 border-b border-gray-300 pb-2">
            <h2 className="text-2xl font-bold text-[#935B30]">Add User</h2>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
        </div>

        <form className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">First Name *</label>
              <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" placeholder="First Name" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Last Name *</label>
              <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" placeholder="Last Name" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Nick Name *</label>
              <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" placeholder="Nick Name" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Gender *</label>
              <div className="mt-1 space-x-4">
                <label className="inline-flex items-center">
                  <input type="radio" className="form-radio" name="gender" value="male" />
                  <span className="ml-2">Male</span>
                </label>
                <label className="inline-flex items-center">
                  <input type="radio" className="form-radio" name="gender" value="female" />
                  <span className="ml-2">Female</span>
                </label>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Date of Birth *</label>
              <input type="date" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Nationality *</label>
              <select className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2">
                <option>Select Nationality</option>
                {/* Add nationality options here */}
              </select>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Email *</label>
              <input type="email" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" placeholder="Email" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">ID/PASSPORT NO. *</label>
              <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" placeholder="ID/PASSPORT NO." />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Position *</label>
              <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" placeholder="Position" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Permission *</label>
              <select className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2">
                <option>Select Permission</option>
                {/* Add permission options here */}
              </select>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Address *</label>
            <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" placeholder="Address" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Address 2</label>
            <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" placeholder="Address" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Country</label>
              <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" placeholder="Thailand" readOnly />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Province *</label>
              <select className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2">
                <option>Phuket</option>
                {/* Add more provinces here */}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">District *</label>
              <select className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2">
                <option>Mueang</option>
                {/* Add more districts here */}
              </select>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Sub District *</label>
              <select className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2">
                <option>Wichit</option>
                {/* Add more sub districts here */}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Postal Code *</label>
              <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" placeholder="Postal Code" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Mobile No. *</label>
              <input type="tel" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" placeholder="Mobile No." />
            </div>
          </div>
          <div className="flex justify-center space-x-2">
            <button type="button" onClick={onClose} className="px-4 py-2 w-[6rem] border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50">
              Cancel
            </button>
            <button type="submit" className="px-4 py-2 w-[6rem] bg-[#935B30] text-white rounded-md hover:bg-[#7D4E28]">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Index;
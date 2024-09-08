import React from 'react';

const Index = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-[#935B30]">Add Permission</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Permission Name *</label>
            <input type="text" className="mt-1 block w-full border border-orange-300 rounded-md shadow-sm p-2" placeholder="Permission Name" />
          </div>
          <div>
            <table className="w-full">
              <thead>
                <tr>
                  <th className="text-left">Feature(s)</th>
                  <th>View</th>
                  <th>Add/Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>POS</td>
                  <td className="text-center"><input type="checkbox" className="form-checkbox text-green-500" /></td>
                  <td className="text-center">-</td>
                  <td className="text-center">-</td>
                </tr>
                <tr>
                  <td>Report</td>
                  <td className="text-center"><input type="checkbox" className="form-checkbox text-red-500" /></td>
                  <td className="text-center">-</td>
                  <td className="text-center">-</td>
                </tr>
                <tr>
                  <td>Setting</td>
                  <td className="text-center"><input type="checkbox" className="form-checkbox text-green-500" /></td>
                  <td className="text-center"><input type="checkbox" className="form-checkbox text-green-500" /></td>
                  <td className="text-center"><input type="checkbox" className="form-checkbox text-red-500" /></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="flex items-center">
                <input type="checkbox" className="form-checkbox text-orange-500" />
                <span className="ml-2 text-orange-500">Restaurant</span>
              </label>
            </div>
            <div>
              <label className="flex items-center">
                <input type="checkbox" className="form-checkbox text-orange-500" />
                <span className="ml-2 text-orange-500">Table</span>
              </label>
            </div>
            <div>
              <label className="flex items-center">
                <input type="checkbox" className="form-checkbox" />
                <span className="ml-2 text-gray-700">Company</span>
              </label>
            </div>
            <div>
              <label className="flex items-center">
                <input type="checkbox" className="form-checkbox text-orange-500" />
                <span className="ml-2 text-orange-500">Delivery</span>
              </label>
            </div>
            <div>
              <label className="flex items-center">
                <input type="checkbox" className="form-checkbox" />
                <span className="ml-2 text-gray-700">Food</span>
              </label>
            </div>
            <div>
              <label className="flex items-center">
                <input type="checkbox" className="form-checkbox" />
                <span className="ml-2 text-gray-700">Permission</span>
              </label>
            </div>
            <div>
              <label className="flex items-center">
                <input type="checkbox" className="form-checkbox" />
                <span className="ml-2 text-gray-700">Promotion</span>
              </label>
            </div>
            <div>
              <label className="flex items-center">
                <input type="checkbox" className="form-checkbox" />
                <span className="ml-2 text-gray-700">User</span>
              </label>
            </div>
          </div>
          <div className="flex justify-center space-x-2 mt-6">
            <button type="button" onClick={onClose} className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300">
              Cancel
            </button>
            <button type="submit" className="px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Index;
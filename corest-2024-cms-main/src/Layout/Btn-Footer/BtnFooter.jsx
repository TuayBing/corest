import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const BtnFooter = () => {
  const [activeButton, setActiveButton] = useState('Company');
  const location = useLocation();

  const buttons = [
    { name: 'Company', path: '/setting/company' },
    { name: 'Restaurant', path: '/setting/restaurant' },
    { name: 'Food', path: '/setting/food' },
    { name: 'Promotion', path: '/setting/promotion' },
    { name: 'Inventory', path: '/setting/inventory' },
    { name: 'Table', path: '/setting/table' },
    { name: 'Delivery', path: '/setting/delivery' },
    { name: 'Permission', path: '/setting/permission' },
    { name: 'User', path: '/setting/user' },
    { name: 'Printer', path: '/setting/printer' }
  ];

  useEffect(() => {
    const currentButton = buttons.find(button => location.pathname === button.path);
    if (currentButton) {
      setActiveButton(currentButton.name);
    }
  }, [location]);

  return (
    <div className="fixed w-full bottom-0 flex justify-between items-center bg-gray-200 border-t border-gray-300 h-16">
      {buttons.map((button) => (
        <Link
          key={button.name}
          to={button.path}
          className={`flex-1 h-full flex items-center justify-center px-4 py-2 text-sm font-medium transition-colors
            ${activeButton === button.name
              ? 'border-t-4 border-orange-500 text-orange-500'
              : 'text-black hover:text-gray-700'
            }
          `}
        >
          {button.name}
        </Link>
      ))}
    </div>
  );
};

export default BtnFooter;
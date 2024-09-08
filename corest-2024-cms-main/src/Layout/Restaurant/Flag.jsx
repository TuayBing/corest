import React, { useState } from 'react';

const Flag = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [locale, setLocale] = useState("en");
  const localeOptions = [
    { id: "en" },
    { id: "th" },
  ];

  const handleToggle = () => setIsOpen(!isOpen);
  const handleChangeLocale = (id) => {
    setLocale(id);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      {/* Toggle Button */}
      <button
        onClick={handleToggle}
        className="flex items-center justify-center border border-transparent px-2 py-1 bg-light text-sm hover:bg-gray-200 rounded focus:outline-none"
      >
        <img
          src={locale === "en" ? "/img/usa_flag.png" : "/img/thai_flag.png"}
          alt="flag"
          className="w-7 hover:opacity-50"
        />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 bg-white border border-gray-300 rounded shadow-lg w-24">
          {localeOptions.map((l) => (
            <button
              key={l.id}
              onClick={() => handleChangeLocale(l.id)}
              className="flex items-center w-full px-2 py-1 hover:bg-gray-200 focus:outline-none"
            >
              <img
                src={l.id === "en" ? "/img/usa_flag.png" : "/img/thai_flag.png"}
                alt="flag"
                className="w-8 hover:opacity-50"
              />
              <span className="ml-2">{l.id.toUpperCase()}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Flag;

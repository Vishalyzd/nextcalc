"use client";

import { useState } from 'react';

const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const calculateResult = () => {
    try {
      setResult(eval(input)); // ⚠️ Unsafe for production
    } catch (error) {
      setResult('Invalid input');
    }
  };

  return (
    <div className="flex flex-col space-y-4">
      {/* Input Field */}
      <input
        type="text"
        value={input}
        onChange={handleChange}
        placeholder="Enter calculation (e.g., 2+2)"
        className="w-full p-3 border border-gray-400 rounded-lg bg-gray-100 text-black focus:outline-none"
      />

      {/* Calculate Button */}
      <button
        onClick={calculateResult}
        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-lg transition"
      >
        Calculate
      </button>

      {/* Output Field */}
      <div className="w-full p-3 border border-gray-400 rounded-lg bg-gray-100 text-black">
        Result: {result}
      </div>
    </div>
  );
};

export default Calculator;

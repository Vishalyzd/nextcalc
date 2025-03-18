'use client'; // This should be at the top

import Head from 'next/head';
import { useState, useEffect } from 'react';
import '../app/globals.css';

export default function Home() {
  const [input, setInput] = useState('');
  const [isMounted, setIsMounted] = useState(false); // To handle client-side rendering

  useEffect(() => {
    setIsMounted(true); // Ensures the component renders after mounting
  }, []);

  // Function to handle button clicks
  const handleButtonClick = (value) => {
    setInput((prevInput) => prevInput + value);
  };

  // Function to evaluate the input
  const handleEvaluate = () => {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput('Error');
    }
  };

  // Function to clear the input
  const handleClear = () => {
    setInput('');
  };

  // Prevent rendering until mounted to avoid hydration mismatch
  if (!isMounted) {
    return null; // Return nothing during SSR
  }

  return (
    <div>
      <Head>
        <title>Retro Calculator</title>
        <meta name="description" content="A retro-style calculator built with Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Background Image */}
      <div className="h-screen w-screen bg-cover bg-center flex items-center justify-center bg-black">
        {/* Transparent Card with Glass Effect */}
        <div className="card">
          <h1 className="text-center text-2xl font-semibold mb-6 text-white">Retro Calculator</h1>

          {/* Display/Input Field */}
          <input
            type="text"
            value={input}
            onChange={() => {}}
            placeholder="0"
            className="w-full text-right text-4xl bg-[#222] text-white p-4 rounded-md mb-4"
            readOnly
          />

          {/* Calculator Buttons */}
          <div className="calculator-buttons">
            <button onClick={() => handleClear()} className="button-clear">AC</button>
            <button onClick={() => handleButtonClick('/')} className="button-operator">/</button>
            <button onClick={() => handleButtonClick('*')} className="button-operator">×</button>
            <button onClick={() => handleButtonClick('-')} className="button-operator">−</button>
            <button onClick={() => handleButtonClick('7')} className="button-number">7</button>
            <button onClick={() => handleButtonClick('8')} className="button-number">8</button>
            <button onClick={() => handleButtonClick('9')} className="button-number">9</button>
            <button onClick={() => handleButtonClick('+')} className="button-operator">+</button>
            <button onClick={() => handleButtonClick('4')} className="button-number">4</button>
            <button onClick={() => handleButtonClick('5')} className="button-number">5</button>
            <button onClick={() => handleButtonClick('6')} className="button-number">6</button>
            <button onClick={() => handleButtonClick('=')} className="button-equal" onClick={handleEvaluate}>=</button>
            <button onClick={() => handleButtonClick('1')} className="button-number">1</button>
            <button onClick={() => handleButtonClick('2')} className="button-number">2</button>
            <button onClick={() => handleButtonClick('3')} className="button-number">3</button>
            <button onClick={() => handleButtonClick('0')} className="button-number button-zero">0</button>
            <button onClick={() => handleButtonClick('.')} className="button-number">.</button>
          </div>
        </div>
      </div>
    </div>
  );
}

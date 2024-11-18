import React from 'react';

export function Header() {
  return (
    <header className="container mx-auto px-4 py-16 text-center">
      <h1 className="text-4xl md:text-6xl font-bold mb-4 font-poppins">
        <span className="line-through opacity-50">Immersive Technologies</span>
        <span className="block mt-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
          Digital Systems Engineering<br />and Smart Technologies
        </span>
      </h1>
      <p className="text-xl text-gray-300 max-w-3xl mx-auto mt-6">
        A comprehensive master's program bridging embedded systems, IoT, data engineering, 
        and extended reality technologies for the industry 4.0 era.
      </p>
    </header>
  );
}
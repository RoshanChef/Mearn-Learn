import React from 'react';

function Dashboard() {
  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-teal-500">
      <div className="text-center text-white px-4 md:px-8">
        <h1 className="text-5xl font-bold mb-4 animate__animated animate__fadeIn animate__delay-1s">
          Welcome to Our Amazing Landing Page
        </h1>
        <p className="text-lg mb-6 animate__animated animate__fadeIn animate__delay-2s">
          This is a simple React landing page built with Tailwind CSS and animations!
        </p>
        <button className="px-6 py-2 bg-teal-700 text-white rounded-full text-lg transition-all duration-300 transform hover:bg-teal-800 hover:scale-105 animate__animated animate__fadeIn animate__delay-3s">
          Get Started
        </button>
      </div>
    </div>
  );
}

export default Dashboard;

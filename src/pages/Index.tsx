
import React from 'react';
import WaitlistForm from '@/components/WaitlistForm';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4">
      <div className="w-full max-w-3xl mx-auto flex flex-col items-center">
        {/* Logo */}
        <div className="mb-16">
          <h1 className="text-rook-blue text-3xl md:text-4xl font-semibold tracking-tight">
            Paym.me
          </h1>
        </div>
        
        {/* Main Content */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 tracking-tight">
            The Future of Payments. Simplified.
          </h2>
          <p className="text-gray-500 text-lg md:text-xl mb-12">
            Built by Rook. Built for speed.
          </p>
          
          {/* Waitlist Form */}
          <div className="w-full flex justify-center mb-6">
            <WaitlistForm />
          </div>
          
          {/* Limited spots text */}
          <p className="text-sm text-gray-400 mt-4 animate-pulse-light">
            Early access. Limited spots.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;

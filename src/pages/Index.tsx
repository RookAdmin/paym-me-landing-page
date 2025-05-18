
import React from 'react';
import WaitlistForm from '@/components/WaitlistForm';
import { ArrowDown } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-white to-gray-50 px-4">
      <div className="w-full max-w-3xl mx-auto flex flex-col items-center">
        {/* Logo */}
        <div className="mb-12 md:mb-16">
          <img 
            src="/lovable-uploads/461b1bd9-e48a-43f9-85c6-7879690b0a77.png" 
            alt="Paym.me by Rook" 
            className="h-16 md:h-20" 
          />
        </div>
        
        {/* Main Content */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 tracking-tight text-gray-900">
            Payments Made For You
          </h2>
          <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto mb-10">
            Experience fast, secure transactions designed with your needs in mind.
          </p>
          
          {/* Waitlist Form */}
          <div className="w-full flex justify-center mb-8">
            <WaitlistForm />
          </div>
          
          {/* Call to action */}
          <div className="flex flex-col items-center mt-8 animate-bounce">
            <p className="text-sm text-gray-500 mb-2">
              Limited spots available
            </p>
            <ArrowDown className="h-4 w-4 text-rook-red" />
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <div className="absolute bottom-4 w-full text-center">
        <p className="text-xs text-gray-400">
          © 2025 Rook. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Index;

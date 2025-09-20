import React from 'react';
import heroImage from '@/assets/hero-image.jpg';

const HeroImage = () => {
  return (
    <div className="flex justify-center items-center">
      <img 
        src={heroImage} 
        alt="mak" 
        className="w-full h-full object-cover opacity-40"
      />
    </div>
  );
};

export default HeroImage;

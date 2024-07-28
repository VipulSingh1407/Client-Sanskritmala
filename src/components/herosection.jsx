import React from 'react';
import heroImage from '../assets/hero.png'; // Adjust the path to your hero image
import CTAButton from '../components/button';
import HighlightText from '../components/HighlightText';

const HeroSection = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between px-8 py-15 font-ancient bg-bg transition-all duration-500 ease-in-out">
      <div className="w-full lg:w-1/2 mb-8 lg:mb-0 text-center lg:text-left">
        <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 transform hover:scale-105 transition-all duration-500 ease-in-out">
          Embark on a Journey of Ancient Wisdom with <HighlightText text={"SanskritMala"} />
        </h1>
        <p className="text-lg lg:text-xl text-gray-300 mb-8">
          Discover the timeless treasures of Sanskrit literature and learning. Dive into our rich collection and embrace the wisdom of ages.
        </p>
        <p className="text-lg md:text-xl font-semibold italic mb-6 text-gray-300">
          विद्या सर्वस्य सौम्या – Knowledge is the path to grace
        </p>
        <div className="flex flex-col lg:flex-row items-center gap-7 mt-10">
          <CTAButton active={true} linkto={"/about"}>
            Learn More
          </CTAButton>

          <CTAButton active={false} linkto={"/register"}>
            Try for free
          </CTAButton>
        </div>
      </div>
      <div className="w-full size-l lg:w-1/2 transform transition-all duration-500 ease-in-out hover:scale-105 ">
        <img src={heroImage} alt="Hero" className="w-md rounded-md  transition-all duration-500 ease-in-out " />
      </div>
    </section>
  );
};

export default HeroSection;

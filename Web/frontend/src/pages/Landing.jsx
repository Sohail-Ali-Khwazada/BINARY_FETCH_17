import React from "react";
import { Link } from "react-router-dom";
import bgVideo from "./../assets/videos/bgVideo.mp4";
import ServicesOffered from "../components/Services";
import Stats from "../components/Stats";

export const Landing = () => {
  return (
    <div className="w-full h-full overflow-hidden ">
      <video
        className="w-full h-full object-cover"
        loop
        autoPlay
        muted
        playsInline
      >
        <source src={bgVideo} />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-black bg-opacity-50 h-[112vh]"></div>
      <section className="absolute inset-0 flex flex-col items-start justify-center px-20">
        <h2 className="text-2xl text-white mb-2">
          We Are <span className="text-orange-500">WiseCare</span>
        </h2>
        <h1 className="text-6xl font-bold text-white mb-4">Technology at your fingertips,<br /> health at your heart.</h1>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl">
        Providing comprehensive care solutions for the elderly, powered by technology. Our platform connects you with professional medical and a range of services. Experience the future of elderly care with WiseCare.
        </p>
        <div className="flex space-x-4">
          <Link to="/learn-more" className="px-6 py-2 border border-white text-white hover:bg-white hover:text-black transition duration-300">
            LEARN MORE
          </Link>
          <Link to="/contact" className="px-6 py-2 bg-orange-500 text-white hover:bg-orange-600 transition duration-300">
            CONTACT US
          </Link>
        </div>
      </section>
      <ServicesOffered />
      <Stats />
    </div>
  );
};

export default Landing;
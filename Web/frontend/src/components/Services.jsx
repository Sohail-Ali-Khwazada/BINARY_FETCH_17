import React from 'react';
import { FaHeart, FaHourglass, FaWineGlass, FaPills, FaToilet, FaNotesMedical } from 'react-icons/fa';

const ServiceCard = ({ icon, title, description, highlighted }) => (
  <div
    className={`p-6 text-center transition duration-300 ease-in-out ${highlighted ? 'bg-[#5a3d2b]' : 'bg-[#333]'} hover:bg-[#4a2b1f]`}
  >
    {React.cloneElement(icon, { className: "mx-auto text-4xl mb-4 text-white" })}
    <h3 className="text-[#ff7f50] text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-300">{description}</p>
  </div>
);

const ServicesOffered = () => {
  const services = [
    { icon: <FaHeart />, title: "Mobility Assistance", description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." },
    { icon: <FaHourglass />, title: "Companionship Care", description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.", highlighted: false },
    { icon: <FaWineGlass />, title: "Meal Planning", description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." },
    { icon: <FaPills />, title: "Medication Reminders", description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." },
    { icon: <FaToilet />, title: "Personal Hygiene", description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." },
    { icon: <FaNotesMedical />, title: "Medical Care", description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." },
  ];

  return (
    <div className="bg-white text-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-2">Our <span className="text-[#ff7f50]">Services</span></h2>
        <p className="text-center text-gray-400 mb-12">Services offered by WiseCare. For you, with Love...</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesOffered;

import React from 'react';
import { FaHeart, FaWineGlass, FaPills, FaToilet, FaNotesMedical } from 'react-icons/fa';
import { MdOutlineMoreTime, MdOutlineSentimentVerySatisfied } from "react-icons/md";


function Stats() {

    const StatCard = ({ icon, title, num }) => (
        <div className="text-center p-4">
            {React.cloneElement(icon, { className: "mx-auto text-4xl mb-4 text-white" })}
            <p className="text-gray-300 text-3xl font-bold">{num}</p>
            <h3 className="text-[#ff7f50] font-semibold mb-2 text-2xl" >{title}</h3>
        </div>
    );

    const statsArr = [
        {
            icon: <FaHeart />,
            title: "Caring Staff",
            num: 8320,
        },
        {
            icon: <FaNotesMedical />,
            title: "Medical Professionals",
            num: 2164,
        },
        {
            icon: <MdOutlineMoreTime />,
            title: "Years of Experience",
            num: 24,
        },
        {
            icon: <MdOutlineSentimentVerySatisfied />,
            title: "Satisfied Customers",
            num: 4203,
        },
    ];

    return (
        <div className='bg-[#222] w-full h-[50vh] flex items-center justify-center'>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {statsArr.map((stat, ind) => (
                    <StatCard key={ind} {...stat} />
                ))}
            </div>
        </div>
    );
}

export default Stats;

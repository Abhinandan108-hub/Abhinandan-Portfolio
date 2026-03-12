import React from 'react';
import { Music, Globe, Clapperboard, Award } from 'lucide-react';
import Profile2Image from '../assets/Profile2.jpg';

const details = [
    { label: 'Name', value: 'Abhinandan Soni' },
    { label: 'Date of birth', value: 'December 27, 2003' },
    { label: 'Address', value: 'Karmeta, Jabalpur' },
    { label: 'Zip code', value: '482002' },
    { label: 'Email', value: 'Abhinandansoni100@gmail.com' },
    { label: 'Phone', value: '+91 9399466040' },
];

const interests = [
    { name: 'Music', Icon: Music },
    { name: 'Travel', Icon: Globe },
    { name: 'Movie', Icon: Clapperboard },
    { name: 'Sports', Icon: Award }, 
];

const AboutSection = () => {
    return (

        <section id="about" className="py-32 bg-white">

            <div className="mx-auto max-w-[1700px] px-10">

                <div className="flex flex-col lg:flex-row items-center justify-between">

                    {/* LEFT IMAGE */}

                    <div className="w-full lg:w-[45%] flex justify-start">

                        <div className="relative group">

                            <img
                                src={Profile2Image}
                                alt="Profile"
                                className="
                                w-[600px]
                                h-[800px]
                                object-cover
                                rounded-3xl
                                shadow-2xl
                                transition-all
                                duration-500
                                group-hover:scale-105
                                group-hover:shadow-[0_30px_80px_rgba(0,0,0,0.45)]
                                "
                            />

                            {/* glow effect */}

                            <div className="
                            absolute inset-0
                            rounded-3xl
                            bg-gradient-to-tr
                            from-indigo-500/20
                            to-transparent
                            opacity-0
                            group-hover:opacity-100
                            transition
                            duration-500
                            "></div>

                        </div>

                    </div>


                    {/* RIGHT CONTENT */}

                    <div className="w-full lg:w-[70%] lg:ml-[200px]">

                        <p className="text-5xl font-extrabold tracking-widest uppercase text-indigo-600 mb-4">
                           PROFILE OVERVIEW
                        </p>

                        <h2 className="text-6xl font-extrabold text-gray-900 mb-8">
                            About Me
                        </h2>

                        <p className="text-2xl text-gray-600 leading-relaxed mb-12">
                        💻 Results-oriented Full Stack Developer experienced in building scalable, high-performance web applications using modern technologies and MERN/MEAN architectures. Skilled in Node.js backend development and creating dynamic user interfaces with React and Angular. <br />

🔐 Experienced in API integration, backend architecture, authentication systems, database design, and deployment workflows, focusing on secure, efficient, production-ready solutions. <br />

📈 Passionate about backend engineering, system optimization, and continuously growing in full-stack and AI-driven development.

                        </p>


                        {/* DETAILS */}

                        <div className="grid grid-cols-2 gap-x-16 gap-y-6 mb-12">

                            {details.map((item) => (

                                <div key={item.label}>

                                    <span className="text-xl text-gray-700 font-medium block">
                                        {item.label}:
                                    </span>

                                    <span className="text-2xl text-gray-900 font-semibold">
                                        {item.value}
                                    </span>

                                </div>

                            ))}

                        </div>


                        {/* INTERESTS */}

                        <div className="flex flex-wrap gap-10">

                            {interests.map((item) => (

                                <div
                                    key={item.name}
                                    className="flex items-center space-x-3 group cursor-pointer"
                                >

                                    <div className="
                                    p-4
                                    border
                                    border-gray-300
                                    rounded-full
                                    transition
                                    group-hover:border-indigo-600
                                    ">

                                        <item.Icon className="w-7 h-7 text-gray-500 group-hover:text-indigo-600" />

                                    </div>

                                    <span className="text-xl font-semibold text-gray-700 group-hover:text-indigo-600">
                                        {item.name}
                                    </span>

                                </div>

                            ))}

                        </div>

                    </div>

                </div>

            </div>

        </section>

    );
};

export default AboutSection;
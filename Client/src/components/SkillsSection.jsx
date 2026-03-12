import React from 'react';

// Data set of skills with icons
const skills = [
    { 
        name: 'React.js', 
        description: 'Frontend framework for building user interfaces.', 
        level: 95, 
        color: 'text-sky-500', 
        ringColor: 'border-sky-500',
        iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg'
    },
    { 
        name: 'Node.js', 
        description: 'JavaScript runtime for server-side development.', 
        level: 85, 
        color: 'text-green-600', 
        ringColor: 'border-green-600',
        iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' 
    },
    { 
        name: 'Python', 
        description: 'Versatile language for backend, data science, AI.', 
        level: 90, 
        color: 'text-blue-500', 
        ringColor: 'border-blue-500',
        iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg'
    },
    { 
        name: 'Java', 
        description: 'Robust language for enterprise-level applications.', 
        level: 75, 
        color: 'text-red-500', 
        ringColor: 'border-red-500',
        iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg'
    },
    { 
        name: 'JavaScript', 
        description: 'Core language for web development.', 
        level: 95, 
        color: 'text-yellow-500', 
        ringColor: 'border-yellow-500',
        iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
    },
    { 
        name: 'Tailwind CSS', 
        description: 'Utility-first CSS framework for rapid UI building.', 
        level: 90, 
        color: 'text-cyan-500', 
        ringColor: 'border-cyan-500',
        iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg'
    },
    { 
        name: 'MongoDB', 
        description: 'NoSQL database for flexible data storage.', 
        level: 80, 
        color: 'text-green-700', 
        ringColor: 'border-green-700',
        iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg'
    },
    { 
        name: 'Express.js', 
        description: 'Minimalist web framework for Node.js APIs.', 
        level: 85, 
        color: 'text-gray-800', 
        ringColor: 'border-gray-800',
        iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg'
    },
    { 
        name: 'DevOps', 
        description: 'Practices for automating and managing application deployment.', 
        level: 75, 
        color: 'text-indigo-500', 
        ringColor: 'border-indigo-500',
        iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg'
    },
    { 
        name: 'Machine Learning', 
        description: 'Building predictive models and intelligent systems.', 
        level: 80, 
        color: 'text-purple-500', 
        ringColor: 'border-purple-500',
        iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg'
    },
];

const SkillsSection = () => {
    return (
        <section id="skills" className="py-20 md:py-28 bg-gray-900">
            <div className="container mx-auto px-6 lg:px-8 max-w-[2000px] text-center">
                
                <h2 className="text-8xl font-extrabold text-amber-50 mb-6 pb-3">
                    Technical Skills
                </h2>

                <p className="text-xl sm:text-2xl text-white max-w-7xl mx-auto leading-relaxed text-center pb-12">
                    I am a results-driven Full Stack Developer specializing in MERN/MEAN architectures, dedicated to transforming complex requirements into high-performance, scalable, and user-centric web applications.
                </p>

                {/* GRID FIXED */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-12">

                    {skills.map((skill, index) => (
                        <div 
                            key={index} 
                            className="flex flex-col items-center p-12 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-gray-100 min-h-[380px]"
                        >
                            
                            {/* ICON */}
                            <div className="w-44 h-44 mb-6 flex items-center justify-center">
                                {skill.iconUrl ? (
                                    <img
                                        src={skill.iconUrl}
                                        alt={`${skill.name} Icon`}
                                        className="w-full h-full object-contain"
                                    />
                                ) : (
                                    <span className={`text-4xl font-bold ${skill.color}`}>
                                        {skill.name.substring(0, 2)}
                                    </span>
                                )}
                            </div>

                            {/* NAME + LEVEL */}
                            <div className="flex items-center justify-center mb-3">
                                <h3 className="text-2xl font-bold text-gray-900 mr-2">
                                    {skill.name}
                                </h3>

                                <span className={`px-3 py-1 text-sm font-semibold rounded-full text-white ${skill.ringColor.replace('border-', 'bg-')}`}>
                                    {skill.level}%
                                </span>
                            </div>

                            {/* DESCRIPTION */}
                            <p className="text-gray-600 text-center text-base leading-relaxed">
                                {skill.description}
                            </p>

                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
};

const App = () => {
    return (
        <div className="min-h-screen bg-gray-100 font-inter">
            <SkillsSection />
        </div>
    );
};

export default App;
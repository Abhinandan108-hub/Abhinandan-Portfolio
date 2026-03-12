import React from 'react';

const experienceData = [
  {
    id: 1,
    company: "DOAGuru Infosystems",
    designation: "Web Developer Intern",
    description: "Aspiring Web Developer Intern with a solid foundation in HTML, CSS, and JavaScript. Eager to apply theoretical knowledge to real-world projects, focusing on building responsive user interfaces and contributing to collaborative development environments. Actively learning React/Node.js fundamentals.",
    color: "text-green-600" 
  },
  {
    id: 2,
    company:  "WebDos Technologies",
    designation: "Web Developer Intern",
    description: "Full Stack Intern proficient in the MERN & MEAN stack, specializing in React.js for dynamic frontend development and Node.js/Express for robust backend APIs. Experienced in database management (MongoDB) and committed to writing clean, scalable code and optimizing application performance.",
    color: "text-blue-600" 
  },
];

const Experience = () => {
  return (
    <section 
      id="experience"  // <-- Add this for navbar scroll
      className="min-h-screen bg-white text-gray-900 flex flex-col items-center p-8 py-20 font-sans scroll-smooth"
    >
      
      {/* Centered Heading and Subheading */}
      <div className="text-center mb-16 max-w-7xl mx-auto">
        {/* Subheading */}
        <p className="text-7xl font-extrabold uppercase tracking-widest text-teal-500 mb-5">
          WORK EXPERIENCE
        </p>
        {/* Main Heading */}
        <h1 className="text-6xl md:text-7xl font-extrabold text-gray-900">
          Companies I have worked <br className="hidden sm:inline" />for in the past.
        </h1>
      </div>

      {/* Experience Grid (2 Columns) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl w-full">
        {experienceData.map((exp) => (
          <div key={exp.id} className="p-6">
            
            {/* Serial Number */}
            <h2 className="text-8xl md:text-9xl font-bold text-gray-800 mb-6">
              {exp.id.toString().padStart(2, '0')} 
            </h2>

            {/* Company & Designation */}
            <h3 className={`text-2xl md:text-3xl font-bold mb-3 ${exp.color}`}>
              {exp.company}, <span className="text-gray-900 font-medium">{exp.designation}</span>
            </h3>

            {/* Description */}
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-md">
              {exp.description}
            </p>
          </div>
        ))}
      </div>
      
    </section>
  );
};

export default Experience;
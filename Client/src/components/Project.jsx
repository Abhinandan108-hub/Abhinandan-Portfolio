import React, { useState, useEffect } from 'react';
import ExpenseImg from '../assets/expense-management.jpg';
import RealEstateImg from '../assets/real-estate.jpg';
import FlowerImg from '../assets/flower.jpg';
import CarImg from '../assets/car.jpg';
import FurnitureImg from '../assets/furniture.jpg';
import GroceryImg from '../assets/grocery.jpg';
import EcommerceImg from '../assets/ecommerce.jpg';
import TravelImg from '../assets/travel.jpg';

const projectData = [
{
id: 1,
title: "EXPENSE MANAGEMENT SYSTEM",
category: "Management 📊",
description:
"A modern expense management platform designed to simplify tracking, approval, and reporting of business expenses while ensuring transparency and financial efficiency.",
imageUrl: ExpenseImg,
fullDetails:
"This expense management system helps businesses track employee spending with accuracy and transparency. It streamlines reimbursement, approval workflows, and financial reporting. The platform improves financial control while saving time for both employees and administrators."
},

{
id: 2,
title: "REAL ESTATE PROJECT",
category: "Construction & Development 🛠️",
description:
"A dynamic real estate platform that helps users explore properties, view listings, and easily connect with agents for buying, selling, or renting homes.",
imageUrl: RealEstateImg,
fullDetails:
"This real estate platform allows users to explore property listings with detailed descriptions and images. Buyers and sellers can easily connect with agents and manage property transactions. The system provides a smooth and informative experience for property discovery."
},

{
id: 3,
title: "FLOWER SHOP WEBSITE",
category: "Floral E-commerce 🛒",
description:
"A beautiful online flower store designed to deliver fresh flowers, gifts, and curated bouquets for birthdays, anniversaries, and special celebrations.",
imageUrl: FlowerImg,
fullDetails:
"This flower shop website provides an elegant online shopping experience for customers. Users can browse various flower arrangements, bouquets, and gift combos for special occasions. It ensures convenient ordering, fast delivery, and a delightful gifting experience."
},

{
id: 4,
title: "CAR DEALER WEBSITE",
category: "Automotive Retail 🚗",
description:
"A professional car dealership website showcasing new and used vehicles with powerful search, filtering, and customer inquiry features.",
imageUrl: CarImg,
fullDetails:
"This automotive platform helps dealerships present their inventory in a modern digital format. Customers can explore car specifications, compare models, and submit inquiries easily. The website improves customer engagement and supports better vehicle sales."
},

{
id: 5,
title: "MODERN FURNITURE WEBSITE",
category: "Interior E-commerce 🏠",
description:
"A stylish furniture e-commerce platform offering modern home decor solutions with premium designs and seamless online purchasing.",
imageUrl: FurnitureImg,
fullDetails:
"This furniture website displays a wide range of modern home decor products with attractive layouts. Customers can browse collections, explore design inspiration, and purchase furniture online. The platform focuses on elegance, usability, and smooth shopping experiences."
},

{
id: 6,
title: "GROCERY STORE WEBSITE",
category: "Food & Provision 🍎",
description:
"A smart grocery shopping platform where users can easily browse daily essentials, manage orders, and enjoy convenient online delivery services.",
imageUrl: GroceryImg,
fullDetails:
"This grocery store platform simplifies online shopping for daily household essentials. Customers can browse products, add items to their cart, and place secure orders quickly. The system ensures efficient inventory management and a smooth customer experience."
},

{
id: 7,
title: "E-COMMERCE STORE",
category: "Retail & Online 🛍️",
description:
"A complete e-commerce platform enabling businesses to sell products online with secure payments, product management, and order tracking.",
imageUrl: EcommerceImg,
fullDetails:
"This e-commerce store offers a full-featured online shopping solution for businesses. It includes product catalogs, shopping carts, and secure payment integration. The system enhances digital retail experiences and helps businesses grow their online presence."
},

{
id: 8,
title: "TRAVEL & TOURISM WEBSITE",
category: "Travel & Exploration ✈️",
description:
"A travel booking platform designed to help users explore destinations, book trips, and plan unforgettable travel experiences.",
imageUrl: TravelImg,
fullDetails:
"This travel website allows users to discover destinations, explore tour packages, and book trips easily. It provides detailed travel information, itineraries, and booking options. The platform helps travelers plan memorable journeys with convenience."
}
];

const Project = () => {

const [selectedProject,setSelectedProject] = useState(null)

useEffect(()=>{
const hash = window.location.hash
if(hash === "#projects"){
const section = document.getElementById("projects")
if(section) section.scrollIntoView({behavior:"smooth"})
}
},[])

return (

<section id="projects" className="min-h-[150vh] bg-gray-900 text-white flex flex-col items-center p-6 py-28 font-sans">

<h1 className="text-8xl font-extrabold mb-6 text-center pb-5">
Latest <span className="text-teal-400">Projects</span>
</h1>

<p className="text-xl sm:text-2xl text-white max-w-7xl mx-auto leading-relaxed text-center pb-12">
I build diverse web applications ranging from full-stack MERN/MEAN projects to AI-powered and data-driven solutions, focusing on scalability, performance, and user-centric design.
</p>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 max-w-[1600px] w-full mx-auto">

{projectData.map((project)=>(
<div
key={project.id}
className="relative w-full h-[500px] md:h-[520px] lg:h-[550px] rounded-xl overflow-hidden shadow-2xl group cursor-pointer bg-gray-800 transition-transform duration-300 hover:scale-[1.05]"
>

<img
src={project.imageUrl}
alt={project.title}
className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 group-hover:opacity-30"
/>

<div className="absolute inset-0 bg-gray-900 bg-opacity-80 flex flex-col items-center justify-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">

<h3 className="text-3xl font-bold mb-2 text-teal-400 text-center">
{project.title}
</h3>

<p className="text-lg font-semibold text-gray-300 mb-3">
{project.category}
</p>

<p className="text-base text-gray-200 text-center mb-6">
{project.description}
</p>

<button
onClick={()=>setSelectedProject(project)}
className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200 shadow-xl"
>
Know More →
</button>

</div>
</div>
))}

</div>

{selectedProject && (
<div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center p-4 z-50">

<div className="bg-gray-800 text-white rounded-xl p-8 max-w-3xl w-full relative shadow-3xl">

<h2 className="text-4xl font-bold mb-4 text-teal-400 border-b border-gray-700 pb-2">
{selectedProject.title}
</h2>

<img
src={selectedProject.imageUrl}
alt={selectedProject.title}
className="w-full h-56 object-cover rounded-lg mb-6"
/>

<p className="text-gray-200 text-lg leading-relaxed">
{selectedProject.fullDetails}
</p>

<button
onClick={()=>setSelectedProject(null)}
className="absolute top-3 right-3 text-gray-400 hover:text-teal-400 text-4xl"
>
&times;
</button>

</div>

</div>
)}

</section>
)
}

export default Project
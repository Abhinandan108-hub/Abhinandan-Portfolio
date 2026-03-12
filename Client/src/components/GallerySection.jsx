import React from 'react';

// Sample data for the gallery cards
const galleryItems = [
    {
        id: 1,
        label: 'E-COMMERCE PLATFORM',
        imageUrl: 'https://placehold.co/400x600/f5f5f5/333333?text=Project+1',
        title: 'Project 1: E-commerce',
        // Increased rotation for the left-most card
        rotation: '-rotate-3', 
        zIndex: 'z-30',
        transform: 'lg:hover:scale-105',
    },
    {
        id: 2,
        label: 'SAAS DASHBOARD',
        imageUrl: 'https://placehold.co/400x600/e0e0e0/333333?text=Project+2',
        title: 'Project 2: SaaS',
        // Slight rotation to the left
        rotation: '-rotate-2', 
        zIndex: 'z-40',
        transform: 'lg:hover:scale-105',
    },
    {
        id: 3,
        label: 'MOBILE APP UI/UX',
        imageUrl: 'https://placehold.co/400x600/cccccc/333333?text=Project+3',
        title: 'Project 3: Mobile',
        // Center card, no rotation, highest z-index
        rotation: 'rotate-0', 
        zIndex: 'z-50',
        transform: 'lg:hover:scale-110', // More aggressive hover effect for center
    },
    {
        id: 4,
        label: 'BRANDING & IDENTITY',
        imageUrl: 'https://placehold.co/400x600/b0b0b0/333333?text=Project+4',
        title: 'Project 4: Branding',
        // Slight rotation to the right
        rotation: 'rotate-2', 
        zIndex: 'z-40',
        transform: 'lg:hover:scale-105',
    },
    {
        id: 5,
        label: 'DATA VISUALIZATION',
        imageUrl: 'https://placehold.co/400x600/9e9e9e/333333?text=Project+5',
        title: 'Project 5: DataViz',
        // Increased rotation for the right-most card
        rotation: 'rotate-3', 
        zIndex: 'z-30',
        transform: 'lg:hover:scale-105',
    },
];

const GallerySection = () => {
    return (
        <section id="projects" className="py-16 md:py-24 bg-gray-50 overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl text-center">
                
                {/* Section Header */}
                <p className="text-sm font-semibold tracking-widest uppercase text-indigo-600 mb-2">
                    MY PORTFOLIO
                </p>
                <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-12">
                    Creative Work Gallery
                </h2>

                {/* Gallery Container - Using Flex to achieve the overlapping effect */}
                <div className="flex justify-center items-start space-x-[-15%] lg:space-x-[-12%] xl:space-x-[-10%] pt-12 pb-16 overflow-x-auto lg:overflow-visible">
                    {galleryItems.map((item) => (
                        <GalleryCard key={item.id} item={item} />
                    ))}
                </div>
            </div>
        </section>
    );
};

// Individual Card Component
const GalleryCard = ({ item }) => {
    const { label, imageUrl, title, rotation, zIndex, transform } = item;
    
    // Hover effect: scale up and lift (translate-y)
    const hoverEffect = `transition-all duration-300 ${transform} lg:hover:-translate-y-4 shadow-xl`;

    return (
        <a 
            href="#!" // Placeholder link
            title={title}
            className={`
                relative flex-shrink-0 w-64 h-96 
                rounded-[2rem] overflow-hidden 
                bg-white border-2 border-gray-100 
                shadow-2xl cursor-pointer
                ${rotation} ${zIndex} ${hoverEffect}
            `}
        >
            {/* Image */}
            <img 
                src={imageUrl} 
                alt={title} 
                className="w-full h-full object-cover"
                onError={(e) => { 
                    e.target.onerror = null; 
                    e.target.src = 'https://placehold.co/400x600/d1d5db/374151?text=Image+Missing'; 
                }}
            />

            {/* Label Overlay (Bottom of the card) */}
            <div className="absolute inset-x-0 bottom-0 h-1/4 flex items-center justify-center p-4 bg-gray-800 bg-opacity-70 transition-colors duration-300 hover:bg-opacity-90">
                <span className="text-white text-sm font-semibold tracking-wider uppercase">
                    {label}
                </span>
            </div>
        </a>
    );
};

export default GallerySection;

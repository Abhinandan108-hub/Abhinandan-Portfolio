import React, { useState } from "react";
import fullstackImg from "../assets/fullstack.jpg";
import frontbackImg from "../assets/Front-back.jpg";
import cmsImg from "../assets/cms.jpg";
import pythonImg from "../assets/python.jpg";
import AIImg from "../assets/AIPowered.jpg";
import javaImg from "../assets/java.jpg";
import SeoImg from "../assets/seo.jpg";
import apiImg from "../assets/api.jpg";
import devops from "../assets/devops.jpg";

const cardData = [
  { id: 1, label: "Full-Stack Development", imageUrl: fullstackImg },
  { id: 2, label: "Front-end & Backend Development", imageUrl: frontbackImg },
  { id: 3, label: "CMS Website Development", imageUrl: cmsImg },
  { id: 4, label: "Python Development", imageUrl: pythonImg },
  { id: 5, label: "AI-Powered Web Development", imageUrl: AIImg },
  { id: 6, label: "Java Development", imageUrl: javaImg },
  { id: 7, label: "SEO Services", imageUrl: SeoImg },
  { id: 8, label: "API Development", imageUrl: apiImg },

  // NEW SERVICES
  {
    id: 9,
    label: "DevOps & Cloud Deployment",
    imageUrl: devops,
  },
  {
    id: 10,
    label: "Machine Learning Solutions",
    imageUrl:
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&q=80",
  },
];

const App = () => {
  const [clickedCardId, setClickedCardId] = useState(null);
  const cardsPerRow = 5;

  const handleCardClick = (id) => {
    setClickedCardId(id);
  };

  const getZIndex = (cardId, defaultZIndex) => {
    return cardId === clickedCardId ? 50 : defaultZIndex;
  };

  const renderCardRow = (cards) => (
    <div className="flex flex-wrap justify-center">
      {cards.map((card, index) => {
        const defaultZIndex = cardsPerRow - index;

        return (
          <div
            key={card.id}
            onClick={() => handleCardClick(card.id)}
            className={`
              relative 
              w-[260px] h-[420px] 
              sm:w-[320px] sm:h-[500px] 
              lg:w-[360px] lg:h-[560px]
              bg-white rounded-[2rem] overflow-hidden
              shadow-xl transform rotate-[2deg]
              cursor-pointer
              ${
                card.id === clickedCardId
                  ? "scale-105 ring-4 ring-indigo-500"
                  : "hover:rotate-0 hover:scale-105"
              }
              transition-all duration-300 ease-in-out
              ${index === 0 ? "ml-0" : "-ml-10 md:-ml-14 lg:-ml-16"}
            `}
            style={{
              zIndex: getZIndex(card.id, defaultZIndex),
            }}
          >
            {/* Image */}
            <div className="absolute inset-0 transform -rotate-[2deg] scale-105">
              <img
                src={card.imageUrl}
                alt={card.label}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://placehold.co/600x800/5C5750/FFFFFF?text=Image+Missing";
                }}
              />
            </div>

            {/* Label */}
            <div
              className="
                absolute bottom-0 left-0 right-0
                p-6 text-center
                bg-gray-800/70
                text-white font-semibold text-xl
                transform -rotate-[2deg]
              "
            >
              {card.label}
            </div>
          </div>
        );
      })}
    </div>
  );

  return (
    <section
  id="services"
  className="min-h-screen bg-gray-100 flex flex-col items-center py-16 px-2"
>
      {/* Heading */}
      <div className="text-center mb-20">
        <h1 className="text-6xl sm:text-9xl font-extrabold text-gray-900 mb-4">
          Our Services
        </h1>

        <p className="text-xl sm:text-2xl text-gray-800 max-w-7xl mx-auto leading-relaxed text-center">
  I build scalable full-stack web applications using modern technologies
  like React, Node.js, and MongoDB, focusing on performance and user
  experience. I also develop intelligent solutions with Machine Learning
  and implement reliable deployments using modern DevOps practices.
</p>
      </div>

      {/* Cards */}
      <div className="flex flex-col gap-y-14 w-full max-w-[1800px] mx-auto">
        {renderCardRow(cardData.slice(0, cardsPerRow))}
        {renderCardRow(cardData.slice(cardsPerRow, cardsPerRow * 2))}
      </div>
    </section>
  );
};

export default App;
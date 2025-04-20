"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface RoadmapItem {
  quarter: string;
  year: string;
  title: string;
  description: string;
}

interface RoadmapProps {
  title?: string;
  subtitle?: string;
  items?: RoadmapItem[];
}

export function Roadmap({
  title = "v1. Roadmap",
  subtitle = "Following our vision to revolutionize the industry step by step",
  items = [
   
    {
      quarter: "Q2",
      year: "2025",
      title: "Product one",
      description: "This is the description for the prodct one in the roadmap Phase."
    },
    {
        quarter: "Q2",
        year: "2025",
        title: "Product two",
        description: "This is the description for the prodct one in the roadmap Phase."
      },
    {
        quarter: "Q3",
        year: "2025",
        title: "Product 3",
        description: "This is the description for the prodct one in the roadmap Phase."
      },

      {
        quarter: "Q3",
        year: "2025",
        title: "Crypto Platform",
        description: "Release of integrated crypto trading platform with CEX and DEX features."
      },
    {
      quarter: "Q4",
      year: "2025",
      title: "Crypto wallet",
      description: "This is the description for the prodct one in the roadmap Phase."
    },
    
    
    {
      quarter: "Q1",
      year: "2026",
      title: "Product 5",
      description: "This is the description for the prodct one in the roadmap Phase."
    }
  ]
}: RoadmapProps) {
  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">{title.split('.')[0]}</span>
            <span className="text-cyan-400">.{title.split('.')[1]}</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">{subtitle}</p>
        </div>

        {/* Timeline - different layouts for desktop and mobile */}
        <div className="relative max-w-4xl mx-auto">
          {/* Desktop center line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-500"></div>
          
          {/* Mobile left-aligned line */}
          <div className="md:hidden absolute left-[20px] h-full w-1 bg-blue-500"></div>
          
          {/* Timeline items */}
          <div className="relative">
            {items.map((item, index) => (
              <TimelineItem 
                key={index} 
                item={item} 
                index={index} 
                isLeft={index % 2 === 0}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute -top-24 -left-24 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 -right-24 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl"></div>
    </section>
  );
}

function TimelineItem({ 
  item, 
  index, 
  isLeft 
}: { 
  item: RoadmapItem; 
  index: number; 
  isLeft: boolean;
}) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Check if this is the current phase (first item)
  const isCurrentPhase = index === 0;
  
  // Card styling based on current phase
  const cardStyle = isCurrentPhase 
    ? "bg-indigo-900/80 backdrop-blur-sm border-indigo-500" 
    : "bg-gray-800/80 backdrop-blur-sm border-gray-700";
  
  // Dot styling based on current phase
  const dotStyle = isCurrentPhase
    ? "bg-cyan-400 border-2 border-indigo-900 ring-2 ring-cyan-400 animate-pulse"
    : "bg-gray-400 border-2 border-gray-900";

  return (
    <div 
      ref={ref}
      className="mb-12 relative"
    >
      {/* Desktop layout - alternating left and right */}
      <div className="hidden md:block">
        {/* Timeline dot */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full z-10 mt-8">
          <div className={`w-4 h-4 rounded-full ${dotStyle}`}></div>
        </div>
        
        {/* Card - alternating left and right */}
        <div className={`w-[calc(50%-20px)] ${isLeft ? 'mr-auto pr-8' : 'ml-auto pl-8'}`}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className={`p-5 rounded-xl border relative ${cardStyle}`}>
              {/* Quarter badge */}
              <div className={`absolute top-3 right-3 ${isCurrentPhase ? 'bg-cyan-500' : 'bg-indigo-600'} text-white text-xs font-bold px-2 py-1 rounded`}>
                {item.quarter} {item.year}
              </div>
              
              <h3 className={`text-lg font-bold ${isCurrentPhase ? 'text-cyan-300' : 'text-white'} mb-2`}>{item.title}</h3>
              <p className="text-gray-300 text-sm">{item.description}</p>
              
              {/* Current phase indicator */}
              {isCurrentPhase && (
                <div className="absolute -top-2 -left-2 bg-cyan-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                  Current
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Mobile layout - all cards on right side */}
      <div className="block md:hidden">
        {/* Timeline dot */}
        <div className="absolute left-[20px] w-4 h-4 rounded-full z-10 mt-8">
          <div className={`w-4 h-4 rounded-full ${dotStyle}`}></div>
        </div>
        
        {/* Card - all on right side */}
        <div className="ml-[40px] w-[calc(100%-50px)]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className={`p-5 rounded-xl border relative ${cardStyle}`}>
              {/* Quarter badge */}
              <div className={`absolute top-3 right-3 ${isCurrentPhase ? 'bg-cyan-500' : 'bg-indigo-600'} text-white text-xs font-bold px-2 py-1 rounded`}>
                {item.quarter} {item.year}
              </div>
              
              <h3 className={`text-lg font-bold ${isCurrentPhase ? 'text-cyan-300' : 'text-white'} mb-2`}>{item.title}</h3>
              <p className="text-gray-300 text-sm">{item.description}</p>
              
              {/* Current phase indicator */}
              {isCurrentPhase && (
                <div className="absolute -top-2 -left-2 bg-cyan-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                  Current
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

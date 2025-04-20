"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
// import { useState } from "react";
import { SignInButton } from "@/components/ui/signin-dialog";


interface ProductItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  link: string;
}

interface ProductsProps {
  title?: string;
  subtitle?: string;
  products?: ProductItem[];
}

export function Products({
  title = "Our Ecosystem",
  subtitle = "Discover our comprehensive suite of services designed to transform your digital lifestyle",
  products = [
    {
      id: "Games",
      title: "Games",
      subtitle: "Our Games Platform",
      description: "This is Product description of the above card this can be edited..",
      image: "/assets/prod1.png",
      link: "#"
    },
    {
      id: "wallet",
      title: "Wallet",
      subtitle: "crypto wallet",
      description: "This is Product description of the above card this can be edited...",
      image: "/assets/prod1.png",
      link: "#"
    },
    {
      id: "Real estate",
      title: "Real Estate",
      subtitle: "Real Estate Platform",
      description: "Revolutionary real estate platform for buying, selling, and investing in properties with virtual tours.",
      image: "/assets/prod1.png",
      link: "#"
    },
    // {
    //   id: "crypto",
    //   title: "Crypto",
    //   subtitle: "Crypto Exchange",
    //   description: "Comprehensive crypto platform with both centralized and decentralized exchange options and secure wallets.",
    //   image: "/assets/qcrypto.png",
    //   link: "#"
    // },
    // {
    //   id: "qrider",
    //   title: "QRider",
    //   subtitle: "Ride-hailing Service",
    //   description: "Modern ride-hailing service with focus on safety, comfort, and reliability for urban transportation.",
    //   image: "/assets/qrider.png",
    //   link: "#"
    // },
    // {
    //   id: "qtravel",
    //   title: "QTravel",
    //   subtitle: "Travel Booking",
    //   description: "All-in-one travel booking platform for flights, hotels, trains, and buses with best price guarantee.",
    //   image: "/assets/qtravel.png",
    //   link: "#"
    // }
  ]
}: ProductsProps) {
  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            <span className="text-white">{title}</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-300 max-w-2xl mx-auto"
          >
            {subtitle}
          </motion.p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              index={index} 
            />
          ))}
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute -top-24 -left-24 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 -right-24 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl"></div>
    </section>
  );
}

function ProductCard({ 
  product, 
  index 
}: { 
  product: ProductItem; 
  index: number;
}) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700 overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/20 hover:border-indigo-500/50 h-full flex flex-col">
        {/* Product Image */}
        <div className="relative h-56 overflow-hidden">
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
          <div className="absolute bottom-4 left-4 right-4">
            <h3 className="text-2xl font-bold text-white mb-1">{product.title}</h3>
            <p className="text-cyan-400 text-sm">{product.subtitle}</p>
          </div>
        </div>
        
        {/* Product Content */}
        <div className="p-6 flex flex-col flex-grow">
          <p className="text-gray-300 mb-6 flex-grow">{product.description}</p>
          
          {/* Hidden SignInButton to reference */}
          <div className="hidden">
            <SignInButton />
          </div>
          
          {/* Animated button */}
          <motion.div 
            onClick={() => {
              document.querySelector('.signin-button-class')?.click();
            }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="mt-auto w-full bg-indigo-600 text-white hover:bg-indigo-700 transition-all duration-300 py-2.5 px-4 rounded-md flex items-center justify-center cursor-pointer font-medium overflow-hidden relative"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 opacity-0"
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
            <motion.div className="relative flex items-center">
              Learn More
              <motion.span 
                className="ml-2"
                initial={{ x: 0 }}
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                →
              </motion.span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

"use client";

import { HeroSection } from "@/components/ui/hero-section";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
// import { Card, CardContent } from "@/components/ui/card";
import Footer from "@/components/ui/footer";
import { Navbar } from "@/components/ui/navbar";
import { SignInButton } from "@/components/ui/signin-dialog";
import { SignUpButton } from "@/components/ui/signup-dialog";
import { TokenInfo } from "@/components/ui/tokeninfo";
import Image from "next/image";
import { Roadmap } from "@/components/ui/roadmap";
import { Products } from "@/components/ui/products";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <Navbar />
      <div className="absolute top-4 right-4 flex gap-2 z-20">
        <SignInButton>Login</SignInButton>
        <SignUpButton>Sign Up</SignUpButton>
      </div>

      <main>
        {/* Hero Section with Gradient Background */}
        <HeroSection>
          <div className="flex flex-col md:flex-row items-center justify-between py-6 md:py-16 px-4">
            {/* Left side - Text content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-full md:max-w-2xl md:mr-8 mb-8 md:mb-0 md:pl-8 lg:pl-16"
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
                <div className="mb-2 whitespace-normal md:whitespace-nowrap">
                  <span className="text-white">Welcome to the </span>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">World</span>
                </div>
                <div className="whitespace-normal md:whitespace-nowrap">
                  <span className="text-white">of </span>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">our platform.</span>
                </div>
              </h1>
              
              <p className="text-base sm:text-lg mt-6 md:mt-8 mb-8 md:mb-10 text-gray-300 max-w-lg">
                We are revolutionizing the way we interact with everyday services by offering a seamless, blockchain-backed digital lifestyle platform.
              </p>
              
              <div className="flex flex-row gap-4 md:gap-5">
                <Button 
                  size="lg" 
                  className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 rounded-lg text-sm sm:text-base md:text-lg flex-1 sm:flex-auto"
                >
                  Get Started
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white text-white hover:bg-white/10 px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 rounded-lg text-sm sm:text-base md:text-lg flex-1 sm:flex-auto"
                >
                  Learn More
                </Button>
              </div>
            </motion.div>
            
            {/* Right side - Hero Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="relative w-full max-w-[250px] sm:max-w-[300px] md:max-w-md md:mr-8 lg:mr-16"
            >
              <motion.div
                animate={{ 
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="relative"
              >
                <Image 
                  src="/assets/heroimg.png" 
                  alt="Hero Image" 
                  width={500}
                  height={500}
                  className="w-full h-auto" 
                  priority
                />
                <div className="absolute -inset-4 bg-blue-500/20 rounded-full blur-3xl -z-10"></div>
              </motion.div>
            </motion.div>
          </div>
        </HeroSection>
        
        {/* Token Info Section */}
        <section id="tokeninfo">
          <TokenInfo 
            tokenName="Meta NFT Token"
            tokenSymbol="$META"
            network="BNB Smart Chain (BEP-20)"
            totalSupply="140,000,000"
            contractAddress="0xb8c77482e45f1f44de1745f52c74426c631bdd52"
            tokenImage="/assets/token.png"
          />
        </section>
        
        {/* Products Section */}
        <section id="products">
          <Products />
        </section>
      </main>

      {/* Rest of the page with dark background */}
      <div className="bg-gradient-to-b from-gray-900 to-black">
        {/* Roadmap Section */}
        <section id="roadmap">
          <Roadmap />
        </section>

        {/* CTA Section */}
        {/* <section id="cta" className="py-20 px-4 bg-primary/5">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-white">Ready to Get Started?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied customers who have transformed their business with our platform.
            </p>
            <Button size="lg">Start Your Free Trial</Button>
          </div>
        </section> */}

        {/* Footer */}
        <footer className="border-t border-gray-800">
          <Footer />
        </footer>
      </div>
    </div>
  );
}

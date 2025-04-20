"use client";

import { BackgroundGradientAnimation } from "./background-gradient-animation";

export function HeroSection({ children }: { children?: React.ReactNode }) {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      <BackgroundGradientAnimation
        gradientBackgroundStart="rgb(8, 6, 24)" // Dark blue/purple background
        gradientBackgroundEnd="rgb(0, 12, 45)"  // Darker blue background
        firstColor="18, 113, 255"  // Bright blue
        secondColor="221, 74, 255" // Purple
        thirdColor="100, 220, 255" // Cyan
        fourthColor="56, 96, 255"  // Medium blue
        fifthColor="180, 107, 255" // Light purple
        pointerColor="140, 100, 255" // Interactive color
        size="100%"
        blendingValue="hard-light"
        containerClassName="absolute inset-0"
      />
      
      {/* Content container for any children passed to the component */}
      {children && (
        <div className="relative z-10 container mx-auto px-4 md:px-6 w-full">
          {children}
        </div>
      )}
    </div>
  );
} 
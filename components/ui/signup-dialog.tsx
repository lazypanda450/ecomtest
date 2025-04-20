"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger
} from "./dialog";
// import { Button } from "./button";
import Image from "next/image";
import { motion } from "framer-motion";

export function SignUpButton({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  
  // Handle sign in click
  const handleSignInClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setOpen(false);
    // Find and click the sign-in button
    setTimeout(() => {
      const signInButton = document.querySelector('.signin-button-class') as HTMLElement;
      if (signInButton) {
        signInButton.click();
      }
    }, 100);
  };
  
  return (
    <>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <div className="signup-button-class inline-flex">
            {children}
          </div>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <div className="flex justify-center mb-6">
            <div className="relative w-20 h-20">
              <Image 
                src="/assets/heroimg.png" 
                alt=" Logo" 
                fill
                className="object-contain"
              />
              <div className="absolute -inset-1 bg-blue-500/20 rounded-full blur-xl -z-10"></div>
            </div>
          </div>
          
          <DialogHeader>
            <DialogTitle>Create Your Account</DialogTitle>
            <DialogDescription>
              Enter your details below to create your account
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <label htmlFor="upline" className="text-sm font-medium">
                Upline <span className="text-red-500">*</span>
              </label>
              <input
                id="upline"
                type="text"
                placeholder="Enter referral or upline id"
                required
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              />
            </div>
            
            <div className="grid gap-2">
              <label htmlFor="username" className="text-sm font-medium">
                Username <span className="text-red-500">*</span>
              </label>
              <input
                id="username"
                type="text"
                placeholder="johndoe123"
                required
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              />
            </div>
            
            <div className="grid gap-2">
              <label htmlFor="email" className="text-sm font-medium">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                id="email"
                type="email"
                placeholder="john.doe@example.com"
                required
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              />
            </div>
            
            <div className="grid gap-2">
              <label htmlFor="phone" className="text-sm font-medium">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <div className="flex">
                <div className="flex h-10 rounded-l-md border border-r-0 border-input bg-background px-3 py-2 text-sm">
                  +91
                </div>
                <input
                  id="phone"
                  type="tel"
                  placeholder=""
                  required
                  className="flex h-10 w-full rounded-r-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                />
              </div>
            </div>
            
            <div className="grid gap-2">
              <label htmlFor="password" className="text-sm font-medium">
                Password <span className="text-red-500">*</span>
              </label>
              <input
                id="password"
                type="password"
                placeholder="••••••••"
                required
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              />
            </div>
            
            <motion.button
              type="submit"
              className="relative w-full h-10 rounded-md overflow-hidden"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-blue-500 to-cyan-400 animate-gradient"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-blue-500 to-cyan-400 opacity-75 blur-sm"></div>
              <div className="relative h-full flex items-center justify-center font-medium text-white">
                Create Account
              </div>
            </motion.button>
            
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t"></span>
              </div>
            </div>
            
            <div className="text-center text-sm">
              Already have an account?{" "}
              <a 
                href="#" 
                className="text-blue-500 hover:text-blue-600 hover:underline"
                onClick={handleSignInClick}
              >
                Sign in
              </a>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
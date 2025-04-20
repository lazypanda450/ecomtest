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
import { Button } from "./button";
import Image from "next/image";
import { motion } from "framer-motion";

export function SignInButton({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  
  // Handle sign up click
  const handleSignUpClick = (e: React.MouseEvent) => {
    e.preventDefault();
    // Close this dialog and open signup dialog
    setOpen(false);
    // Find and click the sign-up button
    setTimeout(() => {
      const signUpButton = document.querySelector('.signup-button-class') as HTMLElement;
      if (signUpButton) {
        signUpButton.click();
      }
    }, 100);
  };
  
  // Handle forgot password click
  const handleForgotPasswordClick = (e: React.MouseEvent) => {
    e.preventDefault();
    // Close this dialog and open forgot password dialog
    setOpen(false);
    // Find and click the forgot password button
    setTimeout(() => {
      const forgotPasswordButton = document.querySelector('.forgot-password-button') as HTMLElement;
      if (forgotPasswordButton) {
        forgotPasswordButton.click();
      }
    }, 100);
  };
  
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <div className="signin-button-class inline-flex">
          {children}
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <div className="flex justify-center mb-6">
          <div className="relative w-20 h-20">
            <Image 
              src="/assets/heroimg.png" 
              alt="Qlife Logo" 
              fill
              className="object-contain"
            />
            <div className="absolute -inset-1 bg-blue-500/20 rounded-full blur-xl -z-10"></div>
          </div>
        </div>
        
        <DialogHeader>
          <DialogTitle>Sign in to your Qlife account</DialogTitle>
          <DialogDescription>
            Enter your email below to sign in to your account
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <label htmlFor="email" className="text-sm font-medium">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="name@example.com"
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            />
          </div>
          <div className="grid gap-2">
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="text-sm font-medium">
                Password
              </label>
              <a 
                href="#" 
                className="text-sm text-blue-500 hover:underline text-blue-600"
                onClick={handleForgotPasswordClick}
              >
                Forgot password?
              </a>
            </div>
            <input
              id="password"
              type="password"
              placeholder="••••••••"
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
              Sign In
            </div>
          </motion.button>
          
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t"></span>
            </div>
          </div>
          
          <div className="text-center text-sm">
            Don&apos;t have an account?{" "}
            <a 
              href="#" 
              className="text-blue-500 hover:text-blue-600 hover:underline"
              onClick={handleSignUpClick}
            >
              Sign up
            </a>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
} 
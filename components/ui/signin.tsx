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
import { SignUpDialog } from "./signup-dialog";
import { ForgotPasswordLink } from "./forgot-password";

// Sign In Dialog Component
export function SignInDialog() {
  const [open, setOpen] = useState(true);
  const [showSignUp, setShowSignUp] = useState(false);

  const handleSignUpClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setOpen(false);
    setTimeout(() => setShowSignUp(true), 100);
  };

  if (!open && !showSignUp) return null;

  return (
    <>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <div className="flex justify-center mb-4">
            {/* Logo placeholder - replace with your actual logo */}
            <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center text-white text-xl font-bold">
              Q
            </div>
          </div>
          <DialogHeader>
            <DialogTitle>Sign in to your account</DialogTitle>
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
                placeholder="Enter your email address"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="text-sm font-medium">
                  Password
                </label>
                <ForgotPasswordLink />
              </div>
              <input
                id="password"
                type="password"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              />
            </div>
            <Button type="submit" className="w-full">
              Sign In
            </Button>
            <div className="text-center text-sm">
              Don&apos;t have an account?{" "}
              <button 
                className="text-primary hover:underline bg-transparent border-none p-0 cursor-pointer" 
                onClick={handleSignUpClick}
              >
                Sign up
              </button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
      {showSignUp && <SignUpDialog />}
    </>
  );
}

// Sign In Button Component
export function SignInButton({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  
  const handleSignUpClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setOpen(false);
    setTimeout(() => setShowSignUp(true), 100);
  };
  
  return (
    <>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          {children}
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <div className="flex justify-center mb-4">
            {/* Logo placeholder - replace with your actual logo */}
            <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center text-white text-xl font-bold">
              Q
            </div>
          </div>
          <DialogHeader>
            <DialogTitle>Sign in to your account</DialogTitle>
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
                placeholder="Enter your email address"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="text-sm font-medium">
                  Password
                </label>
                <ForgotPasswordLink />
              </div>
              <input
                id="password"
                type="password"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              />
            </div>
            <Button type="submit" className="w-full">
              Sign In
            </Button>
            <div className="text-center text-sm">
              Don&apos;t have an account?{" "}
              <button 
                className="text-primary hover:underline bg-transparent border-none p-0 cursor-pointer" 
                onClick={handleSignUpClick}
              >
                Sign up
              </button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
      {showSignUp && <SignUpDialog />}
    </>
  );
}

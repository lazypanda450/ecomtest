"use client";

import * as React from "react";
import { useState, useRef, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger
} from "./dialog";
import { Button } from "./button";

interface OTPInputProps {
  length?: number;
  onComplete?: (otp: string) => void;
}

export function OTPInput({ length = 6, onComplete }: OTPInputProps) {
  const [otp, setOtp] = useState<string[]>(Array(length).fill(""));
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  // Initialize refs array
  useEffect(() => {
    inputRefs.current = inputRefs.current.slice(0, length);
  }, [length]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const value = e.target.value;
    
    // Only allow numbers
    if (!/^\d*$/.test(value)) return;
    
    // Take the last character if multiple characters are pasted
    const digit = value.slice(-1);
    
    // Update the OTP array
    const newOtp = [...otp];
    newOtp[index] = digit;
    setOtp(newOtp);
    
    // If a digit was entered and we're not at the last input, focus the next input
    if (digit && index < length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
    
    // If all digits are filled, call the onComplete callback
    if (newOtp.every(d => d) && newOtp.length === length) {
      onComplete?.(newOtp.join(""));
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    // If backspace is pressed and the current input is empty, focus the previous input
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
    
    // If left arrow is pressed, focus the previous input
    if (e.key === "ArrowLeft" && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
    
    // If right arrow is pressed, focus the next input
    if (e.key === "ArrowRight" && index < length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text/plain").trim();
    
    // Only allow numbers
    if (!/^\d*$/.test(pastedData)) return;
    
    // Fill the OTP array with the pasted digits
    const digits = pastedData.split("").slice(0, length);
    const newOtp = [...otp];
    
    digits.forEach((digit, i) => {
      newOtp[i] = digit;
    });
    
    setOtp(newOtp);
    
    // Focus the input after the last pasted digit
    const focusIndex = Math.min(digits.length, length - 1);
    inputRefs.current[focusIndex]?.focus();
    
    // If all digits are filled, call the onComplete callback
    if (newOtp.every(d => d) && newOtp.length === length) {
      onComplete?.(newOtp.join(""));
    }
  };

  return (
    <div className="flex justify-center gap-2">
      {Array.from({ length }).map((_, index) => (
        <input
          key={index}
          ref={el => inputRefs.current[index] = el}
          type="text"
          inputMode="numeric"
          maxLength={1}
          value={otp[index]}
          onChange={e => handleChange(e, index)}
          onKeyDown={e => handleKeyDown(e, index)}
          onPaste={handlePaste}
          className="w-12 h-12 text-center text-xl font-semibold border rounded-md focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none"
          autoComplete="one-time-code"
        />
      ))}
    </div>
  );
}

export function OTPVerificationDialog({ 
  children,
  title = "Verify Your Identity",
  description = "Enter the 6-digit code sent to your phone",
  onVerify
}: { 
  children: React.ReactNode;
  title?: string;
  description?: string;
  onVerify?: (otp: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const [otp, setOtp] = useState("");
  const [isVerifying, setIsVerifying] = useState(false);
  const [countdown, setCountdown] = useState(30);
  const [canResend, setCanResend] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    
    if (open && countdown > 0 && !canResend) {
      timer = setTimeout(() => {
        setCountdown(prev => prev - 1);
      }, 1000);
    } else if (countdown === 0 && !canResend) {
      setCanResend(true);
    }
    
    return () => {
      clearTimeout(timer);
    };
  }, [open, countdown, canResend]);

  const handleVerify = () => {
    if (otp.length !== 6) return;
    
    setIsVerifying(true);
    
    // Simulate verification process
    setTimeout(() => {
      onVerify?.(otp);
      setIsVerifying(false);
      setOpen(false);
    }, 1500);
  };

  const handleResendCode = () => {
    // Simulate resending code
    setCountdown(30);
    setCanResend(false);
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
            <DialogTitle>{title}</DialogTitle>
            <DialogDescription>
              {description}
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-6 py-4">
            <OTPInput 
              length={6} 
              onComplete={(value) => setOtp(value)} 
            />
            
            <Button 
              onClick={handleVerify} 
              disabled={otp.length !== 6 || isVerifying}
              className="w-full"
            >
              {isVerifying ? "Verifying..." : "Verify"}
            </Button>
            
            <div className="text-center text-sm">
              {!canResend ? (
                <p className="text-muted-foreground">
                  Resend code in {countdown} seconds
                </p>
              ) : (
                <button 
                  onClick={handleResendCode}
                  className="text-primary hover:underline bg-transparent border-none p-0 cursor-pointer"
                >
                  Resend code
                </button>
              )}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
} 
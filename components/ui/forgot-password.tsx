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
import { OTPVerificationDialog } from "./otp";

type ForgotPasswordStep = "email" | "otp" | "new-password" | "success";

export function ForgotPasswordDialog({ 
  children 
}: { 
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState<ForgotPasswordStep>("email");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [countryCode, setCountryCode] = useState("+91");
  const [verifiedOtp, setVerifiedOtp] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showOtpDialog, setShowOtpDialog] = useState(false);

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call to verify email
    setTimeout(() => {
      setIsLoading(false);
      setStep("otp");
    }, 1500);
  };

  const handleOtpSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowOtpDialog(true);
  };

  const handleOtpVerified = (otpValue: string) => {
    setVerifiedOtp(otpValue);
    setStep("new-password");
  };

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call to reset password
    setTimeout(() => {
      setIsLoading(false);
      setStep("success");
    }, 1500);
  };

  const handleClose = () => {
    setOpen(false);
    // Reset state after dialog closes
    setTimeout(() => {
      setStep("email");
      setEmail("");
      setPhone("");
      setVerifiedOtp("");
      setPassword("");
      setConfirmPassword("");
    }, 300);
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
          
          {step === "email" && (
            <>
              <DialogHeader>
                <DialogTitle>Reset Your Password</DialogTitle>
                <DialogDescription>
                  Enter your email address and well send a verification code to reset your password.
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={handleEmailSubmit} className="grid gap-4 py-4">
                <div className="grid gap-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    required
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  />
                </div>
                
                <div className="grid gap-2">
                  <label htmlFor="phone" className="text-sm font-medium">
                    Phone Number
                  </label>
                  <div className="flex">
                    <select
                      value={countryCode}
                      onChange={(e) => setCountryCode(e.target.value)}
                      className="flex h-10 rounded-l-md border border-r-0 border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      <option value="+91">+91</option>
                      <option value="+1">+1</option>
                      <option value="+44">+44</option>
                      <option value="+61">+61</option>
                    </select>
                    <input
                      id="phone"
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="9876543210"
                      required
                      className="flex h-10 w-full rounded-r-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    />
                  </div>
                </div>
                
                <Button type="submit" disabled={isLoading} className="w-full">
                  {isLoading ? "Sending..." : "Send Verification Code"}
                </Button>
              </form>
            </>
          )}
          
          {step === "otp" && (
            <>
              <DialogHeader>
                <DialogTitle>Verify Your Identity</DialogTitle>
                <DialogDescription>
                  We have sent a 6-digit verification code to your phone {countryCode} {phone}
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={handleOtpSubmit} className="grid gap-6 py-4">
                <Button 
                  type="button" 
                  onClick={() => setShowOtpDialog(true)}
                  className="w-full"
                >
                  Enter Verification Code
                </Button>
                
                <div className="text-center text-sm">
                  <button
                    type="button"
                    onClick={() => setStep("email")}
                    className="text-primary hover:underline bg-transparent border-none p-0 cursor-pointer"
                  >
                    Use a different email or phone
                  </button>
                </div>
              </form>
            </>
          )}
          
          {step === "new-password" && (
            <>
              <DialogHeader>
                <DialogTitle>Create New Password</DialogTitle>
                <DialogDescription>
                  Your identity has been verified with code {verifiedOtp}. Please create a new password.
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={handlePasswordSubmit} className="grid gap-4 py-4">
                <div className="grid gap-2">
                  <label htmlFor="new-password" className="text-sm font-medium">
                    New Password
                  </label>
                  <input
                    id="new-password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter new password"
                    required
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  />
                </div>
                
                <div className="grid gap-2">
                  <label htmlFor="confirm-password" className="text-sm font-medium">
                    Confirm Password
                  </label>
                  <input
                    id="confirm-password"
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Confirm new password"
                    required
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  />
                  {password && confirmPassword && password !== confirmPassword && (
                    <p className="text-sm text-red-500 mt-1">Passwords do not match</p>
                  )}
                </div>
                
                <Button 
                  type="submit" 
                  disabled={isLoading || !password || !confirmPassword || password !== confirmPassword}
                  className="w-full"
                >
                  {isLoading ? "Resetting..." : "Reset Password"}
                </Button>
              </form>
            </>
          )}
          
          {step === "success" && (
            <>
              <DialogHeader>
                <DialogTitle>Password Reset Successful</DialogTitle>
                <DialogDescription>
                  Your password has been reset successfully. You can now log in with your new password.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <Button onClick={handleClose} className="w-full">
                  Back to Login
                </Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
      
      {showOtpDialog && (
        <OTPVerificationDialog
          title="Enter Verification Code"
          description={`Enter the 6-digit code sent to ${countryCode} ${phone}`}
          onVerify={(verifiedOtp) => {
            setShowOtpDialog(false);
            handleOtpVerified(verifiedOtp);
          }}
        >
          <span></span>
        </OTPVerificationDialog>
      )}
    </>
  );
}

export function ForgotPasswordLink({ 
  className = "text-sm text-primary hover:underline" 
}: { 
  className?: string;
}) {
  return (
    <ForgotPasswordDialog>
      <button className={className}>
        Forgot password?
      </button>
    </ForgotPasswordDialog>
  );
}

export function ForgotPasswordButton() {
  const [open, setOpen] = useState(false);
  
  return (
    <>
      <button 
        className="hidden forgot-password-button" 
        onClick={() => setOpen(true)}
      />
      <ForgotPasswordDialog>
        <span></span>
      </ForgotPasswordDialog>
    </>
  );
}

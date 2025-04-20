"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Copy } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

interface TokenInfoProps {
  tokenName?: string;
  tokenSymbol?: string;
  network?: string;
  totalSupply?: string;
  contractAddress?: string;
  tokenImage?: string;
}

export function TokenInfo({
  tokenName = "Meta NFT Token",
  tokenSymbol = "$META",
  network = "BNB Smart Chain (BEP-20)",
  totalSupply = "140,000,000",
  contractAddress = "0xb8c77482e45f1f44de1745f52c74426c631bdd52",
  tokenImage = "/assets/token.png",
}: TokenInfoProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(contractAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-cyan-400">{tokenSymbol}</span>{" "}
            <span className="text-white">is the </span>
            <span className="text-cyan-400">Native</span>{" "}
            <span className="text-white">token For</span>
            <div className="mt-2">
              <span className="text-white">our&apos; Platform</span>
            </div>
            <div className="mt-2">
              <span className="text-white">Ecosystem.</span>
            </div>
          </h1>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16">
          {/* Token Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-sm"
          >
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-3xl shadow-2xl">
              <div className="relative w-full aspect-square">
                <Image
                  src={tokenImage}
                  alt={tokenName}
                  fill
                  className="object-contain rounded-2xl"
                  priority
                />
              </div>
            </div>
          </motion.div>

          {/* Token Details */}
          <div className="w-full max-w-xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Token Name */}
              <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700">
                <h3 className="text-gray-400 text-sm mb-2">Token Name</h3>
                <p className="text-white font-semibold text-lg">{tokenName}</p>
              </div>

              {/* Symbol */}
              <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700">
                <h3 className="text-gray-400 text-sm mb-2">Symbol</h3>
                <p className="text-white font-semibold text-lg">{tokenSymbol}</p>
              </div>

              {/* Network */}
              <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700">
                <h3 className="text-gray-400 text-sm mb-2">Network</h3>
                <p className="text-white font-semibold text-lg">{network}</p>
              </div>

              {/* Total Supply */}
              <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700">
                <h3 className="text-gray-400 text-sm mb-2">Total Supply</h3>
                <p className="text-white font-semibold text-lg">{totalSupply}</p>
              </div>

              {/* Contract Address */}
              <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 md:col-span-2">
                <h3 className="text-gray-400 text-sm mb-2">Contract Address</h3>
                <div className="flex items-center justify-between">
                  <p className="text-cyan-400 font-mono text-sm md:text-base truncate">
                    {contractAddress}
                  </p>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={copyToClipboard}
                    className="text-gray-400 hover:text-white hover:bg-gray-700"
                  >
                    <Copy className="h-4 w-4" />
                    <span className="sr-only">Copy address</span>
                  </Button>
                </div>
                {copied && (
                  <p className="text-green-400 text-xs mt-1">Copied to clipboard!</p>
                )}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              {/* <Button className="bg-indigo-600 hover:bg-indigo-700 text-white py-6 text-lg">
                Buy {tokenSymbol}
              </Button> */}
              <Button
                variant="outline"
                className="border-gray-600 text-white hover:bg-gray-800 py-6 text-lg"
                onClick={() => window.open(`https://bscscan.com/token/${contractAddress}`, '_blank')}
              >
                View Contract
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute -top-24 -left-24 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 -right-24 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl"></div>
    </section>
  );
}

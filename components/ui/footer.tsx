"use client";

import { DIcons } from "dicons";
// Remove this unused import
// import { useTheme } from "next-themes";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

// Remove or comment out unused function
// function handleScrollTop() {
//   window.scroll({
//     top: 0,
//     behavior: "smooth",
//   });
// }

const Footer = () => {
  // Remove or comment out unused variable
  // const { setTheme } = useTheme();
  
  const footerLinks = [
    {
      title: "Products",
      links: [
        { name: "Games", href: "/products" },
        { name: "Exchange", href: "/products" },
        { name: "Wallet", href: "/agency" },
        
      ],
    },
    {
      title: "Get Started",
      links: [
        { name: "create Account", href: "/about" },
        { name: "Login", href: "/works" },
        { name: "Plans", href: "/pricing" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About us", href: "/about" },
        { name: "Blog", href: "/works" },
        { name: "Press Notes", href: "/pricing" },
      ],
    },
   
    {
      title: "Support",
      links: [
        { name: "Contact Us", href: "/design" },
        { name: "Help Center", href: "/components" },
        { name: "Chat Support", href: "/blogs" },
        { name: "Faq", href: "/blogs" },
      ],
    },
    {
      title: "Legal",
      links: [
        { name: "Compliance", href: "/graphic" },
        { name: "Terms of Service", href: "/3d-icons" },
        { name: "Cookie Policy", href: "/colors" },
        { name: "Privacy Policy", href: "/colors" },
      ],
    },
    
  ];

  const socialLinks = [
    { name: "Email", icon: <DIcons.Mail className="h-5 w-5" />, href: "mailto:info@example.com" },
    { name: "Twitter", icon: <DIcons.X className="h-5 w-5" />, href: "https://twitter.com" },
    { name: "Instagram", icon: <DIcons.Instagram className="h-5 w-5" />, href: "https://instagram.com" },
    // { name: "Threads", icon: <DIcons.AtSign className="h-5 w-5" />, href: "https://threads.net" },
    { name: "WhatsApp", icon: <DIcons.Phone className="h-5 w-5" />, href: "https://whatsapp.com" },
    // { name: "Behance", icon: <DIcons.Palette className="h-5 w-5" />, href: "https://behance.net" },
    { name: "Facebook", icon: <DIcons.MessageCircle className="h-5 w-5" />, href: "https://facebook.com" },
    { name: "YouTube", icon: <DIcons.Video className="h-5 w-5" />, href: "https://youtube.com" },
  ];

  return (
    <div className="w-full py-16 bg-transparent text-white">
      <div className="container mx-auto px-4">
        {/* Logo and Description */}
        <div className="mb-16 flex flex-col md:flex-row gap-8">
          <div className="md:w-1/4">
            <div className="flex items-center mb-4">
              <Image 
                src="/assets/logo.svg" 
                alt=" Logo" 
                width={80}
                height={80}
                className="mr-3" 
              />
              <span className="text-xl font-bold"></span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              aims to create a unified, service-driven digital ecosystem that enhances everyday living through innovation, accessibility, and affordability. By integrating essential services such as e-commerce, transportation, travel, real estate, and crypto utilities into a single platform,  World simplifies how users engage with technology in their daily lives.
            </p>
          </div>
          <div className="md:w-3/4">
            {/* Footer links */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8">
              {footerLinks.map((section) => (
                <div key={section.title}>
                  <h3 className="font-semibold mb-4 text-sm">{section.title}</h3>
                  <ul className="space-y-2">
                    {section.links.map((link) => (
                      <li key={link.name}>
                        <Link 
                          href={link.href} 
                          className="text-gray-400 hover:text-white transition-colors text-sm"
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Social Media Links */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {socialLinks.map((social) => (
            <motion.a 
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-900 p-3 rounded-full hover:bg-gray-800 transition-colors"
              aria-label={social.name}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {social.icon}
            </motion.a>
          ))}
        </div>
        
        {/* Theme switcher and scroll to top
        <div className="flex items-center justify-center mt-8 mb-8">
          <div className="flex items-center">
            <motion.button
              onClick={() => setTheme("light")}
              className="bg-gray-800 mr-3 rounded-full p-2 text-white"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <DIcons.Sun className="h-5 w-5" strokeWidth={1} />
              <span className="sr-only">Light Theme</span>
            </motion.button>

            <motion.button 
              type="button" 
              onClick={handleScrollTop} 
              className="bg-gray-800 p-2 rounded-full"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <DIcons.ArrowUp className="h-5 w-5" />
              <span className="sr-only">Scroll to Top</span>
            </motion.button>

            <motion.button
              onClick={() => setTheme("dark")}
              className="bg-gray-800 ml-3 rounded-full p-2 text-white"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <DIcons.Moon className="h-5 w-5" strokeWidth={1} />
              <span className="sr-only">Dark Theme</span>
            </motion.button>
          </div>
        </div> */}
        
        {/* Copyright */}
        <div className="text-center text-sm text-gray-500 border-t border-gray-800 pt-8">
          <p>© 2025 &apos; - All rights reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

import { Menu, Bitcoin, Bike, ShoppingCart } from "lucide-react";
import React, { ReactElement } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { SignInButton } from "@/components/ui/signin-dialog";
import { SignUpButton } from "@/components/ui/signup-dialog";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";

// Define proper types for menu items
interface MenuSubItem {
  title: string;
  description: string;
  icon: ReactElement;
  url: string;
  onClick?: (e: React.MouseEvent) => void;
}

interface MenuItem {
  title: string;
  url: string;
  description?: string;
  icon?: ReactElement;
  items?: MenuSubItem[];
  onClick?: (e: React.MouseEvent) => void;
}

interface NavbarProps {
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
  };
  menu?: MenuItem[];
  mobileExtraLinks?: {
    name: string;
    url: string;
  }[];
}

export function Navbar({
  logo = {
    url: "#",
    src: "/assets/logo.svg",
    alt: "Logo",
    title: "",
  },
  mobileExtraLinks = [],
}: NavbarProps) {
  const handleProductClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const signInButton = document.querySelector('.signin-button-class') as HTMLElement;
    if (signInButton) {
      signInButton.click();
    }
  };
  
  const productsMenu: MenuItem = {
    title: "Products",
    url: "#products",
    items: [
      {
        title: "Wallet",
        description: "Our Cutting edge crypto exchange services..",
        icon: <ShoppingCart className="size-5 shrink-0" />,
        url: "#",
        onClick: handleProductClick
      },
      {
        title: "Games",
        description: "Modern Gaming Platform with our NAtive token Integartion..",
        icon: <Bike className="size-5 shrink-0" />,
        url: "#",
        onClick: handleProductClick
      },
      {
        title: "Exchange",
        description: "Comprehensive crypto platform with both centralized and decentralized exchange options and secure wallets.",
        icon: <Bitcoin className="size-5 shrink-0" />,
        url: "#",
        onClick: handleProductClick
      },
    ],
  };
  
  const updatedMenu: MenuItem[] = [
    { title: "Home", url: "/" },
    productsMenu,
    { title: "Token", url: "#tokeninfo" },
    { title: "Roadmap", url: "#roadmap" },
    { title: "Audit", url: "#" },
  ];

  // Helper function to render menu items in mobile view
  const renderMenuItem = (item: MenuItem) => {
    if (item.items && Array.isArray(item.items) && item.items.length > 0) {
      return (
        <AccordionItem key={item.title} value={item.title} className="border-b-0">
          <AccordionTrigger className="py-2 text-base">
            {item.title}
          </AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col space-y-2">
              {item.items.map((subItem) => (
                <a
                  key={subItem.title}
                  href={subItem.url}
                  onClick={subItem.onClick}
                  className="py-2 text-base transition-colors hover:text-primary"
                >
                  {subItem.title}
                </a>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      );
    }
    
    return (
      <a
        key={item.title}
        href={item.url}
        className="py-2 text-base transition-colors hover:text-primary"
      >
        {item.title}
      </a>
    );
  };

  return (
    <section className="py-4 sticky top-0 z-50 bg-black/20 backdrop-blur-xl border-b border-white/10">
      <div className="container mx-auto px-4">
        <nav className="hidden justify-between lg:flex">
          <div className="flex items-center">
            <a
              href={logo.url}
              className="flex items-center gap-2 text-xl font-semibold"
            >
              {logo.src && (
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={48}
                  height={48}
                  className="h-12 w-auto"
                />
              )}
              {logo.title}
            </a>
          </div>
          
          {/* Center the navigation menu */}
          <div className="flex-1 flex items-center justify-center">
            <NavigationMenu>
              <NavigationMenuList>
                {updatedMenu.map((menuItem) => {
                  if (menuItem.items && Array.isArray(menuItem.items) && menuItem.items.length > 0) {
                    return (
                      <NavigationMenuItem key={menuItem.title}>
                        <NavigationMenuTrigger className="bg-transparent hover:bg-white/10">
                          {menuItem.title}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                            {menuItem.items.map((subItem) => (
                              <li key={subItem.title}>
                                <NavigationMenuLink asChild>
                                  <a
                                    href={subItem.url}
                                    onClick={subItem.onClick}
                                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                  >
                                    {subItem.icon}
                                    <div className="text-sm font-medium leading-none mt-2.5">
                                      {subItem.title}
                                    </div>
                                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                      {subItem.description}
                                    </p>
                                  </a>
                                </NavigationMenuLink>
                              </li>
                            ))}
                          </ul>
                        </NavigationMenuContent>
                      </NavigationMenuItem>
                    );
                  }
                  return (
                    <NavigationMenuItem key={menuItem.title}>
                      <NavigationMenuLink asChild>
                        <a
                          href={menuItem.url}
                          className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-white/10 hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                        >
                          {menuItem.title}
                        </a>
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  );
                })}
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          
          {/* Keep the buttons on the right */}
          <div className="flex items-center gap-1">
            <SignInButton>
              <Button 
                variant="outline" 
                size="sm" 
                className="border-white/20 bg-transparent hover:bg-white/10 text-white"
              >
                Login
              </Button>
            </SignInButton>
            <SignUpButton>
              <Button 
                size="sm" 
                className="bg-indigo-600 hover:bg-indigo-700 text-white"
              >
                Sign Up
              </Button>
            </SignUpButton>
          </div>
        </nav>
        <div className="block lg:hidden">
          <div className="flex items-center justify-between">
            <a href={logo.url} className="flex items-center gap-2">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={56}
                height={56}
                className="w-14"
              />
              <span className="text-lg font-semibold text-white">{logo.title}</span>
            </a>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="border-white/20 bg-transparent hover:bg-white/10">
                  <Menu className="size-4 text-white" />
                </Button>
              </SheetTrigger>
              <SheetContent className="overflow-y-auto bg-[#0c0a1d]/95 border-white/10">
                <SheetHeader>
                  <SheetTitle>
                    <a href={logo.url} className="flex items-center gap-2">
                      <Image
                        src={logo.src}
                        alt={logo.alt}
                        width={56}
                        height={56}
                        className="w-14"
                      />
                      <span className="text-lg font-semibold text-white">
                        {logo.title}
                      </span>
                    </a>
                  </SheetTitle>
                </SheetHeader>
                <div className="my-6 flex flex-col gap-6">
                  <Accordion
                    type="single"
                    collapsible
                    className="flex w-full flex-col gap-4"
                  >
                    {updatedMenu.map((item) => renderMenuItem(item))}
                  </Accordion>
                  {mobileExtraLinks.length > 0 && (
                    <div className="border-t border-white/10 py-4">
                      <div className="grid grid-cols-2 justify-start">
                        {mobileExtraLinks.map((link, idx) => (
                          <a
                            key={idx}
                            className="inline-flex h-10 items-center gap-2 whitespace-nowrap rounded-md px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-white/10"
                            href={link.url}
                          >
                            {link.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                  <div className="mt-6 border-t pt-6 flex flex-col gap-2">
                    <SignInButton>
                      <Button 
                        variant="outline" 
                        className="w-full text-white border-white/20 bg-transparent hover:bg-white/10"
                      >
                        Login
                      </Button>
                    </SignInButton>
                    <SignUpButton>
                      <Button 
                        className="w-full bg-indigo-600 hover:bg-indigo-700 text-white"
                      >
                        Sign Up
                      </Button>
                    </SignUpButton>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </section>
  );
} 
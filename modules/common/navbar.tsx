"use client";

import Link from "next/link";
import LogoZen2Spirit from "@/assets/logo-zen2spirit.svg";
import { usePathname } from "next/navigation";
import { routes } from "@/lib/routes";
import { useEffect, useState } from "react";
import clsx from "clsx";

const SCROLL_OFFSET_IN_PX = 100;

type NavbarProps = {
  defaultScrolled?: boolean;
};

export function Navbar({ defaultScrolled = false }: NavbarProps) {
  const pathname = usePathname();
  const currentPage = routes.find((route) => route.path === pathname)?.name;

  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsScrolled(defaultScrolled || window.scrollY > SCROLL_OFFSET_IN_PX);

    const handleScroll = () => {
      if (defaultScrolled) return;

      setIsScrolled(window.scrollY > SCROLL_OFFSET_IN_PX);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [defaultScrolled]);

  return (
    <nav
      id="mainNav"
      className={`w-full fixed left-0 z-20 transition-all ${clsx(isScrolled ? "bg-white shadow-md py-1 text-gray-950" : "bg-transparent py-4  text-gray-50")}`}
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        <Link href="/" className="flex items-center text-2xl">
          <LogoZen2Spirit className="w-12 h-12 md:w-16 md:h-16" />
          <span className="ml-3 font-title font-bold">Zen2Spirit</span>
        </Link>

        <div className="flex items-center">
          <button
            aria-label="Toggle menu"
            className="md:hidden p-2 mr-2"
            onClick={() => setIsOpen((s) => !s)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>

          <ul className="hidden md:flex items-center gap-6">
            {routes.map((route) => (
              <li key={route.name}>
                <Link
                  href={route.path}
                  className={`transition-colors ${clsx(currentPage === route.name && "text-primary hover:text-primary-hover")}`}
                >
                  {route.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all ${isOpen ? "max-h-screen" : "max-h-0 overflow-hidden"}`}
      >
        <div className="bg-white/95 shadow-md">
          <ul className="flex flex-col">
            {routes.map((route) => (
              <li key={route.name} className="py-3 px-4">
                <Link
                  href={route.path}
                  onClick={() => setIsOpen(false)}
                  className={`block ${clsx(currentPage === route.name ? "text-primary hover:text-primary-hover" : "text-dark-gray hover:text-gray-700")}`}
                >
                  {route.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

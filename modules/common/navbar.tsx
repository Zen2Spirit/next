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
      <div className="container mx-auto flex justify-between">
        <Link href="/" className="flex items-center text-2xl">
          <LogoZen2Spirit className="w-16 h-16" />
          <span className="ml-3 font-title font-bold">Zen2Spirit</span>
        </Link>
        <ul className="flex items-center gap-6">
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
    </nav>
  );
}

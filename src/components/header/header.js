/* eslint-disable @next/next/no-img-element */
"use client";
import { useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { Link } from "react-scroll";
import MobileMenu from "./mobileMenu";
import Navigation from "./navigation";

/**
 * Header component for rendering the website header with navigation links.
 * @module components/Header
 * @returns {JSX.Element} JSX element representing the header.
 */
export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-50 bg-black/20">
      <nav
        className="flex items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link
            to="hero"
            activeClass="active"
            spy={true}
            smooth={true}
            duration={400}
            className="-m-1.5 p-1.5"
          >
            <span className="sr-only">Auguri</span>
            <img className="h-20 lg:h-22 w-auto" src="/LogoWhite.png" alt="" />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-200"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <MobileMenu
          mobileMenuOpen={mobileMenuOpen}
          setMobileMenuOpen={setMobileMenuOpen}
        />
        <Navigation
          containerclasses={"hidden lg:flex lg:gap-x-12"}
          linkClasses={"text-lg font-semibold leading-6 text-gray-200"}
        ></Navigation>
      </nav>
    </header>
  );
}

/* eslint-disable @next/next/no-img-element */
import { Dialog } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-scroll";
import Navigation from "./navigation";

/**
 * MobileMenu component for rendering the mobile menu.
 * @module components/MobileMenu
 * @param {Object} props - The props object.
 * @param {boolean} props.mobileMenuOpen - Indicates whether the mobile menu is open.
 * @param {function} props.setMobileMenuOpen - Function to set the state of the mobile menu.
 * @returns {JSX.Element} JSX element representing the mobile menu.
 */

export default function MobileMenu({ mobileMenuOpen, setMobileMenuOpen }) {
  return (
    <Dialog
      as="div"
      className="lg:hidden"
      open={mobileMenuOpen}
      onClose={() => setMobileMenuOpen(false)}
    >
      <div className="fixed inset-0 z-50" />
      <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 max-w-xs">
        <div className="flex items-center justify-between">
          <Link
            to="hero"
            activeClass="active"
            spy={true}
            smooth={true}
            duration={400}
            className="-m-1.5 p-1.5"
          >
            <span className="sr-only">Auguri</span>
            <img className="h-8 w-auto" src="/LogoBlack.png" alt="" />
          </Link>
          <button
            type="button"
            className="-m-2.5 rounded-md p-2.5 text-gray-800"
            onClick={() => setMobileMenuOpen(false)}
          >
            <span className="sr-only">Close menu</span>
            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="mt-6 flow-root">
          <div className="-my-6 divide-y divide-gray-500/10">
            <Navigation
              containerclasses={"space-y-2 py-6"}
              linkClasses={
                "-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-800 hover:bg-gray-50"
              }
            ></Navigation>
          </div>
        </div>
      </Dialog.Panel>
    </Dialog>
  );
}

import { Link } from "react-scroll";

/**
 * Hero section component for displaying the main content at the top of the page.
 * @module components/HeroSection
 * @returns {JSX.Element} JSX element representing the hero section component.
 */

export default function HeroSection() {
  return (
    <div
      className="relative bg-cover bg-center h-screen bg-[url('/hero-image-4.png')] px-6 pt-14 lg:px-8"
      id="hero"
    >
      <div className="mx-auto max-w-3xl py-32 sm:py-48 lg:py-56">
        <div className="p-5 text-center bg-black/20 ">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl ">
            Make your next event an extraordinary experience
          </h1>
          <p className="mt-6 text-2xl font-semibold leading-8 text-white ">
            Just tell us what you want and our team are going to make your
            dreams come true.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-x-6 sm:flex-row gap-y-6">
            <Link
              to="pricing"
              activeClass="active"
              spy={true}
              smooth={true}
              duration={400}
              className="rounded-md bg-emerald-900 px-3.5 py-2.5 text-xl font-semibold text-white shadow-sm hover:bg-emerald-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-900"
            >
              Get prices
            </Link>
            <Link
              to="reviews"
              activeClass="active"
              spy={true}
              smooth={true}
              duration={400}
              className="text-lg font-semibold leading-6 text-gray-300"
            >
              What people say about us! <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

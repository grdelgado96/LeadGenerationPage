/* eslint-disable @next/next/no-img-element */
import { services } from "@/constants";

/**
 * Services component for displaying the services offered.
 * @module components/Services
 * @returns {JSX.Element} JSX element representing the services component.
 */

export default function Services() {
  return (
    <div className="bg-gray-100" id="services">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32 ">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Services we offer
            </h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              All kind of decorations and photography services
            </p>
          </div>

          <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0 ">
            {services.map((service) => (
              <div key={service.name} className="group relative">
                <div className="mt-10 relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1  sm:h-64 ">
                  <img
                    src={service.imageSrc}
                    alt={service.imageAlt}
                    className="h-full w-full object-cover object-center hover:scale-150 "
                  />
                </div>
                <p className="mt-3 text-base font-semibold text-gray-900">
                  {service.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

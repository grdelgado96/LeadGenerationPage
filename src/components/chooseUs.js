/* eslint-disable @next/next/no-img-element */
import { listIconSection } from "@/constants";

/**
 * Component displaying reasons to choose our event planning service.
 * @returns {JSX.Element} React component
 */

export default function ChooseUs() {
  return (
    <div
      className="relative isolate overflow-hidden bg-gray-100 px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0"
      id="chooseUs"
    >
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Why Choose Us?
              </h1>
              <p className="mt-6 text-xl leading-8 text-gray-700">
                Discover the Difference with Our Event Experts
              </p>
            </div>
          </div>
        </div>
        <div className="-ml-10 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
            src="/BalloonDecor.jpg"
            alt=""
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
              <p>
                At Auguri, we&apos;re dedicated to crafting unforgettable events
                tailored to your vision. With years of experience, personalized
                service, and a commitment to excellence, we bring your dreams to
                life with creativity and professionalism. Trust us to make your
                event truly extraordinary.
              </p>
              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                {listIconSection.map((item, index) => (
                  <li key={index} className="flex gap-x-3">
                    <item.icon
                      className="mt-1 h-5 w-5 flex-none text-emerald-900"
                      aria-hidden="true"
                    />
                    <span>
                      <strong className="font-semibold text-gray-900">
                        {item.title}
                      </strong>{" "}
                      {item.text}
                    </span>
                  </li>
                ))}
              </ul>

              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
                Let&apos;s Make Your Vision a Reality!
              </h2>
              <p className="mt-6">
                Ready to take your event to the next level? Contact us today and
                let&apos;s bring your vision to life. Whether it&apos;s a
                wedding, corporate event, or special celebration, we&apos;re
                here to make it extraordinary. With our personalized service,
                professional excellence, and creative innovation, you can trust
                us to exceed your expectations every step of the way. Don&apos;t
                settle for ordinary – choose Auguri and make your event
                unforgettable.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

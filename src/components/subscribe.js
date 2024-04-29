import { CalendarDaysIcon, HandRaisedIcon } from "@heroicons/react/24/outline";
import { shareSubscription } from "../../lib/actions";
import { useRef, useState } from "react";

/**
 * Subscribe component for allowing users to subscribe to the mailing list.
 * @module components/Subscribe
 * @returns {JSX.Element} JSX element representing the subscribe component.
 */

export default function Subscribe() {
  const emailInputRef = useRef();
  const [message, setMessage] = useState(null);
  const [messageColor, setMessageColor] = useState(null);

  async function submitHandler(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const result = await shareSubscription(formData);
    if (result) {
      setMessage("Submitted");
      setMessageColor("text-green-500");
      emailInputRef.current.value = "";
    } else {
      setMessage("There was an error submitting your email.");
      setMessageColor("text-red-500");
    }
  }

  return (
    <div className="relative isolate overflow-hidden bg-gray-900 py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
          <div className="max-w-xl lg:max-w-lg">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Join our mailing list!
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-300">
              Be the first to know about new offers, ideas, tutorials and
              inventory.
            </p>
            <form onSubmit={submitHandler}>
              <div className="mt-6 flex max-w-md gap-x-4">
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  ref={emailInputRef}
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-emerald-900 sm:text-sm sm:leading-6"
                  placeholder="Enter your email"
                />
                <button
                  type="submit"
                  className="flex-none rounded-md bg-emerald-900 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-emerald-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-900"
                >
                  Subscribe
                </button>
              </div>
            </form>
            {message && (
              <p className={`mt-2 text-sm ${messageColor}`}>{message}</p>
            )}
          </div>
          <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
            <div className="flex flex-col items-start">
              <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                <CalendarDaysIcon
                  className="h-6 w-6 text-white"
                  aria-hidden="true"
                />
              </div>
              <dt className="mt-4 font-semibold text-white">Weekly articles</dt>
              <dd className="mt-2 leading-7 text-gray-400">
                Every week we come with new ideas to share with you.
              </dd>
            </div>
            <div className="flex flex-col items-start">
              <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                <HandRaisedIcon
                  className="h-6 w-6 text-white"
                  aria-hidden="true"
                />
              </div>
              <dt className="mt-4 font-semibold text-white">No spam</dt>
              <dd className="mt-2 leading-7 text-gray-400">
                We respect your privacy! We will not spam you or send you emails
                every day.
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}

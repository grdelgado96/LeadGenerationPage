import { CheckIcon } from '@heroicons/react/20/solid'
import { Link } from 'react-scroll'
const includedFeatures = [
    'Customized Backdrop',
    'Balloon Garland',
    'Wooden or Neon Sign',
    'Decorative Accents',
    'Cake and Cupcakes Stand',
    'Delivery, Setup and Cleanup'
]

export default function Pricing() {
    return (
        <div className="bg-white py-24 sm:py-32" id='pricing'>
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl sm:text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Decoration Package</h2>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        Figuring out what decorations to use at your event can be overwhelming! We have packages to make the process easier for you.
                    </p>
                </div>
                <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
                    <div className="p-8 sm:p-10 lg:flex-auto">
                        <h3 className="text-2xl font-bold tracking-tight text-gray-900">Basic Decoration</h3>
                        <p className="mt-6 text-base leading-7 text-gray-600">
                            Acording your preferences the colors will be customized. This include the balloon colors, tablecloth color, and backdrop colors.
                        </p>
                        <div className="mt-10 flex items-center gap-x-4">
                            <h4 className="flex-none text-sm font-semibold leading-6 text-emerald-900">What’s included</h4>
                            <div className="h-px flex-auto bg-gray-100" />
                        </div>
                        <ul
                            role="list"
                            className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
                        >
                            {includedFeatures.map((feature) => (
                                <li key={feature} className="flex gap-x-3">
                                    <CheckIcon className="h-6 w-5 flex-none text-emerald-900" aria-hidden="true" />
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
                        <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                            <div className="mx-auto max-w-xs px-8">
                                <p className="text-base font-semibold text-gray-600">Starting at</p>
                                <p className="mt-6 flex items-baseline justify-center gap-x-2">
                                    <span className="text-5xl font-bold tracking-tight text-gray-900">$750</span>
                                    <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">USD</span>
                                </p>
                                <Link
                                    to='contact'
                                    activeClass="active"
                                    spy={true}
                                    smooth={true}
                                    duration={400}
                                    className="mt-10 block w-full rounded-md bg-emerald-900 px-3 py-2 text-center text-lg font-semibold text-white shadow-sm hover:bg-emerald-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-900"
                                >
                                    Get in touch to know more
                                </Link>
                                <p className="mt-6 text-xs leading-5 text-gray-600">
                                    Invoices and receipts available for easy company reimbursement
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

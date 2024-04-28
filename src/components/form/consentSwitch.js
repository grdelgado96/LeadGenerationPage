
import React from 'react';
import { Switch } from '@headlessui/react'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function ConsentSwitch({ agreed, setAgreed, error }) {
    const handleToggle = (isChecked) => {
        setAgreed(isChecked);
    };
    return (
        <Switch.Group as="div" className="flex gap-x-4 sm:col-span-2">
            <div className="flex h-6 items-center">
                <Switch
                    checked={agreed}
                    onChange={handleToggle}
                    className={classNames(
                        agreed ? 'bg-emerald-900' : 'bg-gray-200',
                        'flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-900'
                    )}
                >
                    <span className="sr-only">Agree to receive text and call</span>
                    <span
                        aria-hidden="true"
                        className={classNames(
                            agreed ? 'translate-x-3.5' : 'translate-x-0',
                            'h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out'
                        )}
                    />
                </Switch>
            </div>
            <Switch.Label className="text-sm leading-6 text-gray-600">
                By selecting this option, you consent to receiving text messages and phone calls.
                {error && <p className='text-red-500 text-xs mt-1'>{error}</p>}
            </Switch.Label>

        </Switch.Group>
    );
}
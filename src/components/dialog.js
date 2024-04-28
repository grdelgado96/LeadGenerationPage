
import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/24/outline'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import { useModal } from '@/store/ModalProvider'
export default function ModalDialog() {
    const cancelButtonRef = useRef(null)
    const { modal, hideModal } = useModal();
    return (
        <Transition.Root show={modal.show} as={Fragment}>
            <Dialog
                as="div"
                className="fixed inset-0 z-10 flex items-center justify-center overflow-y-auto"
                onClose={hideModal}
                initialFocus={cancelButtonRef}
            >
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                </Transition.Child>

                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                    <div className="relative transform overflow-hidden rounded-lg bg-white shadow-xl">
                        <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                            <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gray-100">
                               { modal.response? <CheckIcon className="h-6 w-6 text-emerald-900" aria-hidden="true" /> :  <ExclamationTriangleIcon className="h-6 w-6 text-red-600" aria-hidden="true" />}
                            </div>
                            <div className="mt-5 text-center ">
                                <Dialog.Title as="h3" className="text-base font-semibold leading-6 text-gray-900">
                                    {modal.response? 'Submit Successfully': 'Failed to submit information'}
                                </Dialog.Title>
                                <div className="mt-2">
                                    <p className="text-sm text-gray-500">
                                    {modal.response? 'We are going to keep in contact with you soon!': 'We are having trouble rigth now. Please try again later!'}
                                        
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gray-50 px-4 py-3 flex justify-center sm:px-6">
                           
                                <button
                                    type="button"
                                    className={modal.response? 'inline-flex justify-center rounded-md  px-3 py-2 text-sm font-semibold text-white shadow-sm  sm:w-auto bg-emerald-900 hover:bg-emerald-700': 'mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto'}
                                    onClick={hideModal}
                                    ref={cancelButtonRef}
                                >
                                    Close
                                </button>
                           
                        </div>
                    </div>
                </Transition.Child>
            </Dialog>
        </Transition.Root>
    )
}


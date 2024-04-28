'use client'

import { useRef, useState } from 'react'
import Input from './inputField'
import ConsentSwitch from './consentSwitch';
import { shareContact } from '../../../lib/actions';
import { useModal } from '@/store/ModalProvider';

export default function Form() {
    const [agreed, setAgreed] = useState(false);
    const [formIsValid, setFormIsValid] = useState(false);
    const [error, setError] = useState({});
    const { showModal } = useModal();

    const firstNameInputRef = useRef();
    const lastNameInputRef = useRef();
    const emailInputRef = useRef();
    const phoneNumberInputRef = useRef();
    const messageInputRef = useRef();

    const inputFields = [
        { label: 'First name', id: 'first-name', ref: firstNameInputRef, type: "text", error: error.firstName },
        { label: 'Last Name', id: 'last-name', ref: lastNameInputRef, type: "text", error: error.lastName },
        { label: 'Email', id: 'email', ref: emailInputRef, type: "email", containerClasses: "sm:col-span-2", error: error.email },
        { label: 'Phone Number', id: 'phone-number', type: 'number', ref: phoneNumberInputRef, containerClasses: "sm:col-span-2", error: error.phoneNumber },
        { label: 'Message', id: 'message', typeField: "textarea", type: 'text', rows: 4, ref: messageInputRef, error: error.message }
    ];

    const resetFormFields = () => {
        firstNameInputRef.current.value = '';
        lastNameInputRef.current.value = '';
        emailInputRef.current.value = '';
        phoneNumberInputRef.current.value = '';
        messageInputRef.current.value = '';
        setAgreed(false);
        setFormIsValid(false);
    };

    const submitHandler = async (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);
        const result = await shareContact(formData);
        showModal(result);
        resetFormFields();
    }

    const checkFormValidity = (isChecked) => {
        const firstNameValid = firstNameInputRef.current.checkValidity();
        const lastNameValid = lastNameInputRef.current.checkValidity();
        const emailValid = emailInputRef.current.checkValidity();
        const phoneNumberValid = phoneNumberInputRef.current.checkValidity();
        const messageValid = messageInputRef.current.checkValidity();
        const switchValid = isChecked;
        setError({
            firstName: firstNameValid ? '' : 'First name cannot be empty.',
            lastName: lastNameValid ? '' : 'Last name cannot be empty.',
            email: emailValid ? '' : 'Please enter a valid email address.',
            phoneNumber: phoneNumberValid ? '' : 'Please enter a valid phone number.',
            message: messageValid ? '' : 'Message cannot be empty.',
            switch: switchValid ? '' : 'You must agree to receive text messages and phone calls.',
        });

        setFormIsValid(firstNameValid && lastNameValid && emailValid && phoneNumberValid && messageValid && switchValid);
    }

    return (
        <div className="isolate  px-6 py-24 sm:py-32 lg:px-8" id='contact'>
            <div
                className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
                aria-hidden="true"
            >
            </div>
            <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Contact with us!</h2>
                <p className="mt-2 text-lg leading-8 text-gray-600">
                    If you want to know more get in touch!
                </p>
            </div>
            <form onSubmit={submitHandler} onChange={checkFormValidity} className="mx-auto mt-16 max-w-xl sm:mt-20">
                <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                    {inputFields.map((inputField) => (
                        <Input
                            key={inputField.id}
                            ref={inputField.ref}
                            label={inputField.label}
                            id={inputField.id}
                            labelClasses={inputField.labelClasses}
                            required
                            type={inputField.type}
                            rows={inputField.rows}
                            containerClasses={inputField.containerClasses}
                            inputClasses={inputField.inputClasses}
                            errorClasses={inputField.errorClasses}
                            error={inputField.error}
                            typeField={inputField.typeField}
                        ></Input>
                    ))}
                    <ConsentSwitch agreed={agreed} setAgreed={setAgreed} error={error.switch} checkFormValidity={checkFormValidity} ></ConsentSwitch>
                </div>

                <div className="mt-10">
                    <button
                        type="submit"
                        disabled={!formIsValid}
                        className="block w-full rounded-md bg-emerald-900 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-emerald-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-900 disabled:bg-gray-400 disabled:bg-emerald-900/40"
                    >
                        Let's talk
                    </button>
                </div>
            </form>
        </div>
    )
}

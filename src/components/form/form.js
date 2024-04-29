"use client";
/**
 * Component for displaying a contact form.
 * @module components/Form
 * @requires Input
 * @requires ModalDialog
 * @requires useForm
 */

import Input from "./inputField";
import ModalDialog from "../dialog";
import useForm from "@/hooks/useForm";
/**
 * Renders a contact form.
 * @returns {JSX.Element} JSX Element representing the contact form.
 */
export default function Form() {
  const { submitHandler, checkFormValidity, inputFields, formIsValid } =
    useForm();
  return (
    <div className="isolate  px-6 py-24 sm:py-32 lg:px-8" id="contact">
      <div
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
        aria-hidden="true"
      ></div>
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Contact us!
        </h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">
          If you want to know more get in touch!
        </p>
      </div>
      <form
        onSubmit={submitHandler}
        onChange={checkFormValidity}
        className="mx-auto mt-16 max-w-xl sm:mt-20"
      >
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          {inputFields.map((inputField) => (
            <Input
              key={inputField.id}
              ref={inputField.ref}
              label={inputField.label}
              id={inputField.id}
              required
              type={inputField.type}
              rows={inputField.rows}
              containerclasses={inputField.containerclasses}
              error={inputField.error}
              typefield={inputField.typefield}
              onBlur={() => checkFormValidity(inputField.id)}
            />
          ))}
        </div>

        <div className="mt-10">
          <button
            type="submit"
            disabled={!formIsValid}
            className="block w-full rounded-md bg-emerald-900 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-emerald-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-900 disabled:bg-gray-400 disabled:bg-emerald-900/40"
          >
            Let &apos; s talk
          </button>
        </div>
      </form>
      <ModalDialog />
    </div>
  );
}

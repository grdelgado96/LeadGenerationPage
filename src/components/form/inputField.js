import React from "react";

/**
 * Input component for rendering form input fields.
 * @module components/Input
 * @param {object} props - Component props.
 * @param {string} props.id - Unique identifier for the input field.
 * @param {string} props.label - Label text for the input field.
 * @param {string} [props.typefield] - Type of input field (e.g., "textarea").
 * @param {string} [props.error] - Error message to display below the input field.
 * @param {string} [props.type] - Type of input (e.g., "text", "email").
 * @param {number} [props.rows] - Number of rows (for textarea type).
 * @param {string} [props.containerclasses] - Additional classes for the input container.
 * @param {function} ref - Ref to forward to the input element.
 * @returns {JSX.Element} JSX element representing the input field.
 */

function Input(props, ref) {
  let content =
    props.typefield === "textarea" ? (
      <textarea
        ref={ref}
        id={props.id}
        name={props.id}
        className="mt-2.5 block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-900 sm:text-sm sm:leading-6"
        {...props}
      ></textarea>
    ) : (
      <input
        ref={ref}
        id={props.id}
        name={props.id}
        className="mt-2.5 block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-900 sm:text-sm sm:leading-6"
        {...props}
      ></input>
    );
  return (
    <div
      className={
        props.id === "email" ||
        props.id === "phoneNumber" ||
        props.id === "message"
          ? "sm:col-span-2"
          : ""
      }
    >
      <label
        htmlFor={props.id}
        required
        className="block text-sm font-semibold leading-6 text-gray-900"
      >
        {props.label}
      </label>
      {content}
      {props.error && (
        <p className="text-red-500 text-xs mt-1">{props.error}</p>
      )}
    </div>
  );
}

const ForwardedInput = React.forwardRef(Input);
ForwardedInput.displayName = "Input";

export default ForwardedInput;

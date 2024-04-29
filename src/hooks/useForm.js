"use client";
import { useRef, useState } from "react";
import { shareContact } from "../../lib/actions";
import { useModal } from "@/store/ModalProvider";

/**
 * Provides functionality to handle and validate form submission for contact information.
 * @module useForm
 * Custom hook to handle form submission and validation for contact information.
 * @returns {Object} An object containing functions and state variables related to form handling.
 */

export default function useForm() {
  const [formIsValid, setFormIsValid] = useState(false);
  const [error, setError] = useState({});
  const { showModal } = useModal();

  const firstNameInputRef = useRef();
  const lastNameInputRef = useRef();
  const emailInputRef = useRef();
  const phoneNumberInputRef = useRef();
  const messageInputRef = useRef();

  const inputFields = [
    {
      label: "First name",
      id: "firstName",
      ref: firstNameInputRef,
      type: "text",
      error: error.firstName,
    },
    {
      label: "Last Name",
      id: "lastName",
      ref: lastNameInputRef,
      type: "text",
      error: error.lastName,
    },
    {
      label: "Email",
      id: "email",
      ref: emailInputRef,
      type: "email",
      containerclasses: "sm:col-span-2",
      error: error.email,
    },
    {
      label: "Phone Number",
      id: "phoneNumber",
      type: "number",
      ref: phoneNumberInputRef,
      containerclasses: "sm:col-span-2",
      error: error.phoneNumber,
    },
    {
      label: "Message",
      id: "message",
      typefield: "textarea",
      type: "text",
      rows: 4,
      ref: messageInputRef,
      error: error.message,
    },
  ];

  function resetFormFields() {
    firstNameInputRef.current.value = "";
    lastNameInputRef.current.value = "";
    emailInputRef.current.value = "";
    phoneNumberInputRef.current.value = "";
    messageInputRef.current.value = "";
    setFormIsValid(false);
  }

  async function submitHandler(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const result = await shareContact(formData);
    showModal(result);
    resetFormFields();
  }

  function checkFormValidity(fieldId) {
    const inputRef = {
      firstName: firstNameInputRef.current.checkValidity(),
      lastName: lastNameInputRef.current.checkValidity(),
      email: emailInputRef.current.checkValidity(),
      phoneNumber: phoneNumberInputRef.current.checkValidity(),
      message: messageInputRef.current.checkValidity(),
    };

    const isValid = inputRef[fieldId];
    setError((prevState) => ({
      ...prevState,
      [fieldId]: isValid ? "" : getErrorMessage(fieldId),
    }));

    const formIsValid = Object.values(inputRef).every((input) => input);
    setFormIsValid(formIsValid);
  }

  function getErrorMessage(fieldId) {
    switch (fieldId) {
      case "firstName":
        return "First name cannot be empty.";
      case "lastName":
        return "Last name cannot be empty.";
      case "email":
        return "Please enter a valid email address.";
      case "phoneNumber":
        return "Please enter a valid phone number.";
      case "message":
        return "Message cannot be empty.";
      default:
        return "";
    }
  }
  return {
    submitHandler,
    checkFormValidity,
    inputFields,
    formIsValid,
  };
}

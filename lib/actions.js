"use server";
/**
 * Provides functionality for sharing contact information and subscriptions with the database.
 * @module Actions
 */
import { saveContact, saveSubscription } from "./contacts";

function isInvalidText(text) {
  return !text || text.trim() === "";
}

/**
 * Shares contact information with the database.
 * @async
 * @param {FormData} formData - The form data containing contact information.
 * @returns {Promise<boolean>} A promise that resolves to true if the contact information is successfully shared, false otherwise.
 */

export async function shareContact(formData) {
  const contact = {
    first_name: formData.get("firstName"),
    last_name: formData.get("lastName"),
    email: formData.get("email"),
    phone_number: formData.get("phoneNumber"),
    client_message: formData.get("message"),
  };
  if (
    isInvalidText(contact.first_name) ||
    isInvalidText(contact.last_name) ||
    isInvalidText(contact.phone_number) ||
    isInvalidText(contact.client_message) ||
    isInvalidText(contact.email) ||
    !contact.email.includes("@")
  ) {
    return false;
  }

  const response = await saveContact(contact);
  return response;
}

/**
 * Shares subscription information with the database.
 * @async
 * @param {FormData} formData - The form data containing subscription information.
 * @returns {Promise<boolean>} A promise that resolves to true if the subscription information is successfully shared, false otherwise.
 */

export async function shareSubscription(formData) {
  const email = formData.get("email");
  if (isInvalidText(email) || !email.includes("@")) {
    return false;
  }

  const response = await saveSubscription(email);
  return response;
}

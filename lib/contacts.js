/**
 * Provides functions to save contact information and subscriptions to the database.
 * @module Contacts
 */

import sql from "better-sqlite3";

const db = sql("contacts.db");

/**
 * Saves contact information to the database.
 * @async
 * @param {Object} contact - The contact information to be saved.
 * @param {string} contact.first_name - The first name of the contact.
 * @param {string} contact.last_name - The last name of the contact.
 * @param {string} contact.email - The email address of the contact.
 * @param {string} contact.phone_number - The phone number of the contact.
 * @param {string} contact.client_message - The message from the client.
 * @returns {Promise<boolean>} A promise that resolves to true if the contact information is successfully saved, false otherwise.
 */

export async function saveContact(contact) {
  try {
    await db
      .prepare(
        `
            INSERT INTO contacts
            (first_name, last_name, email, phone_number, client_message)
            VALUES (
                @first_name,
                @last_name,
                @email,
                @phone_number,
                @client_message
            )
        `
      )
      .run(contact);
    return true; // Success
  } catch (error) {
    console.log(error);
    console.error("Was an error trying to save contact:", error);
    return false; // Error
  }
}

/**
 * Saves subscription information to the database.
 * @async
 * @param {string} email - The email address of the subscriber.
 * @returns {Promise<boolean>} A promise that resolves to true if the subscription information is successfully saved, false otherwise.
 */

export async function saveSubscription(email) {
  console.log(email);
  try {
    await db
      .prepare(
        `
            INSERT INTO newsletter
            (email)
            VALUES (
                @email
            )
        `
      )
      .run({ email: email });
    return true; // Success
  } catch (error) {
    console.log(error);
    console.error("Was an error trying to save subscription:", error);
    return false; // Error
  }
}

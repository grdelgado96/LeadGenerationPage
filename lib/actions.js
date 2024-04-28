'use server';


import { saveContact, saveSubscription } from './contacts';


function isInvalidText(text) {
    return !text || text.trim() === '';
}

export async function shareContact(formData) {
    const contact = {
        first_name: formData.get('first-name'),
        last_name: formData.get('last-name'),
        email: formData.get('email'),
        phone_number: formData.get('phone-number'),
        client_message: formData.get('message'),
    };
    if (
        isInvalidText(contact.first_name) ||
        isInvalidText(contact.last_name) ||
        isInvalidText(contact.phone_number) ||
        isInvalidText(contact.client_message) ||
        isInvalidText(contact.email) ||
        !contact.email.includes('@')
    ) {
        return false;
    }

    const response = await saveContact(contact);
    return response;
}

export async function shareSubscription(formData) {
    const email =  formData.get('email');
    if (
        isInvalidText(email) ||
        !email.includes('@')
    ) {
        return false;
    }

    const response = await saveSubscription(email);
    return response;
}
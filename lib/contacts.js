import sql from 'better-sqlite3';

const db = sql('contacts.db');

export async function saveContact(contact) {
    try {
        await db.prepare(`
            INSERT INTO contacts
            (first_name, last_name, email, phone_number, client_message)
            VALUES (
                @first_name,
                @last_name,
                @email,
                @phone_number,
                @client_message
            )
        `).run(contact);
        return true; // Success
    } catch (error) {
        console.log(error);
        console.error('Was an error trying to save contact:', error);
        return false; // Error
    }
}

export async function saveSubscription(email) {
    console.log(email)
    try {
        await db.prepare(`
            INSERT INTO newsletter
            (email)
            VALUES (
                @email
            )
        `).run({email: email});
        return true; // Success
    } catch (error) {
        console.log(error);
        console.error('Was an error trying to save subscription:', error);
        return false; // Error
    }
}
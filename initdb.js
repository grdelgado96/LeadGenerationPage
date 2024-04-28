const sql = require('better-sqlite3');
const db = sql('contacts.db');

db.prepare(`
   CREATE TABLE IF NOT EXISTS contacts (
       id INTEGER PRIMARY KEY AUTOINCREMENT,
       first_name TEXT NOT NULL,
       last_name TEXT NOT NULL,
       email TEXT NOT NULL,
       phone_number TEXT NOT NULL,
       client_message TEXT
    )
`).run();

db.prepare(`
    CREATE TABLE IF NOT EXISTS newsletter (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        email TEXT NOT NULL UNIQUE
    )
`).run();
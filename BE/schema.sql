CREATE TABLE users (
    user_id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    age INTEGER,
    email TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL,
    menstrual_cycle_phase TEXT
);

CREATE TABLE categories (
    category_id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    description TEXT
);
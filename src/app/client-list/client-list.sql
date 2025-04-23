CREATE TABLE client-list (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    clientName TEXT NOT NULL, 
    email TEXT NOT NULL UNIQUE,
    phone INTEGER,
    company TEXT,
    rep TEXT NOT NULL,
    notes TEXT,
)
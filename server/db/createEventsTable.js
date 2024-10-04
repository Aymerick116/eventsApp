import pool from '../config/db.js'; // Make sure this imports your pool instance correctly

const createEventsTable = async () => {
  const createTableQuery = `
    CREATE TABLE IF NOT EXISTS events (
      id SERIAL PRIMARY KEY,
      location_name VARCHAR(255) NOT NULL,
      event_title VARCHAR(255) NOT NULL,
      event_description TEXT,
      event_date DATE NOT NULL
    );
  `;

  try {
    await pool.query(createTableQuery);
    console.log("Events table created successfully!");
  } catch (error) {
    console.error("Error creating events table:", error);
  }
};

// Export the createEventsTable function
export default createEventsTable;

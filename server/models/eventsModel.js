

import pool from '../config/db.js';

// Function to get all events
export const getAllEvents = async () => {
  const result = await pool.query('SELECT * FROM events');
  return result.rows;
};

// Function to get a specific event by ID
export const getEventById = async (id) => {
  const result = await pool.query('SELECT * FROM events WHERE id = $1', [id]);
  return result.rows[0];
};

// Function to get events by location
export const getEventsByLocation = async (location_name) => {
    const result = await pool.query('SELECT * FROM events WHERE location_name = $1', [location_name]);
    return result.rows; // Return all events found at the specified location
};
//Function to create a new event
export const createEvent = async ({ location_name, event_title, event_description, event_date }) => {
  const result = await pool.query(
    'INSERT INTO events (location_name, event_title, event_description, event_date) VALUES ($1, $2, $3, $4) RETURNING *',
    [location_name, event_title, event_description, event_date]
  );
  return result.rows[0];
};

// Function to update an event
export const updateEvent = async (id, { location_name, event_title, event_description, event_date }) => {
  const result = await pool.query(
    'UPDATE events SET location_name = $1, event_title = $2, event_description = $3, event_date = $4 WHERE id = $5 RETURNING *',
    [location_name, event_title, event_description, event_date, id]
  );
  return result.rows[0];
};

// Function to delete an event
export const deleteEvent = async (id) => {
  const result = await pool.query('DELETE FROM events WHERE id = $1 RETURNING *', [id]);
  return result.rows[0];
};

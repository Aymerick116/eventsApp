import 'dotenv/config';
import pool from '../config/db.js';
import axios from 'axios';

const API_URL = 'https://your-api-url.com/events'; // Replace with your actual API URL

const fetchAndStoreEvents = async () => {
    try {
        // Check if the events table already has data
        const { rowCount } = await pool.query('SELECT * FROM events');
        
        if (rowCount > 0) {
            console.log('Events already exist in the database. Skipping API call.');
            return; // Skip fetching if events already exist
        }

        console.log('Fetching events from the API...');
        const response = await axios.get(API_URL, {
            headers: {
                'Authorization': `Bearer ${process.env.TICKETMASTER_API_KEY}`, // Include the API key in the headers
            },
        });
        

        const events = response.data;

        // Store events in the database
        const insertQuery = `
            INSERT INTO events (location_name, event_title, event_description, event_date) 
            VALUES ($1, $2, $3, $4)
        `;

        for (const event of events) {
            await pool.query(insertQuery, [
                event.location_name,
                event.event_title,
                event.event_description,
                event.event_date,
            ]);
        }
        
        console.log('Events fetched from API and stored in the database.');
    } catch (error) {
        console.error('Error fetching and storing events:', error);
    }
};

export default fetchAndStoreEvents;

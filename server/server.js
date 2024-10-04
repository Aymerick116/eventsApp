import express from 'express';
import fetchAndStoreEvents from './data/fetchEvents.js';
import createEventsTable from './db/createEventsTable.js';
import eventRoutes from './routes/eventsRoute.js'; // Import the event routes
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware to parse JSON bodies
app.use(express.json());
app.use(cors()); // Enabhow do le CORS for all routes

// Create the events table
const setupDatabase = async () => {
    try {
        await createEventsTable(); // Call your function to create the table
        console.log('Events table created successfully.');
    } catch (error) {
        console.error('Error creating events table:', error);
    }
};

// Initialize database setup and fetch/store events
const initializeApp = async () => {
    await setupDatabase(); // Ensure the table is created before fetching data
    await fetchAndStoreEvents(); // Fetch events and store them in the database
};

// Start the server and initialize the database
initializeApp()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch((error) => {
        console.error('Error during initialization:', error);
    });

app.get('/', (req, res) => {
    res.send('Hello World');
});
// Set up your routes
app.use('/events', eventRoutes); // Use the event routes

// import express from 'express';
// import {
//   getAllEventsController,
//   getEventByIdController,
//   createEventController,
//   updateEventController,
//   deleteEventController,
//   fetchEventsFromAPIController,
//   fetchEventByIdFromAPIController
// } from '../controllers/eventsController.js';

// const router = express.Router();

// // router.get('/', getAllEventsController);
// router.get('/', fetchEventsFromAPIController);
// router.get('/:id', fetchEventByIdFromAPIController);
// // router.get('/:id', getEventByIdController);
// router.post('/', createEventController);
// router.put('/:id', updateEventController);
// router.delete('/:id', deleteEventController);

// export default router;
// routes/eventRoutes.js
import express from 'express';
import {
    getAllEvents,
    getEventById,
    getEventsByLocation
} from '../models/eventsModel.js'; // Adjust the import path as needed

const router = express.Router();

// Route to fetch all events
router.get('/', async (req, res) => {
    try {
        const events = await getAllEvents();
        res.json(events);
    } catch (error) {
        console.error('Error fetching events:', error);
        res.status(500).json({ error: 'Failed to fetch events' });
    }
});

// Route to get an event by ID
router.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const event = await getEventById(id);
        if (event) {
            res.json(event);
        } else {
            res.status(404).json({ error: 'Event not found' });
        }
    } catch (error) {
        console.error('Error fetching event by ID:', error);
        res.status(500).json({ error: 'Failed to fetch event' });
    }
});

// Route to get events by location
router.get('/location/:location_name', async (req, res) => {
    const { location_name } = req.params;
    try {
        const events = await getEventsByLocation(location_name);
        res.json(events);
    } catch (error) {
        console.error('Error fetching events by location:', error);
        res.status(500).json({ error: 'Failed to fetch events by location' });
    }
});

export default router;

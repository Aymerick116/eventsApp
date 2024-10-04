import {
    getAllEvents,
    getEventById,
    createEvent,
    updateEvent,
    deleteEvent,
} from '../models/eventsModel.js';
import axios from 'axios';



// Controller function to get all events
export const getAllEventsController = async (req, res) => {
    try {
        const events = await getAllEvents();
        res.json(events);
    } catch (error) {
        console.error('Error fetching events:', error);
        res.status(500).json({ error: 'Failed to fetch events' });
    }
};

// Controller function to get an event by ID
export const getEventByIdController = async (req, res) => {
    try {
        const event = await getEventById(req.params.id);
        if (!event) {
            return res.status(404).json({ error: 'Event not found' });
        }
        res.json(event);
    } catch (error) {
        console.error('Error fetching event:', error);
        res.status(500).json({ error: 'Failed to fetch event' });
    }
};

// Controller function to create an event
export const createEventController = async (req, res) => {
    try {
        const newEvent = await createEvent(req.body);
        res.status(201).json(newEvent);
    } catch (error) {
        console.error('Error creating event:', error);
        res.status(500).json({ error: 'Failed to create event' });
    }
};

// Controller function to update an event
export const updateEventController = async (req, res) => {
    try {
        const updatedEvent = await updateEvent(req.params.id, req.body);
        if (!updatedEvent) {
            return res.status(404).json({ error: 'Event not found' });
        }
        res.json(updatedEvent);
    } catch (error) {
        console.error('Error updating event:', error);
        res.status(500).json({ error: 'Failed to update event' });
    }
};

// Controller function to delete an event
export const deleteEventController = async (req, res) => {
    try {
        const deletedEvent = await deleteEvent(req.params.id);
        if (!deletedEvent) {
            return res.status(404).json({ error: 'Event not found' });
        }
        res.json({ message: 'Event deleted successfully' });
    } catch (error) {
        console.error('Error deleting event:', error);
        res.status(500).json({ error: 'Failed to delete event' });
    }
};

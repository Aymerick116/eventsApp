import axios from 'axios';


const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5001";
// console.log("API URL:", API_URL);

// Fetch all events
// export const fetchAllEvents = async () => {
//     const response = await axios.get(`${API_URL}/events`);
//     return response.data;
// };
export const fetchAllEvents = async () => {
    const response = await axios.get(`${API_URL}/events`);
    // console.log(API_URL)

    return response.data;
};

// Fetch an event by ID
export const fetchEventById = async (id) => {
    const response = await axios.get(`${API_URL}/events/${id}`);
    return response.data;
};

// Fetch events by location
export const fetchEventsByLocation = async (location_name) => {
    const response = await axios.get(`${API_URL}/events/location/${location_name}`);
    return response.data;
};

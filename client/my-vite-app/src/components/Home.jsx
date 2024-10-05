import { useEffect, useState } from 'react';
import { fetchAllEvents } from '../api/events';
import { Link } from 'react-router-dom';

const Home = () => {
    const [events, setEvents] = useState([]);
    const [filteredEvents, setFilteredEvents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [location, setLocation] = useState('');
    const [date, setDate] = useState('');

    useEffect(() => {
        const getEvents = async () => {
            setLoading(true);
            try {
                console.log('Fetching events');
                const data = await fetchAllEvents();
                setEvents(data);
                setFilteredEvents(data);
            } catch (error) {
                console.error('Error fetching events:', error);
            }
            setLoading(false);
        };
        getEvents();
    }, []);

    useEffect(() => {
        let filtered = events;

        if (location) {
            filtered = filtered.filter(event =>
                event.location_name.toLowerCase().includes(location.toLowerCase())
            );
        }

        if (date) {
            filtered = filtered.filter(event =>
                new Date(event.event_date).toLocaleDateString() === new Date(date).toLocaleDateString()
            );
        }

        setFilteredEvents(filtered);
    }, [location, date, events]);

    return (
        <div className="bg-black min-h-screen p-6">
            <div className="max-w-7xl mx-auto text-white">
            
                {/* Hero Section */}
            <div className="relative bg-hero-pattern bg-cover bg-center h-[500px] text-white flex flex-col items-center justify-center">
                <h1 className="text-6xl font-extrabold mb-4">Welcome to Events Hub</h1>
                <p className="text-lg max-w-2xl text-center mb-8">
                    Discover and attend the best events around you. Whether it's tech conferences, music festivals, or art exhibitions, we have everything for you!
                </p>
                <div>
                    <Link to="/explore" className="bg-blue-600 text-white font-semibold py-3 px-6 rounded-full hover:bg-blue-700 transition-colors duration-300">
                        Explore Events
                    </Link>
                    <Link to="/register" className="bg-teal-500 text-white font-semibold py-3 px-6 ml-4 rounded-full hover:bg-teal-600 transition-colors duration-300">
                        Register Now
                    </Link>
                </div>
            </div>
                {/* Filter by Location */}
                <div className="mb-8">
                    <label htmlFor="location" className="block text-lg font-semibold mb-2">Filter by Location:</label>
                    <input 
                        type="text" 
                        id="location" 
                        placeholder="Enter a location" 
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        className="w-full p-3 rounded-md bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-500"
                    />
                </div>

                {/* Filter by Date */}
                <div className="mb-8">
                    <label htmlFor="date" className="block text-lg font-semibold mb-2">Filter by Date:</label>
                    <input 
                        type="date" 
                        id="date" 
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="w-full p-3 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                    />
                </div>

                {loading ? (
                    <p className="text-white text-xl">Loading events...</p>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredEvents.length > 0 ? (
                            filteredEvents.map(event => (
                                <div key={event.id} className="bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300">
                                    <Link to={`/event/${event.id}`} className="no-underline">
                                        <h2 className="text-3xl font-bold text-white mb-4">{event.event_title}</h2>
                                        <p className="text-gray-300">{event.event_description}</p>
                                        <p className="text-sm text-gray-500 mt-4">{new Date(event.event_date).toLocaleDateString()}</p>
                                        <p className="text-sm text-gray-400 mt-1">Location: {event.location_name}</p>
                                    </Link>
                                </div>
                            ))
                        ) : (
                            <p className="text-gray-400 text-xl">No events found for the selected filters.</p>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Home;

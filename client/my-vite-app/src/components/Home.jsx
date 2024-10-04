import { useEffect, useState } from 'react';
import { fetchAllEvents } from '../api/events';

const Home = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        const getEvents = async () => {
            console.log('Fetching events');
            const data = await fetchAllEvents();
            setEvents(data);
        };
        getEvents();
    }, []);

    return (
        <div className="bg-gray-100 min-h-screen p-6">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-4xl font-bold text-gray-800 mb-6">Events</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {events.map(event => (
                        <div key={event.id} className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-300">
                            <a href={`/event/${event.id}`} className="no-underline">
                                <h2 className="text-2xl font-semibold text-gray-800 mb-2">{event.event_title}</h2>
                                <p className="text-gray-600">{event.event_description}</p>
                                <p className="text-sm text-gray-500 mt-4">{new Date(event.event_date).toLocaleDateString()}</p>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home;






// import  { useEffect, useState } from 'react';
// import { fetchAllEvents } from '../api/events';

// const Home = () => {
//     const [events, setEvents] = useState([]);

//     useEffect(() => {
//         const getEvents = async () => {
//             console.log('Fetching events');
//             const data = await fetchAllEvents();
//             setEvents(data);
//         };
//         getEvents();
//     }, []);

//     return (
//         <div>
//             <h1>Events</h1>
//             <ul>
//                 {events.map(event => (
//                     <li key={event.id}>
//                         <a href={`/event/${event.id}`}>{event.event_title}</a>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default Home;

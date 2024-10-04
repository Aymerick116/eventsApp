import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchEventById } from '../api/events';

const EventDetail = () => {
    const { id } = useParams();
    const [event, setEvent] = useState(null);

    useEffect(() => {
        const getEvent = async () => {
            try {
                const data = await fetchEventById(id);
                setEvent(data);
            } catch (error) {
                console.error('Error fetching event:', error);
            }
        };
        getEvent();
    }, [id]);

    if (!event) {
        return <div className="text-center mt-10 text-lg text-gray-500">Loading...</div>;
    }

    return (
        <div className="bg-gray-100 min-h-screen p-6 flex items-center justify-center">
            <div className="max-w-4xl w-full bg-white rounded-lg shadow-md p-8">
                <h1 className="text-4xl font-bold text-gray-800 mb-4">{event.event_title}</h1>
                <p className="text-gray-600 mb-6">{event.event_description}</p>
                <p className="text-lg text-gray-700 font-semibold mb-2">Location: <span className="text-gray-800">{event.location_name}</span></p>
                <p className="text-md text-gray-500 mb-6">Date: {new Date(event.event_date).toLocaleDateString()}</p>
                <a 
                    href="/" 
                    className="inline-block bg-blue-600 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-300"
                >
                    Back to Events
                </a>
            </div>
        </div>
    );
};

export default EventDetail;


// import { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { fetchEventById } from '../api/events';

// const EventDetail = () => {
//     const { id } = useParams();
//     const [event, setEvent] = useState(null);

//     useEffect(() => {
//         const getEvent = async () => {
//             const data = await fetchEventById(id);
//             setEvent(data);
//         };
//         getEvent();
//     }, [id]);

//     if (!event) return <div>Loading...</div>;

//     return (
//         <div>
//             <h1>{event.event_title}</h1>
//             <p>{event.event_description}</p>
//             <p>Location: {event.location_name}</p>
//             <p>Date: {new Date(event.event_date).toLocaleDateString()}</p>
//         </div>
//     );
// };

// export default EventDetail;

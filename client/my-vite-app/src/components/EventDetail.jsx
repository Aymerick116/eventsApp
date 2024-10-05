import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
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
        <div className="bg-black min-h-screen p-6 flex items-center justify-center">
            <div className="max-w-4xl w-full bg-gray-800 rounded-lg shadow-lg p-8 text-white">
                <h1 className="text-5xl font-bold text-white mb-6">{event.event_title}</h1>
                <p className="text-gray-300 mb-6 text-lg leading-relaxed">{event.event_description}</p>
                <p className="text-xl text-white font-semibold mb-2">Location: <span className="text-gray-300">{event.location_name}</span></p>
                <p className="text-lg text-gray-400 mb-6">Date: {new Date(event.event_date).toLocaleDateString()}</p>
                <Link 
                    to="/" 
                    className="inline-block bg-teal-500 text-white font-bold py-3 px-6 rounded-full hover:bg-teal-600 transition-colors duration-300"
                >
                    Back to Events
                </Link>
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
//             try {
//                 const data = await fetchEventById(id);
//                 setEvent(data);
//             } catch (error) {
//                 console.error('Error fetching event:', error);
//             }
//         };
//         getEvent();
//     }, [id]);

//     if (!event) {
//         return <div className="text-center mt-10 text-lg text-gray-500">Loading...</div>;
//     }

//     return (
//         <div className="bg-gray-100 min-h-screen p-6 flex items-center justify-center">
//             <div className="max-w-4xl w-full bg-white rounded-lg shadow-md p-8">
//                 <h1 className="text-4xl font-bold text-gray-800 mb-4">{event.event_title}</h1>
//                 <p className="text-gray-600 mb-6">{event.event_description}</p>
//                 <p className="text-lg text-gray-700 font-semibold mb-2">Location: <span className="text-gray-800">{event.location_name}</span></p>
//                 <p className="text-md text-gray-500 mb-6">Date: {new Date(event.event_date).toLocaleDateString()}</p>
//                 <a 
//                     href="/" 
//                     className="inline-block bg-blue-600 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-300"
//                 >
//                     Back to Events
//                 </a>
//             </div>
//         </div>
//     );
// };

// export default EventDetail;


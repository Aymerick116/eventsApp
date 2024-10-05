import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import EventDetail from './components/EventDetail';
// import MapComponent from './components/MapComponent';

const App = () => {
    
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/event/:id" element={<EventDetail />} />
                {/* <Route path="/map" element={<MapComponent />} /> */}
            </Routes>    
        </Router>


        
        
    );
};

export default App;

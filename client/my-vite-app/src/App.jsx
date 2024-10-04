import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import EventDetail from './components/EventDetail';


const App = () => {
    
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/event/:id" element={<EventDetail />} />
                yooooooo
            </Routes>    
        </Router>


        
        
    );
};

export default App;

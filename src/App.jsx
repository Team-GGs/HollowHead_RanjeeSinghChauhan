import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import Explore from './pages/Explore';
import EventDetail from './pages/EventDetail';
import Booking from './pages/Booking';
import Ticket from './pages/Ticket';
import Dashboard from './pages/Dashboard';
import CreateEvent from './pages/CreateEvent';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/events/:id" element={<EventDetail />} />
          <Route path="/book/:id" element={<Booking />} />
          <Route path="/ticket/:id" element={<Ticket />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/create-event" element={<CreateEvent />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Ceraphene from './pages/Ceraphene';
import Graffisol from './pages/Graffisol';
import Graphacrete from './pages/Graphacrete';
import HDGPE from './pages/HDGPE';
import SubmitData from './pages/SubmitData';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/ceraphene" element={<Ceraphene />} />
          <Route path="/graffisol" element={<Graffisol />} />
          <Route path="/graphacrete" element={<Graphacrete />} />
          <Route path="/hdgpe" element={<HDGPE />} />
          <Route path="/submit" element={<SubmitData />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

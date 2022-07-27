import './App.css';
import ComingSoon from './pages/ComingSoon';
import Blog from './pages/Blog';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    // <div className="min-h-full App">
    <Router>
      <Routes>
        <Route path="/" element={<ComingSoon />} />
        <Route path="/aboutus" element={<ComingSoon />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </Router>
    // </div>
  );
}

export default App;

// App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Homepage';
import QuizPage from './Components/QuizPage';
import Header from './Components/NavBar';
import Footer from './Components/Footer';
import Biography from './Components/Biography';
import Gallery from './Components/Gallery';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/biography" element={<Biography />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
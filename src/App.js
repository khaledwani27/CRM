import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import Container from './components/Container';
import NavBar from './components/NavBar';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Container />} />
        <Route path="/actions" />
        <Route path="/analytics"/>
      </Routes>
    </Router>
  );
}

export default App;

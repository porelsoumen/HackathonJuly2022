import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Quality from './Pages/Quality';
import Developer from './Pages/Developer';
import Support from './Pages/Support';
import Home from './Pages/Home';
import Impala from './Pages/Impala';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/developer" element={<Developer />} />
        <Route path="/quality" element={<Quality />} />
        <Route path="/support" element={<Support />} />
        <Route path="/impalaqe/*" element={<Impala />} />
      </Routes>
    </Router>
  );
}

export default App;

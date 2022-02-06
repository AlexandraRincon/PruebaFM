import Inicio from "./Inicio.js"
import Card from "./Components/Card/Card"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Inicio />} />
        {/* <Route path="/card" element={<Card />} /> */}
      </Routes>
    </Router>
  );
}

export default App;

import Inicio from "./Inicio.js"
// import PersonalCard from "./Components/PersonalCard/PersonalCard"
import ListUser from "./Components/ListUser/ListUser"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/ListUser" element={<ListUser />} />
        {/* <Route path="/PersonalCard" element={<PersonalCard />} />  */}
      </Routes>
    </Router>
  );
}

export default App;

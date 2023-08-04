import "./App.css";

import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import Activities from "./components/Activities";
import Routines from "./components/Routines";
import MyRoutines from "./components/MyRoutines";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/routines" element={<Routines />} />
        <Route path="/my-routines" element={<MyRoutines />} />
      </Routes>
    </div>
  );
}

export default App;

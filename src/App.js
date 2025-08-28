import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import ResidentProfile from "./components/ResidentProfile";
import MovementDashboard from "./components/MovementDashboard";
import FamilyLog from "./components/FamilyLog";
import Timeline from "./components/Timeline";
import VisitCalendar from "./components/VisitCalendar";
import Education from "./components/Education";

const App = () => {
  return (
    <Router>
      <div style={{ textAlign: "center", padding: "20px" }}>
        <nav style={{ marginBottom: "20px" }}>
          <Link to="/" style={{ margin: "0 10px" }}>
            Home
          </Link>
          <Link to="/profile" style={{ margin: "0 10px" }}>
            Resident
          </Link>
          <Link to="/movement" style={{ margin: "0 10px" }}>
            Movement
          </Link>
          <Link to="/timeline" style={{ margin: "0 10px" }}>
            Timeline
          </Link>
          <Link to="/calendar" style={{ margin: "0 10px" }}>
            Visits
          </Link>
          <Link to="/education" style={{ margin: "0 10px" }}>
            Education
          </Link>
          <Link to="/familylog" style={{ margin: "0 10px" }}>
            Family Log
          </Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<ResidentProfile />} />
          <Route path="/movement" element={<MovementDashboard />} />
          <Route path="/timeline" element={<Timeline />} />
          <Route path="/calendar" element={<VisitCalendar />} />
          <Route path="/education" element={<Education />} />
          <Route path="/familylog" element={<FamilyLog />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

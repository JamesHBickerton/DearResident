import React from "react";
import Home from "./components/Home.jsx";
import ResidentProfile from "./components/ResidentProfile.jsx";
import MovementDashboard from "./components/MovementDashboard.jsx";
import FamilyLog from "./components/FamilyLog.jsx";
import Timeline from "./components/Timeline.jsx";
import VisitCalendar from "./components/VisitCalendar.jsx";
import Education from "./components/Education.jsx";

function App() {
  return (
    <div>
      <Home />
      <ResidentProfile />
      <MovementDashboard />
      <FamilyLog />
      <Timeline />
      <VisitCalendar />
      <Education />
    </div>
  );
}

export default App;

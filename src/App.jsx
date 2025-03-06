import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AboutPage from "./components/AboutPage";
import EventsSection from "./components/EventsSection";

import "./App.css";
import "./components/AboutPage.css";
import EventsPage from "./components/EventPage";
import Member from "./components/Member";

function App() {
  return (
   <>
   <Navbar />
      <Home />
      <AboutPage />
      <EventsPage/>
      <Member/>
   </>
      
  );
}

export default App;

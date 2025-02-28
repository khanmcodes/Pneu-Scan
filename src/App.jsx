import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from "./pages/Home";
import ScanXray from "./pages/ScanXray";
import HowItWorks from "./pages/HowItWorks";
import AboutPneumonia from "./pages/AboutPneumonia";
import Aboutus from "./pages/Aboutus";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Scan-Xray" element={<ScanXray />} />
        <Route path="/How-It-Works" element={<HowItWorks />} />
        <Route path="/About-Pneumonia" element={<AboutPneumonia />} />
        <Route path="/About-us" element={<Aboutus />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

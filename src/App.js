import "./App.css";
import Intro from "./components/Intro";
import Page1 from "./components/Page1";
import Page2 from "./components/Page2";
import Page3 from "./components/Page3";
import Page4 from "./components/Page4";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="constant"></div>
        <div className="variable">
          <Routes>
            <Route path="/" element={<Intro />} />
            <Route path="/Page1" element={<Page1 />} />
            <Route path="/Page2" element={<Page2 />} />
            <Route path="/Page3" element={<Page3 />} />
            <Route path="/Page4" element={<Page4 />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

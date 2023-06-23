import "./main.global.css";
import {Content} from "./components/Content";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";

function App() {
  return (
      <>
      <Content />
      <Link to="/" class="list">
          Home
      </Link>
      <Link to="/contact" class="list">
          Contact
      </Link>

    {/* Defining routes path and rendering components as element */}
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
    </Routes>
</>
  );
}
export default App;

import "./App.css";
import Home from "./views/Home.js";
import About from "./views/About.js";

import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1>Welcome to React Router!</h1>
      <Link to="/">Home</Link> | <Link to="/about">About</Link>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="about" element={<About />} exact />
      </Routes>
    </div>
  );
}

export default App;

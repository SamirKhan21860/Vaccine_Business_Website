import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Home/Home";
import About from "./About/About";
import NotFound from "./NotFound/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
}

export default App;

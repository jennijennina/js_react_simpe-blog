import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./Components/Nav";
import Home from "./Pages/Home";
import Blog from "./Pages/Blog";
import PageOne from "./Pages/PageOne";
function App() {
  return (
    <BrowserRouter>
      <Nav />
      <h1>My Life</h1>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:detail" element={<PageOne />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

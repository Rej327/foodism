import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import "./index.css";
import "./navigationToogle.css";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";

function App() {
  return (
    <div className="w-full">
      <BrowserRouter>
        <Navigation />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about-us" element={<AboutUs />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

{
  /* <Home /> */
}

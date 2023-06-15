import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import "./index.css";
import "./navigationToogle.css";
import Home from "./pages/Home";

function App() {
  return (
    <div className="w-full">
      <Navigation />
      <div className="px-2 w-full">
        <Home />
      </div>
      <Footer />
    </div>
  );
}

export default App;

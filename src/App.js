import "./App.css";
import Challenge from "./Components/FirstPage/Challenge";
import Hero from "./Components/FirstPage/Hero";
import Navbar from "./Components/FirstPage/Navbar";
import Slider from "./Components/SecondPage/Slider";
import About from "./Components/ThirdPage/About";

function App() {
  return (
    <div className="app">
      <Challenge />
      <Navbar />
      <Hero />
      <Slider />
      <About />
    </div>
  );
}

export default App;

import "./App.css";
import Challenge from "./Components/FirstPage/Challenge";
import Hero from "./Components/FirstPage/Hero";
import Navbar from "./Components/FirstPage/Navbar";

function App() {
  return (
    <div className="app">
      <Challenge />
      <Navbar />
      <Hero />
    </div>
  );
}

export default App;

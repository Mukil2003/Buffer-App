import "./App.css";
import Help from "./Components/FifthPage/Help";
import Challenge from "./Components/FirstPage/Challenge";
import Hero from "./Components/FirstPage/Hero";
import Navbar from "./Components/FirstPage/Navbar";
import Footer from "./Components/Footer/Footer";
import Testimonials from "./Components/FourthPage/Testimonials";
import Slider from "./Components/SecondPage/Slider";
import Banner from "./Components/SixthPage/Banner";
import About from "./Components/ThirdPage/About";

function App() {
  return (
    <div className="app">
      <Challenge />
      <Navbar />
      <Hero />
      <Slider />
      <About />
      <Testimonials />
      <Help />
      <Banner />
      <Footer />
    </div>
  );
}

export default App;

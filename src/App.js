import "./App.css";
import NavBar from "./navbar.js";
import Home from "./pages/home.js";
import Pricing from "./pages/pricing.js";
import About from "./pages/about.js";
import { Routes, Route } from "react-router-dom";

function App() {
  // console.log(window.location);
  // let component;
  // switch (window.location.pathname) {
  //   case "/":
  //     component = <Home />;
  //     break;
  //   case "/pricing":
  //     component = <Pricing />;
  //     break;
  //   case "/about":
  //     component = <About />;
  //     break;
  // }
  // only the component child should change = Uding of react router
  return (
    <div className="App">
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

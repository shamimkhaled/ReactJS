import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/App.css";
import Product from "./components/Product";
// export components to use in other files to import in this way.

function App() {
  return (
    <>

      <Router>
        {/* Header constant as all pages */}
        <Header />
        <Routes>
            <Route path="/" element={ <Home /> } />
            <Route path="/about" element={ <About /> } />
            <Route path="/services" element={ <Services /> } />
            <Route path="/contact" element={ <Contact /> } />
            <Route path="*" element={ <div>Page Not Found 404</div> } />
            {/* for dynamic url */}
            <Route path="/product/:id" element={ <Product /> } />

        </Routes>
      </Router>
    </>
  );
}

export default App;

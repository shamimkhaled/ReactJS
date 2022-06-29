import "./App.css";
//import ReactDOM from "react-dom/client";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import Alert from "./components/Alert";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  //const [labelText, setLabelText] = useState("Enable Dark Mode");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      // setLabelText('Enable Light Mode');
      document.body.style.backgroundColor = "#212529";
      showAlert("Dark mode has been enabled", "Succes");
    } else {
      setMode("light");
      //setLabelText('Enable Dark Mode');
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "Success");
    }
  };
  return (
    <>
      <Router>
        <Navbar title="TextAnalyzer" abouts="About" mode={mode}  toggleMode={toggleMode}/>
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route path="/about" element={ <About mode={mode} />} />

            <Route path="/" element={ <TextForm
                showAlert={showAlert} heading="Enter the text to analyze below:"  mode={mode}
              />} />
             
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;

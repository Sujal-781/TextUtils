import './App.css';
import React, { useState, useEffect } from 'react'

//import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

function App() {
  const [mode, setMode] = useState(() => {
    return localStorage.getItem("mode") || "light"; // Load mode from localStorage
  }); // Whether dark mode is enabled or not

  const [alert,setAlert] = useState(null);

  const showAlert = (message, type)=> {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }
  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      localStorage.setItem("mode", "dark");
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextUtils - Dark Mode";
      setInterval(() => {
        document.title = "TextUtils is Amazing!";
      })
    }
    else{
      setMode('light');
      localStorage.setItem("mode", "light");
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      document.title = "TextUtils - Light Mode";
    }
  }

  useEffect(() => {
    document.body.style.backgroundColor = mode === 'dark' ? '#042743' : 'white';
  }, [mode]);

  return (
   <>
      <Navbar title="TextUtils" aboutText="About us" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
        <TextForm showAlert={showAlert} heading = "Enter text to analyze below: " mode={mode}/>
        {/* <About /> */}
      </div>
   </>
  );
}

export default App;

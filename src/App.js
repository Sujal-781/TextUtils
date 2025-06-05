import './App.css';
import React, { useState, useEffect } from 'react'

//import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  const [mode, setMode] = useState(() => {
    return localStorage.getItem("mode") || "light"; // Load mode from localStorage
  }); // Whether dark mode is enabled or not

  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      localStorage.setItem("mode", "dark");
      document.body.style.backgroundColor = '#042743';
    }
    else{
      setMode('light');
      localStorage.setItem("mode", "light");
      document.body.style.backgroundColor = 'white';
    }
  }

  useEffect(() => {
    document.body.style.backgroundColor = mode === 'dark' ? '#042743' : 'white';
  }, [mode]);

  return (
   <>
      <Navbar title="TextUtils" aboutText="About us" mode={mode} toggleMode={toggleMode}/>
      <div className="container my-3">
        <TextForm heading = "Enter text to analyze below: " mode={mode}/>
        {/* <About /> */}
      </div>
   </>
  );
}

export default App;

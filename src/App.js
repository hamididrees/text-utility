//import logo from './logo.svg';
//import './App.css';
import { About } from './components/About';
import { Navbar } from './components/Navbar';
import { TextForm } from './components/TextForm';
import React, {useState} from 'react'
import { Alert } from './components/Alert';
import {BrowserRouter, Routes, Route} from "react-router-dom";
function App() {

  const [alert, setAlert] = useState();
  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const [mode, setMode] = useState('light');
  
  const toggleMode = ()=>{
    if (mode === "light") {
      setMode('dark');
      document.body.style.background = 'grey';
      showAlert("Dark mode has been enabled", "success");
    }
    else{
      setMode('light');
      document.body.style.background = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  }
  
  return (
    <>
        <BrowserRouter>
          <Navbar title = "TextUtility" mytext="About" mode={mode} toggleMode={toggleMode}/>
          <Alert alert={alert}></Alert>
          <Routes>
            <Route path="/" element={<TextForm heading= "enter the text to analyze" mode={mode}/>} />
            <Route path="/about" element={<About/>} />
          </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;

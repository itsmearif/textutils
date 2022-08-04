import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';
import { BrowserRouter,Routes,Route,Link } from "react-router-dom";

import React, {useState} from 'react'
function App() {
  const [mode, setmode] = useState('light')
  const [greenMode, setgreenMode] = useState('blue') 
  const [redMode, setredMode] = useState("yellow")
  const [alert, setalert] = useState(null)

  const showAlert = (message,type)=>{
    setalert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setalert(null)
    }, 1500);
  }
  const toggleMode = ()=>{
    if(mode==="light"){
      setmode("dark");
      document.body.style.backgroundColor="#07121c";
      showAlert("Dark mode has been enabled","success")
      document.title= "TexTutils - Dark Mode";
      setInterval(() => {
        document.title="TexTutils is amazing"
      }, 2000);
      setInterval(() => {
        document.title ="Install TexTutil now"
      }, 1500);
    }
    else{
      setmode("light");
      document.body.style.backgroundColor="white"
      showAlert("Light mode has been enabled","success")
      document.title= "TexTutils - Light Mode";
    }
  }
  
  const greenmode = ()=>{
    if(greenMode==="blue"){
      setgreenMode("green")
      document.body.style.backgroundColor="green";
      showAlert("Green mode has been enabled","success")
    }else{
      setgreenMode("blue")
      document.body.style.backgroundColor="blue"
      showAlert("Light mode has been enabled","success")
    }
  }
  const redmode = ()=>{
    if(redMode==="yellow"){
      setredMode("red")
      document.body.style.backgroundColor="red";
      showAlert("Red mode has been enabled","success")
    }else{
      setredMode("yellow")
      document.body.style.backgroundColor="yellow"
      showAlert("Light mode has been enabled","success")
    }
  }
  return (
    <>
      <Navbar title="TexTutils" mode={mode} redMode={redMode} redmode={redmode} greenmode={greenmode} greenMode={greenMode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
        <BrowserRouter>
          <Routes>
            <Route path="/about" element={<About/>} />
            <Route path="/" element={<TextForm showAlert={showAlert} redMode={redMode} greenMode={greenMode} mode={mode} heading="Enter the text to analyze" />} />
          </Routes>
        </BrowserRouter>
        
      </div>
      
    </>
  );
}

export default App;

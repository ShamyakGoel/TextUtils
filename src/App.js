import './App.css';
import React, { useState , useEffect} from 'react';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

// import {
//     BrowserRouter as Router,
//     Routes,
//     Route,
//   } from "react-router-dom";
// import Notfound from './components/Notfound';
function App() {
  const [location, setlocation] = useState(0)
  useEffect(() => {
    setlocation(window.location);
  }, [])
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null)
  if(location.pathname === "/about"){
    document.title = "TextUtils | About"
  }
  else if(location.pathname === "/"){
    document.title = "TextUtils | Home"
  }
  const showAlert = (msg, type, bold)=>{
    setAlert({
        message: msg,
        type: type,
        bold: bold
    })
    setTimeout(() => {
        setAlert(null)
    }, 2000);  
  }
  const toggleMode = ()=>{
      console.log("Toggle Mode")
      if(mode === 'dark'){
          setMode('light')
          showAlert("Dark Mode Disabled", "success", "Success")
          document.body.style.backgroundColor = "white"
          document.body.style.color = "black"
          document.getElementById("myBox").style.backgroundColor = "white"
          document.getElementById("myBox").style.color = "black"
      }
      else{
          setMode('dark')
          showAlert("Dark Mode Enabled", "success", "Success")
          document.body.style.backgroundColor = "#042743" // ✔
          document.body.style.color = "white"
          document.getElementById("myBox").style.backgroundColor = "grey"
          document.getElementById("myBox").style.color = "white"
      }
  }
  return (
    <>
        {/* <Router> */}
          <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/> 
        <Alert alert={alert}/>

            {/* <Routes> */}
                {/* <Route exact path="/" element={<TextForm heading="Enter the text to analyze" mode={mode} alert={showAlert}/>}/>
                <Route exact path="/about" element={<About></About>}/>
                <Route path="*" element={<Notfound/>}/> */}
                <TextForm heading="Enter the text to analyze" mode={mode} alert={showAlert}/>
            {/* </Routes> */}
        {/* </Router> */}
        <div className="container my-3">
        {/* <About/> */}
        </div>
    </>
  );
}

export default App;

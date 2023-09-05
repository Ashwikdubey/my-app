import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import About from "./components/About";
import {
  BrowserRouter,
  Routes,
  Route,
  } from "react-router-dom";
function App() {
  const[mode,setMode]=useState("light")
  const[red,setRed]=useState("light")
  const[alert,setAlert]=useState(null)
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      tpe:type
    })
    setTimeout(()=>{
      setAlert(null)
    },3000)}
   const togglered=()=>{
    if(red==="light"){
      setRed("danger")
      document.body.style.backgroundColor="#a30f2d";
      document.body.style.color="black"
      console.log("redclicked")
      showAlert("red mode is on","success")
    }
    else{
      setRed("light")
      document.body.style.backgroundColor="white"
      document.body.style.color="black"
      showAlert("red mode disabled","success")
    }
   }
  const toggleclick=()=>{                                                                 
    if(mode==="light"){
      setMode("dark")
      document.body.style.backgroundColor="#00011b"
      document.body.style.color="white"
      showAlert("dark mode has been enabled","success");
    }
    else{
      setMode("light")
      document.body.style.backgroundColor="white"
      document.body.style.color="black"
      showAlert("dark mode has been disabled","success")
    }
  }
  return (
    <>
    <Alert alert={alert}/>
      <BrowserRouter>
      <Navbar title="TextUtils" mode={mode} togglemode={toggleclick}red={red}toggleRed={togglered}/>
      <Routes>
      <Route path="/" element={<div className="container"> <TextForm heading="Enter Your Text "mode={mode} Red={red} showalert={showAlert}/></div>} />
        <Route path="/About" element={<About/>} />
      </Routes>
    </BrowserRouter>
    </>
  );
}
export default App;

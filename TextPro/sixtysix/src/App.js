import logo from './logo.svg';
import './App.css';
// import Navbar from './components/Navbar';
import Navabar2 from './components/Navabar2';
// import hglogo from './h logo.jpg'
import TextForm from './components/TextForm';
import { useState } from 'react';
import Alerts from './components/Alerts';
import About from './components/About';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,

} from "react-router-dom";
function App() {
  const [mode,setMode]=useState('light');   //whether dark mode is enabaled or not
  const [alert,setAlert]=useState(null)

  const showAlert=(message,type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null);
    },2000)
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled","success");
      // document.title = "TextPro - Dark Mode";
      // setInterval(()=>{
      //   document.title = "TextPro is Amazing"
      // },2000);
      // setInterval(()=>{
      //   document.title = " Install TextPro Now";
      // },1500)
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled","success");
      // document.title = "TextPro - Light Mode"
    }
   
  }
   
  return (
    <>
    <Router>
      {/* <Navbar/> */}
      <Navabar2 title="TextPro" aboutText="About"  mode={mode} toggleMode={toggleMode}/>
      <Alerts alert={alert}/>
      <div className="container">
      <Routes>
        {/* /users ---> Component1
        /users/home ---> Component2 */}
          <Route exact path="/about"  element= {<About mode={mode} />}> </Route>
          <Route exact path="/"   element={<TextForm showAlert={showAlert} heading=" Try TextPro - Word Counter, Character Counter, Remove Extra Spaces " mode={mode}/>}></Route>  
      </Routes>
        
        
      </div>
    </Router>
    </>
  );
}

export default App;

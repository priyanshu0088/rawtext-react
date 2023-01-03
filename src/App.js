
import './App.css';
import Navbar from './Components/Navbar.js';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
import { useState } from 'react';
// // import About from './Compone
//   BrowserRouter as Router,
//   Routes,
//   Rnts/About';
// // import {oute
// } from "react-router-dom";

function App() {
  const [alert,setAlert] = useState(null);

  const showAlert = (message,type)=>{
    setAlert({
      msgg:  message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  return (
<>

 <Navbar  title=  " Rawtext"/>
<Alert alert={alert}/>
<TextForm showAlert={showAlert} heading="Enter your text here" />

</>
 );
}

export default App;

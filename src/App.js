import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Reasons from './components/Reasons';
import Footer from './components/Footer';
import Nav from './components/Nav';
import { useState } from 'react';

function App() {
  
  const [darkmode,setDarkMode]=useState(true);
  function toggle(){
    setDarkMode(pd=>!pd);
  }
  return (
    <div className={darkmode?"darkmode":' '}>
      <Nav darkmode={darkmode} toggle={toggle}/>
      <Header darkmode={darkmode}/>
      <Reasons darkmode={darkmode}/>
      <Footer darkmode={darkmode}/>
    </div>
   
  );
}

export default App;

import './App.css';
import React from 'react';
import Header from './components/Header/Header';
import AboutMe from './components/AboutMe/aboutme';
import Profile from './components/Profile/profile';
import Footer from './components/Footer/footer';

const App = () => {
  return (
    <div className="App">
      <Header/>
      <AboutMe/>
      <Profile/>
      <Footer/>
    </div>);
}

export default App;

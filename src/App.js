import './App.css';
import React from 'react';
import Header from './components/Header/Header';
import AboutMe from './components/AboutMe/aboutme';
import Profile from './components/Profile/profile';
import Footer from './components/Footer/footer';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Route, Routes, } from 'react-router-dom';

const App = (props) => {

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path='/dialogs/*' element={<Dialogs
            state={props.appState.chatHere} />} />
          <Route path='/home' element={<Profile />} />
          <Route path='/aboutme' element={<AboutMe />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

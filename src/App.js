import './App.css';
import React from 'react';
import Header from './components/Header/Header';
import AboutMe from './components/AboutMe/aboutme';
import Profile from './components/Profile/profile';
import Footer from './components/Footer/footer';
import Dialogs from './components/Dialogs/Dialogs';
import { Route, Routes, } from 'react-router-dom';
import Reviews from './components/Reviews/reviews';

const App = (props) => {

  return (
      <div className="App">
        <Header />
        <Routes>
          <Route path='/dialogs/*' element={
          <Dialogs
            state={props.state.chatHere} />} />
          <Route path='/home' element={<Profile />} />
          <Route path='/aboutme' element={<AboutMe />} />
          <Route path='/reviews/*' element={<Reviews
            Reviews={props.state.reviews}
            addComments = {props.addComment}/>} />
        </Routes>
        <Footer />
      </div>
  );
}

export default App;

import './App.css';
import React from 'react';
import Header from './components/Header/Header';
import AboutMe from './components/AboutMe/aboutme';
import Profile from './components/Profile/profile';
import Footer from './components/Footer/footer';
import Dialogs from './components/Dialogs/Dialogs';
import { Route, Routes, } from 'react-router-dom';
import ReviewsContainer from './components/Reviews/reviewsContainer';

const App = (props) => {
  // debugger
  console.log(props.state.reviews)
  return (
      <div className="App">
        <Header />
        <Routes>
          <Route path='/dialogs/*' element={<Dialogs
            state={props.state.chatHere}
            dispatch = {props.dispatch}
            newMessageText = {props.state.chatHere.newMessageText} />} />
          <Route path='/home' element={<Profile />} />
          <Route path='/aboutme' element={<AboutMe />} />
          <Route path='/reviews/*' element={<ReviewsContainer
            store = {props.store}/>} />
        </Routes>
        <Footer />
      </div>
  );
}

export default App;

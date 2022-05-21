import './App.css';
import React from 'react';
import Header from './components/Header/Header';
import AboutMe from './components/AboutMe/aboutme';
import Profile from './components/Profile/profile';
import Footer from './components/Footer/footer';
import UsersContainer from './components/Users/UsersContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import { Route, Routes, } from 'react-router-dom';
import ReviewsContainer from './components/Reviews/reviewsContainer';

const App = (props) => {
  return (
      <div className="App">
        <Header />
        <Routes>
          <Route path='/dialogs/*' element={<DialogsContainer/>} />
          <Route path='/home' element={<Profile />} />
          <Route path='/aboutme' element={<AboutMe />} />
          <Route path='/reviews/*' element={<ReviewsContainer/>} />
          <Route path='/users' element={<UsersContainer/>} />
        </Routes>
        <Footer />
      </div>
  );
}

export default App;

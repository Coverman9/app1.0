import './App.css';
import React from 'react';
import Header from './components/Header/Header';
import AboutMe from './components/AboutMe/aboutme';
import Footer from './components/Footer/footer';
import Home from './components/Home/home';
import UsersContainer from './components/Users/UsersContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import { Route, Routes } from 'react-router-dom';
import ReviewsContainer from './components/Reviews/reviewsContainer';
import ProfileContainer from './components/Profile/ProfileContainer';

const App = (props) => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/dialogs/*' element={<DialogsContainer />} />
        <Route path='/home' element={<Home />} />
        <Route path='/aboutme' element={<AboutMe />} />
        <Route path='/reviews/*' element={<ReviewsContainer />} />
        <Route path='/users' element={<UsersContainer />} />
        <Route path='/profile/:userId' element={<ProfileContainer />} />
        <Route path='/profile' element={<ProfileContainer />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

import './App.css';
import React, { Component } from 'react';
import AboutMe from './components/AboutMe/aboutme';
import Footer from './components/Footer/footer';
import Home from './components/Home/home';
import UsersContainer from './components/Users/UsersContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import { Route, Routes } from 'react-router-dom';
import ReviewsContainer from './components/Reviews/reviewsContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import { initializeApp } from './redux/app-reducer';
import {connect} from "react-redux";
import Preloader from './components/common/Preloader/Preloader';


class App extends Component {

  componentDidMount() {
    this.props.initializeApp()
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader/>
    }
    

    return (
      <div className="App">
        <HeaderContainer />
        <Routes>
          <Route path='/dialogs/*' element={<DialogsContainer />} />
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/aboutme' element={<AboutMe />} />
          <Route path='/reviews/*' element={<ReviewsContainer />} />
          <Route path='/users' element={<UsersContainer />} />
          <Route path='/profile/:userId' element={<ProfileContainer />} />
          <Route path='/profile' element={<ProfileContainer />} />
          <Route path='/login' element={<Login />} />
        </Routes>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

export default connect(mapStateToProps, {initializeApp}) (App) ;

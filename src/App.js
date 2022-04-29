import './App.css';
import React from 'react';
import Header from './components/Header/Header';
import AboutMe from './components/AboutMe/aboutme';
import Profile from './components/Profile/profile';
import Footer from './components/Footer/footer';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Route, } from 'react-router-dom';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Header />
          <div>
            <Route path='/dialogs' >
              <Dialogs/>
            </Route>
          </div>
          {/* <AboutMe />
          <Profile />
          <Footer /> */}
        </div>
      </BrowserRouter>
    </div>);
}

export default App;

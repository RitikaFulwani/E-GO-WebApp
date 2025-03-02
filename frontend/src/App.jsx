import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Start from './pages/Start';
import UserLogin from './pages/UserLogin';
import UserSignup from './pages/UserSignup';
import Captainlogin from './pages/Captainlogin';
import Home from './pages/Home';
import CaptainSignup from './pages/CaptainSignup';
import UserProtectWrapper from './pages/UserProtectWrapper';
import UserLogout from './pages/UserLogout';
import CaptainHome from './pages/CaptainHome';
import CaptainProtectWrapper from './pages/CaptainProtectWrapper';
import CaptainLogout from './pages/CaptainLogout';
import Riding from './pages/Riding';
import CaptainRiding from './pages/CaptainRiding';
import 'remixicon/fonts/remixicon.css';
import Header from './components/Header'; // Import the Header
import About from './pages/About';
import Help from './pages/Help';
import Riders from './pages/Riders'; // Import the Riders page
import Driving from './pages/Driving'; // Import the Driving page
import Bikes from './pages/Bikes'; // Import the Bikes page
import Business from './pages/Business'; // Import the Business page

const App = () => {
  return (
    <div>
      <Header /> {/* Add Header at the top */}
      <Routes>
        <Route path='/' element={<Start />} />
        <Route path='/about' element={<About />} />
        <Route path='/help' element={<Help />} />
        <Route path='/help/riders' element={<Riders />} /> {/* Riders page route */}
        <Route path='/help/driving' element={<Driving />} /> {/* Driving & Delivering page route */}
        <Route path='/help/bikes' element={<Bikes />} /> {/* Bikes & Scooters page route */}
        <Route path='/help/business' element={<Business />} /> {/* Uber for Business page route */}
        <Route path='/login' element={<UserLogin />} />
        <Route path='/riding' element={<Riding />} />
        <Route path='/captain-riding' element={<CaptainRiding />} />
        <Route path='/signup' element={<UserSignup />} />
        <Route path='/captain-login' element={<Captainlogin />} />
        <Route path='/captain-signup' element={<CaptainSignup />} />
        <Route
          path='/home'
          element={
            <UserProtectWrapper>
              <Home />
            </UserProtectWrapper>
          }
        />
        <Route
          path='/user/logout'
          element={
            <UserProtectWrapper>
              <UserLogout />
            </UserProtectWrapper>
          }
        />
        <Route
          path='/captain-home'
          element={
            <CaptainProtectWrapper>
              <CaptainHome />
            </CaptainProtectWrapper>
          }
        />
        <Route
          path='/captain/logout'
          element={
            <CaptainProtectWrapper>
              <CaptainLogout />
            </CaptainProtectWrapper>
          }
        />
      </Routes>
    </div>
  );
};

export default App;



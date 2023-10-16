
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { BrowserRouter,Routes,Route } from "react-router-dom";

import About from "./pages/About";
import Profile from "./pages/Profile";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
      
        <Route path="/About" element={<About />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/SignUp" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

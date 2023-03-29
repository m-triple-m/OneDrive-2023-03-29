import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import LandingPage from "./components/LandingPage/LandingPage";
import Login from "./components/validations/Login";
import Register from "./components/validations/Register";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ResetPassword from "./components/validations/ResetPaaword";
import ResetPasswordMain from './components/validations/ResetPasswordMain';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<LandingPage />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/register" exact element={<Register />} />
          <Route path="/reset" exact element={<ResetPassword />} />
          <Route path="/resetpassword" exact element={<ResetPasswordMain />} />
          
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

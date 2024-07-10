import { createContext, useState } from "react";
import "./App.css";
import { SignINandUp } from "./components/SignINandUp";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginPage } from "./components/LoginPage";
import { RegistrationPage } from "./components/RegistrationPage";
import Dashboard from "./components/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";

export const myContext = createContext();

function App() {
  const [valid, setValid] = useState(false);
  return (
    <>
    <myContext.Provider value={{valid, setValid}}>
      <BrowserRouter>
          <Routes>    
              <Route path="/" element={<SignINandUp />} />
              <Route path="/signIn" element={<LoginPage />} />
              <Route path="/signUp" element={<RegistrationPage />} />
              <Route path="/dashboard" element={<ProtectedRoute element={<Dashboard /> }/>} />
          </Routes>
      </BrowserRouter>
      </myContext.Provider>
    </>
  );
}

export default App;

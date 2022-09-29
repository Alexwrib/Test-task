import React from 'react';
import {Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import AddUser from "./pages/AddUser";
import EditUser from "./pages/EditUser";


const App = () => {

    return (
      <div className="p-6">
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/register" element={<RegisterPage/>}/>
        <Route path="/add-user" element={<AddUser/>}/>
        <Route path="/edit-user/:id" element={<EditUser/>}/>
      </Routes>
      </div>

  );
}

export default App;

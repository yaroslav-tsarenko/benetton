import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import AdminPanel from "./pages/admin-panel/AdminPanel";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/admin-panel" element={<AdminPanel />} />
            </Routes>
        </Router>
    );
};

export default App;
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import AdminPanel from "./pages/admin-panel/AdminPanel";
import {ALLOWED_IP} from "./utils/constants/allowedIP";

const PrivateRoute = ({ element: Element, isAuthenticated }: { element: React.ReactElement, isAuthenticated: boolean }) => {
    return isAuthenticated ? Element : <Navigate to="/login" />;
};
const App = () => {

    const [isAuthenticated, setIsAuthenticated] = useState(false);

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
                <Route path={`${ALLOWED_IP}`} element={<Login setIsAuthenticated={setIsAuthenticated} />} />
                <Route path="/admin-panel" element={<PrivateRoute isAuthenticated={isAuthenticated} element={<AdminPanel />} />} />
            </Routes>
        </Router>
    );
};

export default App;
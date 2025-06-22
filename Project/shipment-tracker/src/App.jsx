// src/App.jsx
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import Dashboard from "./pages/DashboardPage";
import { useAuth } from "./contexts/AuthContext";
import CreateShipment from "./components/CreateShipment";
import CreateShipmentPage from "./pages/CreateShipmentPage";

const App = () => {
  const { currentUser } = useAuth();

  return (
    <>
    <Router>
      <Routes>
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/dashboard"
          element={currentUser ? <Dashboard /> : <Navigate to="/login" />}
        />
        <Route path="*" element={<Navigate to="/dashboard" />} />
        <Route
           path="/create-shipment"
          element={currentUser ? <CreateShipmentPage /> : <Navigate to="/login" />}/>
      </Routes>
    </Router>

    </>
  );
};

export default App;

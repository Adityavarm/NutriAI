import { Routes, Route } from "react-router-dom";

import Landing from "./Pages/Landing"
import Signup from "./Pages/Signup";

import Dashboard from "./Pages/Dashboard";
import FoodAnalyzer from "./Pages/FoodAnalyzer";
import OtherModules from "./Pages/OtherModules";
import Layout from "./Components/Layout";
import Login from "./Pages/Login";

function App() {
  return (
    <Routes>
      {/* Public Pages */}
      <Route path="/" element={<Landing />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />

      {/* Application Pages */}
      <Route element={<Layout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/analyzer" element={<FoodAnalyzer />} />
        <Route path="/meals" element={<OtherModules type="meals" />} />
        <Route
          path="/nutrition"
          element={<OtherModules type="nutrition" />}
        />
        <Route
          path="/profile"
          element={<OtherModules type="profile" />}
        />
      </Route>
    </Routes>
  );
}

export default App;
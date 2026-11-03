import { NavLink, Outlet, useNavigate } from "react-router-dom";

function Layout() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("nutriUser");
    navigate("/login");
  };

  return (
    <div className="layout">
      
      <aside className="sidebar">
        <h2>🥗 NutriAI</h2>

        <NavLink to="/dashboard">🏠 Dashboard</NavLink>
        <NavLink to="/analyzer">🥗 Food Analyzer</NavLink>
        <NavLink to="/meals">🍽️ Healthy Meals</NavLink>
        <NavLink to="/nutrition">📊 Nutrition</NavLink>
        <NavLink to="/profile">👤 Profile</NavLink>

        <button onClick={logout}>🚪 Logout</button>
      </aside>

      <main className="content">
        <Outlet />
      </main>

    </div>
  );
}

export default Layout;
import { useNavigate } from "react-router-dom";

function Dashboard() {

  const navigate = useNavigate();

  const user = JSON.parse(
    localStorage.getItem("nutriUser")
  );

  return (
    <div>

      <h1>
        Hello, {user?.name || "User"}! 👋
      </h1>

      <p className="welcome">
        Welcome to your NutriAI Dashboard.
        Make smarter food choices today!
      </p>


      <div className="dashboard-grid">

        <div
          className="module-card"
          onClick={() =>
            navigate("/analyzer")
          }
        >

          <h2>🥗 Food Combination Analyzer</h2>

          <p>
            Check whether foods are healthy
            to eat together.
          </p>

          <button>Analyze</button>

        </div>


        <div
          className="module-card"
          onClick={() =>
            navigate("/meals")
          }
        >

          <h2>🍽️ Healthy Meals</h2>

          <p>
            Explore simple healthy
            meal combinations.
          </p>

          <button>View Meals</button>

        </div>


        <div
          className="module-card"
          onClick={() =>
            navigate("/nutrition")
          }
        >

          <h2>📊 Nutrition Overview</h2>

          <p>
            View your basic daily
            nutrition information.
          </p>

          <button>View Nutrition</button>

        </div>


        <div
          className="module-card"
          onClick={() =>
            navigate("/profile")
          }
        >

          <h2>👤 My Profile</h2>

          <p>
            View your NutriAI
            profile information.
          </p>

          <button>View Profile</button>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;